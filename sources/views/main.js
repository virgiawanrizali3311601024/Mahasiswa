import {JetView, plugins} from "webix-jet";

export default class TopView extends JetView{
	config(){
		const header = {
			type:"header", css:"custom_dark", height:58,
			template:"E-Mahasiswa"
		};

		const sidebar = {
			localId:"menu",
			view:"sidebar", css:"webix_dark", width:200,
			data:[
				
				{ id:"Data_Mahasiswa", value:"Data Mahasiswa", icon:"mdi mdi-table" },
				{ id:"forms", value:"Masukan Data", icon:"mdi mdi-format-line-style"  }
			]
		};

		const toolbar = {
			view:"toolbar",
			padding:9, height:58,
			cols:[
				{},
				
				
			]
		};

		return {
			type:"clean", cols:[
				{ rows:[ header, sidebar ]},
				{ rows:[ toolbar, { $subview:true } ]}
			]
		};
	}

	init(){
		this.use(plugins.Menu, "menu");
	}
}