smalltalk.addPackage('Benchfib', {});
smalltalk.addClass('Benchfib', smalltalk.Object, [], 'Benchfib');

smalltalk.addMethod(
"_main",
smalltalk.method({
selector: "main",
category: 'not yet classified',
fn: function (){
var self=this;
var result;
return smalltalk.withContext(function($ctx1) { result=_st((0))._tinyBenchmarks();
_st(console)._log_(_st("0 tinyBenchmarks => ").__comma(result));
return self}, function($ctx1) {$ctx1.fill(self,"main", [], {result:result}, smalltalk.Benchfib.klass)})},
args: [],
source: "main\x0a\x0a\x09| result |\x0a\x09result := 0 tinyBenchmarks.\x0a\x09console log: '0 tinyBenchmarks => ' , result",
messageSends: ["tinyBenchmarks", "log:", ","],
referencedClasses: []
}),
smalltalk.Benchfib.klass);


smalltalk.addMethod(
"_benchFib",
smalltalk.method({
selector: "benchFib",
category: '*Benchfib',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=_st(self).__lt((2));
if(smalltalk.assert($2)){
$1=(1);
} else {
$1=_st(_st(_st(_st(self).__minus((1)))._benchFib()).__plus(_st(_st(self).__minus((2)))._benchFib())).__plus((1));
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"benchFib", [], {}, smalltalk.Number)})},
args: [],
source: "benchFib \x0a\x09\x22Handy send-heavy benchmark\x22\x0a\x09\x22(result // seconds to run) = approx calls per second\x22\x0a\x09\x22 | r t |\x0a\x09  t := Time millisecondsToRun: [r := 26 benchFib].\x0a\x09  (r * 1000) // t\x22\x0a\x09\x22138000 on a Mac 8100/100\x22\x0a\x09^ self < 2 \x0a\x09\x09ifTrue: [1] \x0a\x09\x09ifFalse: [(self-1) benchFib + (self-2) benchFib + 1]",
messageSends: ["ifTrue:ifFalse:", "+", "benchFib", "-", "<"],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
"_benchmark",
smalltalk.method({
selector: "benchmark",
category: '*Benchfib',
fn: function (){
var self=this;
var size,flags,prime,k,count;
return smalltalk.withContext(function($ctx1) { var $1,$3,$5,$4,$2,$6;
size=(8190);
$1=self;
$2=(function(iter){
return smalltalk.withContext(function($ctx2) {count=(0);
count;
flags=_st((smalltalk.Array || Array))._new();
flags;
_st(size)._timesRepeat_((function(){
return smalltalk.withContext(function($ctx3) {return _st(flags)._add_(true);
}, function($ctx3) {$ctx3.fill(null, null, {})})}));
$3=size;
$4=(function(i){
return smalltalk.withContext(function($ctx3) {$5=_st(flags)._at_(i);
if(smalltalk.assert($5)){
prime=_st(i).__plus((1));
prime;
k=_st(i).__plus(prime);
k;
_st((function(){
return smalltalk.withContext(function($ctx4) {return _st(k).__lt_eq(size);
}, function($ctx4) {$ctx4.fill(null, null, {})})}))._whileTrue_((function(){
return smalltalk.withContext(function($ctx4) {_st(flags)._at_put_(k,false);
k=_st(k).__plus(prime);
return k;
}, function($ctx4) {$ctx4.fill(null, null, {})})}));
count=_st(count).__plus((1));
return count;
};
}, function($ctx3) {$ctx3.fill(null, null, {})})});
return _st((1))._to_do_($3,$4);
}, function($ctx2) {$ctx2.fill(null, null, {})})});
_st((1))._to_do_($1,$2);
$6=count;
return $6;
}, function($ctx1) {$ctx1.fill(self,"benchmark", [], {size:size,flags:flags,prime:prime,k:k,count:count}, smalltalk.Number)})},
args: [],
source: "benchmark \x0a\x09\x22Handy bytecode-heavy benchmark\x22\x0a\x09\x22(500000 // time to run) = approx bytecodes per second\x22\x0a\x09\x225000000 // (Time millisecondsToRun: [10 benchmark]) * 1000\x22\x0a\x09\x223059000 on a Mac 8100/100\x22\x0a    | size flags prime k count |\x0a    size := 8190.\x0a    1 to: self do:\x0a        [:iter |\x0a        count := 0.\x0a        flags := Array new.\x0a        size timesRepeat: [ flags add: true].\x0a        1 to: size do:\x0a            [:i | (flags at: i) ifTrue:\x0a                [prime := i+1.\x0a                k := i + prime.\x0a                [k <= size] whileTrue:\x0a                    [flags at: k put: false.\x0a                    k := k + prime].\x0a                count := count + 1]]].\x0a    ^ count",
messageSends: ["to:do:", "new", "timesRepeat:", "add:", "ifTrue:", "+", "whileTrue:", "at:put:", "<=", "at:"],
referencedClasses: ["Array"]
}),
smalltalk.Number);

