

var points = 0;
var attempts = 0;
var timeLeft = 10;

var countdown = setInterval(countDownTimer,1000);

function countDownTimer(){
   var latin = verbArray[0][0];
   document.getElementById("flex1c").style.color = "red";
   document.getElementById("flex1c").innerHTML = timeleft;
   timeleft -= 1;
   if(timeleft <= 0)  {
    			clearInterval(countdown);
    			document.getElementById("flex1c").innerHTML = "Finis!";
					document.getElementById("flex1c").style.color = "black";

          document.getElementById("flexA").disabled = true;
          document.getElementById("flexB").disabled = true;
          document.getElementById("flexC").disabled = true;
          document.getElementById("flexD").disabled = true;
          document.getElementById("flex1b").onclick = function(){startGame()};
          document.getElementById("flex1b").innerHTML = "Ludamus Iterum!";
          document.getElementById("flex1b").disabled = false;
          attempts++;
          document.getElementById("flex1a").innerHTML = points  + "/" + attempts;


    if (timeleft <= 0 && document.getElementById("flexA").innerHTML == verbArray[0][1]){
            document.getElementById("flexA").style.backgroundColor = "red";
            document.getElementById("flexA").innerHTML = latin.italics() + " means: " + verbArray[0][1];
          }

    if (timeleft <= 0 && document.getElementById("flexB").innerHTML == verbArray[0][1]){
            document.getElementById("flexB").style.backgroundColor = "red";
            document.getElementById("flexB").innerHTML = latin.italics() + " means: " + verbArray[0][1];
          }

    if (timeleft <= 0 && document.getElementById("flexC").innerHTML == verbArray[0][1]){
      document.getElementById("flexC").style.backgroundColor = "red";
      document.getElementById("flexC").innerHTML = latin.italics() + " means: " + verbArray[0][1];
      }

    if(timeleft <= 0 && document.getElementById("flexD").innerHTML == verbArray[0][1]){
            document.getElementById("flexD").style.backgroundColor = "red";
            document.getElementById("flexD").innerHTML = latin.italics() + " means: " + verbArray[0][1];
      }
  }
}


//This stops the timer and resets it to 15 seconds
function stopTimer() {

  clearInterval(countdown);
  document.getElementById("flex1c").innerHTML = "Timer";
  timeleft = 10;

}

stopTimer();



function myFunc(){
  document.getElementById("flexA").innerHTML = "Wrong!";
}




//Verbs in WW1 here and in reset()
//infinitives in 2nd: ēre and 3r-io: êre
let verbList = [["iuvo", "iuvare", "iuvi", "iutus", "help", "helping", "helped", "helped"],["amo", "amare", "amavi","amatus", "love", "loving", "loved", "loved"],["cogito", "cogitare", "cogitavi","cogitatus", "consider", "considering", "considered", "condsidered"],["erro", "errare", "erravi","erratus", "mistake", "mistaking", "mistook", "mistaken"],["laudo", "laudare", "laudavi","laudatus", "praise", "praising", "praised", "praised"],["observo", "observare", "observavi","observatus", "observe", "observing", "observed", "observed"],["debeo", "debēre", "debui","debitus", "owe", "owing", "owed", "ought"],["moneo", "monēre", "monui","monitus", "warn", "warning", "warned", "advised"],["terreo", "terrēre", "terrui","territus", "frighten", "frightening", "terrified", "frightened"],["servo", "servare", "servavi","servatus", "guard", "saving", "kept", "preserved"],["conservo", "conservare", "conservavi","conservatus", "preserve", "conserving", "maintained", "preserved"],["voco", "vocare", "vocavi","vocatus", "call", "summoning", "called", "summoned"],["video", "vidēre", "vīdi","visus", "see", "seeing", "saw", "seen"],["habeō", "habēre", "habui", "habitus","hold","having","had","held"],["satiō", "satiare", "satiāvi", "satiātus","satiate","satisfying","satisfied","satisfied"],["cēno", "cēnare", "cēnāvi", "cēnātus","dine","dining","dined","dined"],["culpo", "culpare", "culpāvì", "culpātus","blame", "blaming", "blamed","blamed"],["supero", "superare", "superāvi", "superātus","conquer", "conquering","conquered","conquered"],["remaneo", "remanēre", "remansi", "remansurus","remain", "staying behind", "remained", "remained"],["maneo", "manēre", "mansi", "mansurum","remain", "staying behind", "remained", "remained"]];


//["cēno", "cēnare", "cēnāvi", "cēnātus","dine","dining","dined","dined"],["culpo", "culpare", "culpāvì", "culpātus","blame", "blaming", "blamed","blamed"],["supero", "superare", "superāvi", "superātus","conquer", "conquering","conquered","conquered"],["remaneo", "remanēre", "remansi", "remansurus","remain", "staying behind", "remained", "remained"],["maneo", "manēre", "mansi", "mansurum",,"remain", "staying behind", "remained", "remained"]

//instransitive verbs left out: salveo  and valeo.

class Verb {
  constructor(first, second, third, fourth, verb, verbing, verbed,ppVerb){
  this.first = first;
  this.second = second;
  this.third = third;
  this.fourth = fourth;
  this.verb = verb;
  this.verbing = verbing;
  this.verbed = verbed;
  this.ppVerb = ppVerb;
  }

  //PRESENT ACTIVE INFINITIVE

  get actInfPres(){
    return this.presActInf();
  }

  presActInf(){
    if (this.second.slice(-3,) == "are"){
      return this.second.slice(0,-3) + "āre";
    } else if (this.second.slice(-3,) == "ēre"){
      return this.second;
    } else if (this.first.slice(-2,) == "io" && this.second.slice(-3,) == "ere"){
      return this.second;
    } else if (this.second.slice(-3,) == "ere"){
      return this.second;
    } else if (this.second.slice(-3,) == "ire"){
      return this.second.slice(0,-3) + "īre";
    }
  }

