import { remote } from 'electron';
import Store from '@/store';

const dialog = remote.dialog;
const { autoUpdater } = remote.require('electron-updater');
let showNotUpdate = false;
let updater;
autoUpdater.autoDownload = false;

if (process.env.NODE_ENV === 'production') {
  autoUpdater.checkForUpdates();
}

autoUpdater.setFeedURL('https://updatewallet.oss-cn-hangzhou.aliyuncs.com/latest/');

autoUpdater.on('error', error => {
  dialog.showErrorBox('Error: ', error == null ? 'unknown' : (error.stack || error).toString());
});

// lang start
import messages from '@/messages';
if (!localStorage.locale) {
  if (navigator.language === 'zh-CN') {
    localStorage.locale = 'zh';
  } else {
    localStorage.locale = 'en';
  }
}

const word = (word) => {
  return messages[localStorage.locale][word]
}

// lang end
autoUpdater.on('update-available', () => {
  dialog.showMessageBox(
    {
      type: 'info',
      title: word('发现新版本'),
      message: word('是否立即更新新版本，确认后程序会在后台下载更新。'),
      buttons: [word('更新'), word('取消')],
    },
    buttonIndex => {
      if (buttonIndex === 0) {
        Store.commit('SET_UPDATE_INFO', { update: { startUpdate: true } });
        autoUpdater.downloadUpdate();
      } else {
        Store.commit('SET_UPDATE_INFO', {
          update: {
            startUpdate: false,
            progress: 0,
            speed: 0,
            total: 0,
          },
        });
        if (updater) {
          updater.enabled = true;
          updater = null;
        }
      }
    }
  );
});

autoUpdater.on('update-not-available', () => {
  if (showNotUpdate) {
    dialog.showMessageBox({
      title: word('没有更新'),
      message: word('你当前的版本是最新的！'),
    });
    updater.enabled = true;
    updater = null;
    showNotUpdate = false;
  }
});

autoUpdater.on('update-downloaded', () => {
  dialog.showMessageBox(
    {
      title: word('安装更新'),
      message: word('更新已下载完成，确认后会自动安装'),
    },
    () => {
      setImmediate(() => autoUpdater.quitAndInstall());
    }
  );
});

autoUpdater.on('download-progress', progress => {
  Store.commit('SET_UPDATE_INFO', {
    update: {
      progress: progress.percent && progress.percent.toFixed(2),
      total: (progress.total / 1000000).toFixed(2),
      speed: progress.bytesPerSecond && progress.bytesPerSecond / 1000,
    },
  });
});

export const checkForUpdates = (menuItem, focusedWindow, event) => {
  updater = menuItem;
  updater.enabled = false;
  showNotUpdate = true;
  autoUpdater.checkForUpdates();
};