smalltalk.addMethod(
"_jsbenchFib",
smalltalk.method({
selector: "jsbenchFib",
category: '*Benchfib',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { if (this < 2) {
return 1;
} else {
return (this-1)._jsbenchFib() + (this-2)._jsbenchFib() + 1;};
return self}, function($ctx1) {$ctx1.fill(self,"jsbenchFib", [], {}, smalltalk.Number)})},
args: [],
source: "jsbenchFib\x0a \x0a\x09<if (this < 2) {\x0areturn 1;\x0a} else {\x0areturn (this-1)._jsbenchFib() + (this-2)._jsbenchFib() + 1;}>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
"_jsbenchmark",
smalltalk.method({
selector: "jsbenchmark",
category: '*Benchfib',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var size = 8190;
var count;
for (var z=0;z<this;z++) {
  count = 0;
  var flags = new Array();
  for (var p=0; p<size; p++) {
    flags[p] = true;
  }
  for (var i=1;i<=size;i++) {
    if (flags[i-1]) {
      var prime = i+1;
      var k = i + prime;
      while (k <= size) {
        flags[k-1] = false;
        k = k + prime;
      }
      count = count + 1;
    }
  }
}
return count;
return self}, function($ctx1) {$ctx1.fill(self,"jsbenchmark", [], {}, smalltalk.Number)})},
args: [],
source: "jsbenchmark\x0a\x0a<\x0avar size = 8190;\x0avar count;\x0afor (var z=0;z<this;z++) {\x0a  count = 0;\x0a  var flags = new Array();\x0a  for (var p=0; p<size; p++) {\x0a    flags[p] = true;\x0a  }\x0a  for (var i=1;i<=size;i++) {\x0a    if (flags[i-1]) {\x0a      var prime = i+1;\x0a      var k = i + prime;\x0a      while (k <= size) {\x0a        flags[k-1] = false;\x0a        k = k + prime;\x0a      }\x0a      count = count + 1;\x0a    }\x0a  }\x0a}\x0areturn count>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
"_jstinyBenchmarks",
smalltalk.method({
selector: "jstinyBenchmarks",
category: '*Benchfib',
fn: function (){
var self=this;
var t1,t2,r,n1,n2;
return smalltalk.withContext(function($ctx1) { var $1;
n1=(1);
_st((function(){
return smalltalk.withContext(function($ctx2) {t1=_st((smalltalk.Date || Date))._millisecondsToRun_((function(){
return smalltalk.withContext(function($ctx3) {return _st(n1)._jsbenchmark();
}, function($ctx3) {$ctx3.fill(null, null, {})})}));
t1;
return _st(t1).__lt((1000));
}, function($ctx2) {$ctx2.fill(null, null, {})})}))._whileTrue_((function(){
return smalltalk.withContext(function($ctx2) {n1=_st(n1).__star((2));
return n1;
}, function($ctx2) {$ctx2.fill(null, null, {})})}));
n2=(28);
_st((function(){
return smalltalk.withContext(function($ctx2) {t2=_st((smalltalk.Date || Date))._millisecondsToRun_((function(){
return smalltalk.withContext(function($ctx3) {r=_st(n2)._jsbenchFib();
return r;
}, function($ctx3) {$ctx3.fill(null, null, {})})}));
t2;
return _st(t2).__lt((1000));
}, function($ctx2) {$ctx2.fill(null, null, {})})}))._whileTrue_((function(){
return smalltalk.withContext(function($ctx2) {n2=_st(n2).__plus((1));
return n2;
}, function($ctx2) {$ctx2.fill(null, null, {})})}));
$1=_st(_st(_st(_st(_st(_st(_st(n1).__star((500000))).__star((1000))).__slash(t1))._printString()).__comma(" bytecodes/sec; ")).__comma(_st(_st(_st(r).__star((1000))).__slash(t2))._printString())).__comma(" sends/sec");
return $1;
}, function($ctx1) {$ctx1.fill(self,"jstinyBenchmarks", [], {t1:t1,t2:t2,r:r,n1:n1,n2:n2}, smalltalk.Number)})},
args: [],
source: "jstinyBenchmarks\x0a\x09\x220 jstinyBenchmarks\x22\x0a\x0a\x09| t1 t2 r n1 n2 |\x0a\x09n1 := 1.\x0a\x09[t1 := Date millisecondsToRun: [n1 jsbenchmark].\x0a\x09t1 < 1000] whileTrue:[n1 := n1 * 2]. \x22Note: #benchmark's runtime is about O(n)\x22\x0a\x0a\x09n2 := 28.\x0a\x09[t2 := Date millisecondsToRun: [r := n2 jsbenchFib].\x0a\x09t2 < 1000] whileTrue:[n2 := n2 + 1]. \x0a\x09\x22Note: #jsbenchFib's runtime is about O(k^n),\x0a\x09\x09where k is the golden number = (1 + 5 sqrt) / 2 = 1.618....\x22\x0a\x0a\x09^ ((n1 * 500000 * 1000) / t1) printString, ' bytecodes/sec; ',\x0a\x09  ((r * 1000) / t2) printString, ' sends/sec'",
messageSends: ["whileTrue:", "*", "millisecondsToRun:", "jsbenchmark", "<", "+", "jsbenchFib", ",", "printString", "/"],
referencedClasses: ["Date"]
}),
smalltalk.Number);