  get actInfPresTrans(){
    return this.presActInfTrans();
  }

  presActInfTrans(){
    return " to " +  this.verb;
  }

  //SINGULAR IMPERATIVE

  get imperativeSing(){
    return this.singImperative();
  }

  singImperative(){
    if (this.second.slice(-3,) == "are"){
      return this.second.slice(0,-3) + "ā";
    } else if (this.second.slice(-3,) == "ēre"){
      return this.second.slice(0,-3) + "ē";
    } else if (this.first.slice(-2,) == "io" && this.second.slice(-3,) == "ere"){
      if (this.second == "facere"){
        return "fac";
      } else {
      return this.second.slice(0,-3) + "e";
      }
    } else if (this.second.slice(-3,) == "ere"){
        if (this.second == "ducere"){
          return "duc";
        } else if (this.second == "dicere"){
          return "dic";
        } else {
          return this.second.slice(0,-3) + "e";
        }
    } else if (this.second.slice(-3,) == "ire"){
      return this.second.slice(0,-3) + "ī";
    }
  }

  get imperativeSingTrans(){
    let imperative = this.verb;
    return imperative[0].toUpperCase() + imperative.substring(1) +  "!";
  }



  //PLURAL IMPERATIVE

  get imperativePl(){
    return this.plImperative();
  }

  plImperative(){
    if (this.second.slice(-3,) == "are"){
      return this.second.slice(0,-3) + "āte";
    } else if (this.second.slice(-3,) == "ēre"){
      return this.second.slice(0,-3) + "ēte";
    } else if (this.first.slice(-2,) == "io" && this.second.slice(-3,) == "ere"){
      return this.second.slice(0,-3) + "ite";
    } else if (this.second.slice(-3,) == "ere"){
      return this.second.slice(0,-3) + "ite";
    } else if(this.second.slice(-3,) == "ire"){
      return this.second.slice(0,-3) + "īte";
    }
  }

  get imperativePlTrans(){
    let imperative = this.verb;
    return imperative[0].toUpperCase() + imperative.substring(1) +  ", ya'll!";
  }

  plImperativeTrans(){
    return this.imperativePlTrans();
  }




  //PRESENT TENSE
  get firstSingPres(){
    return this.presFirstSing();
  }

  presFirstSing(){
    if (this.second.slice(-3,) == "are"){
      return this.second.slice(0,-3) + "ō";
    } else if (this.second.slice(-3,) == "ēre"){
      return this.second.slice(0,-3) + "eō";
    } else if (this.first.slice(-2,) == "io" && this.second.slice(-3,) == "ere"){
      return this.second.slice(0,-3) + "iō";
    } else if (this.second.slice(-3,) == "ere"){
      return this.second.slice(0,-3) + "ō";

    } else if (this.second.slice(-3,) == "ire"){
      return this.second.slice(0,-3) + "iō";
    }
  }



  get firstSingPresTrans(){
    return this.presFirstSingTrans();
  }

  presFirstSingTrans(){
    return "I " +  this.verb;
  }

  get secondSingPres(){
    return this.presSecondSing();
  }

  presSecondSing(){
    if (this.second.slice(-3,) == "are"){
      return this.second.slice(0,-3) + "ās";
    } else if (this.second.slice(-3,) == "ēre"){
      return this.second.slice(0,-3) + "ēs";
    } else if (this.first.slice(-2,) == "io" && this.second.slice(-3,) == "ere"){
      return this.second.slice(0,-3) + "is";
    } else if (this.second.slice(-3,) == "ere"){
      return this.second.slice(0,-3) + "is";

    } else if (this.second.slice(-3,) == "ire"){
      return this.second.slice(0,-3) + "īs";
    }
  }

  get secondSingPresTrans(){
    return this.presSecondSingTrans();
  }

  presSecondSingTrans(){
    return "You " +  this.verb;
  }

  get thirdSingPres(){
    return this.presThirdSing();
  }

  presThirdSing(){
    if (this.second.slice(-3,) == "are"){
      return this.second.slice(0,-3) + "at";
    } else if (this.second.slice(-3,) == "ēre"){
      return this.second.slice(0,-3) + "et";
    } else if (this.first.slice(-2,) == "io" && this.second.slice(-3,) == "ere"){
      return this.second.slice(0,-3) + "it";
    } else if (this.second.slice(-3,) == "ere"){
      return this.second.slice(0,-3) + "it";

    } else if (this.second.slice(-3,) == "ire"){
      return this.second.slice(0,-3) + "it";
    }
  }

  get thirdSingPresTrans(){
    return this.presThirdSingTrans();
  }

  presThirdSingTrans(){
    return "He " +  this.verb + "s";
  }

  get firstPlPres(){
    return this.presFirstPl();
  }

  presFirstPl(){
    if (this.second.slice(-3,) == "are"){
      return this.second.slice(0,-3) + "āmus";
    } else if (this.second.slice(-3,) == "ēre"){
      return this.second.slice(0,-3) + "ēmus";
    } else if (this.first.slice(-2,) == "io" && this.second.slice(-3,) == "ere"){
      return this.second.slice(0,-3) + "imus";
    } else if (this.second.slice(-3,) == "ere"){
      return this.second.slice(0,-3) + "imus";

    } else if (this.second.slice(-3,) == "ire"){
      return this.second.slice(0,-3) + "īmus";
    }
  }

  get firstPlPresTrans(){
    return this.presFirstPlTrans();
  }

  presFirstPlTrans(){
    return "We " +  this.verb;
  }

  get secondPlPres(){
    return this.presSecondPl();
  }

