import {
	httpAjax,
	
} from './http';
//获取分析图
const  orderQueryById= data => httpAjax('/so/order/order/queryById', data,'GET',false);

//获取动火详情
const  fireQueryById= data => httpAjax('/so/fire/fire/list', data,'GET',false);
//获取受限详情
const  boundQueryById= data => httpAjax('/so/bound/bound/list', data,'GET',false);
//获取吊装详情
const  hoistingQueryById= data => httpAjax('/so/hoisting/hoisting/list', data,'GET',false);
//获取高处详情
const  highsafetyQueryById= data => httpAjax('/so/highsafety/highSafety/list', data,'GET',false);
//获取动土详情
const  diggingQueryById= data => httpAjax('/so/digging/digging/queryById', data,'GET',false);
//获取断路详情
const  breaksafetyQueryById= data => httpAjax('/so/breaksafety/breakSafety/queryById', data,'GET',false);
//获取盲板详情
const  blindplateblockageQueryById= data => httpAjax('/so/blindplateblockage/blindPlateBlockage/queryById', data,'GET',false);
//获取断电详情
const  electricQueryById= data => httpAjax('/so/electric/electric/queryById', data,'GET',false);

//获取危害辨识列表	
const  harmList= data => httpAjax('/so/sys/dict/getDictItems/harm_id', data,'GET',false);
//获取危害辨识列表	
const  specialList= data => httpAjax('/so/sys/dict/getDictItems/order_type', data,'GET',false);
//获取报备作业票详情
const  soReport= data => httpAjax('/so/soreport/soReport/doJobTicketDetails', data,'GET',false);

export {
	orderQueryById,
	fireQueryById,
	harmList,
	specialList,
	boundQueryById,
	hoistingQueryById,
	highsafetyQueryById,
	diggingQueryById,
	breaksafetyQueryById,
	blindplateblockageQueryById,
	electricQueryById,
	soReport

}