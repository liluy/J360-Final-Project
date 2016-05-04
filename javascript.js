// JavaScript Document
var text2display ="";
var answers = new Array(8);
	answers[0] = "1.Buddhism\n";
	answers[1] = "2.Close hands and a slight bow\n";
	answers[2] = "3.Hot\n";
	answers[3] = "4.Bangkok Suvarnabhumi Airport\n";
	answers[4] = "5.No\n";
	answers[5] = "6.April 13\n";
	
var questions = new Array(8);
	questions[0] ="q1";
	questions[1] ="q2";
	questions[2] ="q3";
	questions[3] ="q4";
	questions[4] ="q5";
	questions[5] ="q6";
	
function checkQs (s)
{
	"use strict";
	var qs= document.getElementsByName(s);
	var noOfRadios = qs.length;
	
	for(var i = 0; i < noOfRadios; i++)	
	{
		if(qs[i].checked)
		{
			if(qs[i].value==="correct")
				text2display = text2display + "You are Correct\n";
			else text2display = text2display + answers [questions.indexOf(s)];
				break; 
		}	
	}
}

function checkAll()
{
	"use strict";
	for(var i = 0; i < questions.length; i++)
	{
		checkQs(questions[i]);
	}
	quiz.answersBox.value=text2display;
}