  presSecondPl(){
    if (this.second.slice(-3,) == "are"){
      return this.second.slice(0,-3) + "ātis";
    } else if (this.second.slice(-3,) == "ēre"){
      return this.second.slice(0,-3) + "ētis";
    } else if (this.first.slice(-2,) == "io" && this.second.slice(-3,) == "ere"){
      return this.second.slice(0,-3) + "itis";
    } else if (this.second.slice(-3,) == "ere"){
      return this.second.slice(0,-3) + "itis";

    } else if (this.second.slice(-3,) == "ire"){
      return this.second.slice(0,-3) + "ītis";
    }
  }

  get secondPlPresTrans(){
    return this.presSecondPlTrans();
  }

  presSecondPlTrans(){
    return "Y'all " +  this.verb;
  }


  get thirdPlPres(){
    return this.presThirdPl();
  }

  presThirdPl(){
    if (this.second.slice(-3,) == "are"){
      return this.second.slice(0,-3) + "ant";
    } else if (this.second.slice(-3,) == "ēre"){
      return this.second.slice(0,-3) + "ent";
    } else if (this.first.slice(-2,) == "io" && this.second.slice(-3,) == "ere"){
      return this.second.slice(0,-3) + "iunt";
    } else if (this.second.slice(-3,) == "ere"){
      return this.second.slice(0,-3) + "unt";

    } else if (this.second.slice(-3,) == "ire"){
      return this.second.slice(0,-3) + "īunt";
    }
  }

  get thirdPlPresTrans(){
    return this.presThirdPlTrans();
  }

  presThirdPlTrans(){
    return "They " +  this.verb;
  }

//imperfect

  get firstSingImp(){
   return this.impFirstSing();
 }

  impFirstSing(){
    if (this.second.slice(-3,) == "are"){
      return this.second.slice(0,-3) + "ābam";
    } else if (this.second.slice(-3,) == "ēre"){
      return this.second.slice(0,-3) + "ēbam";
    } else if (this.first.slice(-2,) == "io" && this.second.slice(-3,) == "ere"){
      return this.second.slice(0,-3) + "iēbam";
    } else if (this.second.slice(-3,) == "ere"){
      return this.second.slice(0,-3) + "ēbam";
    } else if (this.second.slice(-3,) == "ire"){
      return this.second.slice(0,-3) + "iēbam";
    }
  }



  get firstSingImpTrans(){
    return this.impFirstSingTrans();
  }

  impFirstSingTrans(){
    return "I used to " +  this.verb;
  }

  get secondSingImp(){
    return this.impSecondSing();
  }

  impSecondSing(){
    if (this.second.slice(-3,) == "are"){
      return this.second.slice(0,-3) + "ābās";
    } else if (this.second.slice(-3,) == "ēre"){
      return this.second.slice(0,-3) + "ēbās";
    } else if (this.first.slice(-2,) == "io" && this.second.slice(-3,) == "ere"){
      return this.second.slice(0,-3) + "iēbās";
    } else if (this.second.slice(-3,) == "ere"){
      return this.second.slice(0,-3) + "ēbās";
    } else if (this.second.slice(-3,) == "ire"){
      return this.second.slice(0,-3) + "iēbās";
    }
  }

  get secondSingImpTrans(){
    return this.impSecondSingTrans();
  }

  impSecondSingTrans(){
    return "You were " +  this.verbing;
  }

  get thirdSingImp(){
    return this.impThirdSing();
  }

  impThirdSing(){
    if (this.second.slice(-3,) == "are"){
      return this.second.slice(0,-3) + "abat";
    } else if (this.second.slice(-3,) == "ēre"){
      return this.second.slice(0,-3) + "ēbat";
    } else if (this.first.slice(-2,) == "io" && this.second.slice(-3,) == "ere"){
      return this.second.slice(0,-3) + "iēbat";
    } else if (this.second.slice(-3,) == "ere"){
      return this.second.slice(0,-3) + "ēbat";
    } else if (this.second.slice(-3,) == "ire"){
      return this.second.slice(0,-3) + "iēbat";
    }
  }

  get thirdSingImpTrans(){
    return this.impThirdSingTrans();
  }

  impThirdSingTrans(){
    return "She kept " +  this.verbing;
  }

  get firstPlImp(){
    return this.impFirstPl();
  }

  impFirstPl(){
    if (this.second.slice(-3,) == "are"){
      return this.second.slice(0,-3) + "ābāmus";
    } else if (this.second.slice(-3,) == "ēre"){
      return this.second.slice(0,-3) + "ēbāmus";
    } else if (this.first.slice(-2,) == "io" && this.second.slice(-3,) == "ere"){
      return this.second.slice(0,-3) + "iēbāmus";
    } else if (this.second.slice(-3,) == "ere"){
      return this.second.slice(0,-3) + "ēbāmus";

    } else if (this.second.slice(-3,) == "ire"){
      return this.second.slice(0,-3) + "iēbāmus";
    }
  }

  get firstPlImpTrans(){
    return this.impFirstPlTrans();
  }

  impFirstPlTrans(){
    return "We used to " +  this.verb;
  }

  get secondPlImp(){
    return this.impSecondPl();
  }

  impSecondPl(){
    if (this.second.slice(-3,) == "are"){
      return this.second.slice(0,-3) + "ābātis";
    } else if (this.second.slice(-3,) == "ēre"){
      return this.second.slice(0,-3) + "ēbātis";
    } else if (this.first.slice(-2,) == "io" && this.second.slice(-3,) == "ere"){
      return this.second.slice(0,-3) + "iēbātis";
    } else if (this.second.slice(-3,) == "ere"){
      return this.second.slice(0,-3) + "ēbātis";
    } else if (this.second.slice(-3,) == "ire"){
      return this.second.slice(0,-3) + "iēbātis";
    }
  }

  get secondPlImpTrans(){
    return this.impSecondPlTrans();
  }

  impSecondPlTrans(){
    return "Y'all were " +  this.verbing;
  }


  get thirdPlImp(){
    return this.impThirdPl();
  }

