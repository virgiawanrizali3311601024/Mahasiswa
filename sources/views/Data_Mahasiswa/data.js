import {JetView} from "webix-jet";
import {allpayments} from "models/datamahasiswa";

export default class TransactionsView extends JetView {
	config(){
		return {
			view:"datatable", localId:"grid",
			select:true, tooltip:true,
			columns:[
				{
					id:"date", header:"Nim",
					fillspace:1, minWidth:100,
					sort:"date", format:webix.Date.dateToStr("%j %F")
				},
				{
					id:"method", header:"Nama", fillspace:1, minWidth:90, sort:"text",
					tooltip:"The card with which the payment was made",
				//	template:data => `<img class="method" src="data/images/${data.method}.svg" />`
				},
				{
					id:"date", header:"Kelas",
					fillspace:1, minWidth:100,
					sort:"date", format:webix.Date.dateToStr("%j %F")
				},
				{
					id:"method", header:"Keterangan", fillspace:1, minWidth:90, sort:"text",
					tooltip:"The card with which the payment was made",
					//template:data => `<img class="method" src="data/images/${data.method}.svg" />`
				},
				{
					id:"#", header:"Aksi", fillspace:1, minWidth:90, sort:"text",
					//tooltip:"The card with which the payment was made",
					//template:data => `<img class="method" src="data/images/${data.method}.svg" />`
					view:"button", label:"Danger", css:"webix_danger", inputWidth:100,
				},
			
				
			]
		};
	}
	init(grid){
		grid.sync(allpayments);
	}
}
