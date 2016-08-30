var texts = {};

texts.fullscreen = '<h2>Welcome</h2><p>This experiment will run in fullscreen mode. The     following actions will terminate the experiment: </p>\
                     <ul><li>exiting fullscreen mode</li><li>tabbing out</li>\
                     <li>reloading the page</li><li>going "back" in your browser</li></ul>\
                     <p>Please close other programs and disable notifications.</p><p> Make sure you can work for 15 to 20 minutes without any interruption. Please avoid any distractions (i.e., radio, tv).</p>\
                     <p>Click "Start experiment" to enter fullscreen mode and start the experiment.</p>'

texts.study_info = 	"<div class='center-content'><img src='uzhLogo.png' style='width:680px;height:78px'></img></div>\
	<h3 style='text-align: center'>Study information</h3>\
	<p>Please read the following information carefully.</p>\
	<dl><dt style='font-size: 105%;line-height: 2;'>What this study is about</dt><dd> The goal of this experiment is to investigate how people solve logical problems consisting of sets of premises and a conclusion (syllogisms).</dd>\
	<dt style='font-size: 105%;line-height: 2;'>Duration and pay</dt><dd>This experiment will take you 15 to 20 minutes. For compensation you will recieve 2$.</dd>\
	<dt style='font-size: 105%;line-height: 2;'>Conditions of participation</dt>\
	<dd>Participation is completely voluntary. If you decide to participate, you can withdraw at any time without stating any reason.\
	To quit the experiment you simply have to close your browser window.</dd>\
	<dt style='font-size: 105%;line-height: 2;'>Possible risks and harms</dt><dd>No risks and harms are known to be caused by this experiment.</dd>\
	<dt style='font-size: 105%;line-height: 2;'>Confidentiality and anonymity</dt><dd>Your anonymity will always be preserved. No data will be collected, that lets one infer your identity. All data gathered can be made accessible to other researchers in anonymised form.</dd></dl><p style='font-size: 90%'>For further questions please contact: <br> Dr. Henrik Singmann, University of Zurich (singmann@psychologie.uzh.ch)</p>"


texts.instructions_page_one = '<h2>Your task</h2><p>The goal of this experiment is to investigate how people solve logical problems consisting of sets of premises followed by a conclusion.\
                                For each problem, your task is to decide whether the conclusion follows logically from the information given in the premises.<p> The premises appear above the line and the conclusion appears below the line. Note that the premises contain one nonsense term (e.g., aquinces). For example:</p>\
                               <div class = stimuli >\
                               <p>All monkeys are aquinces</p>\
                               <p>Some aquinces are mortal</p><hr/>\
                               <p>Therefore some monkeys are mortal</p></div><br><br>' +
                               '<p>You must assume that all information given in the premises (i.e., above the line) is true; this is very important! To make this very clear: Treat all information above the line as true and disregard all other knowledge about the subject matter.</p>\
                               <p>Assuming the truth of the premises, your task is to decide whether or not the conclusion follows logically from the premises. You can answer with "Yes", "No" or "I don’t know".</p>'


texts.instructions_page_two = '<h2>Rules of logic</h2><p>Please note that according to the rules of logic, you can only endorse a conclusion if it necessarily follows from the information given. A conclusion that is merely possible, but not necessitated by the premises, is not acceptable.</p>\
                               <ul><li>If and only if you judge that a conclusion follows  necessarily from the information given select "Yes".</li>\
                               <li>If you think that the conclusion does not follow necessarily from the information given select "No".</li>\
                               <li>If you can’t decide whether a conclusion follows necessarily select "I don’t know".</li>\
                               <li>Always try seriously to decide whether or not a conclusion follows necessarily from the premises before selecting "I don’t know". </li></ul>\
                               <p>It is also noteworthy that in the context of logic "some" means "at least one, possibly all".</p>'

texts.instructions_page_three = '<h2>Overview</h2>\
                                <ul><li>You will solve 32 problems.</li>\
                                <li>There will be a break after half the trials.</li>\
                                <li>No aids allowed: You must not make notes or draw diagrams of any kind to help you with this task!</li>\
                                <li>After the 32 problems we ask you to provide some demographic data about yourself.</li></ul>\
                                <p>Proceeding will lead to an example problem. If you are unsure about the task, please go back now and read the instructions again. You will not be able to reread the instructions after clicking "Next".</p>'


texts.start_experiment = '<h2>Keep in mind</h2>\
              <ul><li>Please don’t use any external help (i.e., drawing diagramms).</li>\
              <li> If you think a conclusion follows necessarily select "Yes". </li>\
              <li> If you think a conclusion does not follow necessarily select "No". </li>\
              <li> If you can’t decide whether a conclusion follows necessarily select "I don’t know".  </li>\
                  <li>"Some" means "at least one, possibly all".</li></ul>\
                  <p>Click "Start" to begin the experiment.</p>'

texts.break = '<p class = center-content>You completed the first half. Click "Continue" to get to the second half of the trials. Keep up the good work!</p>'