smalltalk.addMethod(
"_tinyBenchmarks",
smalltalk.method({
selector: "tinyBenchmarks",
category: '*Benchfib',
fn: function (){
var self=this;
var t1,t2,r,n1,n2;
return smalltalk.withContext(function($ctx1) { var $1;
n1=(1);
_st((function(){
return smalltalk.withContext(function($ctx2) {t1=_st((smalltalk.Date || Date))._millisecondsToRun_((function(){
return smalltalk.withContext(function($ctx3) {return _st(n1)._benchmark();
}, function($ctx3) {$ctx3.fill(null, null, {})})}));
t1;
return _st(t1).__lt((1000));
}, function($ctx2) {$ctx2.fill(null, null, {})})}))._whileTrue_((function(){
return smalltalk.withContext(function($ctx2) {n1=_st(n1).__star((2));
return n1;
}, function($ctx2) {$ctx2.fill(null, null, {})})}));
n2=(16);
_st((function(){
return smalltalk.withContext(function($ctx2) {t2=_st((smalltalk.Date || Date))._millisecondsToRun_((function(){
return smalltalk.withContext(function($ctx3) {r=_st(n2)._benchFib();
return r;
}, function($ctx3) {$ctx3.fill(null, null, {})})}));
t2;
return _st(t2).__lt((1000));
}, function($ctx2) {$ctx2.fill(null, null, {})})}))._whileTrue_((function(){
return smalltalk.withContext(function($ctx2) {n2=_st(n2).__plus((1));
return n2;
}, function($ctx2) {$ctx2.fill(null, null, {})})}));
$1=_st(_st(_st(_st(_st(_st(_st(n1).__star((500000))).__star((1000))).__slash(t1))._printString()).__comma(" bytecodes/sec; ")).__comma(_st(_st(_st(r).__star((1000))).__slash(t2))._printString())).__comma(" sends/sec");
return $1;
}, function($ctx1) {$ctx1.fill(self,"tinyBenchmarks", [], {t1:t1,t2:t2,r:r,n1:n1,n2:n2}, smalltalk.Number)})},
args: [],
source: "tinyBenchmarks \x0a\x09\x22Report the results of running the two tiny Squeak benchmarks.\x0a\x09ar 9/10/1999: Adjusted to run at least 1 sec to get more stable results\x22\x0a\x09\x220 tinyBenchmarks\x22\x0a\x09\x22On a 292 MHz G3 Mac: 22727272 bytecodes/sec; 984169 sends/sec\x22\x0a\x09\x22On a 400 MHz PII/Win98:  18028169 bytecodes/sec; 1081272 sends/sec\x22\x0a\x09| t1 t2 r n1 n2 |\x0a\x09n1 := 1.\x0a\x09[t1 := Date millisecondsToRun: [n1 benchmark].\x0a\x09t1 < 1000] whileTrue:[n1 := n1 * 2]. \x22Note: #benchmark's runtime is about O(n)\x22\x0a\x0a\x09n2 := 16.\x0a\x09[t2 := Date millisecondsToRun: [r := n2 benchFib].\x0a\x09t2 < 1000] whileTrue:[n2 := n2 + 1]. \x0a\x09\x22Note: #benchFib's runtime is about O(k^n),\x0a\x09\x09where k is the golden number = (1 + 5 sqrt) / 2 = 1.618....\x22\x0a\x0a\x09^ ((n1 * 500000 * 1000) / t1) printString, ' bytecodes/sec; ',\x0a\x09  ((r * 1000) / t2) printString, ' sends/sec'",
messageSends: ["whileTrue:", "*", "millisecondsToRun:", "benchmark", "<", "+", "benchFib", ",", "printString", "/"],
referencedClasses: ["Date"]
}),
smalltalk.Number);

