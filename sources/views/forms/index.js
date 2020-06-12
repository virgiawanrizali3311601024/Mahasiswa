import {JetView} from "webix-jet";

export default class FormsView extends JetView{
	config(){
		return {
			view:"scrollview", scroll:"xy", body:{
			
						type:"wide", rows:[
							{ $subview:"forms.person" },
							
						]
					
				
			}
		};
	}
}