texts.middle_term =  ['redes','wasses','foins','lebs','weens','punds','cofts','flamps','fosks','geets',
                      'chindles','brops','quinces','jubs','spashes','dathses','pives','swants','soats','stoges',
                      'loaxes','parfs','fimps','darms','pields','cronxes','sonds','crots','stoals','fises',
                      'brams','vosts','decottions','firters','pumes','punties','curges','hoons','heets','trinnels']

texts.terms = [['buildings','skyscrapers'],
                   ['electric appliances','video recorders'],
                   ['drinks','liquors'],
                   ['fish','trout'],
                   ['tools','screwdrivers'],
                   ['musical instruments','violins'],
                   ['plants','grasses'],
                   ['animals','llamas'],
                   ['bears','grizzlies'],
                   ['birds','parrots'],
                   ['boats','canoes'],
                   ['cars','oldsmobiles'],
                   ['criminals','robbers'],
                   ['dances','tangos'],
                   ['horses','ponies'],
                   ['killers','assassins'],
                   ['relatives','uncles'],
                   ['reptiles','lizards'],
                   ['storms','blizzards'],
                   ['trees','oaks'],
                   ['weapons','swords'],
                   ['words','verbs'],
                   ['writers','novelists'],
                   ['flowers','tulips'],
                   ['good swimmers','lifeguards'],
                   ['women','actresses'],
                   ['religious people','priests'],
                   ['scientists','physicists'],
                   ['doctors','general practitioners'],
                   ['married people','husbands'],
                   ['rich people','millionaires'],
                   ['addictive things','cigarettes'],
                   ['amphibians','frogs'],
                   ['furniture','desks'],
                   ['dogs','Terriers'],
                   ['fruits','prunes'],
                   ['insects','bees'],
                   ['vegetables','cabbages'],
                   ['metals','steels'],
                   ['healthy people','athletes']]

texts.middle_term_test =  ['middleterm1','middleterm2','middleterm3','middleterm4','middleterm5','middleterm6','middleterm7','middleterm8','middleterm9','middleterm10',
                     'middleterm11','middleterm12','middleterm13','middleterm14','middleterm15','middleterm16','middleterm17','middleterm18','middleterm19','middleterm20',
                     'middleterm21','middleterm22','middleterm23','middleterm24','middleterm25','middleterm26','middleterm27','middleterm28','middleterm29','middleterm30',
                     'middleterm31','middleterm32','middleterm33','middleterm34','middleterm35','middleterm36','middleterm37','middleterm38','middleterm39','middleterm40']

texts.terms_test = [['subject1','predicate1'],
                  ['subject2','predicate2'],
                  ['subject3','predicate3'],
                  ['subject4','predicate4'],
                  ['subject5','predicate5'],
                  ['subject6','predicate6'],
                  ['subject7','predicate7'],
                  ['subject8','predicate8'],
                  ['subject9','predicate9'],
                  ['subject10','predicate10'],
                  ['subject11','predicate11'],
                  ['subject12','predicate12'],
                  ['subject13','predicate13'],
                  ['subject14','predicate14'],
                  ['subject15','predicate15'],
                  ['subject16','predicate16'],
                  ['subject17','predicate17'],
                  ['subject18','predicate18'],
                  ['subject19','predicate19'],
                  ['subject20','predicate20'],
                  ['subject21','predicate21'],
                  ['subject22','predicate22'],
                  ['subject23','predicate23'],
                  ['subject24','predicate24'],
                  ['subject25','predicate25'],
                  ['subject26','predicate26'],
                  ['subject27','predicate27'],
                  ['subject28','predicate28'],
                  ['subject29','predicate29'],
                  ['subject30','predicate30'],
                  ['subject31','predicate31'],
                  ['subject32','predicate32'],
                  ['subject33','predicate33'],
                  ['subject34','predicate34'],
                  ['subject35','predicate35'],
                  ['subject36','predicate36'],
                  ['subject37','predicate37'],
                  ['subject38','predicate38'],
                  ['subject39','predicate39'],
                  ['subject40','predicate40']]


texts.fullscreen_exit = 'You exited fullscreen mode. <br>The experiment is cancelled.'
texts.visibility_exit = "You tried to switch to another program or tab.<br>The experiment is cancelled."

texts.visibility_fail = "Your browser does not allow a visibility test. Please update your browser or switch to a different one for this experiment. We suggest Chrome oder Firefox."
texts.fullscreen_fail = "Your browser does not allow fullscreen mode. Please update your browser or switch to a different one for this experiment. We suggest Chrome oder Firefox."


texts.empty_error = '<p id="empty_error" style="color:red;"></p>'

texts.button = "<div style='float:right;'><button id='jspsych-fullscreen-button'>Next</button></div>"

texts.save = 'Please click on "Save". This will send us your data and you will recieve your code for the payment.'

texts.debriefing = '<h3>Thank you for your participation!</h3>\
                  <p>Your confirmation code is: Syllog_2016_N2GK</p>\
                   <p>Please copy this code and enter it to recieve your payment.</p>'

texts.end_fullscreen = '<p>To finish the experiment, we ask you to tell us something about yourself. Fullsreen mode will be exited for this.</p>'