  impThirdPl(){
    if (this.second.slice(-3,) == "are"){
      return this.second.slice(0,-3) + "abant";
    } else if (this.second.slice(-3,) == "ēre"){
      return this.second.slice(0,-3) + "ēbant";
    } else if (this.first.slice(-2,) == "io" && this.second.slice(-3,) == "ere"){
      return this.second.slice(0,-3) + "iēbant";
    } else if (this.second.slice(-3,) == "ere"){
      return this.second.slice(0,-3) + "ēbant";
    } else if (this.second.slice(-3,) == "ire"){
      return this.second.slice(0,-3) + "iēbant";
    }
  }

  get thirdPlImpTrans(){
    return this.impThirdPlTrans();
  }

  impThirdPlTrans(){
    return "They were " +  this.verbing;
  }

  //future tense

    get firstSingFut(){
     return this.futFirstSing();
   }

    futFirstSing(){
      if (this.second.slice(-3,) == "are"){
        return this.second.slice(0,-3) + "ābō";
      } else if (this.second.slice(-3,) == "ēre"){
        return this.second.slice(0,-3) + "ēbō";
      } else if (this.first.slice(-2,) == "io" && this.second.slice(-3,) == "ere"){
        return this.second.slice(0,-3) + "iam";
      } else if (this.second.slice(-3,) == "ere"){
        return this.second.slice(0,-3) + "am";
      } else if (this.second.slice(-3,) == "ire"){
        return this.second.slice(0,-3) + "iam";
      }
    }



    get firstSingFutTrans(){
      return this.futFirstSingTrans();
    }

    futFirstSingTrans(){
      return "I will " +  this.verb;
    }

    get secondSingFut(){
      return this.futSecondSing();
    }

    futSecondSing(){
      if (this.second.slice(-3,) == "are"){
        return this.second.slice(0,-3) + "ābis";
      } else if (this.second.slice(-3,) == "ēre"){
        return this.second.slice(0,-3) + "ēbis";
      } else if (this.first.slice(-2,) == "io" && this.second.slice(-3,) == "ere"){
        return this.second.slice(0,-3) + "iēs";
      } else if (this.second.slice(-3,) == "ere"){
        return this.second.slice(0,-3) + "ēs";
      } else if (this.second.slice(-3,) == "ire"){
        return this.second.slice(0,-3) + "iēs";
      }
    }

    get secondSingFutTrans(){
      return this.futSecondSingTrans();
    }

    futSecondSingTrans(){
      return "You will " +  this.verb;
    }

    get thirdSingFut(){
      return this.futThirdSing();
    }

    futThirdSing(){
      if (this.second.slice(-3,) == "are"){
        return this.second.slice(0,-3) + "ābit";
      } else if (this.second.slice(-3,) == "ēre"){
        return this.second.slice(0,-3) + "ēbit";
      } else if (this.first.slice(-2,) == "io" && this.second.slice(-3,) == "ere"){
        return this.second.slice(0,-3) + "iet";
      } else if (this.second.slice(-3,) == "ere"){
        return this.second.slice(0,-3) + "et";
      } else if (this.second.slice(-3,) == "ire"){
        return this.second.slice(0,-3) + "iet";
      }
    }

    get thirdSingFutTrans(){
      return this.futThirdSingTrans();
    }

    futThirdSingTrans(){
      return "It will " +  this.verb;
    }

    get firstPlFut(){
      return this.futFirstPl();
    }

    futFirstPl(){
      if (this.second.slice(-3,) == "are"){
        return this.second.slice(0,-3) + "ābimus";
      } else if (this.second.slice(-3,) == "ēre"){
        return this.second.slice(0,-3) + "ēbimus";
      } else if (this.first.slice(-2,) == "io" && this.second.slice(-3,) == "ere"){
        return this.second.slice(0,-3) + "iēmus";
      } else if (this.second.slice(-3,) == "ere"){
        return this.second.slice(0,-3) + "ēmus";

      } else if (this.second.slice(-3,) == "ire"){
        return this.second.slice(0,-3) + "iēmus";
      }
    }

    get firstPlFutTrans(){
      return this.futFirstPlTrans();
    }

    futFirstPlTrans(){
      return "We will " +  this.verb;
    }

    get secondPlFut(){
      return this.futSecondPl();
    }

    futSecondPl(){
      if (this.second.slice(-3,) == "are"){
        return this.second.slice(0,-3) + "ābitis";
      } else if (this.second.slice(-3,) == "ēre"){
        return this.second.slice(0,-3) + "ēbitis";
      } else if (this.first.slice(-2,) == "io" && this.second.slice(-3,) == "ere"){
        return this.second.slice(0,-3) + "iētis";
      } else if (this.second.slice(-3,) == "ere"){
        return this.second.slice(0,-3) + "ētis";
      } else if (this.second.slice(-3,) == "ire"){
        return this.second.slice(0,-3) + "iētis";
      }
    }

    get secondPlFutTrans(){
      return this.futSecondPlTrans();
    }

    futSecondPlTrans(){
      return "Y'all will " +  this.verb;
    }


    get thirdPlFut(){
      return this.futThirdPl();
    }

    futThirdPl(){
      if (this.second.slice(-3,) == "are"){
        return this.second.slice(0,-3) + "ābunt";
      } else if (this.second.slice(-3,) == "ēre"){
        return this.second.slice(0,-3) + "ēbunt";
      } else if (this.first.slice(-2,) == "io" && this.second.slice(-3,) == "ere"){
        return this.second.slice(0,-3) + "ient";
      } else if (this.second.slice(-3,) == "ere"){
        return this.second.slice(0,-3) + "ent";
      } else if (this.second.slice(-3,) == "ire"){
        return this.second.slice(0,-3) + "ient";
      }
    }

    get thirdPlFutTrans(){
      return this.futThirdPlTrans();
    }

    futThirdPlTrans(){
      return "They will " +  this.verb;
    }

   //PERFECT tense

   get firstSingPer(){
    return this.perFirstSing();
  }

