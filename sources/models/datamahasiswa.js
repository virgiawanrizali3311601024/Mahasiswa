export const allpayments = new webix.DataCollection({
	data:[
		{"id":1,"status":"success","date":"2018-09-24 04:36","method":"PayPal","number":"do***@yahoo.com","type":0,"sum":"105.15","left":"847.71","name":"The Smoking Jug","city":"Tirane","country":"AL"},
		{"id":19,"status":"success","date":"2018-09-6 08:44","method":"MasterCard","number":"5114...6585","type":1,"sum":"10.19","left":"1878.33","name":"Sew and Tell","city":"Rome","country":"IT"}
	],
	scheme:{
		$init:function(obj){
			obj.date = webix.i18n.parseFormatDate(obj.date);
			const curr_month = new Date().getMonth();
			const data_month = obj.date.getMonth();
			if (curr_month - data_month != 0){
				if (obj.id < 25)
					obj.date.setMonth(curr_month);
				else if (obj.id >= 25)
					obj.date.setMonth(curr_month-1);
			}
			const curr_year = new Date().getFullYear();
			const data_year = obj.date.getFullYear();
			if (curr_year - data_year > 0){
				obj.date.setYear(curr_year);
			}
		}
	}
});
