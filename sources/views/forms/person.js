import {JetView} from "webix-jet";

export default class PersonView extends JetView {
	config(){
		const dateFormat = webix.Date.dateToStr("%d %M %Y");

		const main_info = {
			margin: 40,

			
			rows:[
				{
					view:"text", name:"fname",
					label:"Nim", labelPosition:"top",
					placeholder:"Nim",
					invalidMessage:"required"
				},
				{
					view:"text", name:"lname",
					label:"Nama", labelPosition:"top",
					placeholder:"Nama",
					invalidMessage:"required"
					
				},
				{
					view:"text", name:"lname",
					label:"Kelas", labelPosition:"top",
					placeholder:"Kelas",
					invalidMessage:"required"
					
				},
				{
					view:"text", name:"lname",
					label:"Keterangan", labelPosition:"top",
					placeholder:"Keterangan",
					invalidMessage:"required"
					
				},
				
				
				
			]
			
		};

		const more_info = {
			margin:10,
		};

		const right_photo = {
			margin:10,
			
		};

		const upper_section = {
			margin:100, cols:[
				main_info,
				more_info,
				right_photo
			]
		};

		const buttons = {
			margin:10,
			cols:[
				{},
				{
					view:"button", value:"Reset", autowidth:true,
					click:() => {
						this.$$("form").clear();
					},
					tooltip:"Click to clean the form"
				},
				{
					view:"button", value:"Save", type:"form", autowidth:true,
					tooltip:"Save changes",
					click:() => {
						if (this.$$("form").validate()){
							webix.message("Saved (not really)!", "success");
						}
					}
				}
			]
		};

		return {
			rows:[
				{ template:"Form Pendataan Mahasiswa", type:"header" },
				{
					view:"form", localId:"form", padding:50,
					rows:[
						upper_section,
						{
							//view:"textarea", label:"Notes", labelPosition:"top", placeholder:"Type text"
						},
						buttons
					],
					rules:{
						"fname":webix.rules.isNotEmpty
					}
				}
			]
		};
	}
	}