   perFirstSing(){
     return this.third.slice(0,-1) + "ī";
   }

   get firstSingPerTrans(){
     return this.perFirstSingTrans();
   }

   perFirstSingTrans(){
     return "I " +  this.verbed;
   }

   get secondSingPer(){
    return this.perSecondSing();
  }

   perSecondSing(){
     return this.third.slice(0,-1) + "istī";
   }

   get secondSingPerTrans(){
     return this.perSecondSingTrans();
   }

   perSecondSingTrans(){
     return "You " +  this.verbed;
   }

   get thirdSingPer(){
    return this.perThirdSing();
  }

   perThirdSing(){
     return this.third.slice(0,-1) + "it";
   }

   get thirdSingPerTrans(){
     return this.perThirdSingTrans();
   }

   perThirdSingTrans(){
     return "He " +  this.verbed;
   }

   get firstPlPer(){
    return this.perFirstPl();
  }

   perFirstPl(){
     return this.third.slice(0,-1) + "imus";
   }

   get firstPlPerTrans(){
     return this.perFirstPlTrans();
   }

   perFirstPlTrans(){
     return "We " +  this.verbed;
   }

   get secondPlPer(){
    return this.perSecondPl();
  }

   perSecondPl(){
     return this.third.slice(0,-1) + "istis";
   }

   get secondPlPerTrans(){
     return this.perSecondPlTrans();
   }

   perSecondPlTrans(){
     return "Y'all " +  this.verbed;
   }

   get thirdPlPer(){
    return this.perThirdPl();
  }

   perThirdPl(){
     return this.third.slice(0,-1) + "ērunt";
   }

   get thirdPlPerTrans(){
     return this.perThirdPlTrans();
   }

   perThirdPlTrans(){
     return "They " +  this.verbed;
   }

   //PLUPERFECT getElementsByName

   get firstSingPlu(){
    return this.pluFirstSing();
  }

   pluFirstSing(){
     return this.third.slice(0,-1) + "eram";
   }

   get firstSingPluTrans(){
     return this.pluFirstSingTrans();
   }

   pluFirstSingTrans(){
     return "I had " +  this.ppVerb;
   }

   get secondSingPlu(){
    return this.pluSecondSing();
  }

   pluSecondSing(){
     return this.third.slice(0,-1) + "eras";
   }

   get secondSingPluTrans(){
     return this.pluSecondSingTrans();
   }

   pluSecondSingTrans(){
     return "You had " +  this.ppVerb;
   }

   get thirdSingPlu(){
    return this.pluThirdSing();
  }

   pluThirdSing(){
     return this.third.slice(0,-1) + "erat";
   }

   get thirdSingPluTrans(){
     return this.pluThirdSingTrans();
   }

   pluThirdSingTrans(){
     return "She had " +  this.ppVerb;
   }

   get firstPlPlu(){
    return this.pluFirstPl();
  }

   pluFirstPl(){
     return this.third.slice(0,-1) + "eramus";
   }

   get firstPlPluTrans(){
     return this.pluFirstPlTrans();
   }

   pluFirstPlTrans(){
     return "We had " +  this.ppVerb;
   }

   get secondPlPlu(){
    return this.pluSecondPl();
  }

   pluSecondPl(){
     return this.third.slice(0,-1) + "eratis";
   }

   get secondPlPluTrans(){
     return this.pluSecondPlTrans();
   }

   pluSecondPlTrans(){
     return "Y'all had " +  this.ppVerb;
   }

   get thirdPlPlu(){
    return this.pluThirdPl();
  }

   pluThirdPl(){
     return this.third.slice(0,-1) + "erant";
   }

   get thirdPlPluTrans(){
     return this.pluThirdPlTrans();
   }

   pluThirdPlTrans(){
     return "They had " +  this.ppVerb;
   }

   //FUTURE PERFECT

   get firstSingFutPer(){
    return this.futPerFirstSing();
  }

   futPerFirstSing(){
     return this.third.slice(0,-1) + "ero";
   }

   get firstSingFutPerTrans(){
     return this.futPerFirstSingTrans();
   }

   futPerFirstSingTrans(){
     return "I will have " +  this.verbed;
   }

   get secondSingFutPer(){
    return this.futPerSecondSing();
  }

   futPerSecondSing(){
     return this.third.slice(0,-1) + "eris";
   }

   get secondSingFutPerTrans(){
     return this.futPerSecondSingTrans();
   }

   futPerSecondSingTrans(){
     return "You will have " +  this.ppVerb;
   }

   get thirdSingFutPer(){
    return this.futPerThirdSing();
  }

   futPerThirdSing(){
     return this.third.slice(0,-1) + "erit";
   }

   get thirdSingFutPerTrans(){
     return this.futPerThirdSingTrans();
   }

   futPerThirdSingTrans(){
     return "It will have " +  this.ppVerb;
   }

   get firstPlFutPer(){
    return this.futPerFirstPl();
  }

   futPerFirstPl(){
     return this.third.slice(0,-1) + "erimus";
   }

   get firstPlFutPerTrans(){
     return this.futPerFirstPlTrans();
   }

   futPerFirstPlTrans(){
     return "We will have " +  this.ppVerb;
   }

   get secondPlFutPer(){
    return this.futPerSecondPl();
  }

   futPerSecondPl(){
     return this.third.slice(0,-1) + "eritis";
   }

   get secondPlFutPerTrans(){
     return this.futPerSecondPlTrans();
   }

   futPerSecondPlTrans(){
     return "Y'all will have " +  this.ppVerb;
   }

   get thirdPlFutPer(){
    return this.futPerThirdPl();
  }

   futPerThirdPl(){
     return this.third.slice(0,-1) + "erint";
   }

   get thirdPlFutPerTrans(){
     return this.futPerThirdPlTrans();
   }

   futPerThirdPlTrans(){
     return "They will have " +  this.ppVerb;
   }



}




