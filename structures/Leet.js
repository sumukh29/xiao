module.exports = class Leet {
	constructor(textIn) {
		this.textIn = textIn.toLowerCase();
	}

	changeWords() {
		this.cchange('pwn', 'own');
		this.cchange(' ownzor', ' own');
		this.cchange(' is good ', ' owns ');
		this.cchange(' are good ', ' own ');
		this.cchange(' am good ', ' own ');
		this.cchange('good you', 'better than you');
		this.cchange('good me', 'better than me');
		this.cchange('good them', 'better than them');
		this.cchange('good him', 'better than him');
		this.cchange('good her', 'better than her');
		this.cchange('good it', 'better than it');
		this.cchange('good us', 'better than us');
		this.cchange('good that', 'better than that');
		this.cchange('good all', 'better than all');
		this.cchange(' defeated ', ' owned ');
		this.cchange('my are good', 'my own');
		this.cchange('your are good', 'your own');
		this.cchange('their are good', 'their own');
		this.cchange('our are good', 'our own');
		this.cchange('her are good', 'her own');
		this.cchange('his are good', 'his own');
		this.cchange(' are ', ' r ');
		this.cchange(' am ', ' m ');
		this.cchange('unhack', 'uhaxor');
		this.cchange('hacker', 'haxor');
		this.cchange('hackerer', 'hacker');
		this.cchange('excellent', 'xellent');
		this.cchange(' are you ', ' ru ');
		this.cchange('hack', 'haxor');
		this.cchange('penis', 'penor');
		this.cchange(' pwn ', ' own ');
		this.cchange(' yay ', ' woot ');
		this.cchange(' you', ' joo');
		this.cchange(' yor ', ' your ');
		this.cchange('speak', 'speek');
		this.cchange('leet', '1337');
		this.cchange('internet', 'big lan');
		this.cchange(' picture', ' pixor');
		this.cchange('n   [^]   t ', '   [^]   nt ');
		this.cchange(' kill', ' frag');
		this.cchange(' lamer ', ' llama ');
		this.cchange(' newbie ', ' noob ');
		this.cchange(' sex ', ' sexor ');
		this.cchange(' technique ', ' tekniq ');
		this.cchange('quake', 'quaek');
		this.cchange(' rock ', ' roxor ');
		this.cchange(' rocks ', ' roxorez ');
		this.cchange('cool', 'kewl');
		this.cchange(' the ', ' teh ');
		this.cchange('ass', 'azz');
		this.cchange('cum', 'spooge');
		this.cchange('ejaculate', 'spooge');
		this.cchange('fuck', 'fuxor');
		this.cchange('phuck', 'phuxor');
		this.cchange('porn', 'pron');
		this.cchange('dude', 'dood');
		this.cchange(' me ', ' meh ');
		this.cchange(' with ', ' wit ');
		this.cchange(' oh my god ', ' omg ');
		this.cchange(' omfg ', ' oh my f*cking god ');
		this.cchange(' oh my fucking god ', ' omfg ');
		this.cchange(' oh my phoxoring god ', ' omfg ');
		this.cchange('wtf', 'what the f*ck');
		this.cchange(' what the fuck ', ' wtf ');
		this.cchange(' roflmao ', ' rolling on the floor laughing my ass off ');
		this.cchange(' rofl ', ' rolling on the floor laughing ');
		this.cchange(' laugh my ass off ', ' lmao ');
		this.cchange(' okay ', ' kk ');
		this.cchange(' thanks ', ' thx ');
		this.cchange('rude', 'rood');
		this.cchange('ness ', 'nees ');
		this.cchange('please', 'pleez');
		this.cchange('money', 'lewt');
		this.cchange('loot', 'money');
		this.cchange('qu', 'kw');
		this.cchange('fear', 'fjeer');
		this.cchange(' because ', ' cuz ');
		this.cchange('more elite', 'eliteer');
		this.cchange(' an a', ' a a');
		this.cchange(' an e', ' a e');
		this.cchange(' an i', ' a i');
		this.cchange(' an o', ' a o');
		this.cchange(' an u', ' a u');
		this.cchange('bitch', 'bizotch');
		this.cchange('suck', 'suxor');
		this.cchange('at ', '@ ');
		this.cchange(' e@ ', ' eat ');
		this.cchange('e@', 'eat');
		this.cchange('elite', 'leet');
		this.cchange(' computers ', ' boxen ');
		this.cchange(' computer ', ' boxor ');
		this.cchange(' you ', ' u ');
		this.cchange(' your', ' ur');
		this.cchange(' loot ', ' lewt ');
		this.cchange(' stuff ', ' lewt ');
		this.cchange(' fool ', ' foo ');
		this.cchange(' yo ', ' jo ');
		this.cchange('ks ', 'x ');
		this.cchange('se ', 'ze ');
		this.cchange('nigga', 'nigzor');
		this.cchange('nigger', 'nigzor');
		this.cchange('negro', 'nigzor');
		this.cchange('ah ', 'er ');
		this.cchange('yeer', 'yeah');
		this.cchange('ing ', 'in   [^]    ');
		this.cchange('very gay', 'gheyzor');
		this.cchange(' f', ' ph');
		this.cchange('ash ', '# ');
		this.cchange(' cu', ' ku');
		this.cchange(' ca', ' ka');
		this.cchange(' cat', ' kat');
		this.cchange(' co', ' ko');
		this.cchange('s ', 'z ');
		this.cchange('sz ', 'ss ');
		this.cchange(' ph', ' f');
		this.cchange(' ghey ', ' gay ');
		this.cchange('badways', 'horribly');
		this.cchange(' ownzor', ' own');
		this.cchange('kthxbye', 'okay. thanks. bye.');
		this.cchange('kk thx bye', 'kthxbye');
		this.cchange(' k ', ' okay ');
		this.cchange(' thx ', ' thanks ');
		this.cchange(' i are ', ' i am ');
		this.cchange(' hacker it ', ' hack it ');
		this.cchange(' hacker them ', ' hack them ');
		this.cchange(' hacker her ', ' hack her ');
		this.cchange(' hacker him ', ' hack him ');
		this.cchange(' hacker a ', ' hack a ');
		this.cchange(' hacker his ', ' hack his ');
		this.cchange(' hacker their ', ' hack their ');
		this.cchange(' hacker that ', ' hack that ');
		this.cchange('hackered', 'hacked');
		this.cchange(' qea ', ' Quake 3 Arena ');
		this.cchange(' qe ', ' Quake 3 ');
		this.cchange(' l ', ' 1 ');
		this.cchange(' z ', ' 2 ');
		this.cchange(' e ', ' 3 ');
		this.cchange(' s ', ' 5 ');
		this.cchange(' g ', ' 6 ');
		this.cchange(' l ', ' 7 ');
		this.cchange(' b ', ' 8 ');
		this.cchange(' y ', ' 9 ');
		this.cchange(' o ', ' 0 ');
		this.cchange(' L ', ' 1 ');
		this.cchange('   [^]   5', '   [^]   s');
		this.cchange('siow', 'slow');
		this.cchange('ciear', 'clear');
		this.cchange('titie', 'title');
		this.cchange(' da ', ' the ');
		this.cchange(' dah ', ' the ');
		this.cchange('aiso', 'also');
		this.cchange('eii', 'ell');
		this.cchange('ii', 'll');
		this.cchange('!i ', '!! ');
		this.cchange(' ! ', ' i ');
		this.cchange('eip', 'elp');
		this.cchange('sz ', 'ss ');
		this.cchange('uks ', 'ucks ');
		this.cchange('eer', 'ear');
		this.cchange('!!s', 'lis');
		this.cchange('o/o', '');
		this.cchange('eie', 'ele');
		this.cchange('zor', 'er');
		this.cchange('!!ing', 'lling');
		this.cchange('w!!!', 'will');
		this.cchange('wh!!e', 'while');
		this.cchange('piay', 'play');
		this.cchange('auit', 'ault');
		this.cchange('ibie', 'ible');
		this.cchange('tah', 'ter');
		this.cchange('fah', 'fer');
		this.cchange('ouid', 'ould');
		this.cchange('a!!y', 'ally');
		this.cchange(' cus ', ' cuz ');
		this.cchange('iot', 'lot');
		this.cchange('oia', 'ola');
		this.cchange('zn', 'sn');
		this.cchange('siat', 'slat');
		this.cchange(' fone', ' phone');
		this.cchange(' fase', ' phase');
		this.cchange(' farmac', ' pharmac');
		this.cchange(' fenom', ' phenom');
		this.cchange(' fobia', ' phobia');
		this.cchange(' foto', ' photo');
		this.cchange(' fk', ' fuck');
		this.cchange('elitear', 'more elite');
		this.cchange('worid', 'world');
		this.cchange('dewd', 'dude');
		this.cchange('eleet', 'elite');
		this.cchange('iam', 'lam');
		this.cchange('@ ', 'at ');
		this.cchange('@', 'a');
		this.cchange('i{', 'k');
		this.cchange('#', 'h');
		this.cchange('iis', 'r');
		return this.textIn;
	}

	changeLetters() {
		this.cchange('a', '4');
		this.cchange('b', '8');
		this.cchange('e', '3');
		this.cchange('g', '9');
		this.cchange('i', '1');
		this.cchange('o', '0');
		this.cchange('s', '5');
		this.cchange('t', '7');
		this.cchange('z', '2');
		return this.textIn;
	}

	toLeet() {
		this.changeWords();
		this.changeLetters();
		return this.textIn;
	}

	change(t1, t2) {
		var tr = this.textIn;
		var lp = 0;
		while (tr.indexOf(t1) > -1) {
			if (++lp > 200) {
				return tr;
			}
			var occ = tr.indexOf(t1);
			tr = tr.substr(0, occ) + t2 + tr.substr(occ + t1.length);
		}
		this.textIn = tr;
		return this.textIn;
	}

	cchange(t1, t2) {
		if (Math.random() <= 0.8) this.change(t1, t2);
		return this.textIn;
	}
};
