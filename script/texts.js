var texts = {};

texts.fullscreen = '<h2>Welcome</h2><p>This experiment will run in fullscreen mode. The folowing actions will terminate the experiment prematurely: </p>\
                     <ul><li>cancelling fullscreen mode</li><li>tabbing out</li>\
                     <li>reloading the page</li><li>klicking "back" in your browser</li></ul>\
                     <p>Please close all other programs and disable all notifications.</p><p> Make sure you can work for 20 minutes without any interruption. Please avoid any distractions (i.e. radio, tv).<p>\
                     <p>Klick "Start experiment" to enter fullscreen mode and start the experiment.'


texts.instructions_page_one = '<h2>Your task</h2><p>The goal of this experiment is to investigate how people solve logical problems consisting of sets of premises followed by a conclusion.\
                                For each problem, your task is to decide whether the conclusion follows logically from the information given in the premises.<p> The premises — the information given — appear above the line and the conclusion appears below the line.</p>\
                               <div class = stimuli >\
                               <p>All monkeys are mammals <br>\
                               <p>Some mammals are mortal </p>'+ '<hr /\
                               <p>Therefore some monkeys are mortal</p>' + '</div>' + '<br>'+ '<br>\
                               <p class = prompt> Does this conclusion follow necessarily? </p>\
                               <p>You must assume that all the information given in the premises (i.e., above the line) is true; this is very important! To make this very clear: Treat all information above the line as true and disregard all knowledge about the subject matter.</p>\
                               <p>Assuming the truth of the premises, your task is then to decide whether or not the conclusion follows logically from the premises. You may Answer with s"Yes", "No" or "I don’t know"</p>'

texts.instructions_page_two = '<h2>Rules of logic</h2><p>Please note that according to the rules of logic, you can only endorse a conclusion if it necessarily follows from the information given. A conclusion that is merely possible, but not necessitated by the premises is not acceptable.</p>\
                               <p>If, and only if, you judge that a given conclusion logically follows from the information given you should chose “Yes”. If you think that the given conclusion does not necessarily follow from the information given you should chose “No”. If you can’t decide whether a conclusion follows logically you may chose „I don’t know“.</p>\
                               <p>Please always try seriously to judge whether or not a conclusion follows logically from the premises before choosing “I don’t know”.</p>\
                               <p>Additoinally it is noteworthy that in the context of logic the quantifier "some" means "at least one, possibly all".</p>'


texts.instructions_page_three = '<h2>Please note</h2>\
                                <ul><li>You will solve 32 problems. There will be a break after finishing half the trials</li>\
                                <li>No aides allowed: You must not make notes or draw diagrams of any kind to help you in this task!</li>\
                                <li>After this you will have to fill in a very short survey</li></ul>\
                                <p>Proceeding will lead to an example problem. If you are unsure about the task, please go back now and read the instructions again.</p>'




texts.preLaunch = '<h2>Keep in mind</h2>\
              <ul><li>Please don’t use any external help (i.e. drawing diagramms)</li>\
                  <li>"Some" means "at least one, possibly all"</li></ul>'

texts.middle_term =  ['redes','wasses','foins','lebs','weens','punds','cofts','flamps','fosks','geets',
                      'chindles','brops','quinces','jubs','spashes','dathses','pives','swants','soats','stoges',
                      'loaxes','parfs','fimps','darms','pields','cronxes','sonds','crots','stoals','fises',
                      'brams','vosts','decottions','firters','pumes','punties','curges','hoons','heets','trinnels']

texts.terms = [['amphibians','frogs'],
                   ['amphibians','salamanders'],
                   ['amphibians','toads'],
                   ['birds','parrots'],
                   ['birds','sparrows'],
                   ['birds','ducks'],
                   ['boats','kayaks'],
                   ['boats','canoes'],
                   ['boats','yachts'],
                   ['cars','BWMs'],
                   ['cars','Volvos'],
                   ['cars','Fiats'],
                   ['criminals','robbers'],
                   ['criminals','murderers'],
                   ['criminals','embezzlers'],
                   ['furniture','desks'],
                   ['furniture','sofas'],
                   ['furniture','cupboards'],
                   ['dogs','Spaniels'],
                   ['dogs','Labradors'],
                   ['dogs','Terriers'],
                   ['drinks','beers'],
                   ['drinks','sodas'],
                   ['drinks','wines'],
                   ['fish','trout'],
                   ['fish','salmon'],
                   ['fruits','prunes'],
                   ['fruits','peaches'],
                   ['insects','bees'],
                   ['insects','beetles'],
                   ['reptiles','crocodiles'],
                   ['reptiles','snakes'],
                   ['tools','hammers'],
                   ['tools','saws'],
                   ['trees','oaks'],
                   ['trees','willows'],
                   ['vegetables','carrots'],
                   ['vegetables','cabbages'],
                   ['weapons','swords'],
                   ['weapons','guns']]

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




texts.fullscreen_exit = 'You cancelled fullscreen mode. <br>The experiment is cancelled.'
texts.visibility_exit = "You tried to switch to another program or tab.<br>The experiment is cancelled."

texts.visibility_fail = "Your browser does not allow a visibility test. Please update your browser or switch to a different one for this experiment. We suggest Chrome oder Firefox."
texts.fullscreen_fail = "Your browser does not allow fullscreen mode. Please update your browser or switch to a different one for this experiment. We suggest Chrome oder Firefox."


texts.empty_error = '<p id="empty_error" style="color:red;"><p>'

texts.button = "<div style='float:right;'><button id='jspsych-fullscreen-button'>Next</button></div>"

texts.save = 'Please klick on "save". This will send us your data and you will recieve your code for the payment.'

texts.debriefing = '<p><h3>Thank you for your participation!</h3>\
                  <p>This code is your confirmation of participation: BBSYR_MA_2016_8</p>\
                   <p>WHAT NOW?</p>'

texts.end_fullscreen = '<p>Please fill in a short survey to finish the experiment. Fullsreen mode will be exited for this.</p>'