// Generic function to return a shuffled array:
  function shuffle(array) {
    var currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle...
    while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
    }

    return array;
  }



//this randomizes the verbList data
var rvi = Math.floor(Math.random() * verbList.length);
var myVerb = new Verb(verbList[rvi][0],verbList[rvi][1], verbList[rvi][2], verbList[rvi][3], verbList[rvi][4],verbList[rvi][5],verbList[rvi][6],verbList[rvi][7]);

//this creates an array of the Latin verbs and their translations for the PRESENT ACTIVE INFINITIVE
var verbArray = [[myVerb.actInfPres,myVerb.actInfPresTrans]];
var vi = Math.floor(Math.random() * verbArray.length);

//this creates an array of the Latin verbs and their translations for the SINGULAR AND PLURAL IMPERATIVE
var verbArray = [[myVerb.singImperative,myVerb.singImperativeTrans],[myVerb.plImperative,myVerb.plImperativeTrans]];
var vi = Math.floor(Math.random() * verbArray.length);

//this creates an array of the Latin verbs and their translations in the PRESENT tense
var verbArray = [[myVerb.firstSingPres,myVerb.firstSingPresTrans],[myVerb.secondSingPres,myVerb.secondSingPresTrans],[myVerb.thirdSingPres,myVerb.thirdSingPresTrans],[myVerb.firstPlPres,myVerb.firstPlPresTrans],[myVerb.secondPlPres,myVerb.secondPlPresTrans],[myVerb.thirdPlPres,myVerb.thirdPlPresTrans]];
var vi = Math.floor(Math.random() * verbArray.length);

//this creates an array of the Latin verbs and their translations in the IMPERFECT tense
var verbArray = [[myVerb.firstSingImp,myVerb.firstSingImpTrans],[myVerb.secondSingImp,myVerb.secondSingImpTrans],[myVerb.thirdSingImp,myVerb.thirdSingImpTrans],[myVerb.firstPlImp,myVerb.firstPlImpTrans],[myVerb.secondPlImp,myVerb.secondPlImpTrans],[myVerb.thirdPlImp,myVerb.thirdPlImpTrans]];
var vi = Math.floor(Math.random() * verbArray.length);


//this creates an array of the Latin verbs and their translations in the FUTURE tense
var verbArray = [[myVerb.firstSingFut,myVerb.firstSingFutTrans],[myVerb.secondSingFut,myVerb.secondSingFutTrans],[myVerb.thirdSingFut,myVerb.thirdSingFutTrans],[myVerb.firstPlFut,myVerb.firstPlFutTrans],[myVerb.secondPlFut,myVerb.secondPlFutTrans],[myVerb.thirdPlFut,myVerb.thirdPlFutTrans]];
var vi = Math.floor(Math.random() * verbArray.length);

//this creates an array of the Latin verbs and their translations in the PERFECT tense
var verbArray = [[myVerb.firstSingPer,myVerb.firstSingPerTrans],[myVerb.secondSingPer,myVerb.secondSingPerTrans],[myVerb.thirdSingPer,myVerb.thirdSingPerTrans],[myVerb.firstPlPer,myVerb.firstPlPerTrans],[myVerb.secondPlPer,myVerb.secondPlPerTrans],[myVerb.thirdPlPer,myVerb.thirdPlPerTrans]];
var vi = Math.floor(Math.random() * verbArray.length);

//this creates an array of the Latin verbs and their translations in the PLUPERFECT tense
var verbArray = [[myVerb.firstSingPlu,myVerb.firstSingPluTrans],[myVerb.secondSingPlu,myVerb.secondSingPluTrans],[myVerb.thirdSingPlu,myVerb.thirdSingPluTrans],[myVerb.firstPlPlu,myVerb.firstPlPluTrans],[myVerb.secondPlPlu,myVerb.secondPlPluTrans],[myVerb.thirdPlPlu,myVerb.thirdPlPluTrans]];
var vi = Math.floor(Math.random() * verbArray.length);

//this creates an array of the Latin verbs and their translations in the FUTURE PERFECT tense
var verbArray = [[myVerb.firstSingFutPer,myVerb.firstSingFutPerTrans],[myVerb.secondSingFutPer,myVerb.secondSingFutPerTrans],[myVerb.thirdSingFutPer,myVerb.thirdSingFutPerTrans],[myVerb.firstPlFutPer,myVerb.firstPlFutPerTrans],[myVerb.secondPlFutPer,myVerb.secondPlFutPerTrans],[myVerb.thirdPlFutPer,myVerb.thirdPlFutPerTrans]];
var vi = Math.floor(Math.random() * verbArray.length);

//change here and below
//this creates an array of the Latin verbs and their translations in the present, imperfect and future tenses, imperative, and present active infinitive.
var verbArray =  [[myVerb.imperativePl,myVerb.imperativePlTrans],[myVerb.imperativeSing,myVerb.imperativeSingTrans],[myVerb.actInfPres,myVerb.actInfPresTrans],[myVerb.firstSingFut,myVerb.firstSingFutTrans],[myVerb.secondSingFut,myVerb.secondSingFutTrans],[myVerb.thirdSingFut,myVerb.thirdSingFutTrans],[myVerb.firstPlFut,myVerb.firstPlFutTrans],[myVerb.secondPlFut,myVerb.secondPlFutTrans],[myVerb.thirdPlFut,myVerb.thirdPlFutTrans],[myVerb.firstSingPres,myVerb.firstSingPresTrans],[myVerb.secondSingPres,myVerb.secondSingPresTrans],[myVerb.thirdSingPres,myVerb.thirdSingPresTrans],[myVerb.firstPlPres,myVerb.firstPlPresTrans],[myVerb.secondPlPres,myVerb.secondPlPresTrans],[myVerb.thirdPlPres,myVerb.thirdPlPresTrans],[myVerb.firstSingImp,myVerb.firstSingImpTrans],[myVerb.secondSingImp,myVerb.secondSingImpTrans],[myVerb.thirdSingImp,myVerb.thirdSingImpTrans],[myVerb.firstPlImp,myVerb.firstPlImpTrans],[myVerb.secondPlImp,myVerb.secondPlImpTrans],[myVerb.thirdPlImp,myVerb.thirdPlImpTrans]];

