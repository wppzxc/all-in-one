import Home from '../modules/common/main'
import PDD from '../modules/PDD/pdd'
import Duoduojinbao from '../modules/PDD/duoduojinbao'
import PDDComments from '../modules/PDD/comments'
import Dataoke from '../modules/Taobao/dataoke'
import Taokeyi from '../modules/Taobao/taokeyi'
import Haodanku from '../modules/Taobao/haodanku'

const routers = [
    { path: '/', component: Home },
    { path: '/PDD', component: PDD },
    { path: '/duoduojinbao', component: Duoduojinbao },
    { path: '/PDDComments', component: PDDComments },
    { path: '/Dataoke', component: Dataoke },
    { path: '/Taokeyi', component: Taokeyi },
    { path: '/Haodanku', component: Haodanku }
];

export default routers