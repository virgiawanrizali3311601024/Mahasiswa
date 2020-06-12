import {JetView} from "webix-jet";

export default class Data_MahasiswaView extends JetView{
	config(){
		return {
			type:"space",
			rows:[
				{
					type:"wide", cols:[
						{ $subview:"Data_Mahasiswa.data" },
						
					]
				},
				
			]
		};
	}
}