//var vi = Math.floor(Math.random() * verbArray.length);

/*
[myVerb.firstSingFutPer,myVerb.firstSingFutPerTrans],[myVerb.secondSingFutPer,myVerb.secondSingFutPerTrans],[myVerb.thirdSingFutPer,myVerb.thirdSingFutPerTrans],[myVerb.firstPlFutPer,myVerb.firstPlFutPerTrans],[myVerb.secondPlFutPer,myVerb.secondPlFutPerTrans],[myVerb.thirdPlFutPer,myVerb.thirdPlFutPerTrans],[myVerb.firstSingPer,myVerb.firstSingPerTrans],[myVerb.secondSingPer,myVerb.secondSingPerTrans],[myVerb.thirdSingPer,myVerb.thirdSingPerTrans],[myVerb.firstPlPer,myVerb.firstPlPerTrans],[myVerb.secondPlPer,myVerb.secondPlPerTrans],[myVerb.thirdPlPer,myVerb.thirdPlPerTrans],
*/



//this shuffles the order of present tense verbs
shuffle(verbArray);

//This randomizes the order of the buttons
var flex = ["flexA","flexB","flexC","flexD"];
var flexIndx = Math.floor(Math.random() * flex.length);

shuffle(flex);

function reset(){

  rvi = Math.floor(Math.random() * verbList.length);
  myVerb = new Verb(verbList[rvi][0],verbList[rvi][1], verbList[rvi][2], verbList[rvi][3], verbList[rvi][4],verbList[rvi][5],verbList[rvi][6],verbList[rvi][7]);
  console.log(verbList.length)

//What follows is an algorithm to ensure that each verb is used once before it is used again.
  //this creates a Set to contain the verb deleted from the verbList array
  x = new Set();
  //this deletes the randomized verb
  y = verbList.splice(rvi,1);
  console.log(verbList.length);
  //the has() method determines whether a verb has been called already
  if (x.has(y)){
    reset();
  }
  //this adds the chosen verb to the Set
  x.add(y);
  console.log(y);
  //this resets the verbList when all of them have been deleted
  if (verbList.length ==0){
    verbList = [["amo", "amare", "amavi","amatus", "love", "loving", "loved", "loved"],["cogito", "cogitare", "cogitavi","cogitatus", "think", "thinking", "thought", "thought"],["erro", "errare", "erravi","erratus", "err", "wandering", "made a mistake", "been mistaken"],["laudo", "laudare", "laudavi","laudatus", "praise", "praising", "praised", "praised"],["observo", "observare", "observavi","observatus", "observe", "observing", "observed", "observed"],["debeo", "debēre", "debui","debitus", "owe", "owing", "owed", "ought"],["moneo", "monēre", "monui","monitus", "warn", "warning", "warned", "advised"],["terreo", "terrēre", "terrui","territus", "frighten", "frightening", "terrified", "frightened"],["servo", "servare", "servavi","servatus", "guard", "saving", "kept", "preserved"],["conservo", "conservare", "conservavi","conservatus", "preserve", "conserving", "maintained", "preserved"],["voco", "vocare", "vocavi","vocatus", "call", "summoning", "called", "summoned"],["video", "vidēre", "vīdi","visus", "see", "seeing", "saw", "seen"]];
  }

//this resets the verbArray at the start of each click;
//Condisder not duplicating this by eliminating the prior declaration
  verbArray = [[myVerb.imperativePl,myVerb.imperativePlTrans],[myVerb.imperativeSing,myVerb.imperativeSingTrans],[myVerb.actInfPres,myVerb.actInfPresTrans],[myVerb.firstSingPres,myVerb.firstSingPresTrans],[myVerb.secondSingPres,myVerb.secondSingPresTrans],[myVerb.thirdSingPres,myVerb.thirdSingPresTrans],[myVerb.firstPlPres,myVerb.firstPlPresTrans],[myVerb.secondPlPres,myVerb.secondPlPresTrans],[myVerb.thirdPlPres,myVerb.thirdPlPresTrans],[myVerb.firstSingImp,myVerb.firstSingImpTrans],[myVerb.secondSingImp,myVerb.secondSingImpTrans],[myVerb.thirdSingImp,myVerb.thirdSingImpTrans],[myVerb.firstPlImp,myVerb.firstPlImpTrans],[myVerb.secondPlImp,myVerb.secondPlImpTrans],[myVerb.thirdPlImp,myVerb.thirdPlImpTrans],[myVerb.firstSingFut,myVerb.firstSingFutTrans],[myVerb.secondSingFut,myVerb.secondSingFutTrans],[myVerb.thirdSingFut,myVerb.thirdSingFutTrans],[myVerb.firstPlFut,myVerb.firstPlFutTrans],[myVerb.secondPlFut,myVerb.secondPlFutTrans],[myVerb.thirdPlFut,myVerb.thirdPlFutTrans]];



  shuffle(verbArray);

    //z = verbArray.splice(rvi,1);
    //var set1 = new Set ();
    //set1.add(z);
    //console.log(set1.size)
  flex = ["flexA","flexB","flexC","flexD"];
  flexIndx = Math.floor(Math.random() * flex.length);

  shuffle(flex);
  stopTimer();
  timer = 10;
  document.getElementById("flex1c").innerHTML =  "Timer"
}

