<template>
  <div class="cover-page">
    <div class="cover-page__content" v-bind:style="form_top">
      <div class="page__title">{{ $t('导入钱包文件') }}</div>

      <form class="cover-page__form" @submit.prevent="!submitting && submit()">
        <div class="field">
          <label class="label">
            {{$t('选择钱包文件')}}
          </label>
          <div class="control" style="padding-top: 4px;">
            <a class="button is-light" @click="selectWalletFile()">{{$t('点击选择你的钱包文件')}}</a>
            <p class="file-path">{{walletFilePath}}</p>
          </div>
        </div>
        <div class="field">
          <label class="label">{{$t('输入密码')}}</label>
          <div class="control">
            <input class="input" v-model="password" type="password" :placeholder="$t('请输入钱包文件密码')" required />
            <p class="help is-danger" v-show="isSubmited && !isValidPassword">
              {{$t('无效的密码')}}
            </p>
          </div>
        </div>
        <div class="field" style="color:#fff">
          <input type="checkbox" required tabindex="-1" v-model="isAgreeTerm" /> {{$t('我已经阅读并同意')}}<a href="#" tabindex="-1">{{$t('服务及隐私条款')}}</a>
        </div>
        <div class="field is-grouped is-grouped-right">
          <div class="control">
            <a tabindex="-1" class="button cancel-button" :disabled="submitting" @click="!submitting && close()">{{$t('取消')}}</a>
          </div>
          <div class="control">
            <button type="submit" class="button is-link" :class="{'is-loading': submitting}" :disabled="submitting">{{$t('下一步')}}</button>
          </div>
        </div>
      </form>

    </div>

    <!-- <a class="modal-close is-large cover-page-close" @click="close"></a> -->
    <confirm-modal :title="$t('用户列表')" :show="showConfirm" @confirm="success()" :can-close="false" width="400px">
      <div>
        <div>{{$t('本私钥对应的用户为：')}}</div>
        <ul>
          <li v-for="accountName in accountsList" :key="accountName">{{accountName}}</li>
        </ul>
      </div>
    </confirm-modal>

  </div>
</template>

<script>
import { mapActions } from 'vuex';
import CreateWalletForm from '@/views/components/CreateWalletForm'
import Message from '@/components/Message';
import Select from '@/views/components/select'
import ConfirmModal from '@/components/ConfirmModal';
import PromptModal from '@/components/PromptModal';
import { Actions } from '@/constants/types.constants';
import { decryptWif } from '@/utils/util';
import fs from 'fs';
import path from 'path';

export default {
  name: 'WalletImport',
  data() {
    return {
      privateKey: '',
      password: '',
      isSubmited: false,
      isAgreeTerm: false,
      submitting: false,

      isValidPassword: true,

      walletData: '',
      walletFilePath: '',

      confirmMsg: '',
      walletId: '',
      showConfirm: false,
      accountsList: [],

    };
  },
  props: {
    margin_top: {
      type: Number,
      default () {
        return 64;
      }
    },
    close_to: {
      type: Object,
      default () {
        return {
          name: 'walletNew'
        }
      }
    }
  },
  computed: {
    form_top () {
      return {
        marginTop: (this.margin_top || 64) + 'px'
      }
    },
  },
  methods: {
    selectWalletFile() {
      this.$electron.remote.dialog.showOpenDialog({ properties: ['openFile'] }, filePaths => {
        if (filePaths[0]) {
          fs.readFile(filePaths[0], 'utf8', (err, data) => {
            if (err) throw err;
            try {
              this.walletData = JSON.parse(data);
              this.walletFilePath = path.basename(filePaths[0]);
            } catch (err) {
              Message.error(this.$t('钱包文件错误'));
            }
          });
        }
      });
    },
    submit() {
      this.isSubmited = true;
      return Promise.resolve()
        .then(() => {
          return decryptWif(this.password, this.walletData.crypto)
            .then(data => {
              return {
                privateKey: data,
                password: this.password,
              };
            })
            .catch(err => {
              this.isValidPassword = false;
              return Promise.reject(err);
            });
        })
        .then(data => {
          this.submitting = true;
          return this.newWallet(data);
        })
        .then(result => {
          this.submitting = false;
          Message.success(this.$t('钱包导入成功'));
          this.walletId = result.publicKey;
          return result.publicKey;
        })
        .then(publicKey => {
          return this.fetchAccountList({ publicKey: publicKey, noset: true });
        })
        .then(result => {
          if (!result.length) {
            this.success();
          } else {
            this.accountsList = result;
            this.showConfirm = true;
          }
        });
    },
    success () {
      if (this.walletId) {
        this.$router.push({ name: 'walletDetail', params: { walletId: this.walletId } });
      } else {
        this.$router.push({ name: 'dashboard' });
      }
    },
    close() {
      if(this.close_to){
        this.$router.push(this.close_to);
        return;
      }
      if (this.walletId) {
        this.$router.push({ name: 'walletDetail', params: { walletId: this.walletId } });
      } else {
        this.$router.push({ name: 'dashboard' });
      }
    },
    ...mapActions({
      newWallet: Actions.NEW_WALLET,
      fetchAccountList: Actions.FETCH_ACCOUNT_LIST,
    }),
  },
  components: {
    ConfirmModal,
    PromptModal,
    Select,
    CreateWalletForm
  },
};
</script>
<style scoped>
.link-button {
  font-size: 12px;
}
.file-path {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: rgb(255, 255, 255);
  font-size: 12px;
}
</style>