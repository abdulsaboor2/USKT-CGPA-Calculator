// JavaScript Document

		
		function Get_Points(num){
			var x = document.getElementsByName('Grade_Alpha_1')[num].value;
			document.getElementsByName("Point_1")[num].value=x;
			Get_Grade_Points(num);
		}
		
		function Get_Grade_Points(num){
			var x = document.getElementsByName('Credit_Hours_1')[num].value;
			var y = document.getElementsByName('Point_1')[num].value;
			document.getElementsByName("Grade_Point_1")[num].value=x*y;
		}
		var Global;
		
		function Sum_of_Indexes(){
			var sum = 0.0;
			var result = null;
			
			for(var i=0; i<9; i++){
				var x= document.getElementsByName("Grade_Point_1")[i].value;
				result = parseFloat(x);
				if (Number.isNaN(result) == true){
					break;
				}
				sum = sum + result;
			}
			document.getElementById("Grade_Value").value = sum;
			Global = sum;
			Credit_Hours_Sum();
			get_CGPA()
		}
		
		function Credit_Hours_Sum(){
			var sum = 0.0;
			var result = null;
			
			for(var i=0;i<9;i++){
				var x= document.getElementsByName("Credit_Hours_1")[i].value;
				result = parseFloat(x);
				if (Number.isNaN(result) == true){
					break;
				}
				sum = sum + result;
			}
			document.getElementById("CH_Value").value = sum;
			z=document.getElementById("GPA").value=Global/sum;
			document.getElementById("CGPA").value=z;
		}
		
		function get_CGPA(){
			var x = document.getElementById("C_CGPA").value;
			var y = document.getElementById("T_Credit_Hours").value;
			var z = document.getElementById("GPA").value;
			var z1 = document.getElementById("CH_Value").value;
			
			var Current = x * y;
			var Neww = z * z1;
			var NewSum = Current+Neww;
 			var CR_Sum = parseInt(y)+parseInt(z1);
			document.getElementById("CGPA").value = NewSum/CR_Sum;
		}