function startGame(){



  reset();

  countDownTimer();
  countdown = setInterval(countDownTimer,1000);

  document.getElementById("flex1b").disabled = true;

  document.getElementById("flexA").style.display = "block";
  document.getElementById("flexB").style.display = "block";
  document.getElementById("flexC").style.display = "block";
  document.getElementById("flexD").style.display = "block";

  document.getElementById("flexA").disabled = false;
  document.getElementById("flexB").disabled = false;
  document.getElementById("flexC").disabled = false;
  document.getElementById("flexD").disabled = false;

  document.getElementById("flexA").style.backgroundColor = "#008CBA";
  document.getElementById("flexB").style.backgroundColor = "#008CBA";
  document.getElementById("flexC").style.backgroundColor = "#008CBA";
  document.getElementById("flexD").style.backgroundColor = "#008CBA";



    document.getElementById("flex1b").innerHTML = verbArray[0][0];
    document.getElementById(flex[0]).innerHTML = verbArray[0][1];
    document.getElementById(flex[1]).innerHTML = verbArray[1][1];
    document.getElementById(flex[2]).innerHTML = verbArray[2][1];
    document.getElementById(flex[3]).innerHTML = verbArray[3][1];

}

function answerFlexA(){

  if (document.getElementById("flexA").innerHTML == verbArray[0][1]){

    var latin = verbArray[0][0];
    document.getElementById("flexA").innerHTML = "Bene!!! " + latin.italics() + " means: " + verbArray[0][1];
    document.getElementById("flex1b").disabled = false;
    document.getElementById("flex1b").innerHTML =  "Ludamus Iterum!"
    document.getElementById("flexA").disabled = true;
    document.getElementById("flexB").disabled = true;
    document.getElementById("flexC").disabled = true;
    document.getElementById("flexD").disabled = true;
    document.getElementById("flexA").style.backgroundColor = "green";
    document.getElementById("flexB").style.backgroundColor = "#008CBA";
    document.getElementById("flexC").style.backgroundColor = "#008CBA";
    document.getElementById("flexD").style.backgroundColor = "#008CBA";
    points++;
    attempts++;
    document.getElementById("flex1a").innerHTML = points  + "/" + attempts;
    stopTimer();

  } else {

  document.getElementById("flexA").style.backgroundColor = "red"
  document.getElementById("flexA").disabled = true;
  attempts++;
  document.getElementById("flex1a").innerHTML = points  + "/" + attempts;

  }
}

function answerFlexB(){

  if (document.getElementById("flexB").innerHTML == verbArray[0][1]){


    var latin = verbArray[0][0];
    document.getElementById("flexB").innerHTML = "Optime!!! " + latin.italics() + " means: " + verbArray[0][1];
    document.getElementById("flex1b").disabled = false;
    document.getElementById("flex1b").innerHTML =  "Ludamus Iterum!"
    document.getElementById("flexA").disabled = true;
    document.getElementById("flexB").disabled = true;
    document.getElementById("flexC").disabled = true;
    document.getElementById("flexD").disabled = true;
    document.getElementById("flexA").style.backgroundColor = "#008CBA";
    document.getElementById("flexB").style.backgroundColor = "green";
    document.getElementById("flexC").style.backgroundColor = "#008CBA";
    document.getElementById("flexD").style.backgroundColor = "#008CBA";
    points++;
    attempts++;
    document.getElementById("flex1a").innerHTML = points  + "/" + attempts;
    stopTimer();

  } else {

  document.getElementById("flexB").style.backgroundColor = "red"
  document.getElementById("flexB").disabled = true;
  attempts++;
  document.getElementById("flex1a").innerHTML = points  + "/" + attempts;
  }
}

function answerFlexC(){

  if (document.getElementById("flexC").innerHTML == verbArray[0][1]){

    var latin = verbArray[0][0];
    document.getElementById("flexC").innerHTML = "Bene!!! " + latin.italics() + " means: " + verbArray[0][1];
    document.getElementById("flex1b").disabled = false;
    document.getElementById("flex1b").innerHTML =  "Ludamus Iterum!"
    document.getElementById("flexA").disabled = true;
    document.getElementById("flexB").disabled = true;
    document.getElementById("flexC").disabled = true;
    document.getElementById("flexD").disabled = true;
    document.getElementById("flexA").style.backgroundColor = "#008CBA";
    document.getElementById("flexB").style.backgroundColor = "#008CBA";
    document.getElementById("flexC").style.backgroundColor = "green";
    document.getElementById("flexD").style.backgroundColor = "#008CBA";
    points++;
    attempts++;
    document.getElementById("flex1a").innerHTML = points  + "/" + attempts;
    stopTimer();

  } else {

  document.getElementById("flexC").style.backgroundColor = "red"
  document.getElementById("flexC").disabled = true;
  attempts++;
  document.getElementById("flex1a").innerHTML = points  + "/" + attempts;
  }
}

function answerFlexD(){

  if (document.getElementById("flexD").innerHTML == verbArray[0][1]){

    var latin = verbArray[0][0];
    document.getElementById("flexD").innerHTML = "Optime!!! " + latin.italics() + " means: " + verbArray[0][1];
    document.getElementById("flex1b").disabled = false;
    document.getElementById("flex1b").innerHTML =  "Ludamus Iterum!"
    document.getElementById("flexA").disabled = true;
    document.getElementById("flexB").disabled = true;
    document.getElementById("flexC").disabled = true;
    document.getElementById("flexD").disabled = true;
    document.getElementById("flexA").style.backgroundColor = "#008CBA";
    document.getElementById("flexB").style.backgroundColor = "#008CBA";
    document.getElementById("flexC").style.backgroundColor = "#008CBA";
    document.getElementById("flexD").style.backgroundColor = "green";
    points++;
    attempts++;
    document.getElementById("flex1a").innerHTML = points  + "/" + attempts;
    stopTimer();
  } else {

  document.getElementById("flexD").style.backgroundColor = "red"
  document.getElementById("flexD").disabled = true;
  attempts++;
  document.getElementById("flex1a").innerHTML = points  + "/" + attempts;
  }
}
