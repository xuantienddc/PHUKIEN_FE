import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Default from './Layout/Wrapper/MasterRocker.vue'
import Auth from './Layout/Wrapper/auth.vue'
import DaiLy from './Layout/Wrapper/MasterDaiLy.vue'
import LogNhanVien from './Layout/Wrapper/MasterLogNhanVien.vue'
import Toaster from "@meforma/vue-toaster";
const app = createApp(App)

app.use(router,Toaster)
app.component("default-layout", Default);
app.component("auth-layout", Auth);
app.component("dl-layout", DaiLy);
app.component("nv-layout", LogNhanVien);

app.mount("#app")