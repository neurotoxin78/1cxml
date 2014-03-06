



<!DOCTYPE html>
<html>
<head>
 <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" >
 <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" >
 
 <meta name="ROBOTS" content="NOARCHIVE">
 
 <link rel="icon" type="image/vnd.microsoft.icon" href="https://ssl.gstatic.com/codesite/ph/images/phosting.ico">
 
 
 <script type="text/javascript">
 
 (function(){(function(){function c(a){this.t={};this.tick=function(a,b,c){b=void 0!=c?c:(new Date).getTime();this.t[a]=b;if(void 0==c)try{window.console.timeStamp("CSI/"+a)}catch(d){}};this.tick("start",null,a)}var a;window.performance&&(a=window.performance.timing);var b=a?new c(a.responseStart):new c;window.jstiming={Timer:c,load:b};a&&(b=a.navigationStart,a=a.responseStart,0<b&&a>=b&&(window.jstiming.srt=a-b));try{a=null,window.chrome&&window.chrome.csi&&(a=Math.floor(window.chrome.csi().pageT)),null==a&&
window.gtbExternal&&(a=window.gtbExternal.pageT()),null==a&&window.external&&(a=window.external.pageT),a&&(window.jstiming.pt=a)}catch(d){}})();})();

 
 
 
 
 var codesite_token = null;
 
 
 var CS_env = {"token": null, "assetVersionPath": "https://ssl.gstatic.com/codesite/ph/814337104528787223", "projectHomeUrl": "/a/eclipselabs.org/p/mobile-web-development-with-phonegap", "profileUrl": null, "domainName": "eclipselabs.org", "loggedInUserEmail": null, "relativeBaseUrl": "/a/eclipselabs.org", "assetHostPath": "https://ssl.gstatic.com/codesite/ph", "projectName": "mobile-web-development-with-phonegap"};
 var _gaq = _gaq || [];
 _gaq.push(
 ['siteTracker._setAccount', 'UA-18071-1'],
 ['siteTracker._trackPageview']);
 
 _gaq.push(
 ['projectTracker._setAccount', 'UA-20478043-1'],
 ['projectTracker._trackPageview']);
 
 (function() {
 var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
 ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
 (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(ga);
 })();
 
 </script>
 
 
 <title>jQuery.ui.datepicker.js - 
 mobile-web-development-with-phonegap -
 
 
 AppLaud Eclipse plug-in to facilitate Web Developers creating mobile apps - Google Project Hosting
 </title>
 <link type="text/css" rel="stylesheet" href="https://ssl.gstatic.com/codesite/ph/814337104528787223/css/core.css">
 
 <link type="text/css" rel="stylesheet" href="https://ssl.gstatic.com/codesite/ph/814337104528787223/css/ph_detail.css" >
 
 
 <link type="text/css" rel="stylesheet" href="https://ssl.gstatic.com/codesite/ph/814337104528787223/css/d_sb.css" >
 
 
 
<!--[if IE]>
 <link type="text/css" rel="stylesheet" href="https://ssl.gstatic.com/codesite/ph/814337104528787223/css/d_ie.css" >
<![endif]-->
 <style type="text/css">
 .menuIcon.off { background: no-repeat url(https://ssl.gstatic.com/codesite/ph/images/dropdown_sprite.gif) 0 -42px }
 .menuIcon.on { background: no-repeat url(https://ssl.gstatic.com/codesite/ph/images/dropdown_sprite.gif) 0 -28px }
 .menuIcon.down { background: no-repeat url(https://ssl.gstatic.com/codesite/ph/images/dropdown_sprite.gif) 0 0; }
 
 
 
  tr.inline_comment {
 background: #fff;
 vertical-align: top;
 }
 div.draft, div.published {
 padding: .3em;
 border: 1px solid #999; 
 margin-bottom: .1em;
 font-family: arial, sans-serif;
 max-width: 60em;
 }
 div.draft {
 background: #ffa;
 } 
 div.published {
 background: #e5ecf9;
 }
 div.published .body, div.draft .body {
 padding: .5em .1em .1em .1em;
 max-width: 60em;
 white-space: pre-wrap;
 white-space: -moz-pre-wrap;
 white-space: -pre-wrap;
 white-space: -o-pre-wrap;
 word-wrap: break-word;
 font-size: 1em;
 }
 div.draft .actions {
 margin-left: 1em;
 font-size: 90%;
 }
 div.draft form {
 padding: .5em .5em .5em 0;
 }
 div.draft textarea, div.published textarea {
 width: 95%;
 height: 10em;
 font-family: arial, sans-serif;
 margin-bottom: .5em;
 }

 
 .nocursor, .nocursor td, .cursor_hidden, .cursor_hidden td {
 background-color: white;
 height: 2px;
 }
 .cursor, .cursor td {
 background-color: darkblue;
 height: 2px;
 display: '';
 }
 
 
.list {
 border: 1px solid white;
 border-bottom: 0;
}

 
 </style>
</head>
<body class="t4">
<script type="text/javascript">
 window.___gcfg = {lang: 'en'};
 (function() 
 {var po = document.createElement("script");
 po.type = "text/javascript"; po.async = true;po.src = "https://apis.google.com/js/plusone.js";
 var s = document.getElementsByTagName("script")[0];
 s.parentNode.insertBefore(po, s);
 })();
</script>
<div class="headbg">

 <div id="gaia">
 

 <span>
 
 
 <a href="#" id="projects-dropdown" onclick="return false;"><u>My favorites</u> <small>&#9660;</small></a>
 | <a href="https://www.google.com/accounts/ServiceLogin?service=code&amp;ltmpl=phosting&amp;continue=https%3A%2F%2Fcode.google.com%2Fa%2Feclipselabs.org%2Fp%2Fmobile-web-development-with-phonegap%2Fsource%2Fbrowse%2Ftrunk%2Fcom.mds.apg%2Fresources%2Fjqm%2Fdemo2%2Fexperiments%2Fui-datepicker%2FjQuery.ui.datepicker.js%3Fr%3D92&amp;followup=https%3A%2F%2Fcode.google.com%2Fa%2Feclipselabs.org%2Fp%2Fmobile-web-development-with-phonegap%2Fsource%2Fbrowse%2Ftrunk%2Fcom.mds.apg%2Fresources%2Fjqm%2Fdemo2%2Fexperiments%2Fui-datepicker%2FjQuery.ui.datepicker.js%3Fr%3D92" onclick="_CS_click('/gb/ph/signin');"><u>Sign in</u></a>
 
 </span>

 </div>

 <div class="gbh" style="left: 0pt;"></div>
 <div class="gbh" style="right: 0pt;"></div>
 
 
 <div style="height: 1px"></div>
<!--[if lte IE 7]>
<div style="text-align:center;">
Your version of Internet Explorer is not supported. Try a browser that
contributes to open source, such as <a href="http://www.firefox.com">Firefox</a>,
<a href="http://www.google.com/chrome">Google Chrome</a>, or
<a href="http://code.google.com/chrome/chromeframe/">Google Chrome Frame</a>.
</div>
<![endif]-->



 <table style="padding:0px; margin: 0px 0px 10px 0px; width:100%" cellpadding="0" cellspacing="0"
 itemscope itemtype="http://schema.org/CreativeWork">
 <tr style="height: 58px;">
 
 
 
 <td id="plogo">
 <link itemprop="url" href="/a/eclipselabs.org/p/mobile-web-development-with-phonegap">
 <a href="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/">
 
 
 <img src="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/logo?cct=1341553427"
 alt="Logo" itemprop="image">
 
 </a>
 </td>
 
 <td style="padding-left: 0.5em">
 
 <div id="pname">
 <a href="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/"><span itemprop="name">mobile-web-development-with-phonegap</span></a>
 </div>
 
 <div id="psum">
 <a id="project_summary_link"
 href="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/"><span itemprop="description">AppLaud Eclipse plug-in to facilitate Web Developers creating mobile apps</span></a>
 
 </div>
 
 
 </td>
 <td style="white-space:nowrap;text-align:right; vertical-align:bottom;">
 
 <form action="/a/eclipselabs.org/hosting/search">
 <input size="30" name="q" value="" type="text">
 
 <input type="submit" name="projectsearch" value="Search projects" >
 </form>
 
 </tr>
 </table>

</div>

 
<div id="mt" class="gtb"> 
 <a href="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/" class="tab ">Project&nbsp;Home</a>
 
 
 
 
 
 
 <a href="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/w/list" class="tab ">Wiki</a>
 
 
 
 
 
 <a href="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/issues/list"
 class="tab ">Issues</a>
 
 
 
 
 
 <a href="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/checkout"
 class="tab active">Source</a>
 
 
 
 
 
 
 
 
 <div class=gtbc></div>
</div>
<table cellspacing="0" cellpadding="0" width="100%" align="center" border="0" class="st">
 <tr>
 
 
 
 
 
 
 <td class="subt">
 <div class="st2">
 <div class="isf">
 
 


 <span class="inst1"><a href="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/checkout">Checkout</a></span> &nbsp;
 <span class="inst2"><a href="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/">Browse</a></span> &nbsp;
 <span class="inst3"><a href="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/list">Changes</a></span> &nbsp;
 
 
 
 
 
 
 
 </form>
 <script type="text/javascript">
 
 function codesearchQuery(form) {
 var query = document.getElementById('q').value;
 if (query) { form.action += '%20' + query; }
 }
 </script>
 </div>
</div>

 </td>
 
 
 
 <td align="right" valign="top" class="bevel-right"></td>
 </tr>
</table>


<script type="text/javascript">
 var cancelBubble = false;
 function _go(url) { document.location = url; }
</script>
<div id="maincol"
 
>

 




<div class="expand">
<div id="colcontrol">
<style type="text/css">
 #file_flipper { white-space: nowrap; padding-right: 2em; }
 #file_flipper.hidden { display: none; }
 #file_flipper .pagelink { color: #0000CC; text-decoration: underline; }
 #file_flipper #visiblefiles { padding-left: 0.5em; padding-right: 0.5em; }
</style>
<table id="nav_and_rev" class="list"
 cellpadding="0" cellspacing="0" width="100%">
 <tr>
 
 <td nowrap="nowrap" class="src_crumbs src_nav" width="33%">
 <strong class="src_nav">Source path:&nbsp;</strong>
 <span id="crumb_root">
 
 <a href="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/?r=92">svn</a>/&nbsp;</span>
 <span id="crumb_links" class="ifClosed"><a href="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/?r=92">trunk</a><span class="sp">/&nbsp;</span><a href="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/?r=92">com.mds.apg</a><span class="sp">/&nbsp;</span><a href="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/?r=92">resources</a><span class="sp">/&nbsp;</span><a href="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/?r=92">jqm</a><span class="sp">/&nbsp;</span><a href="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/?r=92">demo2</a><span class="sp">/&nbsp;</span><a href="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/experiments/?r=92">experiments</a><span class="sp">/&nbsp;</span><a href="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/experiments/ui-datepicker/?r=92">ui-datepicker</a><span class="sp">/&nbsp;</span>jQuery.ui.datepicker.js</span>
 
 


 </td>
 
 
 <td nowrap="nowrap" width="33%" align="right">
 <table cellpadding="0" cellspacing="0" style="font-size: 100%"><tr>
 
 
 <td class="flipper"><b>r92</b></td>
 
 </tr></table>
 </td> 
 </tr>
</table>

<div class="fc">
 
 
 
<style type="text/css">
.undermouse span {
 background-image: url(https://ssl.gstatic.com/codesite/ph/images/comments.gif); }
</style>
<table class="opened" id="review_comment_area"
><tr>
<td id="nums">
<pre><table width="100%"><tr class="nocursor"><td></td></tr></table></pre>
<pre><table width="100%" id="nums_table_0"><tr id="gr_svn92_1"

><td id="1"><a href="#1">1</a></td></tr
><tr id="gr_svn92_2"

><td id="2"><a href="#2">2</a></td></tr
><tr id="gr_svn92_3"

><td id="3"><a href="#3">3</a></td></tr
><tr id="gr_svn92_4"

><td id="4"><a href="#4">4</a></td></tr
><tr id="gr_svn92_5"

><td id="5"><a href="#5">5</a></td></tr
><tr id="gr_svn92_6"

><td id="6"><a href="#6">6</a></td></tr
><tr id="gr_svn92_7"

><td id="7"><a href="#7">7</a></td></tr
><tr id="gr_svn92_8"

><td id="8"><a href="#8">8</a></td></tr
><tr id="gr_svn92_9"

><td id="9"><a href="#9">9</a></td></tr
><tr id="gr_svn92_10"

><td id="10"><a href="#10">10</a></td></tr
><tr id="gr_svn92_11"

><td id="11"><a href="#11">11</a></td></tr
><tr id="gr_svn92_12"

><td id="12"><a href="#12">12</a></td></tr
><tr id="gr_svn92_13"

><td id="13"><a href="#13">13</a></td></tr
><tr id="gr_svn92_14"

><td id="14"><a href="#14">14</a></td></tr
><tr id="gr_svn92_15"

><td id="15"><a href="#15">15</a></td></tr
><tr id="gr_svn92_16"

><td id="16"><a href="#16">16</a></td></tr
><tr id="gr_svn92_17"

><td id="17"><a href="#17">17</a></td></tr
><tr id="gr_svn92_18"

><td id="18"><a href="#18">18</a></td></tr
><tr id="gr_svn92_19"

><td id="19"><a href="#19">19</a></td></tr
><tr id="gr_svn92_20"

><td id="20"><a href="#20">20</a></td></tr
><tr id="gr_svn92_21"

><td id="21"><a href="#21">21</a></td></tr
><tr id="gr_svn92_22"

><td id="22"><a href="#22">22</a></td></tr
><tr id="gr_svn92_23"

><td id="23"><a href="#23">23</a></td></tr
><tr id="gr_svn92_24"

><td id="24"><a href="#24">24</a></td></tr
><tr id="gr_svn92_25"

><td id="25"><a href="#25">25</a></td></tr
><tr id="gr_svn92_26"

><td id="26"><a href="#26">26</a></td></tr
><tr id="gr_svn92_27"

><td id="27"><a href="#27">27</a></td></tr
><tr id="gr_svn92_28"

><td id="28"><a href="#28">28</a></td></tr
><tr id="gr_svn92_29"

><td id="29"><a href="#29">29</a></td></tr
><tr id="gr_svn92_30"

><td id="30"><a href="#30">30</a></td></tr
><tr id="gr_svn92_31"

><td id="31"><a href="#31">31</a></td></tr
><tr id="gr_svn92_32"

><td id="32"><a href="#32">32</a></td></tr
><tr id="gr_svn92_33"

><td id="33"><a href="#33">33</a></td></tr
><tr id="gr_svn92_34"

><td id="34"><a href="#34">34</a></td></tr
><tr id="gr_svn92_35"

><td id="35"><a href="#35">35</a></td></tr
><tr id="gr_svn92_36"

><td id="36"><a href="#36">36</a></td></tr
><tr id="gr_svn92_37"

><td id="37"><a href="#37">37</a></td></tr
><tr id="gr_svn92_38"

><td id="38"><a href="#38">38</a></td></tr
><tr id="gr_svn92_39"

><td id="39"><a href="#39">39</a></td></tr
><tr id="gr_svn92_40"

><td id="40"><a href="#40">40</a></td></tr
><tr id="gr_svn92_41"

><td id="41"><a href="#41">41</a></td></tr
><tr id="gr_svn92_42"

><td id="42"><a href="#42">42</a></td></tr
><tr id="gr_svn92_43"

><td id="43"><a href="#43">43</a></td></tr
><tr id="gr_svn92_44"

><td id="44"><a href="#44">44</a></td></tr
><tr id="gr_svn92_45"

><td id="45"><a href="#45">45</a></td></tr
><tr id="gr_svn92_46"

><td id="46"><a href="#46">46</a></td></tr
><tr id="gr_svn92_47"

><td id="47"><a href="#47">47</a></td></tr
><tr id="gr_svn92_48"

><td id="48"><a href="#48">48</a></td></tr
><tr id="gr_svn92_49"

><td id="49"><a href="#49">49</a></td></tr
><tr id="gr_svn92_50"

><td id="50"><a href="#50">50</a></td></tr
><tr id="gr_svn92_51"

><td id="51"><a href="#51">51</a></td></tr
><tr id="gr_svn92_52"

><td id="52"><a href="#52">52</a></td></tr
><tr id="gr_svn92_53"

><td id="53"><a href="#53">53</a></td></tr
><tr id="gr_svn92_54"

><td id="54"><a href="#54">54</a></td></tr
><tr id="gr_svn92_55"

><td id="55"><a href="#55">55</a></td></tr
><tr id="gr_svn92_56"

><td id="56"><a href="#56">56</a></td></tr
><tr id="gr_svn92_57"

><td id="57"><a href="#57">57</a></td></tr
><tr id="gr_svn92_58"

><td id="58"><a href="#58">58</a></td></tr
><tr id="gr_svn92_59"

><td id="59"><a href="#59">59</a></td></tr
><tr id="gr_svn92_60"

><td id="60"><a href="#60">60</a></td></tr
><tr id="gr_svn92_61"

><td id="61"><a href="#61">61</a></td></tr
><tr id="gr_svn92_62"

><td id="62"><a href="#62">62</a></td></tr
><tr id="gr_svn92_63"

><td id="63"><a href="#63">63</a></td></tr
><tr id="gr_svn92_64"

><td id="64"><a href="#64">64</a></td></tr
><tr id="gr_svn92_65"

><td id="65"><a href="#65">65</a></td></tr
><tr id="gr_svn92_66"

><td id="66"><a href="#66">66</a></td></tr
><tr id="gr_svn92_67"

><td id="67"><a href="#67">67</a></td></tr
><tr id="gr_svn92_68"

><td id="68"><a href="#68">68</a></td></tr
><tr id="gr_svn92_69"

><td id="69"><a href="#69">69</a></td></tr
><tr id="gr_svn92_70"

><td id="70"><a href="#70">70</a></td></tr
><tr id="gr_svn92_71"

><td id="71"><a href="#71">71</a></td></tr
><tr id="gr_svn92_72"

><td id="72"><a href="#72">72</a></td></tr
><tr id="gr_svn92_73"

><td id="73"><a href="#73">73</a></td></tr
><tr id="gr_svn92_74"

><td id="74"><a href="#74">74</a></td></tr
><tr id="gr_svn92_75"

><td id="75"><a href="#75">75</a></td></tr
><tr id="gr_svn92_76"

><td id="76"><a href="#76">76</a></td></tr
><tr id="gr_svn92_77"

><td id="77"><a href="#77">77</a></td></tr
><tr id="gr_svn92_78"

><td id="78"><a href="#78">78</a></td></tr
><tr id="gr_svn92_79"

><td id="79"><a href="#79">79</a></td></tr
><tr id="gr_svn92_80"

><td id="80"><a href="#80">80</a></td></tr
><tr id="gr_svn92_81"

><td id="81"><a href="#81">81</a></td></tr
><tr id="gr_svn92_82"

><td id="82"><a href="#82">82</a></td></tr
><tr id="gr_svn92_83"

><td id="83"><a href="#83">83</a></td></tr
><tr id="gr_svn92_84"

><td id="84"><a href="#84">84</a></td></tr
><tr id="gr_svn92_85"

><td id="85"><a href="#85">85</a></td></tr
><tr id="gr_svn92_86"

><td id="86"><a href="#86">86</a></td></tr
><tr id="gr_svn92_87"

><td id="87"><a href="#87">87</a></td></tr
><tr id="gr_svn92_88"

><td id="88"><a href="#88">88</a></td></tr
><tr id="gr_svn92_89"

><td id="89"><a href="#89">89</a></td></tr
><tr id="gr_svn92_90"

><td id="90"><a href="#90">90</a></td></tr
><tr id="gr_svn92_91"

><td id="91"><a href="#91">91</a></td></tr
><tr id="gr_svn92_92"

><td id="92"><a href="#92">92</a></td></tr
><tr id="gr_svn92_93"

><td id="93"><a href="#93">93</a></td></tr
><tr id="gr_svn92_94"

><td id="94"><a href="#94">94</a></td></tr
><tr id="gr_svn92_95"

><td id="95"><a href="#95">95</a></td></tr
><tr id="gr_svn92_96"

><td id="96"><a href="#96">96</a></td></tr
><tr id="gr_svn92_97"

><td id="97"><a href="#97">97</a></td></tr
><tr id="gr_svn92_98"

><td id="98"><a href="#98">98</a></td></tr
></table></pre>
<pre><table width="100%"><tr class="nocursor"><td></td></tr></table></pre>
</td>
<td id="lines">
<pre><table width="100%"><tr class="cursor_stop cursor_hidden"><td></td></tr></table></pre>
<pre class="prettyprint lang-js"><table id="src_table_0"><tr
id=sl_svn92_1

><td class="source">/*!<br></td></tr
><tr
id=sl_svn92_2

><td class="source"> * jQuery UI 1.8.5<br></td></tr
><tr
id=sl_svn92_3

><td class="source"> *<br></td></tr
><tr
id=sl_svn92_4

><td class="source"> * Copyright 2010, AUTHORS.txt (http://jqueryui.com/about)<br></td></tr
><tr
id=sl_svn92_5

><td class="source"> * Dual licensed under the MIT or GPL Version 2 licenses.<br></td></tr
><tr
id=sl_svn92_6

><td class="source"> * http://jquery.org/license<br></td></tr
><tr
id=sl_svn92_7

><td class="source"> *<br></td></tr
><tr
id=sl_svn92_8

><td class="source"> * http://docs.jquery.com/UI<br></td></tr
><tr
id=sl_svn92_9

><td class="source"> */<br></td></tr
><tr
id=sl_svn92_10

><td class="source">(function(c,j){function k(a){return!c(a).parents().andSelf().filter(function(){return c.curCSS(this,&quot;visibility&quot;)===&quot;hidden&quot;||c.expr.filters.hidden(this)}).length}c.ui=c.ui||{};if(!c.ui.version){c.extend(c.ui,{version:&quot;1.8.5&quot;,keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,<br></td></tr
><tr
id=sl_svn92_11

><td class="source">NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91}});c.fn.extend({_focus:c.fn.focus,focus:function(a,b){return typeof a===&quot;number&quot;?this.each(function(){var d=this;setTimeout(function(){c(d).focus();b&amp;&amp;b.call(d)},a)}):this._focus.apply(this,arguments)},scrollParent:function(){var a;a=c.browser.msie&amp;&amp;/(static|relative)/.test(this.css(&quot;position&quot;))||/absolute/.test(this.css(&quot;position&quot;))?this.parents().filter(function(){return/(relative|absolute|fixed)/.test(c.curCSS(this,<br></td></tr
><tr
id=sl_svn92_12

><td class="source">&quot;position&quot;,1))&amp;&amp;/(auto|scroll)/.test(c.curCSS(this,&quot;overflow&quot;,1)+c.curCSS(this,&quot;overflow-y&quot;,1)+c.curCSS(this,&quot;overflow-x&quot;,1))}).eq(0):this.parents().filter(function(){return/(auto|scroll)/.test(c.curCSS(this,&quot;overflow&quot;,1)+c.curCSS(this,&quot;overflow-y&quot;,1)+c.curCSS(this,&quot;overflow-x&quot;,1))}).eq(0);return/fixed/.test(this.css(&quot;position&quot;))||!a.length?c(document):a},zIndex:function(a){if(a!==j)return this.css(&quot;zIndex&quot;,a);if(this.length){a=c(this[0]);for(var b;a.length&amp;&amp;a[0]!==document;){b=a.css(&quot;position&quot;);<br></td></tr
><tr
id=sl_svn92_13

><td class="source">if(b===&quot;absolute&quot;||b===&quot;relative&quot;||b===&quot;fixed&quot;){b=parseInt(a.css(&quot;zIndex&quot;));if(!isNaN(b)&amp;&amp;b!=0)return b}a=a.parent()}}return 0},disableSelection:function(){return this.bind(&quot;mousedown.ui-disableSelection selectstart.ui-disableSelection&quot;,function(a){a.preventDefault()})},enableSelection:function(){return this.unbind(&quot;.ui-disableSelection&quot;)}});c.each([&quot;Width&quot;,&quot;Height&quot;],function(a,b){function d(f,g,l,m){c.each(e,function(){g-=parseFloat(c.curCSS(f,&quot;padding&quot;+this,true))||0;if(l)g-=parseFloat(c.curCSS(f,<br></td></tr
><tr
id=sl_svn92_14

><td class="source">&quot;border&quot;+this+&quot;Width&quot;,true))||0;if(m)g-=parseFloat(c.curCSS(f,&quot;margin&quot;+this,true))||0});return g}var e=b===&quot;Width&quot;?[&quot;Left&quot;,&quot;Right&quot;]:[&quot;Top&quot;,&quot;Bottom&quot;],h=b.toLowerCase(),i={innerWidth:c.fn.innerWidth,innerHeight:c.fn.innerHeight,outerWidth:c.fn.outerWidth,outerHeight:c.fn.outerHeight};c.fn[&quot;inner&quot;+b]=function(f){if(f===j)return i[&quot;inner&quot;+b].call(this);return this.each(function(){c.style(this,h,d(this,f)+&quot;px&quot;)})};c.fn[&quot;outer&quot;+b]=function(f,g){if(typeof f!==&quot;number&quot;)return i[&quot;outer&quot;+b].call(this,f);return this.each(function(){c.style(this,<br></td></tr
><tr
id=sl_svn92_15

><td class="source">h,d(this,f,true,g)+&quot;px&quot;)})}});c.extend(c.expr[&quot;:&quot;],{data:function(a,b,d){return!!c.data(a,d[3])},focusable:function(a){var b=a.nodeName.toLowerCase(),d=c.attr(a,&quot;tabindex&quot;);if(&quot;area&quot;===b){b=a.parentNode;d=b.name;if(!a.href||!d||b.nodeName.toLowerCase()!==&quot;map&quot;)return false;a=c(&quot;img[usemap=#&quot;+d+&quot;]&quot;)[0];return!!a&amp;&amp;k(a)}return(/input|select|textarea|button|object/.test(b)?!a.disabled:&quot;a&quot;==b?a.href||!isNaN(d):!isNaN(d))&amp;&amp;k(a)},tabbable:function(a){var b=c.attr(a,&quot;tabindex&quot;);return(isNaN(b)||b&gt;=0)&amp;&amp;c(a).is(&quot;:focusable&quot;)}});<br></td></tr
><tr
id=sl_svn92_16

><td class="source">c(function(){var a=document.createElement(&quot;div&quot;),b=document.body;c.extend(a.style,{minHeight:&quot;100px&quot;,height:&quot;auto&quot;,padding:0,borderWidth:0});c.support.minHeight=b.appendChild(a).offsetHeight===100;b.removeChild(a).style.display=&quot;none&quot;});c.extend(c.ui,{plugin:{add:function(a,b,d){a=c.ui[a].prototype;for(var e in d){a.plugins[e]=a.plugins[e]||[];a.plugins[e].push([b,d[e]])}},call:function(a,b,d){if((b=a.plugins[b])&amp;&amp;a.element[0].parentNode)for(var e=0;e&lt;b.length;e++)a.options[b[e][0]]&amp;&amp;b[e][1].apply(a.element,<br></td></tr
><tr
id=sl_svn92_17

><td class="source">d)}},contains:function(a,b){return document.compareDocumentPosition?a.compareDocumentPosition(b)&amp;16:a!==b&amp;&amp;a.contains(b)},hasScroll:function(a,b){if(c(a).css(&quot;overflow&quot;)===&quot;hidden&quot;)return false;b=b&amp;&amp;b===&quot;left&quot;?&quot;scrollLeft&quot;:&quot;scrollTop&quot;;var d=false;if(a[b]&gt;0)return true;a[b]=1;d=a[b]&gt;0;a[b]=0;return d},isOverAxis:function(a,b,d){return a&gt;b&amp;&amp;a&lt;b+d},isOver:function(a,b,d,e,h,i){return c.ui.isOverAxis(a,d,h)&amp;&amp;c.ui.isOverAxis(b,e,i)}})}})(jQuery);<br></td></tr
><tr
id=sl_svn92_18

><td class="source">;/*<br></td></tr
><tr
id=sl_svn92_19

><td class="source"> * jQuery UI Datepicker 1.8.5<br></td></tr
><tr
id=sl_svn92_20

><td class="source"> *<br></td></tr
><tr
id=sl_svn92_21

><td class="source"> * Copyright 2010, AUTHORS.txt (http://jqueryui.com/about)<br></td></tr
><tr
id=sl_svn92_22

><td class="source"> * Dual licensed under the MIT or GPL Version 2 licenses.<br></td></tr
><tr
id=sl_svn92_23

><td class="source"> * http://jquery.org/license<br></td></tr
><tr
id=sl_svn92_24

><td class="source"> *<br></td></tr
><tr
id=sl_svn92_25

><td class="source"> * http://docs.jquery.com/UI/Datepicker<br></td></tr
><tr
id=sl_svn92_26

><td class="source"> *<br></td></tr
><tr
id=sl_svn92_27

><td class="source"> * Depends:<br></td></tr
><tr
id=sl_svn92_28

><td class="source"> *	jquery.ui.core.js<br></td></tr
><tr
id=sl_svn92_29

><td class="source"> */<br></td></tr
><tr
id=sl_svn92_30

><td class="source">(function(d,G){function L(){this.debug=false;this._curInst=null;this._keyEvent=false;this._disabledInputs=[];this._inDialog=this._datepickerShowing=false;this._mainDivId=&quot;ui-datepicker-div&quot;;this._inlineClass=&quot;ui-datepicker-inline&quot;;this._appendClass=&quot;ui-datepicker-append&quot;;this._triggerClass=&quot;ui-datepicker-trigger&quot;;this._dialogClass=&quot;ui-datepicker-dialog&quot;;this._disableClass=&quot;ui-datepicker-disabled&quot;;this._unselectableClass=&quot;ui-datepicker-unselectable&quot;;this._currentClass=&quot;ui-datepicker-current-day&quot;;this._dayOverClass=<br></td></tr
><tr
id=sl_svn92_31

><td class="source">&quot;ui-datepicker-days-cell-over&quot;;this.regional=[];this.regional[&quot;&quot;]={closeText:&quot;Done&quot;,prevText:&quot;Prev&quot;,nextText:&quot;Next&quot;,currentText:&quot;Today&quot;,monthNames:[&quot;January&quot;,&quot;February&quot;,&quot;March&quot;,&quot;April&quot;,&quot;May&quot;,&quot;June&quot;,&quot;July&quot;,&quot;August&quot;,&quot;September&quot;,&quot;October&quot;,&quot;November&quot;,&quot;December&quot;],monthNamesShort:[&quot;Jan&quot;,&quot;Feb&quot;,&quot;Mar&quot;,&quot;Apr&quot;,&quot;May&quot;,&quot;Jun&quot;,&quot;Jul&quot;,&quot;Aug&quot;,&quot;Sep&quot;,&quot;Oct&quot;,&quot;Nov&quot;,&quot;Dec&quot;],dayNames:[&quot;Sunday&quot;,&quot;Monday&quot;,&quot;Tuesday&quot;,&quot;Wednesday&quot;,&quot;Thursday&quot;,&quot;Friday&quot;,&quot;Saturday&quot;],dayNamesShort:[&quot;Sun&quot;,&quot;Mon&quot;,&quot;Tue&quot;,&quot;Wed&quot;,&quot;Thu&quot;,&quot;Fri&quot;,&quot;Sat&quot;],dayNamesMin:[&quot;Su&quot;,<br></td></tr
><tr
id=sl_svn92_32

><td class="source">&quot;Mo&quot;,&quot;Tu&quot;,&quot;We&quot;,&quot;Th&quot;,&quot;Fr&quot;,&quot;Sa&quot;],weekHeader:&quot;Wk&quot;,dateFormat:&quot;mm/dd/yy&quot;,firstDay:0,isRTL:false,showMonthAfterYear:false,yearSuffix:&quot;&quot;};this._defaults={showOn:&quot;focus&quot;,showAnim:&quot;fadeIn&quot;,showOptions:{},defaultDate:null,appendText:&quot;&quot;,buttonText:&quot;...&quot;,buttonImage:&quot;&quot;,buttonImageOnly:false,hideIfNoPrevNext:false,navigationAsDateFormat:false,gotoCurrent:false,changeMonth:false,changeYear:false,yearRange:&quot;c-10:c+10&quot;,showOtherMonths:false,selectOtherMonths:false,showWeek:false,calculateWeek:this.iso8601Week,shortYearCutoff:&quot;+10&quot;,<br></td></tr
><tr
id=sl_svn92_33

><td class="source">minDate:null,maxDate:null,duration:&quot;fast&quot;,beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:&quot;&quot;,altFormat:&quot;&quot;,constrainInput:true,showButtonPanel:false,autoSize:false};d.extend(this._defaults,this.regional[&quot;&quot;]);this.dpDiv=d(&#39;&lt;div id=&quot;&#39;+this._mainDivId+&#39;&quot; class=&quot;ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all ui-helper-hidden-accessible&quot;&gt;&lt;/div&gt;&#39;)}function E(a,b){d.extend(a,<br></td></tr
><tr
id=sl_svn92_34

><td class="source">b);for(var c in b)if(b[c]==null||b[c]==G)a[c]=b[c];return a}d.extend(d.ui,{datepicker:{version:&quot;1.8.5&quot;}});var y=(new Date).getTime();d.extend(L.prototype,{markerClassName:&quot;hasDatepicker&quot;,log:function(){this.debug&amp;&amp;console.log.apply(&quot;&quot;,arguments)},_widgetDatepicker:function(){return this.dpDiv},setDefaults:function(a){E(this._defaults,a||{});return this},_attachDatepicker:function(a,b){var c=null;for(var e in this._defaults){var f=a.getAttribute(&quot;date:&quot;+e);if(f){c=c||{};try{c[e]=eval(f)}catch(h){c[e]=<br></td></tr
><tr
id=sl_svn92_35

><td class="source">f}}}e=a.nodeName.toLowerCase();f=e==&quot;div&quot;||e==&quot;span&quot;;if(!a.id){this.uuid+=1;a.id=&quot;dp&quot;+this.uuid}var i=this._newInst(d(a),f);i.settings=d.extend({},b||{},c||{});if(e==&quot;input&quot;)this._connectDatepicker(a,i);else f&amp;&amp;this._inlineDatepicker(a,i)},_newInst:function(a,b){return{id:a[0].id.replace(/([^A-Za-z0-9_])/g,&quot;\\\\$1&quot;),input:a,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:b,dpDiv:!b?this.dpDiv:d(&#39;&lt;div class=&quot;&#39;+this._inlineClass+&#39; ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all&quot;&gt;&lt;/div&gt;&#39;)}},<br></td></tr
><tr
id=sl_svn92_36

><td class="source">_connectDatepicker:function(a,b){var c=d(a);b.append=d([]);b.trigger=d([]);if(!c.hasClass(this.markerClassName)){this._attachments(c,b);c.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp).bind(&quot;setData.datepicker&quot;,function(e,f,h){b.settings[f]=h}).bind(&quot;getData.datepicker&quot;,function(e,f){return this._get(b,f)});this._autoSize(b);d.data(a,&quot;datepicker&quot;,b)}},_attachments:function(a,b){var c=this._get(b,&quot;appendText&quot;),e=this._get(b,&quot;isRTL&quot;);b.append&amp;&amp;<br></td></tr
><tr
id=sl_svn92_37

><td class="source">b.append.remove();if(c){b.append=d(&#39;&lt;span class=&quot;&#39;+this._appendClass+&#39;&quot;&gt;&#39;+c+&quot;&lt;/span&gt;&quot;);a[e?&quot;before&quot;:&quot;after&quot;](b.append)}a.unbind(&quot;focus&quot;,this._showDatepicker);b.trigger&amp;&amp;b.trigger.remove();c=this._get(b,&quot;showOn&quot;);if(c==&quot;focus&quot;||c==&quot;both&quot;)a.focus(this._showDatepicker);if(c==&quot;button&quot;||c==&quot;both&quot;){c=this._get(b,&quot;buttonText&quot;);var f=this._get(b,&quot;buttonImage&quot;);b.trigger=d(this._get(b,&quot;buttonImageOnly&quot;)?d(&quot;&lt;img/&gt;&quot;).addClass(this._triggerClass).attr({src:f,alt:c,title:c}):d(&#39;&lt;button type=&quot;button&quot;&gt;&lt;/button&gt;&#39;).addClass(this._triggerClass).html(f==<br></td></tr
><tr
id=sl_svn92_38

><td class="source">&quot;&quot;?c:d(&quot;&lt;img/&gt;&quot;).attr({src:f,alt:c,title:c})));a[e?&quot;before&quot;:&quot;after&quot;](b.trigger);b.trigger.click(function(){d.datepicker._datepickerShowing&amp;&amp;d.datepicker._lastInput==a[0]?d.datepicker._hideDatepicker():d.datepicker._showDatepicker(a[0]);return false})}},_autoSize:function(a){if(this._get(a,&quot;autoSize&quot;)&amp;&amp;!a.inline){var b=new Date(2009,11,20),c=this._get(a,&quot;dateFormat&quot;);if(c.match(/[DM]/)){var e=function(f){for(var h=0,i=0,g=0;g&lt;f.length;g++)if(f[g].length&gt;h){h=f[g].length;i=g}return i};b.setMonth(e(this._get(a,<br></td></tr
><tr
id=sl_svn92_39

><td class="source">c.match(/MM/)?&quot;monthNames&quot;:&quot;monthNamesShort&quot;)));b.setDate(e(this._get(a,c.match(/DD/)?&quot;dayNames&quot;:&quot;dayNamesShort&quot;))+20-b.getDay())}a.input.attr(&quot;size&quot;,this._formatDate(a,b).length)}},_inlineDatepicker:function(a,b){var c=d(a);if(!c.hasClass(this.markerClassName)){c.addClass(this.markerClassName).append(b.dpDiv).bind(&quot;setData.datepicker&quot;,function(e,f,h){b.settings[f]=h}).bind(&quot;getData.datepicker&quot;,function(e,f){return this._get(b,f)});d.data(a,&quot;datepicker&quot;,b);this._setDate(b,this._getDefaultDate(b),<br></td></tr
><tr
id=sl_svn92_40

><td class="source">true);this._updateDatepicker(b);this._updateAlternate(b)}},_dialogDatepicker:function(a,b,c,e,f){a=this._dialogInst;if(!a){this.uuid+=1;this._dialogInput=d(&#39;&lt;input type=&quot;text&quot; id=&quot;&#39;+(&quot;dp&quot;+this.uuid)+&#39;&quot; style=&quot;position: absolute; top: -100px; width: 0px; z-index: -10;&quot;/&gt;&#39;);this._dialogInput.keydown(this._doKeyDown);d(&quot;body&quot;).append(this._dialogInput);a=this._dialogInst=this._newInst(this._dialogInput,false);a.settings={};d.data(this._dialogInput[0],&quot;datepicker&quot;,a)}E(a.settings,e||{});b=b&amp;&amp;b.constructor==<br></td></tr
><tr
id=sl_svn92_41

><td class="source">Date?this._formatDate(a,b):b;this._dialogInput.val(b);this._pos=f?f.length?f:[f.pageX,f.pageY]:null;if(!this._pos)this._pos=[document.documentElement.clientWidth/2-100+(document.documentElement.scrollLeft||document.body.scrollLeft),document.documentElement.clientHeight/2-150+(document.documentElement.scrollTop||document.body.scrollTop)];this._dialogInput.css(&quot;left&quot;,this._pos[0]+20+&quot;px&quot;).css(&quot;top&quot;,this._pos[1]+&quot;px&quot;);a.settings.onSelect=c;this._inDialog=true;this.dpDiv.addClass(this._dialogClass);this._showDatepicker(this._dialogInput[0]);<br></td></tr
><tr
id=sl_svn92_42

><td class="source">d.blockUI&amp;&amp;d.blockUI(this.dpDiv);d.data(this._dialogInput[0],&quot;datepicker&quot;,a);return this},_destroyDatepicker:function(a){var b=d(a),c=d.data(a,&quot;datepicker&quot;);if(b.hasClass(this.markerClassName)){var e=a.nodeName.toLowerCase();d.removeData(a,&quot;datepicker&quot;);if(e==&quot;input&quot;){c.append.remove();c.trigger.remove();b.removeClass(this.markerClassName).unbind(&quot;focus&quot;,this._showDatepicker).unbind(&quot;keydown&quot;,this._doKeyDown).unbind(&quot;keypress&quot;,this._doKeyPress).unbind(&quot;keyup&quot;,this._doKeyUp)}else if(e==&quot;div&quot;||e==&quot;span&quot;)b.removeClass(this.markerClassName).empty()}},<br></td></tr
><tr
id=sl_svn92_43

><td class="source">_enableDatepicker:function(a){var b=d(a),c=d.data(a,&quot;datepicker&quot;);if(b.hasClass(this.markerClassName)){var e=a.nodeName.toLowerCase();if(e==&quot;input&quot;){a.disabled=false;c.trigger.filter(&quot;button&quot;).each(function(){this.disabled=false}).end().filter(&quot;img&quot;).css({opacity:&quot;1.0&quot;,cursor:&quot;&quot;})}else if(e==&quot;div&quot;||e==&quot;span&quot;)b.children(&quot;.&quot;+this._inlineClass).children().removeClass(&quot;ui-state-disabled&quot;);this._disabledInputs=d.map(this._disabledInputs,function(f){return f==a?null:f})}},_disableDatepicker:function(a){var b=<br></td></tr
><tr
id=sl_svn92_44

><td class="source">d(a),c=d.data(a,&quot;datepicker&quot;);if(b.hasClass(this.markerClassName)){var e=a.nodeName.toLowerCase();if(e==&quot;input&quot;){a.disabled=true;c.trigger.filter(&quot;button&quot;).each(function(){this.disabled=true}).end().filter(&quot;img&quot;).css({opacity:&quot;0.5&quot;,cursor:&quot;default&quot;})}else if(e==&quot;div&quot;||e==&quot;span&quot;)b.children(&quot;.&quot;+this._inlineClass).children().addClass(&quot;ui-state-disabled&quot;);this._disabledInputs=d.map(this._disabledInputs,function(f){return f==a?null:f});this._disabledInputs[this._disabledInputs.length]=a}},_isDisabledDatepicker:function(a){if(!a)return false;<br></td></tr
><tr
id=sl_svn92_45

><td class="source">for(var b=0;b&lt;this._disabledInputs.length;b++)if(this._disabledInputs[b]==a)return true;return false},_getInst:function(a){try{return d.data(a,&quot;datepicker&quot;)}catch(b){throw&quot;Missing instance data for this datepicker&quot;;}},_optionDatepicker:function(a,b,c){var e=this._getInst(a);if(arguments.length==2&amp;&amp;typeof b==&quot;string&quot;)return b==&quot;defaults&quot;?d.extend({},d.datepicker._defaults):e?b==&quot;all&quot;?d.extend({},e.settings):this._get(e,b):null;var f=b||{};if(typeof b==&quot;string&quot;){f={};f[b]=c}if(e){this._curInst==e&amp;&amp;<br></td></tr
><tr
id=sl_svn92_46

><td class="source">this._hideDatepicker();var h=this._getDateDatepicker(a,true);E(e.settings,f);this._attachments(d(a),e);this._autoSize(e);this._setDateDatepicker(a,h);this._updateDatepicker(e)}},_changeDatepicker:function(a,b,c){this._optionDatepicker(a,b,c)},_refreshDatepicker:function(a){(a=this._getInst(a))&amp;&amp;this._updateDatepicker(a)},_setDateDatepicker:function(a,b){if(a=this._getInst(a)){this._setDate(a,b);this._updateDatepicker(a);this._updateAlternate(a)}},_getDateDatepicker:function(a,b){(a=this._getInst(a))&amp;&amp;<br></td></tr
><tr
id=sl_svn92_47

><td class="source">!a.inline&amp;&amp;this._setDateFromField(a,b);return a?this._getDate(a):null},_doKeyDown:function(a){var b=d.datepicker._getInst(a.target),c=true,e=b.dpDiv.is(&quot;.ui-datepicker-rtl&quot;);b._keyEvent=true;if(d.datepicker._datepickerShowing)switch(a.keyCode){case 9:d.datepicker._hideDatepicker();c=false;break;case 13:c=d(&quot;td.&quot;+d.datepicker._dayOverClass,b.dpDiv).add(d(&quot;td.&quot;+d.datepicker._currentClass,b.dpDiv));c[0]?d.datepicker._selectDay(a.target,b.selectedMonth,b.selectedYear,c[0]):d.datepicker._hideDatepicker();<br></td></tr
><tr
id=sl_svn92_48

><td class="source">return false;case 27:d.datepicker._hideDatepicker();break;case 33:d.datepicker._adjustDate(a.target,a.ctrlKey?-d.datepicker._get(b,&quot;stepBigMonths&quot;):-d.datepicker._get(b,&quot;stepMonths&quot;),&quot;M&quot;);break;case 34:d.datepicker._adjustDate(a.target,a.ctrlKey?+d.datepicker._get(b,&quot;stepBigMonths&quot;):+d.datepicker._get(b,&quot;stepMonths&quot;),&quot;M&quot;);break;case 35:if(a.ctrlKey||a.metaKey)d.datepicker._clearDate(a.target);c=a.ctrlKey||a.metaKey;break;case 36:if(a.ctrlKey||a.metaKey)d.datepicker._gotoToday(a.target);c=a.ctrlKey||<br></td></tr
><tr
id=sl_svn92_49

><td class="source">a.metaKey;break;case 37:if(a.ctrlKey||a.metaKey)d.datepicker._adjustDate(a.target,e?+1:-1,&quot;D&quot;);c=a.ctrlKey||a.metaKey;if(a.originalEvent.altKey)d.datepicker._adjustDate(a.target,a.ctrlKey?-d.datepicker._get(b,&quot;stepBigMonths&quot;):-d.datepicker._get(b,&quot;stepMonths&quot;),&quot;M&quot;);break;case 38:if(a.ctrlKey||a.metaKey)d.datepicker._adjustDate(a.target,-7,&quot;D&quot;);c=a.ctrlKey||a.metaKey;break;case 39:if(a.ctrlKey||a.metaKey)d.datepicker._adjustDate(a.target,e?-1:+1,&quot;D&quot;);c=a.ctrlKey||a.metaKey;if(a.originalEvent.altKey)d.datepicker._adjustDate(a.target,<br></td></tr
><tr
id=sl_svn92_50

><td class="source">a.ctrlKey?+d.datepicker._get(b,&quot;stepBigMonths&quot;):+d.datepicker._get(b,&quot;stepMonths&quot;),&quot;M&quot;);break;case 40:if(a.ctrlKey||a.metaKey)d.datepicker._adjustDate(a.target,+7,&quot;D&quot;);c=a.ctrlKey||a.metaKey;break;default:c=false}else if(a.keyCode==36&amp;&amp;a.ctrlKey)d.datepicker._showDatepicker(this);else c=false;if(c){a.preventDefault();a.stopPropagation()}},_doKeyPress:function(a){var b=d.datepicker._getInst(a.target);if(d.datepicker._get(b,&quot;constrainInput&quot;)){b=d.datepicker._possibleChars(d.datepicker._get(b,&quot;dateFormat&quot;));<br></td></tr
><tr
id=sl_svn92_51

><td class="source">var c=String.fromCharCode(a.charCode==G?a.keyCode:a.charCode);return a.ctrlKey||c&lt;&quot; &quot;||!b||b.indexOf(c)&gt;-1}},_doKeyUp:function(a){a=d.datepicker._getInst(a.target);if(a.input.val()!=a.lastVal)try{if(d.datepicker.parseDate(d.datepicker._get(a,&quot;dateFormat&quot;),a.input?a.input.val():null,d.datepicker._getFormatConfig(a))){d.datepicker._setDateFromField(a);d.datepicker._updateAlternate(a);d.datepicker._updateDatepicker(a)}}catch(b){d.datepicker.log(b)}return true},_showDatepicker:function(a){a=a.target||<br></td></tr
><tr
id=sl_svn92_52

><td class="source">a;if(a.nodeName.toLowerCase()!=&quot;input&quot;)a=d(&quot;input&quot;,a.parentNode)[0];if(!(d.datepicker._isDisabledDatepicker(a)||d.datepicker._lastInput==a)){var b=d.datepicker._getInst(a);d.datepicker._curInst&amp;&amp;d.datepicker._curInst!=b&amp;&amp;d.datepicker._curInst.dpDiv.stop(true,true);var c=d.datepicker._get(b,&quot;beforeShow&quot;);E(b.settings,c?c.apply(a,[a,b]):{});b.lastVal=null;d.datepicker._lastInput=a;d.datepicker._setDateFromField(b);if(d.datepicker._inDialog)a.value=&quot;&quot;;if(!d.datepicker._pos){d.datepicker._pos=d.datepicker._findPos(a);<br></td></tr
><tr
id=sl_svn92_53

><td class="source">d.datepicker._pos[1]+=a.offsetHeight}var e=false;d(a).parents().each(function(){e|=d(this).css(&quot;position&quot;)==&quot;fixed&quot;;return!e});if(e&amp;&amp;d.browser.opera){d.datepicker._pos[0]-=document.documentElement.scrollLeft;d.datepicker._pos[1]-=document.documentElement.scrollTop}c={left:d.datepicker._pos[0],top:d.datepicker._pos[1]};d.datepicker._pos=null;b.dpDiv.css({position:&quot;absolute&quot;,display:&quot;block&quot;,top:&quot;-1000px&quot;});d.datepicker._updateDatepicker(b);c=d.datepicker._checkOffset(b,c,e);b.dpDiv.css({position:d.datepicker._inDialog&amp;&amp;<br></td></tr
><tr
id=sl_svn92_54

><td class="source">d.blockUI?&quot;static&quot;:e?&quot;fixed&quot;:&quot;absolute&quot;,display:&quot;none&quot;,left:c.left+&quot;px&quot;,top:c.top+&quot;px&quot;});if(!b.inline){c=d.datepicker._get(b,&quot;showAnim&quot;);var f=d.datepicker._get(b,&quot;duration&quot;),h=function(){d.datepicker._datepickerShowing=true;var i=d.datepicker._getBorders(b.dpDiv);b.dpDiv.find(&quot;iframe.ui-datepicker-cover&quot;).css({left:-i[0],top:-i[1],width:b.dpDiv.outerWidth(),height:b.dpDiv.outerHeight()})};b.dpDiv.zIndex(d(a).zIndex()+1);d.effects&amp;&amp;d.effects[c]?b.dpDiv.show(c,d.datepicker._get(b,&quot;showOptions&quot;),f,<br></td></tr
><tr
id=sl_svn92_55

><td class="source">h):b.dpDiv[c||&quot;show&quot;](c?f:null,h);if(!c||!f)h();b.input.is(&quot;:visible&quot;)&amp;&amp;!b.input.is(&quot;:disabled&quot;)&amp;&amp;b.input.focus();d.datepicker._curInst=b}}},_updateDatepicker:function(a){var b=this,c=d.datepicker._getBorders(a.dpDiv);a.dpDiv.empty().append(this._generateHTML(a)).find(&quot;iframe.ui-datepicker-cover&quot;).css({left:-c[0],top:-c[1],width:a.dpDiv.outerWidth(),height:a.dpDiv.outerHeight()}).end().find(&quot;button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a&quot;).bind(&quot;mouseout&quot;,function(){d(this).removeClass(&quot;ui-state-hover&quot;);<br></td></tr
><tr
id=sl_svn92_56

><td class="source">this.className.indexOf(&quot;ui-datepicker-prev&quot;)!=-1&amp;&amp;d(this).removeClass(&quot;ui-datepicker-prev-hover&quot;);this.className.indexOf(&quot;ui-datepicker-next&quot;)!=-1&amp;&amp;d(this).removeClass(&quot;ui-datepicker-next-hover&quot;)}).bind(&quot;mouseover&quot;,function(){if(!b._isDisabledDatepicker(a.inline?a.dpDiv.parent()[0]:a.input[0])){d(this).parents(&quot;.ui-datepicker-calendar&quot;).find(&quot;a&quot;).removeClass(&quot;ui-state-hover&quot;);d(this).addClass(&quot;ui-state-hover&quot;);this.className.indexOf(&quot;ui-datepicker-prev&quot;)!=-1&amp;&amp;d(this).addClass(&quot;ui-datepicker-prev-hover&quot;);<br></td></tr
><tr
id=sl_svn92_57

><td class="source">this.className.indexOf(&quot;ui-datepicker-next&quot;)!=-1&amp;&amp;d(this).addClass(&quot;ui-datepicker-next-hover&quot;)}}).end().find(&quot;.&quot;+this._dayOverClass+&quot; a&quot;).trigger(&quot;mouseover&quot;).end();c=this._getNumberOfMonths(a);var e=c[1];e&gt;1?a.dpDiv.addClass(&quot;ui-datepicker-multi-&quot;+e).css(&quot;width&quot;,17*e+&quot;em&quot;):a.dpDiv.removeClass(&quot;ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4&quot;).width(&quot;&quot;);a.dpDiv[(c[0]!=1||c[1]!=1?&quot;add&quot;:&quot;remove&quot;)+&quot;Class&quot;](&quot;ui-datepicker-multi&quot;);a.dpDiv[(this._get(a,&quot;isRTL&quot;)?&quot;add&quot;:&quot;remove&quot;)+&quot;Class&quot;](&quot;ui-datepicker-rtl&quot;);<br></td></tr
><tr
id=sl_svn92_58

><td class="source">a==d.datepicker._curInst&amp;&amp;d.datepicker._datepickerShowing&amp;&amp;a.input&amp;&amp;a.input.is(&quot;:visible&quot;)&amp;&amp;!a.input.is(&quot;:disabled&quot;)&amp;&amp;a.input.focus()},_getBorders:function(a){var b=function(c){return{thin:1,medium:2,thick:3}[c]||c};return[parseFloat(b(a.css(&quot;border-left-width&quot;))),parseFloat(b(a.css(&quot;border-top-width&quot;)))]},_checkOffset:function(a,b,c){var e=a.dpDiv.outerWidth(),f=a.dpDiv.outerHeight(),h=a.input?a.input.outerWidth():0,i=a.input?a.input.outerHeight():0,g=document.documentElement.clientWidth+d(document).scrollLeft(),<br></td></tr
><tr
id=sl_svn92_59

><td class="source">k=document.documentElement.clientHeight+d(document).scrollTop();b.left-=this._get(a,&quot;isRTL&quot;)?e-h:0;b.left-=c&amp;&amp;b.left==a.input.offset().left?d(document).scrollLeft():0;b.top-=c&amp;&amp;b.top==a.input.offset().top+i?d(document).scrollTop():0;b.left-=Math.min(b.left,b.left+e&gt;g&amp;&amp;g&gt;e?Math.abs(b.left+e-g):0);b.top-=Math.min(b.top,b.top+f&gt;k&amp;&amp;k&gt;f?Math.abs(f+i):0);return b},_findPos:function(a){for(var b=this._get(this._getInst(a),&quot;isRTL&quot;);a&amp;&amp;(a.type==&quot;hidden&quot;||a.nodeType!=1);)a=a[b?&quot;previousSibling&quot;:&quot;nextSibling&quot;];<br></td></tr
><tr
id=sl_svn92_60

><td class="source">a=d(a).offset();return[a.left,a.top]},_hideDatepicker:function(a){var b=this._curInst;if(!(!b||a&amp;&amp;b!=d.data(a,&quot;datepicker&quot;)))if(this._datepickerShowing){a=this._get(b,&quot;showAnim&quot;);var c=this._get(b,&quot;duration&quot;),e=function(){d.datepicker._tidyDialog(b);this._curInst=null};d.effects&amp;&amp;d.effects[a]?b.dpDiv.hide(a,d.datepicker._get(b,&quot;showOptions&quot;),c,e):b.dpDiv[a==&quot;slideDown&quot;?&quot;slideUp&quot;:a==&quot;fadeIn&quot;?&quot;fadeOut&quot;:&quot;hide&quot;](a?c:null,e);a||e();if(a=this._get(b,&quot;onClose&quot;))a.apply(b.input?b.input[0]:null,[b.input?b.input.val():<br></td></tr
><tr
id=sl_svn92_61

><td class="source">&quot;&quot;,b]);this._datepickerShowing=false;this._lastInput=null;if(this._inDialog){this._dialogInput.css({position:&quot;absolute&quot;,left:&quot;0&quot;,top:&quot;-100px&quot;});if(d.blockUI){d.unblockUI();d(&quot;body&quot;).append(this.dpDiv)}}this._inDialog=false}},_tidyDialog:function(a){a.dpDiv.removeClass(this._dialogClass).unbind(&quot;.ui-datepicker-calendar&quot;)},_checkExternalClick:function(a){if(d.datepicker._curInst){a=d(a.target);a[0].id!=d.datepicker._mainDivId&amp;&amp;a.parents(&quot;#&quot;+d.datepicker._mainDivId).length==0&amp;&amp;!a.hasClass(d.datepicker.markerClassName)&amp;&amp;<br></td></tr
><tr
id=sl_svn92_62

><td class="source">!a.hasClass(d.datepicker._triggerClass)&amp;&amp;d.datepicker._datepickerShowing&amp;&amp;!(d.datepicker._inDialog&amp;&amp;d.blockUI)&amp;&amp;d.datepicker._hideDatepicker()}},_adjustDate:function(a,b,c){a=d(a);var e=this._getInst(a[0]);if(!this._isDisabledDatepicker(a[0])){this._adjustInstDate(e,b+(c==&quot;M&quot;?this._get(e,&quot;showCurrentAtPos&quot;):0),c);this._updateDatepicker(e)}},_gotoToday:function(a){a=d(a);var b=this._getInst(a[0]);if(this._get(b,&quot;gotoCurrent&quot;)&amp;&amp;b.currentDay){b.selectedDay=b.currentDay;b.drawMonth=b.selectedMonth=b.currentMonth;<br></td></tr
><tr
id=sl_svn92_63

><td class="source">b.drawYear=b.selectedYear=b.currentYear}else{var c=new Date;b.selectedDay=c.getDate();b.drawMonth=b.selectedMonth=c.getMonth();b.drawYear=b.selectedYear=c.getFullYear()}this._notifyChange(b);this._adjustDate(a)},_selectMonthYear:function(a,b,c){a=d(a);var e=this._getInst(a[0]);e._selectingMonthYear=false;e[&quot;selected&quot;+(c==&quot;M&quot;?&quot;Month&quot;:&quot;Year&quot;)]=e[&quot;draw&quot;+(c==&quot;M&quot;?&quot;Month&quot;:&quot;Year&quot;)]=parseInt(b.options[b.selectedIndex].value,10);this._notifyChange(e);this._adjustDate(a)},_clickMonthYear:function(a){var b=<br></td></tr
><tr
id=sl_svn92_64

><td class="source">this._getInst(d(a)[0]);b.input&amp;&amp;b._selectingMonthYear&amp;&amp;setTimeout(function(){b.input.focus()},0);b._selectingMonthYear=!b._selectingMonthYear},_selectDay:function(a,b,c,e){var f=d(a);if(!(d(e).hasClass(this._unselectableClass)||this._isDisabledDatepicker(f[0]))){f=this._getInst(f[0]);f.selectedDay=f.currentDay=d(&quot;a&quot;,e).html();f.selectedMonth=f.currentMonth=b;f.selectedYear=f.currentYear=c;this._selectDate(a,this._formatDate(f,f.currentDay,f.currentMonth,f.currentYear))}},_clearDate:function(a){a=<br></td></tr
><tr
id=sl_svn92_65

><td class="source">d(a);this._getInst(a[0]);this._selectDate(a,&quot;&quot;)},_selectDate:function(a,b){a=this._getInst(d(a)[0]);b=b!=null?b:this._formatDate(a);a.input&amp;&amp;a.input.val(b);this._updateAlternate(a);var c=this._get(a,&quot;onSelect&quot;);if(c)c.apply(a.input?a.input[0]:null,[b,a]);else a.input&amp;&amp;a.input.trigger(&quot;change&quot;);if(a.inline)this._updateDatepicker(a);else{this._hideDatepicker();this._lastInput=a.input[0];typeof a.input[0]!=&quot;object&quot;&amp;&amp;a.input.focus();this._lastInput=null}},_updateAlternate:function(a){var b=this._get(a,<br></td></tr
><tr
id=sl_svn92_66

><td class="source">&quot;altField&quot;);if(b){var c=this._get(a,&quot;altFormat&quot;)||this._get(a,&quot;dateFormat&quot;),e=this._getDate(a),f=this.formatDate(c,e,this._getFormatConfig(a));d(b).each(function(){d(this).val(f)})}},noWeekends:function(a){a=a.getDay();return[a&gt;0&amp;&amp;a&lt;6,&quot;&quot;]},iso8601Week:function(a){a=new Date(a.getTime());a.setDate(a.getDate()+4-(a.getDay()||7));var b=a.getTime();a.setMonth(0);a.setDate(1);return Math.floor(Math.round((b-a)/864E5)/7)+1},parseDate:function(a,b,c){if(a==null||b==null)throw&quot;Invalid arguments&quot;;b=typeof b==<br></td></tr
><tr
id=sl_svn92_67

><td class="source">&quot;object&quot;?b.toString():b+&quot;&quot;;if(b==&quot;&quot;)return null;for(var e=(c?c.shortYearCutoff:null)||this._defaults.shortYearCutoff,f=(c?c.dayNamesShort:null)||this._defaults.dayNamesShort,h=(c?c.dayNames:null)||this._defaults.dayNames,i=(c?c.monthNamesShort:null)||this._defaults.monthNamesShort,g=(c?c.monthNames:null)||this._defaults.monthNames,k=c=-1,l=-1,u=-1,j=false,o=function(p){(p=z+1&lt;a.length&amp;&amp;a.charAt(z+1)==p)&amp;&amp;z++;return p},m=function(p){o(p);p=new RegExp(&quot;^\\d{1,&quot;+(p==&quot;@&quot;?14:p==&quot;!&quot;?20:p==&quot;y&quot;?4:p==&quot;o&quot;?<br></td></tr
><tr
id=sl_svn92_68

><td class="source">3:2)+&quot;}&quot;);p=b.substring(s).match(p);if(!p)throw&quot;Missing number at position &quot;+s;s+=p[0].length;return parseInt(p[0],10)},n=function(p,w,H){p=o(p)?H:w;for(w=0;w&lt;p.length;w++)if(b.substr(s,p[w].length).toLowerCase()==p[w].toLowerCase()){s+=p[w].length;return w+1}throw&quot;Unknown name at position &quot;+s;},r=function(){if(b.charAt(s)!=a.charAt(z))throw&quot;Unexpected literal at position &quot;+s;s++},s=0,z=0;z&lt;a.length;z++)if(j)if(a.charAt(z)==&quot;&#39;&quot;&amp;&amp;!o(&quot;&#39;&quot;))j=false;else r();else switch(a.charAt(z)){case &quot;d&quot;:l=m(&quot;d&quot;);<br></td></tr
><tr
id=sl_svn92_69

><td class="source">break;case &quot;D&quot;:n(&quot;D&quot;,f,h);break;case &quot;o&quot;:u=m(&quot;o&quot;);break;case &quot;m&quot;:k=m(&quot;m&quot;);break;case &quot;M&quot;:k=n(&quot;M&quot;,i,g);break;case &quot;y&quot;:c=m(&quot;y&quot;);break;case &quot;@&quot;:var v=new Date(m(&quot;@&quot;));c=v.getFullYear();k=v.getMonth()+1;l=v.getDate();break;case &quot;!&quot;:v=new Date((m(&quot;!&quot;)-this._ticksTo1970)/1E4);c=v.getFullYear();k=v.getMonth()+1;l=v.getDate();break;case &quot;&#39;&quot;:if(o(&quot;&#39;&quot;))r();else j=true;break;default:r()}if(c==-1)c=(new Date).getFullYear();else if(c&lt;100)c+=(new Date).getFullYear()-(new Date).getFullYear()%100+(c&lt;=e?0:-100);if(u&gt;<br></td></tr
><tr
id=sl_svn92_70

><td class="source">-1){k=1;l=u;do{e=this._getDaysInMonth(c,k-1);if(l&lt;=e)break;k++;l-=e}while(1)}v=this._daylightSavingAdjust(new Date(c,k-1,l));if(v.getFullYear()!=c||v.getMonth()+1!=k||v.getDate()!=l)throw&quot;Invalid date&quot;;return v},ATOM:&quot;yy-mm-dd&quot;,COOKIE:&quot;D, dd M yy&quot;,ISO_8601:&quot;yy-mm-dd&quot;,RFC_822:&quot;D, d M y&quot;,RFC_850:&quot;DD, dd-M-y&quot;,RFC_1036:&quot;D, d M y&quot;,RFC_1123:&quot;D, d M yy&quot;,RFC_2822:&quot;D, d M yy&quot;,RSS:&quot;D, d M y&quot;,TICKS:&quot;!&quot;,TIMESTAMP:&quot;@&quot;,W3C:&quot;yy-mm-dd&quot;,_ticksTo1970:(718685+Math.floor(492.5)-Math.floor(19.7)+Math.floor(4.925))*24*<br></td></tr
><tr
id=sl_svn92_71

><td class="source">60*60*1E7,formatDate:function(a,b,c){if(!b)return&quot;&quot;;var e=(c?c.dayNamesShort:null)||this._defaults.dayNamesShort,f=(c?c.dayNames:null)||this._defaults.dayNames,h=(c?c.monthNamesShort:null)||this._defaults.monthNamesShort;c=(c?c.monthNames:null)||this._defaults.monthNames;var i=function(o){(o=j+1&lt;a.length&amp;&amp;a.charAt(j+1)==o)&amp;&amp;j++;return o},g=function(o,m,n){m=&quot;&quot;+m;if(i(o))for(;m.length&lt;n;)m=&quot;0&quot;+m;return m},k=function(o,m,n,r){return i(o)?r[m]:n[m]},l=&quot;&quot;,u=false;if(b)for(var j=0;j&lt;a.length;j++)if(u)if(a.charAt(j)==<br></td></tr
><tr
id=sl_svn92_72

><td class="source">&quot;&#39;&quot;&amp;&amp;!i(&quot;&#39;&quot;))u=false;else l+=a.charAt(j);else switch(a.charAt(j)){case &quot;d&quot;:l+=g(&quot;d&quot;,b.getDate(),2);break;case &quot;D&quot;:l+=k(&quot;D&quot;,b.getDay(),e,f);break;case &quot;o&quot;:l+=g(&quot;o&quot;,(b.getTime()-(new Date(b.getFullYear(),0,0)).getTime())/864E5,3);break;case &quot;m&quot;:l+=g(&quot;m&quot;,b.getMonth()+1,2);break;case &quot;M&quot;:l+=k(&quot;M&quot;,b.getMonth(),h,c);break;case &quot;y&quot;:l+=i(&quot;y&quot;)?b.getFullYear():(b.getYear()%100&lt;10?&quot;0&quot;:&quot;&quot;)+b.getYear()%100;break;case &quot;@&quot;:l+=b.getTime();break;case &quot;!&quot;:l+=b.getTime()*1E4+this._ticksTo1970;break;case &quot;&#39;&quot;:if(i(&quot;&#39;&quot;))l+=<br></td></tr
><tr
id=sl_svn92_73

><td class="source">&quot;&#39;&quot;;else u=true;break;default:l+=a.charAt(j)}return l},_possibleChars:function(a){for(var b=&quot;&quot;,c=false,e=function(h){(h=f+1&lt;a.length&amp;&amp;a.charAt(f+1)==h)&amp;&amp;f++;return h},f=0;f&lt;a.length;f++)if(c)if(a.charAt(f)==&quot;&#39;&quot;&amp;&amp;!e(&quot;&#39;&quot;))c=false;else b+=a.charAt(f);else switch(a.charAt(f)){case &quot;d&quot;:case &quot;m&quot;:case &quot;y&quot;:case &quot;@&quot;:b+=&quot;0123456789&quot;;break;case &quot;D&quot;:case &quot;M&quot;:return null;case &quot;&#39;&quot;:if(e(&quot;&#39;&quot;))b+=&quot;&#39;&quot;;else c=true;break;default:b+=a.charAt(f)}return b},_get:function(a,b){return a.settings[b]!==G?a.settings[b]:this._defaults[b]},<br></td></tr
><tr
id=sl_svn92_74

><td class="source">_setDateFromField:function(a,b){if(a.input.val()!=a.lastVal){var c=this._get(a,&quot;dateFormat&quot;),e=a.lastVal=a.input?a.input.val():null,f,h;f=h=this._getDefaultDate(a);var i=this._getFormatConfig(a);try{f=this.parseDate(c,e,i)||h}catch(g){this.log(g);e=b?&quot;&quot;:e}a.selectedDay=f.getDate();a.drawMonth=a.selectedMonth=f.getMonth();a.drawYear=a.selectedYear=f.getFullYear();a.currentDay=e?f.getDate():0;a.currentMonth=e?f.getMonth():0;a.currentYear=e?f.getFullYear():0;this._adjustInstDate(a)}},_getDefaultDate:function(a){return this._restrictMinMax(a,<br></td></tr
><tr
id=sl_svn92_75

><td class="source">this._determineDate(a,this._get(a,&quot;defaultDate&quot;),new Date))},_determineDate:function(a,b,c){var e=function(h){var i=new Date;i.setDate(i.getDate()+h);return i},f=function(h){try{return d.datepicker.parseDate(d.datepicker._get(a,&quot;dateFormat&quot;),h,d.datepicker._getFormatConfig(a))}catch(i){}var g=(h.toLowerCase().match(/^c/)?d.datepicker._getDate(a):null)||new Date,k=g.getFullYear(),l=g.getMonth();g=g.getDate();for(var u=/([+-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,j=u.exec(h);j;){switch(j[2]||&quot;d&quot;){case &quot;d&quot;:case &quot;D&quot;:g+=<br></td></tr
><tr
id=sl_svn92_76

><td class="source">parseInt(j[1],10);break;case &quot;w&quot;:case &quot;W&quot;:g+=parseInt(j[1],10)*7;break;case &quot;m&quot;:case &quot;M&quot;:l+=parseInt(j[1],10);g=Math.min(g,d.datepicker._getDaysInMonth(k,l));break;case &quot;y&quot;:case &quot;Y&quot;:k+=parseInt(j[1],10);g=Math.min(g,d.datepicker._getDaysInMonth(k,l));break}j=u.exec(h)}return new Date(k,l,g)};if(b=(b=b==null?c:typeof b==&quot;string&quot;?f(b):typeof b==&quot;number&quot;?isNaN(b)?c:e(b):b)&amp;&amp;b.toString()==&quot;Invalid Date&quot;?c:b){b.setHours(0);b.setMinutes(0);b.setSeconds(0);b.setMilliseconds(0)}return this._daylightSavingAdjust(b)},<br></td></tr
><tr
id=sl_svn92_77

><td class="source">_daylightSavingAdjust:function(a){if(!a)return null;a.setHours(a.getHours()&gt;12?a.getHours()+2:0);return a},_setDate:function(a,b,c){var e=!b,f=a.selectedMonth,h=a.selectedYear;b=this._restrictMinMax(a,this._determineDate(a,b,new Date));a.selectedDay=a.currentDay=b.getDate();a.drawMonth=a.selectedMonth=a.currentMonth=b.getMonth();a.drawYear=a.selectedYear=a.currentYear=b.getFullYear();if((f!=a.selectedMonth||h!=a.selectedYear)&amp;&amp;!c)this._notifyChange(a);this._adjustInstDate(a);if(a.input)a.input.val(e?<br></td></tr
><tr
id=sl_svn92_78

><td class="source">&quot;&quot;:this._formatDate(a))},_getDate:function(a){return!a.currentYear||a.input&amp;&amp;a.input.val()==&quot;&quot;?null:this._daylightSavingAdjust(new Date(a.currentYear,a.currentMonth,a.currentDay))},_generateHTML:function(a){var b=new Date;b=this._daylightSavingAdjust(new Date(b.getFullYear(),b.getMonth(),b.getDate()));var c=this._get(a,&quot;isRTL&quot;),e=this._get(a,&quot;showButtonPanel&quot;),f=this._get(a,&quot;hideIfNoPrevNext&quot;),h=this._get(a,&quot;navigationAsDateFormat&quot;),i=this._getNumberOfMonths(a),g=this._get(a,&quot;showCurrentAtPos&quot;),k=<br></td></tr
><tr
id=sl_svn92_79

><td class="source">this._get(a,&quot;stepMonths&quot;),l=i[0]!=1||i[1]!=1,u=this._daylightSavingAdjust(!a.currentDay?new Date(9999,9,9):new Date(a.currentYear,a.currentMonth,a.currentDay)),j=this._getMinMaxDate(a,&quot;min&quot;),o=this._getMinMaxDate(a,&quot;max&quot;);g=a.drawMonth-g;var m=a.drawYear;if(g&lt;0){g+=12;m--}if(o){var n=this._daylightSavingAdjust(new Date(o.getFullYear(),o.getMonth()-i[0]*i[1]+1,o.getDate()));for(n=j&amp;&amp;n&lt;j?j:n;this._daylightSavingAdjust(new Date(m,g,1))&gt;n;){g--;if(g&lt;0){g=11;m--}}}a.drawMonth=g;a.drawYear=m;n=this._get(a,<br></td></tr
><tr
id=sl_svn92_80

><td class="source">&quot;prevText&quot;);n=!h?n:this.formatDate(n,this._daylightSavingAdjust(new Date(m,g-k,1)),this._getFormatConfig(a));n=this._canAdjustMonth(a,-1,m,g)?&#39;&lt;a class=&quot;ui-datepicker-prev ui-corner-all&quot; onclick=&quot;DP_jQuery_&#39;+y+&quot;.datepicker._adjustDate(&#39;#&quot;+a.id+&quot;&#39;, -&quot;+k+&quot;, &#39;M&#39;);\&quot; title=\&quot;&quot;+n+&#39;&quot;&gt;&lt;span class=&quot;ui-icon ui-icon-circle-triangle-&#39;+(c?&quot;e&quot;:&quot;w&quot;)+&#39;&quot;&gt;&#39;+n+&quot;&lt;/span&gt;&lt;/a&gt;&quot;:f?&quot;&quot;:&#39;&lt;a class=&quot;ui-datepicker-prev ui-corner-all ui-state-disabled&quot; title=&quot;&#39;+n+&#39;&quot;&gt;&lt;span class=&quot;ui-icon ui-icon-circle-triangle-&#39;+(c?&quot;e&quot;:&quot;w&quot;)+&#39;&quot;&gt;&#39;+<br></td></tr
><tr
id=sl_svn92_81

><td class="source">n+&quot;&lt;/span&gt;&lt;/a&gt;&quot;;var r=this._get(a,&quot;nextText&quot;);r=!h?r:this.formatDate(r,this._daylightSavingAdjust(new Date(m,g+k,1)),this._getFormatConfig(a));f=this._canAdjustMonth(a,+1,m,g)?&#39;&lt;a class=&quot;ui-datepicker-next ui-corner-all&quot; onclick=&quot;DP_jQuery_&#39;+y+&quot;.datepicker._adjustDate(&#39;#&quot;+a.id+&quot;&#39;, +&quot;+k+&quot;, &#39;M&#39;);\&quot; title=\&quot;&quot;+r+&#39;&quot;&gt;&lt;span class=&quot;ui-icon ui-icon-circle-triangle-&#39;+(c?&quot;w&quot;:&quot;e&quot;)+&#39;&quot;&gt;&#39;+r+&quot;&lt;/span&gt;&lt;/a&gt;&quot;:f?&quot;&quot;:&#39;&lt;a class=&quot;ui-datepicker-next ui-corner-all ui-state-disabled&quot; title=&quot;&#39;+r+&#39;&quot;&gt;&lt;span class=&quot;ui-icon ui-icon-circle-triangle-&#39;+<br></td></tr
><tr
id=sl_svn92_82

><td class="source">(c?&quot;w&quot;:&quot;e&quot;)+&#39;&quot;&gt;&#39;+r+&quot;&lt;/span&gt;&lt;/a&gt;&quot;;k=this._get(a,&quot;currentText&quot;);r=this._get(a,&quot;gotoCurrent&quot;)&amp;&amp;a.currentDay?u:b;k=!h?k:this.formatDate(k,r,this._getFormatConfig(a));h=!a.inline?&#39;&lt;button type=&quot;button&quot; class=&quot;ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all&quot; onclick=&quot;DP_jQuery_&#39;+y+&#39;.datepicker._hideDatepicker();&quot;&gt;&#39;+this._get(a,&quot;closeText&quot;)+&quot;&lt;/button&gt;&quot;:&quot;&quot;;e=e?&#39;&lt;div class=&quot;ui-datepicker-buttonpane ui-widget-content&quot;&gt;&#39;+(c?h:&quot;&quot;)+(this._isInRange(a,r)?&#39;&lt;button type=&quot;button&quot; class=&quot;ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all&quot; onclick=&quot;DP_jQuery_&#39;+<br></td></tr
><tr
id=sl_svn92_83

><td class="source">y+&quot;.datepicker._gotoToday(&#39;#&quot;+a.id+&quot;&#39;);\&quot;&gt;&quot;+k+&quot;&lt;/button&gt;&quot;:&quot;&quot;)+(c?&quot;&quot;:h)+&quot;&lt;/div&gt;&quot;:&quot;&quot;;h=parseInt(this._get(a,&quot;firstDay&quot;),10);h=isNaN(h)?0:h;k=this._get(a,&quot;showWeek&quot;);r=this._get(a,&quot;dayNames&quot;);this._get(a,&quot;dayNamesShort&quot;);var s=this._get(a,&quot;dayNamesMin&quot;),z=this._get(a,&quot;monthNames&quot;),v=this._get(a,&quot;monthNamesShort&quot;),p=this._get(a,&quot;beforeShowDay&quot;),w=this._get(a,&quot;showOtherMonths&quot;),H=this._get(a,&quot;selectOtherMonths&quot;);this._get(a,&quot;calculateWeek&quot;);for(var M=this._getDefaultDate(a),I=&quot;&quot;,C=0;C&lt;i[0];C++){for(var N=<br></td></tr
><tr
id=sl_svn92_84

><td class="source">&quot;&quot;,D=0;D&lt;i[1];D++){var J=this._daylightSavingAdjust(new Date(m,g,a.selectedDay)),t=&quot; ui-corner-all&quot;,x=&quot;&quot;;if(l){x+=&#39;&lt;div class=&quot;ui-datepicker-group&#39;;if(i[1]&gt;1)switch(D){case 0:x+=&quot; ui-datepicker-group-first&quot;;t=&quot; ui-corner-&quot;+(c?&quot;right&quot;:&quot;left&quot;);break;case i[1]-1:x+=&quot; ui-datepicker-group-last&quot;;t=&quot; ui-corner-&quot;+(c?&quot;left&quot;:&quot;right&quot;);break;default:x+=&quot; ui-datepicker-group-middle&quot;;t=&quot;&quot;;break}x+=&#39;&quot;&gt;&#39;}x+=&#39;&lt;div class=&quot;ui-datepicker-header ui-widget-header ui-helper-clearfix&#39;+t+&#39;&quot;&gt;&#39;+(/all|left/.test(t)&amp;&amp;C==0?c?<br></td></tr
><tr
id=sl_svn92_85

><td class="source">f:n:&quot;&quot;)+(/all|right/.test(t)&amp;&amp;C==0?c?n:f:&quot;&quot;)+this._generateMonthYearHeader(a,g,m,j,o,C&gt;0||D&gt;0,z,v)+&#39;&lt;/div&gt;&lt;table class=&quot;ui-datepicker-calendar&quot;&gt;&lt;thead&gt;&lt;tr&gt;&#39;;var A=k?&#39;&lt;th class=&quot;ui-datepicker-week-col&quot;&gt;&#39;+this._get(a,&quot;weekHeader&quot;)+&quot;&lt;/th&gt;&quot;:&quot;&quot;;for(t=0;t&lt;7;t++){var q=(t+h)%7;A+=&quot;&lt;th&quot;+((t+h+6)%7&gt;=5?&#39; class=&quot;ui-datepicker-week-end&quot;&#39;:&quot;&quot;)+&#39;&gt;&lt;span title=&quot;&#39;+r[q]+&#39;&quot;&gt;&#39;+s[q]+&quot;&lt;/span&gt;&lt;/th&gt;&quot;}x+=A+&quot;&lt;/tr&gt;&lt;/thead&gt;&lt;tbody&gt;&quot;;A=this._getDaysInMonth(m,g);if(m==a.selectedYear&amp;&amp;g==a.selectedMonth)a.selectedDay=Math.min(a.selectedDay,<br></td></tr
><tr
id=sl_svn92_86

><td class="source">A);t=(this._getFirstDayOfMonth(m,g)-h+7)%7;A=l?6:Math.ceil((t+A)/7);q=this._daylightSavingAdjust(new Date(m,g,1-t));for(var O=0;O&lt;A;O++){x+=&quot;&lt;tr&gt;&quot;;var P=!k?&quot;&quot;:&#39;&lt;td class=&quot;ui-datepicker-week-col&quot;&gt;&#39;+this._get(a,&quot;calculateWeek&quot;)(q)+&quot;&lt;/td&gt;&quot;;for(t=0;t&lt;7;t++){var F=p?p.apply(a.input?a.input[0]:null,[q]):[true,&quot;&quot;],B=q.getMonth()!=g,K=B&amp;&amp;!H||!F[0]||j&amp;&amp;q&lt;j||o&amp;&amp;q&gt;o;P+=&#39;&lt;td class=&quot;&#39;+((t+h+6)%7&gt;=5?&quot; ui-datepicker-week-end&quot;:&quot;&quot;)+(B?&quot; ui-datepicker-other-month&quot;:&quot;&quot;)+(q.getTime()==J.getTime()&amp;&amp;g==a.selectedMonth&amp;&amp;<br></td></tr
><tr
id=sl_svn92_87

><td class="source">a._keyEvent||M.getTime()==q.getTime()&amp;&amp;M.getTime()==J.getTime()?&quot; &quot;+this._dayOverClass:&quot;&quot;)+(K?&quot; &quot;+this._unselectableClass+&quot; ui-state-disabled&quot;:&quot;&quot;)+(B&amp;&amp;!w?&quot;&quot;:&quot; &quot;+F[1]+(q.getTime()==u.getTime()?&quot; &quot;+this._currentClass:&quot;&quot;)+(q.getTime()==b.getTime()?&quot; ui-datepicker-today&quot;:&quot;&quot;))+&#39;&quot;&#39;+((!B||w)&amp;&amp;F[2]?&#39; title=&quot;&#39;+F[2]+&#39;&quot;&#39;:&quot;&quot;)+(K?&quot;&quot;:&#39; onclick=&quot;DP_jQuery_&#39;+y+&quot;.datepicker._selectDay(&#39;#&quot;+a.id+&quot;&#39;,&quot;+q.getMonth()+&quot;,&quot;+q.getFullYear()+&#39;, this);return false;&quot;&#39;)+&quot;&gt;&quot;+(B&amp;&amp;!w?&quot;&amp;#xa0;&quot;:K?&#39;&lt;span class=&quot;ui-state-default&quot;&gt;&#39;+q.getDate()+<br></td></tr
><tr
id=sl_svn92_88

><td class="source">&quot;&lt;/span&gt;&quot;:&#39;&lt;a class=&quot;ui-state-default&#39;+(q.getTime()==b.getTime()?&quot; ui-state-highlight&quot;:&quot;&quot;)+(q.getTime()==J.getTime()?&quot; ui-state-active&quot;:&quot;&quot;)+(B?&quot; ui-priority-secondary&quot;:&quot;&quot;)+&#39;&quot; href=&quot;#&quot;&gt;&#39;+q.getDate()+&quot;&lt;/a&gt;&quot;)+&quot;&lt;/td&gt;&quot;;q.setDate(q.getDate()+1);q=this._daylightSavingAdjust(q)}x+=P+&quot;&lt;/tr&gt;&quot;}g++;if(g&gt;11){g=0;m++}x+=&quot;&lt;/tbody&gt;&lt;/table&gt;&quot;+(l?&quot;&lt;/div&gt;&quot;+(i[0]&gt;0&amp;&amp;D==i[1]-1?&#39;&lt;div class=&quot;ui-datepicker-row-break&quot;&gt;&lt;/div&gt;&#39;:&quot;&quot;):&quot;&quot;);N+=x}I+=N}I+=e+(d.browser.msie&amp;&amp;parseInt(d.browser.version,10)&lt;7&amp;&amp;!a.inline?&#39;&lt;iframe src=&quot;javascript:false;&quot; class=&quot;ui-datepicker-cover&quot; frameborder=&quot;0&quot;&gt;&lt;/iframe&gt;&#39;:<br></td></tr
><tr
id=sl_svn92_89

><td class="source">&quot;&quot;);a._keyEvent=false;return I},_generateMonthYearHeader:function(a,b,c,e,f,h,i,g){var k=this._get(a,&quot;changeMonth&quot;),l=this._get(a,&quot;changeYear&quot;),u=this._get(a,&quot;showMonthAfterYear&quot;),j=&#39;&lt;div class=&quot;ui-datepicker-title&quot;&gt;&#39;,o=&quot;&quot;;if(h||!k)o+=&#39;&lt;span class=&quot;ui-datepicker-month&quot;&gt;&#39;+i[b]+&quot;&lt;/span&gt;&quot;;else{i=e&amp;&amp;e.getFullYear()==c;var m=f&amp;&amp;f.getFullYear()==c;o+=&#39;&lt;select class=&quot;ui-datepicker-month&quot; onchange=&quot;DP_jQuery_&#39;+y+&quot;.datepicker._selectMonthYear(&#39;#&quot;+a.id+&quot;&#39;, this, &#39;M&#39;);\&quot; onclick=\&quot;DP_jQuery_&quot;+y+&quot;.datepicker._clickMonthYear(&#39;#&quot;+<br></td></tr
><tr
id=sl_svn92_90

><td class="source">a.id+&quot;&#39;);\&quot;&gt;&quot;;for(var n=0;n&lt;12;n++)if((!i||n&gt;=e.getMonth())&amp;&amp;(!m||n&lt;=f.getMonth()))o+=&#39;&lt;option value=&quot;&#39;+n+&#39;&quot;&#39;+(n==b?&#39; selected=&quot;selected&quot;&#39;:&quot;&quot;)+&quot;&gt;&quot;+g[n]+&quot;&lt;/option&gt;&quot;;o+=&quot;&lt;/select&gt;&quot;}u||(j+=o+(h||!(k&amp;&amp;l)?&quot;&amp;#xa0;&quot;:&quot;&quot;));if(h||!l)j+=&#39;&lt;span class=&quot;ui-datepicker-year&quot;&gt;&#39;+c+&quot;&lt;/span&gt;&quot;;else{g=this._get(a,&quot;yearRange&quot;).split(&quot;:&quot;);var r=(new Date).getFullYear();i=function(s){s=s.match(/c[+-].*/)?c+parseInt(s.substring(1),10):s.match(/[+-].*/)?r+parseInt(s,10):parseInt(s,10);return isNaN(s)?r:s};b=i(g[0]);g=Math.max(b,<br></td></tr
><tr
id=sl_svn92_91

><td class="source">i(g[1]||&quot;&quot;));b=e?Math.max(b,e.getFullYear()):b;g=f?Math.min(g,f.getFullYear()):g;for(j+=&#39;&lt;select class=&quot;ui-datepicker-year&quot; onchange=&quot;DP_jQuery_&#39;+y+&quot;.datepicker._selectMonthYear(&#39;#&quot;+a.id+&quot;&#39;, this, &#39;Y&#39;);\&quot; onclick=\&quot;DP_jQuery_&quot;+y+&quot;.datepicker._clickMonthYear(&#39;#&quot;+a.id+&quot;&#39;);\&quot;&gt;&quot;;b&lt;=g;b++)j+=&#39;&lt;option value=&quot;&#39;+b+&#39;&quot;&#39;+(b==c?&#39; selected=&quot;selected&quot;&#39;:&quot;&quot;)+&quot;&gt;&quot;+b+&quot;&lt;/option&gt;&quot;;j+=&quot;&lt;/select&gt;&quot;}j+=this._get(a,&quot;yearSuffix&quot;);if(u)j+=(h||!(k&amp;&amp;l)?&quot;&amp;#xa0;&quot;:&quot;&quot;)+o;j+=&quot;&lt;/div&gt;&quot;;return j},_adjustInstDate:function(a,b,c){var e=<br></td></tr
><tr
id=sl_svn92_92

><td class="source">a.drawYear+(c==&quot;Y&quot;?b:0),f=a.drawMonth+(c==&quot;M&quot;?b:0);b=Math.min(a.selectedDay,this._getDaysInMonth(e,f))+(c==&quot;D&quot;?b:0);e=this._restrictMinMax(a,this._daylightSavingAdjust(new Date(e,f,b)));a.selectedDay=e.getDate();a.drawMonth=a.selectedMonth=e.getMonth();a.drawYear=a.selectedYear=e.getFullYear();if(c==&quot;M&quot;||c==&quot;Y&quot;)this._notifyChange(a)},_restrictMinMax:function(a,b){var c=this._getMinMaxDate(a,&quot;min&quot;);a=this._getMinMaxDate(a,&quot;max&quot;);b=c&amp;&amp;b&lt;c?c:b;return b=a&amp;&amp;b&gt;a?a:b},_notifyChange:function(a){var b=this._get(a,<br></td></tr
><tr
id=sl_svn92_93

><td class="source">&quot;onChangeMonthYear&quot;);if(b)b.apply(a.input?a.input[0]:null,[a.selectedYear,a.selectedMonth+1,a])},_getNumberOfMonths:function(a){a=this._get(a,&quot;numberOfMonths&quot;);return a==null?[1,1]:typeof a==&quot;number&quot;?[1,a]:a},_getMinMaxDate:function(a,b){return this._determineDate(a,this._get(a,b+&quot;Date&quot;),null)},_getDaysInMonth:function(a,b){return 32-(new Date(a,b,32)).getDate()},_getFirstDayOfMonth:function(a,b){return(new Date(a,b,1)).getDay()},_canAdjustMonth:function(a,b,c,e){var f=this._getNumberOfMonths(a);<br></td></tr
><tr
id=sl_svn92_94

><td class="source">c=this._daylightSavingAdjust(new Date(c,e+(b&lt;0?b:f[0]*f[1]),1));b&lt;0&amp;&amp;c.setDate(this._getDaysInMonth(c.getFullYear(),c.getMonth()));return this._isInRange(a,c)},_isInRange:function(a,b){var c=this._getMinMaxDate(a,&quot;min&quot;);a=this._getMinMaxDate(a,&quot;max&quot;);return(!c||b.getTime()&gt;=c.getTime())&amp;&amp;(!a||b.getTime()&lt;=a.getTime())},_getFormatConfig:function(a){var b=this._get(a,&quot;shortYearCutoff&quot;);b=typeof b!=&quot;string&quot;?b:(new Date).getFullYear()%100+parseInt(b,10);return{shortYearCutoff:b,dayNamesShort:this._get(a,<br></td></tr
><tr
id=sl_svn92_95

><td class="source">&quot;dayNamesShort&quot;),dayNames:this._get(a,&quot;dayNames&quot;),monthNamesShort:this._get(a,&quot;monthNamesShort&quot;),monthNames:this._get(a,&quot;monthNames&quot;)}},_formatDate:function(a,b,c,e){if(!b){a.currentDay=a.selectedDay;a.currentMonth=a.selectedMonth;a.currentYear=a.selectedYear}b=b?typeof b==&quot;object&quot;?b:this._daylightSavingAdjust(new Date(e,c,b)):this._daylightSavingAdjust(new Date(a.currentYear,a.currentMonth,a.currentDay));return this.formatDate(this._get(a,&quot;dateFormat&quot;),b,this._getFormatConfig(a))}});d.fn.datepicker=<br></td></tr
><tr
id=sl_svn92_96

><td class="source">function(a){if(!d.datepicker.initialized){d(document).mousedown(d.datepicker._checkExternalClick).find(&quot;body&quot;).append(d.datepicker.dpDiv);d.datepicker.initialized=true}var b=Array.prototype.slice.call(arguments,1);if(typeof a==&quot;string&quot;&amp;&amp;(a==&quot;isDisabled&quot;||a==&quot;getDate&quot;||a==&quot;widget&quot;))return d.datepicker[&quot;_&quot;+a+&quot;Datepicker&quot;].apply(d.datepicker,[this[0]].concat(b));if(a==&quot;option&quot;&amp;&amp;arguments.length==2&amp;&amp;typeof arguments[1]==&quot;string&quot;)return d.datepicker[&quot;_&quot;+a+&quot;Datepicker&quot;].apply(d.datepicker,[this[0]].concat(b));<br></td></tr
><tr
id=sl_svn92_97

><td class="source">return this.each(function(){typeof a==&quot;string&quot;?d.datepicker[&quot;_&quot;+a+&quot;Datepicker&quot;].apply(d.datepicker,[this].concat(b)):d.datepicker._attachDatepicker(this,a)})};d.datepicker=new L;d.datepicker.initialized=false;d.datepicker.uuid=(new Date).getTime();d.datepicker.version=&quot;1.8.5&quot;;window[&quot;DP_jQuery_&quot;+y]=d})(jQuery);<br></td></tr
><tr
id=sl_svn92_98

><td class="source">;<br></td></tr
></table></pre>
<pre><table width="100%"><tr class="cursor_stop cursor_hidden"><td></td></tr></table></pre>
</td>
</tr></table>

 
<script type="text/javascript">
 var lineNumUnderMouse = -1;
 
 function gutterOver(num) {
 gutterOut();
 var newTR = document.getElementById('gr_svn92_' + num);
 if (newTR) {
 newTR.className = 'undermouse';
 }
 lineNumUnderMouse = num;
 }
 function gutterOut() {
 if (lineNumUnderMouse != -1) {
 var oldTR = document.getElementById(
 'gr_svn92_' + lineNumUnderMouse);
 if (oldTR) {
 oldTR.className = '';
 }
 lineNumUnderMouse = -1;
 }
 }
 var numsGenState = {table_base_id: 'nums_table_'};
 var srcGenState = {table_base_id: 'src_table_'};
 var alignerRunning = false;
 var startOver = false;
 function setLineNumberHeights() {
 if (alignerRunning) {
 startOver = true;
 return;
 }
 numsGenState.chunk_id = 0;
 numsGenState.table = document.getElementById('nums_table_0');
 numsGenState.row_num = 0;
 if (!numsGenState.table) {
 return; // Silently exit if no file is present.
 }
 srcGenState.chunk_id = 0;
 srcGenState.table = document.getElementById('src_table_0');
 srcGenState.row_num = 0;
 alignerRunning = true;
 continueToSetLineNumberHeights();
 }
 function rowGenerator(genState) {
 if (genState.row_num < genState.table.rows.length) {
 var currentRow = genState.table.rows[genState.row_num];
 genState.row_num++;
 return currentRow;
 }
 var newTable = document.getElementById(
 genState.table_base_id + (genState.chunk_id + 1));
 if (newTable) {
 genState.chunk_id++;
 genState.row_num = 0;
 genState.table = newTable;
 return genState.table.rows[0];
 }
 return null;
 }
 var MAX_ROWS_PER_PASS = 1000;
 function continueToSetLineNumberHeights() {
 var rowsInThisPass = 0;
 var numRow = 1;
 var srcRow = 1;
 while (numRow && srcRow && rowsInThisPass < MAX_ROWS_PER_PASS) {
 numRow = rowGenerator(numsGenState);
 srcRow = rowGenerator(srcGenState);
 rowsInThisPass++;
 if (numRow && srcRow) {
 if (numRow.offsetHeight != srcRow.offsetHeight) {
 numRow.firstChild.style.height = srcRow.offsetHeight + 'px';
 }
 }
 }
 if (rowsInThisPass >= MAX_ROWS_PER_PASS) {
 setTimeout(continueToSetLineNumberHeights, 10);
 } else {
 alignerRunning = false;
 if (startOver) {
 startOver = false;
 setTimeout(setLineNumberHeights, 500);
 }
 }
 }
 function initLineNumberHeights() {
 // Do 2 complete passes, because there can be races
 // between this code and prettify.
 startOver = true;
 setTimeout(setLineNumberHeights, 250);
 window.onresize = setLineNumberHeights;
 }
 initLineNumberHeights();
</script>

 
 
 <div id="log">
 <div style="text-align:right">
 <a class="ifCollapse" href="#" onclick="_toggleMeta(this); return false">Show details</a>
 <a class="ifExpand" href="#" onclick="_toggleMeta(this); return false">Hide details</a>
 </div>
 <div class="ifExpand">
 
 
 <div class="pmeta_bubble_bg" style="border:1px solid white">
 <div class="round4"></div>
 <div class="round2"></div>
 <div class="round1"></div>
 <div class="box-inner">
 <div id="changelog">
 <p>Change log</p>
 <div>
 <a href="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/detail?spec=svn92&amp;r=88">r88</a>
 by paul.beusterien
 on Apr 11, 2011
 &nbsp; <a href="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/diff?spec=svn92&r=88&amp;format=side&amp;path=/trunk/com.mds.apg/resources/jqm/demo2/experiments/ui-datepicker/jQuery.ui.datepicker.js&amp;old_path=/trunk/com.mds.apg/resources/jqm/demo2/experiments/ui-datepicker/jQuery.ui.datepicker.js&amp;old=">Diff</a>
 </div>
 <pre>Update jqm ui demo to latest from alpha
4.1</pre>
 </div>
 
 
 
 
 
 
 <script type="text/javascript">
 var detail_url = '/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/detail?r=88&spec=svn92';
 var publish_url = '/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/detail?r=88&spec=svn92#publish';
 // describe the paths of this revision in javascript.
 var changed_paths = [];
 var changed_urls = [];
 
 changed_paths.push('/trunk/com.mds.apg/resources/jqm/demo');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo?r\x3d88\x26spec\x3dsvn92');
 
 
 changed_paths.push('/trunk/com.mds.apg/resources/jqm/demo2');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2?r\x3d88\x26spec\x3dsvn92');
 
 
 changed_paths.push('/trunk/com.mds.apg/resources/jqm/demo2/docs');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs?r\x3d88\x26spec\x3dsvn92');
 
 
 changed_paths.push('/trunk/com.mds.apg/resources/jqm/demo2/docs/about');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/about?r\x3d88\x26spec\x3dsvn92');
 
 
 changed_paths.push('/trunk/com.mds.apg/resources/jqm/demo2/docs/about/accessibility.html');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/about/accessibility.html?r\x3d88\x26spec\x3dsvn92');
 
 
 changed_paths.push('/trunk/com.mds.apg/resources/jqm/demo2/docs/about/features.html');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/about/features.html?r\x3d88\x26spec\x3dsvn92');
 
 
 changed_paths.push('/trunk/com.mds.apg/resources/jqm/demo2/docs/about/index.html');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/about/index.html?r\x3d88\x26spec\x3dsvn92');
 
 
 changed_paths.push('/trunk/com.mds.apg/resources/jqm/demo2/docs/about/intro.html');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/about/intro.html?r\x3d88\x26spec\x3dsvn92');
 
 
 changed_paths.push('/trunk/com.mds.apg/resources/jqm/demo2/docs/about/platforms.html');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/about/platforms.html?r\x3d88\x26spec\x3dsvn92');
 
 
 changed_paths.push('/trunk/com.mds.apg/resources/jqm/demo2/docs/api');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/api?r\x3d88\x26spec\x3dsvn92');
 
 
 changed_paths.push('/trunk/com.mds.apg/resources/jqm/demo2/docs/api/events.html');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/api/events.html?r\x3d88\x26spec\x3dsvn92');
 
 
 changed_paths.push('/trunk/com.mds.apg/resources/jqm/demo2/docs/api/globalconfig.html');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/api/globalconfig.html?r\x3d88\x26spec\x3dsvn92');
 
 
 changed_paths.push('/trunk/com.mds.apg/resources/jqm/demo2/docs/api/index.html');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/api/index.html?r\x3d88\x26spec\x3dsvn92');
 
 
 changed_paths.push('/trunk/com.mds.apg/resources/jqm/demo2/docs/api/mediahelpers.html');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/api/mediahelpers.html?r\x3d88\x26spec\x3dsvn92');
 
 
 changed_paths.push('/trunk/com.mds.apg/resources/jqm/demo2/docs/api/methods.html');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/api/methods.html?r\x3d88\x26spec\x3dsvn92');
 
 
 changed_paths.push('/trunk/com.mds.apg/resources/jqm/demo2/docs/api/themes.html');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/api/themes.html?r\x3d88\x26spec\x3dsvn92');
 
 
 changed_paths.push('/trunk/com.mds.apg/resources/jqm/demo2/docs/assets');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/assets?r\x3d88\x26spec\x3dsvn92');
 
 
 changed_paths.push('/trunk/com.mds.apg/resources/jqm/demo2/docs/assets/css');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/assets/css?r\x3d88\x26spec\x3dsvn92');
 
 
 changed_paths.push('/trunk/com.mds.apg/resources/jqm/demo2/docs/assets/css/jqm-docs.css');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/assets/css/jqm-docs.css?r\x3d88\x26spec\x3dsvn92');
 
 
 changed_paths.push('/trunk/com.mds.apg/resources/jqm/demo2/docs/assets/images');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/assets/images?r\x3d88\x26spec\x3dsvn92');
 
 
 changed_paths.push('/trunk/com.mds.apg/resources/jqm/demo2/docs/assets/images/ipad-palm.png');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/assets/images/ipad-palm.png?r\x3d88\x26spec\x3dsvn92');
 
 
 changed_paths.push('/trunk/com.mds.apg/resources/jqm/demo2/docs/assets/images/jqm-sitebg.png');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/assets/images/jqm-sitebg.png?r\x3d88\x26spec\x3dsvn92');
 
 
 changed_paths.push('/trunk/com.mds.apg/resources/jqm/demo2/docs/assets/images/jquery-logo.png');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/assets/images/jquery-logo.png?r\x3d88\x26spec\x3dsvn92');
 
 
 changed_paths.push('/trunk/com.mds.apg/resources/jqm/demo2/docs/assets/images/mobile-devices.png');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/assets/images/mobile-devices.png?r\x3d88\x26spec\x3dsvn92');
 
 
 changed_paths.push('/trunk/com.mds.apg/resources/jqm/demo2/docs/assets/images/version.png');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/assets/images/version.png?r\x3d88\x26spec\x3dsvn92');
 
 
 changed_paths.push('/trunk/com.mds.apg/resources/jqm/demo2/docs/assets/js');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/assets/js?r\x3d88\x26spec\x3dsvn92');
 
 
 changed_paths.push('/trunk/com.mds.apg/resources/jqm/demo2/docs/assets/js/_viewsource.js');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/assets/js/_viewsource.js?r\x3d88\x26spec\x3dsvn92');
 
 
 changed_paths.push('/trunk/com.mds.apg/resources/jqm/demo2/docs/assets/js/jqm-docs.js');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/assets/js/jqm-docs.js?r\x3d88\x26spec\x3dsvn92');
 
 
 changed_paths.push('/trunk/com.mds.apg/resources/jqm/demo2/docs/buttons');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/buttons?r\x3d88\x26spec\x3dsvn92');
 
 
 changed_paths.push('/trunk/com.mds.apg/resources/jqm/demo2/docs/buttons/api-buttons.html');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/buttons/api-buttons.html?r\x3d88\x26spec\x3dsvn92');
 
 
 changed_paths.push('/trunk/com.mds.apg/resources/jqm/demo2/docs/buttons/buttons-grouped.html');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/buttons/buttons-grouped.html?r\x3d88\x26spec\x3dsvn92');
 
 
 changed_paths.push('/trunk/com.mds.apg/resources/jqm/demo2/docs/buttons/buttons-icons.html');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/buttons/buttons-icons.html?r\x3d88\x26spec\x3dsvn92');
 
 
 changed_paths.push('/trunk/com.mds.apg/resources/jqm/demo2/docs/buttons/buttons-inline.html');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/buttons/buttons-inline.html?r\x3d88\x26spec\x3dsvn92');
 
 
 changed_paths.push('/trunk/com.mds.apg/resources/jqm/demo2/docs/buttons/buttons-themes.html');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/buttons/buttons-themes.html?r\x3d88\x26spec\x3dsvn92');
 
 
 changed_paths.push('/trunk/com.mds.apg/resources/jqm/demo2/docs/buttons/buttons-types.html');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/buttons/buttons-types.html?r\x3d88\x26spec\x3dsvn92');
 
 
 changed_paths.push('/trunk/com.mds.apg/resources/jqm/demo2/docs/buttons/index.html');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/buttons/index.html?r\x3d88\x26spec\x3dsvn92');
 
 
 changed_paths.push('/trunk/com.mds.apg/resources/jqm/demo2/docs/content');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/content?r\x3d88\x26spec\x3dsvn92');
 
 
 changed_paths.push('/trunk/com.mds.apg/resources/jqm/demo2/docs/content/api-content.html');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/content/api-content.html?r\x3d88\x26spec\x3dsvn92');
 
 
 changed_paths.push('/trunk/com.mds.apg/resources/jqm/demo2/docs/content/content-collapsible.html');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/content/content-collapsible.html?r\x3d88\x26spec\x3dsvn92');
 
 
 changed_paths.push('/trunk/com.mds.apg/resources/jqm/demo2/docs/content/content-grids.html');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/content/content-grids.html?r\x3d88\x26spec\x3dsvn92');
 
 
 changed_paths.push('/trunk/com.mds.apg/resources/jqm/demo2/docs/content/content-html.html');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/content/content-html.html?r\x3d88\x26spec\x3dsvn92');
 
 
 changed_paths.push('/trunk/com.mds.apg/resources/jqm/demo2/docs/content/content-themes.html');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/content/content-themes.html?r\x3d88\x26spec\x3dsvn92');
 
 
 changed_paths.push('/trunk/com.mds.apg/resources/jqm/demo2/docs/content/index.html');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/content/index.html?r\x3d88\x26spec\x3dsvn92');
 
 
 changed_paths.push('/trunk/com.mds.apg/resources/jqm/demo2/docs/forms');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/forms?r\x3d88\x26spec\x3dsvn92');
 
 
 changed_paths.push('/trunk/com.mds.apg/resources/jqm/demo2/docs/forms/api-forms.html');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/forms/api-forms.html?r\x3d88\x26spec\x3dsvn92');
 
 
 changed_paths.push('/trunk/com.mds.apg/resources/jqm/demo2/docs/forms/docs-forms.html');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/forms/docs-forms.html?r\x3d88\x26spec\x3dsvn92');
 
 
 changed_paths.push('/trunk/com.mds.apg/resources/jqm/demo2/docs/forms/forms-all-native.html');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/forms/forms-all-native.html?r\x3d88\x26spec\x3dsvn92');
 
 
 changed_paths.push('/trunk/com.mds.apg/resources/jqm/demo2/docs/forms/forms-all.html');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/forms/forms-all.html?r\x3d88\x26spec\x3dsvn92');
 
 
 changed_paths.push('/trunk/com.mds.apg/resources/jqm/demo2/docs/forms/forms-checkboxes.html');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/forms/forms-checkboxes.html?r\x3d88\x26spec\x3dsvn92');
 
 
 changed_paths.push('/trunk/com.mds.apg/resources/jqm/demo2/docs/forms/forms-radiobuttons.html');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/forms/forms-radiobuttons.html?r\x3d88\x26spec\x3dsvn92');
 
 
 changed_paths.push('/trunk/com.mds.apg/resources/jqm/demo2/docs/forms/forms-sample-response.php');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/forms/forms-sample-response.php?r\x3d88\x26spec\x3dsvn92');
 
 
 changed_paths.push('/trunk/com.mds.apg/resources/jqm/demo2/docs/forms/forms-sample-selfsubmit.php');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/forms/forms-sample-selfsubmit.php?r\x3d88\x26spec\x3dsvn92');
 
 
 changed_paths.push('/trunk/com.mds.apg/resources/jqm/demo2/docs/forms/forms-sample.html');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/forms/forms-sample.html?r\x3d88\x26spec\x3dsvn92');
 
 
 changed_paths.push('/trunk/com.mds.apg/resources/jqm/demo2/docs/forms/forms-search.html');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/forms/forms-search.html?r\x3d88\x26spec\x3dsvn92');
 
 
 changed_paths.push('/trunk/com.mds.apg/resources/jqm/demo2/docs/forms/forms-selects.html');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/forms/forms-selects.html?r\x3d88\x26spec\x3dsvn92');
 
 
 changed_paths.push('/trunk/com.mds.apg/resources/jqm/demo2/docs/forms/forms-slider.html');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/forms/forms-slider.html?r\x3d88\x26spec\x3dsvn92');
 
 
 changed_paths.push('/trunk/com.mds.apg/resources/jqm/demo2/docs/forms/forms-switch.html');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/forms/forms-switch.html?r\x3d88\x26spec\x3dsvn92');
 
 
 changed_paths.push('/trunk/com.mds.apg/resources/jqm/demo2/docs/forms/forms-text.html');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/forms/forms-text.html?r\x3d88\x26spec\x3dsvn92');
 
 
 changed_paths.push('/trunk/com.mds.apg/resources/jqm/demo2/docs/forms/forms-themes.html');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/forms/forms-themes.html?r\x3d88\x26spec\x3dsvn92');
 
 
 changed_paths.push('/trunk/com.mds.apg/resources/jqm/demo2/docs/forms/index.html');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/forms/index.html?r\x3d88\x26spec\x3dsvn92');
 
 
 changed_paths.push('/trunk/com.mds.apg/resources/jqm/demo2/docs/forms/plugin-eventsmethods.html');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/forms/plugin-eventsmethods.html?r\x3d88\x26spec\x3dsvn92');
 
 
 changed_paths.push('/trunk/com.mds.apg/resources/jqm/demo2/docs/index.html');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/index.html?r\x3d88\x26spec\x3dsvn92');
 
 
 changed_paths.push('/trunk/com.mds.apg/resources/jqm/demo2/docs/lists');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/lists?r\x3d88\x26spec\x3dsvn92');
 
 
 changed_paths.push('/trunk/com.mds.apg/resources/jqm/demo2/docs/lists/api-lists.html');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/lists/api-lists.html?r\x3d88\x26spec\x3dsvn92');
 
 
 changed_paths.push('/trunk/com.mds.apg/resources/jqm/demo2/docs/lists/docs-lists.html');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/lists/docs-lists.html?r\x3d88\x26spec\x3dsvn92');
 
 
 changed_paths.push('/trunk/com.mds.apg/resources/jqm/demo2/docs/lists/images');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/lists/images?r\x3d88\x26spec\x3dsvn92');
 
 
 changed_paths.push('/trunk/com.mds.apg/resources/jqm/demo2/docs/lists/images/album-af.jpg');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/lists/images/album-af.jpg?r\x3d88\x26spec\x3dsvn92');
 
 
 changed_paths.push('/trunk/com.mds.apg/resources/jqm/demo2/docs/lists/images/album-ag.jpg');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/lists/images/album-ag.jpg?r\x3d88\x26spec\x3dsvn92');
 
 
 changed_paths.push('/trunk/com.mds.apg/resources/jqm/demo2/docs/lists/images/album-bb.jpg');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/lists/images/album-bb.jpg?r\x3d88\x26spec\x3dsvn92');
 
 
 changed_paths.push('/trunk/com.mds.apg/resources/jqm/demo2/docs/lists/images/album-bk.jpg');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/lists/images/album-bk.jpg?r\x3d88\x26spec\x3dsvn92');
 
 
 changed_paths.push('/trunk/com.mds.apg/resources/jqm/demo2/docs/lists/images/album-hc.jpg');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/lists/images/album-hc.jpg?r\x3d88\x26spec\x3dsvn92');
 
 
 changed_paths.push('/trunk/com.mds.apg/resources/jqm/demo2/docs/lists/images/album-k.jpg');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/lists/images/album-k.jpg?r\x3d88\x26spec\x3dsvn92');
 
 
 changed_paths.push('/trunk/com.mds.apg/resources/jqm/demo2/docs/lists/images/album-mg.jpg');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/lists/images/album-mg.jpg?r\x3d88\x26spec\x3dsvn92');
 
 
 changed_paths.push('/trunk/com.mds.apg/resources/jqm/demo2/docs/lists/images/album-ok.jpg');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/lists/images/album-ok.jpg?r\x3d88\x26spec\x3dsvn92');
 
 
 changed_paths.push('/trunk/com.mds.apg/resources/jqm/demo2/docs/lists/images/album-p.jpg');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/lists/images/album-p.jpg?r\x3d88\x26spec\x3dsvn92');
 
 
 changed_paths.push('/trunk/com.mds.apg/resources/jqm/demo2/docs/lists/images/album-rh.jpg');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/lists/images/album-rh.jpg?r\x3d88\x26spec\x3dsvn92');
 
 
 changed_paths.push('/trunk/com.mds.apg/resources/jqm/demo2/docs/lists/images/album-ws.jpg');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/lists/images/album-ws.jpg?r\x3d88\x26spec\x3dsvn92');
 
 
 changed_paths.push('/trunk/com.mds.apg/resources/jqm/demo2/docs/lists/images/album-xx.jpg');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/lists/images/album-xx.jpg?r\x3d88\x26spec\x3dsvn92');
 
 
 changed_paths.push('/trunk/com.mds.apg/resources/jqm/demo2/docs/lists/images/de.png');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/lists/images/de.png?r\x3d88\x26spec\x3dsvn92');
 
 
 changed_paths.push('/trunk/com.mds.apg/resources/jqm/demo2/docs/lists/images/fi.png');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/lists/images/fi.png?r\x3d88\x26spec\x3dsvn92');
 
 
 changed_paths.push('/trunk/com.mds.apg/resources/jqm/demo2/docs/lists/images/gb.png');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/lists/images/gb.png?r\x3d88\x26spec\x3dsvn92');
 
 
 changed_paths.push('/trunk/com.mds.apg/resources/jqm/demo2/docs/lists/images/gf.png');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/lists/images/gf.png?r\x3d88\x26spec\x3dsvn92');
 
 
 changed_paths.push('/trunk/com.mds.apg/resources/jqm/demo2/docs/lists/images/sj.png');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/lists/images/sj.png?r\x3d88\x26spec\x3dsvn92');
 
 
 changed_paths.push('/trunk/com.mds.apg/resources/jqm/demo2/docs/lists/images/us.png');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/lists/images/us.png?r\x3d88\x26spec\x3dsvn92');
 
 
 changed_paths.push('/trunk/com.mds.apg/resources/jqm/demo2/docs/lists/index.html');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/lists/index.html?r\x3d88\x26spec\x3dsvn92');
 
 
 changed_paths.push('/trunk/com.mds.apg/resources/jqm/demo2/docs/lists/lists-all-full.html');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/lists/lists-all-full.html?r\x3d88\x26spec\x3dsvn92');
 
 
 changed_paths.push('/trunk/com.mds.apg/resources/jqm/demo2/docs/lists/lists-count.html');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/lists/lists-count.html?r\x3d88\x26spec\x3dsvn92');
 
 
 changed_paths.push('/trunk/com.mds.apg/resources/jqm/demo2/docs/lists/lists-divider.html');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/lists/lists-divider.html?r\x3d88\x26spec\x3dsvn92');
 
 
 changed_paths.push('/trunk/com.mds.apg/resources/jqm/demo2/docs/lists/lists-formatting.html');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/lists/lists-formatting.html?r\x3d88\x26spec\x3dsvn92');
 
 
 changed_paths.push('/trunk/com.mds.apg/resources/jqm/demo2/docs/lists/lists-forms-inset.html');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/lists/lists-forms-inset.html?r\x3d88\x26spec\x3dsvn92');
 
 
 changed_paths.push('/trunk/com.mds.apg/resources/jqm/demo2/docs/lists/lists-forms.html');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/lists/lists-forms.html?r\x3d88\x26spec\x3dsvn92');
 
 
 changed_paths.push('/trunk/com.mds.apg/resources/jqm/demo2/docs/lists/lists-icons.html');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/lists/lists-icons.html?r\x3d88\x26spec\x3dsvn92');
 
 
 changed_paths.push('/trunk/com.mds.apg/resources/jqm/demo2/docs/lists/lists-inset.html');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/lists/lists-inset.html?r\x3d88\x26spec\x3dsvn92');
 
 
 changed_paths.push('/trunk/com.mds.apg/resources/jqm/demo2/docs/lists/lists-nested.html');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/lists/lists-nested.html?r\x3d88\x26spec\x3dsvn92');
 
 
 changed_paths.push('/trunk/com.mds.apg/resources/jqm/demo2/docs/lists/lists-ol.html');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/lists/lists-ol.html?r\x3d88\x26spec\x3dsvn92');
 
 
 changed_paths.push('/trunk/com.mds.apg/resources/jqm/demo2/docs/lists/lists-performance.html');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/lists/lists-performance.html?r\x3d88\x26spec\x3dsvn92');
 
 
 changed_paths.push('/trunk/com.mds.apg/resources/jqm/demo2/docs/lists/lists-readonly-inset.html');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/lists/lists-readonly-inset.html?r\x3d88\x26spec\x3dsvn92');
 
 
 changed_paths.push('/trunk/com.mds.apg/resources/jqm/demo2/docs/lists/lists-readonly.html');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/lists/lists-readonly.html?r\x3d88\x26spec\x3dsvn92');
 
 
 changed_paths.push('/trunk/com.mds.apg/resources/jqm/demo2/docs/lists/lists-search-inset.html');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/lists/lists-search-inset.html?r\x3d88\x26spec\x3dsvn92');
 
 
 changed_paths.push('/trunk/com.mds.apg/resources/jqm/demo2/docs/lists/lists-search-with-dividers.html');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/lists/lists-search-with-dividers.html?r\x3d88\x26spec\x3dsvn92');
 
 
 changed_paths.push('/trunk/com.mds.apg/resources/jqm/demo2/docs/lists/lists-search.html');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/lists/lists-search.html?r\x3d88\x26spec\x3dsvn92');
 
 
 changed_paths.push('/trunk/com.mds.apg/resources/jqm/demo2/docs/lists/lists-split-purchase.html');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/lists/lists-split-purchase.html?r\x3d88\x26spec\x3dsvn92');
 
 
 changed_paths.push('/trunk/com.mds.apg/resources/jqm/demo2/docs/lists/lists-split.html');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/lists/lists-split.html?r\x3d88\x26spec\x3dsvn92');
 
 
 changed_paths.push('/trunk/com.mds.apg/resources/jqm/demo2/docs/lists/lists-themes.html');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/lists/lists-themes.html?r\x3d88\x26spec\x3dsvn92');
 
 
 changed_paths.push('/trunk/com.mds.apg/resources/jqm/demo2/docs/lists/lists-thumbnails.html');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/lists/lists-thumbnails.html?r\x3d88\x26spec\x3dsvn92');
 
 
 changed_paths.push('/trunk/com.mds.apg/resources/jqm/demo2/docs/lists/lists-ul.html');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/lists/lists-ul.html?r\x3d88\x26spec\x3dsvn92');
 
 
 changed_paths.push('/trunk/com.mds.apg/resources/jqm/demo2/docs/pages');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/pages?r\x3d88\x26spec\x3dsvn92');
 
 
 changed_paths.push('/trunk/com.mds.apg/resources/jqm/demo2/docs/pages/api-pages.html');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/pages/api-pages.html?r\x3d88\x26spec\x3dsvn92');
 
 
 changed_paths.push('/trunk/com.mds.apg/resources/jqm/demo2/docs/pages/dialog-alt.html');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/pages/dialog-alt.html?r\x3d88\x26spec\x3dsvn92');
 
 
 changed_paths.push('/trunk/com.mds.apg/resources/jqm/demo2/docs/pages/dialog-buttons.html');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/pages/dialog-buttons.html?r\x3d88\x26spec\x3dsvn92');
 
 
 changed_paths.push('/trunk/com.mds.apg/resources/jqm/demo2/docs/pages/dialog-success.html');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/pages/dialog-success.html?r\x3d88\x26spec\x3dsvn92');
 
 
 changed_paths.push('/trunk/com.mds.apg/resources/jqm/demo2/docs/pages/dialog-with-select.html');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/pages/dialog-with-select.html?r\x3d88\x26spec\x3dsvn92');
 
 
 changed_paths.push('/trunk/com.mds.apg/resources/jqm/demo2/docs/pages/dialog.html');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/pages/dialog.html?r\x3d88\x26spec\x3dsvn92');
 
 
 changed_paths.push('/trunk/com.mds.apg/resources/jqm/demo2/docs/pages/docs-dialogs.html');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/pages/docs-dialogs.html?r\x3d88\x26spec\x3dsvn92');
 
 
 changed_paths.push('/trunk/com.mds.apg/resources/jqm/demo2/docs/pages/docs-link-scenarios.html');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/pages/docs-link-scenarios.html?r\x3d88\x26spec\x3dsvn92');
 
 
 changed_paths.push('/trunk/com.mds.apg/resources/jqm/demo2/docs/pages/docs-links-urltest');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/pages/docs-links-urltest?r\x3d88\x26spec\x3dsvn92');
 
 
 changed_paths.push('/trunk/com.mds.apg/resources/jqm/demo2/docs/pages/docs-links-urltest/index.html');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/pages/docs-links-urltest/index.html?r\x3d88\x26spec\x3dsvn92');
 
 
 changed_paths.push('/trunk/com.mds.apg/resources/jqm/demo2/docs/pages/docs-links.html');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/pages/docs-links.html?r\x3d88\x26spec\x3dsvn92');
 
 
 changed_paths.push('/trunk/com.mds.apg/resources/jqm/demo2/docs/pages/docs-navmodel.html');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/pages/docs-navmodel.html?r\x3d88\x26spec\x3dsvn92');
 
 
 changed_paths.push('/trunk/com.mds.apg/resources/jqm/demo2/docs/pages/docs-pages.html');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/pages/docs-pages.html?r\x3d88\x26spec\x3dsvn92');
 
 
 changed_paths.push('/trunk/com.mds.apg/resources/jqm/demo2/docs/pages/docs-transitions.html');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/pages/docs-transitions.html?r\x3d88\x26spec\x3dsvn92');
 
 
 changed_paths.push('/trunk/com.mds.apg/resources/jqm/demo2/docs/pages/index.html');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/pages/index.html?r\x3d88\x26spec\x3dsvn92');
 
 
 changed_paths.push('/trunk/com.mds.apg/resources/jqm/demo2/docs/pages/link-formats.html');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/pages/link-formats.html?r\x3d88\x26spec\x3dsvn92');
 
 
 changed_paths.push('/trunk/com.mds.apg/resources/jqm/demo2/docs/pages/multipage-template.html');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/pages/multipage-template.html?r\x3d88\x26spec\x3dsvn92');
 
 
 changed_paths.push('/trunk/com.mds.apg/resources/jqm/demo2/docs/pages/page-template.html');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/pages/page-template.html?r\x3d88\x26spec\x3dsvn92');
 
 
 changed_paths.push('/trunk/com.mds.apg/resources/jqm/demo2/docs/pages/pages-themes.html');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/pages/pages-themes.html?r\x3d88\x26spec\x3dsvn92');
 
 
 changed_paths.push('/trunk/com.mds.apg/resources/jqm/demo2/docs/pages/transition-success.html');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/pages/transition-success.html?r\x3d88\x26spec\x3dsvn92');
 
 
 changed_paths.push('/trunk/com.mds.apg/resources/jqm/demo2/docs/toolbars');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/toolbars?r\x3d88\x26spec\x3dsvn92');
 
 
 changed_paths.push('/trunk/com.mds.apg/resources/jqm/demo2/docs/toolbars/api-bars.html');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/toolbars/api-bars.html?r\x3d88\x26spec\x3dsvn92');
 
 
 changed_paths.push('/trunk/com.mds.apg/resources/jqm/demo2/docs/toolbars/bars-fixed.html');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/toolbars/bars-fixed.html?r\x3d88\x26spec\x3dsvn92');
 
 
 changed_paths.push('/trunk/com.mds.apg/resources/jqm/demo2/docs/toolbars/bars-fullscreen.html');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/toolbars/bars-fullscreen.html?r\x3d88\x26spec\x3dsvn92');
 
 
 changed_paths.push('/trunk/com.mds.apg/resources/jqm/demo2/docs/toolbars/bars-themes.html');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/toolbars/bars-themes.html?r\x3d88\x26spec\x3dsvn92');
 
 
 changed_paths.push('/trunk/com.mds.apg/resources/jqm/demo2/docs/toolbars/docs-bars.html');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/toolbars/docs-bars.html?r\x3d88\x26spec\x3dsvn92');
 
 
 changed_paths.push('/trunk/com.mds.apg/resources/jqm/demo2/docs/toolbars/docs-footers.html');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/toolbars/docs-footers.html?r\x3d88\x26spec\x3dsvn92');
 
 
 changed_paths.push('/trunk/com.mds.apg/resources/jqm/demo2/docs/toolbars/docs-headers.html');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/toolbars/docs-headers.html?r\x3d88\x26spec\x3dsvn92');
 
 
 changed_paths.push('/trunk/com.mds.apg/resources/jqm/demo2/docs/toolbars/docs-navbar.html');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/toolbars/docs-navbar.html?r\x3d88\x26spec\x3dsvn92');
 
 
 changed_paths.push('/trunk/com.mds.apg/resources/jqm/demo2/docs/toolbars/footer-persist-a.html');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/toolbars/footer-persist-a.html?r\x3d88\x26spec\x3dsvn92');
 
 
 changed_paths.push('/trunk/com.mds.apg/resources/jqm/demo2/docs/toolbars/footer-persist-b.html');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/toolbars/footer-persist-b.html?r\x3d88\x26spec\x3dsvn92');
 
 
 changed_paths.push('/trunk/com.mds.apg/resources/jqm/demo2/docs/toolbars/footer-persist-c.html');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/toolbars/footer-persist-c.html?r\x3d88\x26spec\x3dsvn92');
 
 
 changed_paths.push('/trunk/com.mds.apg/resources/jqm/demo2/docs/toolbars/glyphish-icons');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/toolbars/glyphish-icons?r\x3d88\x26spec\x3dsvn92');
 
 
 changed_paths.push('/trunk/com.mds.apg/resources/jqm/demo2/docs/toolbars/glyphish-icons/09-chat2.png');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/toolbars/glyphish-icons/09-chat2.png?r\x3d88\x26spec\x3dsvn92');
 
 
 changed_paths.push('/trunk/com.mds.apg/resources/jqm/demo2/docs/toolbars/glyphish-icons/100-coffee.png');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/toolbars/glyphish-icons/100-coffee.png?r\x3d88\x26spec\x3dsvn92');
 
 
 changed_paths.push('/trunk/com.mds.apg/resources/jqm/demo2/docs/toolbars/glyphish-icons/18-envelope.png');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/toolbars/glyphish-icons/18-envelope.png?r\x3d88\x26spec\x3dsvn92');
 
 
 changed_paths.push('/trunk/com.mds.apg/resources/jqm/demo2/docs/toolbars/glyphish-icons/19-gear.png');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/toolbars/glyphish-icons/19-gear.png?r\x3d88\x26spec\x3dsvn92');
 
 
 changed_paths.push('/trunk/com.mds.apg/resources/jqm/demo2/docs/toolbars/glyphish-icons/21-skull.png');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/toolbars/glyphish-icons/21-skull.png?r\x3d88\x26spec\x3dsvn92');
 
 
 changed_paths.push('/trunk/com.mds.apg/resources/jqm/demo2/docs/toolbars/glyphish-icons/30-key.png');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/toolbars/glyphish-icons/30-key.png?r\x3d88\x26spec\x3dsvn92');
 
 
 changed_paths.push('/trunk/com.mds.apg/resources/jqm/demo2/docs/toolbars/glyphish-icons/34-coffee.png');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/toolbars/glyphish-icons/34-coffee.png?r\x3d88\x26spec\x3dsvn92');
 
 
 changed_paths.push('/trunk/com.mds.apg/resources/jqm/demo2/docs/toolbars/glyphish-icons/88-beermug.png');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/toolbars/glyphish-icons/88-beermug.png?r\x3d88\x26spec\x3dsvn92');
 
 
 changed_paths.push('/trunk/com.mds.apg/resources/jqm/demo2/docs/toolbars/glyphish-icons/Read me first - license.txt');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/toolbars/glyphish-icons/Read me first - license.txt?r\x3d88\x26spec\x3dsvn92');
 
 
 changed_paths.push('/trunk/com.mds.apg/resources/jqm/demo2/docs/toolbars/images');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/toolbars/images?r\x3d88\x26spec\x3dsvn92');
 
 
 changed_paths.push('/trunk/com.mds.apg/resources/jqm/demo2/docs/toolbars/images/photo-run.jpeg');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/toolbars/images/photo-run.jpeg?r\x3d88\x26spec\x3dsvn92');
 
 
 changed_paths.push('/trunk/com.mds.apg/resources/jqm/demo2/docs/toolbars/index.html');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/toolbars/index.html?r\x3d88\x26spec\x3dsvn92');
 
 
 changed_paths.push('/trunk/com.mds.apg/resources/jqm/demo2/docsdemos-style-override.css');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docsdemos-style-override.css?r\x3d88\x26spec\x3dsvn92');
 
 
 changed_paths.push('/trunk/com.mds.apg/resources/jqm/demo2/experiments');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/experiments?r\x3d88\x26spec\x3dsvn92');
 
 
 changed_paths.push('/trunk/com.mds.apg/resources/jqm/demo2/experiments/ui-datepicker');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/experiments/ui-datepicker?r\x3d88\x26spec\x3dsvn92');
 
 
 changed_paths.push('/trunk/com.mds.apg/resources/jqm/demo2/experiments/ui-datepicker/index.html');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/experiments/ui-datepicker/index.html?r\x3d88\x26spec\x3dsvn92');
 
 
 changed_paths.push('/trunk/com.mds.apg/resources/jqm/demo2/experiments/ui-datepicker/jQuery.ui.datepicker.js');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/experiments/ui-datepicker/jQuery.ui.datepicker.js?r\x3d88\x26spec\x3dsvn92');
 
 var selected_path = '/trunk/com.mds.apg/resources/jqm/demo2/experiments/ui-datepicker/jQuery.ui.datepicker.js';
 
 
 changed_paths.push('/trunk/com.mds.apg/resources/jqm/demo2/experiments/ui-datepicker/jquery.ui.datepicker.mobile.css');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/experiments/ui-datepicker/jquery.ui.datepicker.mobile.css?r\x3d88\x26spec\x3dsvn92');
 
 
 changed_paths.push('/trunk/com.mds.apg/resources/jqm/demo2/experiments/ui-datepicker/jquery.ui.datepicker.mobile.js');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/experiments/ui-datepicker/jquery.ui.datepicker.mobile.js?r\x3d88\x26spec\x3dsvn92');
 
 
 changed_paths.push('/trunk/com.mds.apg/resources/jqm/demo2/index.html');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/index.html?r\x3d88\x26spec\x3dsvn92');
 
 
 changed_paths.push('/trunk/com.mds.apg/src/com/mds/apg/wizards/PhonegapProjectPopulate.java');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/src/com/mds/apg/wizards/PhonegapProjectPopulate.java?r\x3d88\x26spec\x3dsvn92');
 
 
 function getCurrentPageIndex() {
 for (var i = 0; i < changed_paths.length; i++) {
 if (selected_path == changed_paths[i]) {
 return i;
 }
 }
 }
 function getNextPage() {
 var i = getCurrentPageIndex();
 if (i < changed_paths.length - 1) {
 return changed_urls[i + 1];
 }
 return null;
 }
 function getPreviousPage() {
 var i = getCurrentPageIndex();
 if (i > 0) {
 return changed_urls[i - 1];
 }
 return null;
 }
 function gotoNextPage() {
 var page = getNextPage();
 if (!page) {
 page = detail_url;
 }
 window.location = page;
 }
 function gotoPreviousPage() {
 var page = getPreviousPage();
 if (!page) {
 page = detail_url;
 }
 window.location = page;
 }
 function gotoDetailPage() {
 window.location = detail_url;
 }
 function gotoPublishPage() {
 window.location = publish_url;
 }
</script>

 
 <style type="text/css">
 #review_nav {
 border-top: 3px solid white;
 padding-top: 6px;
 margin-top: 1em;
 }
 #review_nav td {
 vertical-align: middle;
 }
 #review_nav select {
 margin: .5em 0;
 }
 </style>
 <div id="review_nav">
 <table><tr><td>Go to:&nbsp;</td><td>
 <select name="files_in_rev" onchange="window.location=this.value">
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo?r=88&amp;spec=svn92"
 
 >...k/com.mds.apg/resources/jqm/demo</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2?r=88&amp;spec=svn92"
 
 >.../com.mds.apg/resources/jqm/demo2</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs?r=88&amp;spec=svn92"
 
 >...mds.apg/resources/jqm/demo2/docs</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/about?r=88&amp;spec=svn92"
 
 >...g/resources/jqm/demo2/docs/about</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/about/accessibility.html?r=88&amp;spec=svn92"
 
 >...o2/docs/about/accessibility.html</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/about/features.html?r=88&amp;spec=svn92"
 
 >...m/demo2/docs/about/features.html</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/about/index.html?r=88&amp;spec=svn92"
 
 >.../jqm/demo2/docs/about/index.html</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/about/intro.html?r=88&amp;spec=svn92"
 
 >.../jqm/demo2/docs/about/intro.html</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/about/platforms.html?r=88&amp;spec=svn92"
 
 >.../demo2/docs/about/platforms.html</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/api?r=88&amp;spec=svn92"
 
 >...apg/resources/jqm/demo2/docs/api</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/api/events.html?r=88&amp;spec=svn92"
 
 >...s/jqm/demo2/docs/api/events.html</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/api/globalconfig.html?r=88&amp;spec=svn92"
 
 >...demo2/docs/api/globalconfig.html</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/api/index.html?r=88&amp;spec=svn92"
 
 >...es/jqm/demo2/docs/api/index.html</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/api/mediahelpers.html?r=88&amp;spec=svn92"
 
 >...demo2/docs/api/mediahelpers.html</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/api/methods.html?r=88&amp;spec=svn92"
 
 >.../jqm/demo2/docs/api/methods.html</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/api/themes.html?r=88&amp;spec=svn92"
 
 >...s/jqm/demo2/docs/api/themes.html</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/assets?r=88&amp;spec=svn92"
 
 >.../resources/jqm/demo2/docs/assets</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/assets/css?r=88&amp;spec=svn92"
 
 >...ources/jqm/demo2/docs/assets/css</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/assets/css/jqm-docs.css?r=88&amp;spec=svn92"
 
 >...mo2/docs/assets/css/jqm-docs.css</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/assets/images?r=88&amp;spec=svn92"
 
 >...ces/jqm/demo2/docs/assets/images</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/assets/images/ipad-palm.png?r=88&amp;spec=svn92"
 
 >...docs/assets/images/ipad-palm.png</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/assets/images/jqm-sitebg.png?r=88&amp;spec=svn92"
 
 >...ocs/assets/images/jqm-sitebg.png</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/assets/images/jquery-logo.png?r=88&amp;spec=svn92"
 
 >...cs/assets/images/jquery-logo.png</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/assets/images/mobile-devices.png?r=88&amp;spec=svn92"
 
 >...assets/images/mobile-devices.png</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/assets/images/version.png?r=88&amp;spec=svn92"
 
 >...2/docs/assets/images/version.png</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/assets/js?r=88&amp;spec=svn92"
 
 >...sources/jqm/demo2/docs/assets/js</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/assets/js/_viewsource.js?r=88&amp;spec=svn92"
 
 >...o2/docs/assets/js/_viewsource.js</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/assets/js/jqm-docs.js?r=88&amp;spec=svn92"
 
 >...demo2/docs/assets/js/jqm-docs.js</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/buttons?r=88&amp;spec=svn92"
 
 >...resources/jqm/demo2/docs/buttons</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/buttons/api-buttons.html?r=88&amp;spec=svn92"
 
 >...o2/docs/buttons/api-buttons.html</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/buttons/buttons-grouped.html?r=88&amp;spec=svn92"
 
 >...ocs/buttons/buttons-grouped.html</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/buttons/buttons-icons.html?r=88&amp;spec=svn92"
 
 >.../docs/buttons/buttons-icons.html</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/buttons/buttons-inline.html?r=88&amp;spec=svn92"
 
 >...docs/buttons/buttons-inline.html</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/buttons/buttons-themes.html?r=88&amp;spec=svn92"
 
 >...docs/buttons/buttons-themes.html</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/buttons/buttons-types.html?r=88&amp;spec=svn92"
 
 >.../docs/buttons/buttons-types.html</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/buttons/index.html?r=88&amp;spec=svn92"
 
 >...qm/demo2/docs/buttons/index.html</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/content?r=88&amp;spec=svn92"
 
 >...resources/jqm/demo2/docs/content</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/content/api-content.html?r=88&amp;spec=svn92"
 
 >...o2/docs/content/api-content.html</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/content/content-collapsible.html?r=88&amp;spec=svn92"
 
 >...content/content-collapsible.html</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/content/content-grids.html?r=88&amp;spec=svn92"
 
 >.../docs/content/content-grids.html</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/content/content-html.html?r=88&amp;spec=svn92"
 
 >...2/docs/content/content-html.html</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/content/content-themes.html?r=88&amp;spec=svn92"
 
 >...docs/content/content-themes.html</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/content/index.html?r=88&amp;spec=svn92"
 
 >...qm/demo2/docs/content/index.html</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/forms?r=88&amp;spec=svn92"
 
 >...g/resources/jqm/demo2/docs/forms</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/forms/api-forms.html?r=88&amp;spec=svn92"
 
 >.../demo2/docs/forms/api-forms.html</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/forms/docs-forms.html?r=88&amp;spec=svn92"
 
 >...demo2/docs/forms/docs-forms.html</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/forms/forms-all-native.html?r=88&amp;spec=svn92"
 
 >...docs/forms/forms-all-native.html</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/forms/forms-all.html?r=88&amp;spec=svn92"
 
 >.../demo2/docs/forms/forms-all.html</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/forms/forms-checkboxes.html?r=88&amp;spec=svn92"
 
 >...docs/forms/forms-checkboxes.html</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/forms/forms-radiobuttons.html?r=88&amp;spec=svn92"
 
 >...cs/forms/forms-radiobuttons.html</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/forms/forms-sample-response.php?r=88&amp;spec=svn92"
 
 >.../forms/forms-sample-response.php</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/forms/forms-sample-selfsubmit.php?r=88&amp;spec=svn92"
 
 >...orms/forms-sample-selfsubmit.php</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/forms/forms-sample.html?r=88&amp;spec=svn92"
 
 >...mo2/docs/forms/forms-sample.html</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/forms/forms-search.html?r=88&amp;spec=svn92"
 
 >...mo2/docs/forms/forms-search.html</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/forms/forms-selects.html?r=88&amp;spec=svn92"
 
 >...o2/docs/forms/forms-selects.html</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/forms/forms-slider.html?r=88&amp;spec=svn92"
 
 >...mo2/docs/forms/forms-slider.html</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/forms/forms-switch.html?r=88&amp;spec=svn92"
 
 >...mo2/docs/forms/forms-switch.html</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/forms/forms-text.html?r=88&amp;spec=svn92"
 
 >...demo2/docs/forms/forms-text.html</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/forms/forms-themes.html?r=88&amp;spec=svn92"
 
 >...mo2/docs/forms/forms-themes.html</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/forms/index.html?r=88&amp;spec=svn92"
 
 >.../jqm/demo2/docs/forms/index.html</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/forms/plugin-eventsmethods.html?r=88&amp;spec=svn92"
 
 >.../forms/plugin-eventsmethods.html</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/index.html?r=88&amp;spec=svn92"
 
 >...ources/jqm/demo2/docs/index.html</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/lists?r=88&amp;spec=svn92"
 
 >...g/resources/jqm/demo2/docs/lists</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/lists/api-lists.html?r=88&amp;spec=svn92"
 
 >.../demo2/docs/lists/api-lists.html</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/lists/docs-lists.html?r=88&amp;spec=svn92"
 
 >...demo2/docs/lists/docs-lists.html</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/lists/images?r=88&amp;spec=svn92"
 
 >...rces/jqm/demo2/docs/lists/images</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/lists/images/album-af.jpg?r=88&amp;spec=svn92"
 
 >...2/docs/lists/images/album-af.jpg</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/lists/images/album-ag.jpg?r=88&amp;spec=svn92"
 
 >...2/docs/lists/images/album-ag.jpg</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/lists/images/album-bb.jpg?r=88&amp;spec=svn92"
 
 >...2/docs/lists/images/album-bb.jpg</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/lists/images/album-bk.jpg?r=88&amp;spec=svn92"
 
 >...2/docs/lists/images/album-bk.jpg</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/lists/images/album-hc.jpg?r=88&amp;spec=svn92"
 
 >...2/docs/lists/images/album-hc.jpg</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/lists/images/album-k.jpg?r=88&amp;spec=svn92"
 
 >...o2/docs/lists/images/album-k.jpg</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/lists/images/album-mg.jpg?r=88&amp;spec=svn92"
 
 >...2/docs/lists/images/album-mg.jpg</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/lists/images/album-ok.jpg?r=88&amp;spec=svn92"
 
 >...2/docs/lists/images/album-ok.jpg</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/lists/images/album-p.jpg?r=88&amp;spec=svn92"
 
 >...o2/docs/lists/images/album-p.jpg</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/lists/images/album-rh.jpg?r=88&amp;spec=svn92"
 
 >...2/docs/lists/images/album-rh.jpg</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/lists/images/album-ws.jpg?r=88&amp;spec=svn92"
 
 >...2/docs/lists/images/album-ws.jpg</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/lists/images/album-xx.jpg?r=88&amp;spec=svn92"
 
 >...2/docs/lists/images/album-xx.jpg</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/lists/images/de.png?r=88&amp;spec=svn92"
 
 >...m/demo2/docs/lists/images/de.png</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/lists/images/fi.png?r=88&amp;spec=svn92"
 
 >...m/demo2/docs/lists/images/fi.png</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/lists/images/gb.png?r=88&amp;spec=svn92"
 
 >...m/demo2/docs/lists/images/gb.png</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/lists/images/gf.png?r=88&amp;spec=svn92"
 
 >...m/demo2/docs/lists/images/gf.png</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/lists/images/sj.png?r=88&amp;spec=svn92"
 
 >...m/demo2/docs/lists/images/sj.png</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/lists/images/us.png?r=88&amp;spec=svn92"
 
 >...m/demo2/docs/lists/images/us.png</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/lists/index.html?r=88&amp;spec=svn92"
 
 >.../jqm/demo2/docs/lists/index.html</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/lists/lists-all-full.html?r=88&amp;spec=svn92"
 
 >...2/docs/lists/lists-all-full.html</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/lists/lists-count.html?r=88&amp;spec=svn92"
 
 >...emo2/docs/lists/lists-count.html</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/lists/lists-divider.html?r=88&amp;spec=svn92"
 
 >...o2/docs/lists/lists-divider.html</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/lists/lists-formatting.html?r=88&amp;spec=svn92"
 
 >...docs/lists/lists-formatting.html</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/lists/lists-forms-inset.html?r=88&amp;spec=svn92"
 
 >...ocs/lists/lists-forms-inset.html</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/lists/lists-forms.html?r=88&amp;spec=svn92"
 
 >...emo2/docs/lists/lists-forms.html</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/lists/lists-icons.html?r=88&amp;spec=svn92"
 
 >...emo2/docs/lists/lists-icons.html</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/lists/lists-inset.html?r=88&amp;spec=svn92"
 
 >...emo2/docs/lists/lists-inset.html</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/lists/lists-nested.html?r=88&amp;spec=svn92"
 
 >...mo2/docs/lists/lists-nested.html</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/lists/lists-ol.html?r=88&amp;spec=svn92"
 
 >...m/demo2/docs/lists/lists-ol.html</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/lists/lists-performance.html?r=88&amp;spec=svn92"
 
 >...ocs/lists/lists-performance.html</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/lists/lists-readonly-inset.html?r=88&amp;spec=svn92"
 
 >.../lists/lists-readonly-inset.html</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/lists/lists-readonly.html?r=88&amp;spec=svn92"
 
 >...2/docs/lists/lists-readonly.html</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/lists/lists-search-inset.html?r=88&amp;spec=svn92"
 
 >...cs/lists/lists-search-inset.html</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/lists/lists-search-with-dividers.html?r=88&amp;spec=svn92"
 
 >.../lists-search-with-dividers.html</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/lists/lists-search.html?r=88&amp;spec=svn92"
 
 >...mo2/docs/lists/lists-search.html</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/lists/lists-split-purchase.html?r=88&amp;spec=svn92"
 
 >.../lists/lists-split-purchase.html</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/lists/lists-split.html?r=88&amp;spec=svn92"
 
 >...emo2/docs/lists/lists-split.html</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/lists/lists-themes.html?r=88&amp;spec=svn92"
 
 >...mo2/docs/lists/lists-themes.html</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/lists/lists-thumbnails.html?r=88&amp;spec=svn92"
 
 >...docs/lists/lists-thumbnails.html</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/lists/lists-ul.html?r=88&amp;spec=svn92"
 
 >...m/demo2/docs/lists/lists-ul.html</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/pages?r=88&amp;spec=svn92"
 
 >...g/resources/jqm/demo2/docs/pages</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/pages/api-pages.html?r=88&amp;spec=svn92"
 
 >.../demo2/docs/pages/api-pages.html</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/pages/dialog-alt.html?r=88&amp;spec=svn92"
 
 >...demo2/docs/pages/dialog-alt.html</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/pages/dialog-buttons.html?r=88&amp;spec=svn92"
 
 >...2/docs/pages/dialog-buttons.html</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/pages/dialog-success.html?r=88&amp;spec=svn92"
 
 >...2/docs/pages/dialog-success.html</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/pages/dialog-with-select.html?r=88&amp;spec=svn92"
 
 >...cs/pages/dialog-with-select.html</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/pages/dialog.html?r=88&amp;spec=svn92"
 
 >...jqm/demo2/docs/pages/dialog.html</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/pages/docs-dialogs.html?r=88&amp;spec=svn92"
 
 >...mo2/docs/pages/docs-dialogs.html</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/pages/docs-link-scenarios.html?r=88&amp;spec=svn92"
 
 >...s/pages/docs-link-scenarios.html</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/pages/docs-links-urltest?r=88&amp;spec=svn92"
 
 >...o2/docs/pages/docs-links-urltest</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/pages/docs-links-urltest/index.html?r=88&amp;spec=svn92"
 
 >...es/docs-links-urltest/index.html</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/pages/docs-links.html?r=88&amp;spec=svn92"
 
 >...demo2/docs/pages/docs-links.html</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/pages/docs-navmodel.html?r=88&amp;spec=svn92"
 
 >...o2/docs/pages/docs-navmodel.html</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/pages/docs-pages.html?r=88&amp;spec=svn92"
 
 >...demo2/docs/pages/docs-pages.html</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/pages/docs-transitions.html?r=88&amp;spec=svn92"
 
 >...docs/pages/docs-transitions.html</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/pages/index.html?r=88&amp;spec=svn92"
 
 >.../jqm/demo2/docs/pages/index.html</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/pages/link-formats.html?r=88&amp;spec=svn92"
 
 >...mo2/docs/pages/link-formats.html</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/pages/multipage-template.html?r=88&amp;spec=svn92"
 
 >...cs/pages/multipage-template.html</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/pages/page-template.html?r=88&amp;spec=svn92"
 
 >...o2/docs/pages/page-template.html</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/pages/pages-themes.html?r=88&amp;spec=svn92"
 
 >...mo2/docs/pages/pages-themes.html</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/pages/transition-success.html?r=88&amp;spec=svn92"
 
 >...cs/pages/transition-success.html</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/toolbars?r=88&amp;spec=svn92"
 
 >...esources/jqm/demo2/docs/toolbars</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/toolbars/api-bars.html?r=88&amp;spec=svn92"
 
 >...emo2/docs/toolbars/api-bars.html</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/toolbars/bars-fixed.html?r=88&amp;spec=svn92"
 
 >...o2/docs/toolbars/bars-fixed.html</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/toolbars/bars-fullscreen.html?r=88&amp;spec=svn92"
 
 >...cs/toolbars/bars-fullscreen.html</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/toolbars/bars-themes.html?r=88&amp;spec=svn92"
 
 >...2/docs/toolbars/bars-themes.html</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/toolbars/docs-bars.html?r=88&amp;spec=svn92"
 
 >...mo2/docs/toolbars/docs-bars.html</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/toolbars/docs-footers.html?r=88&amp;spec=svn92"
 
 >.../docs/toolbars/docs-footers.html</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/toolbars/docs-headers.html?r=88&amp;spec=svn92"
 
 >.../docs/toolbars/docs-headers.html</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/toolbars/docs-navbar.html?r=88&amp;spec=svn92"
 
 >...2/docs/toolbars/docs-navbar.html</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/toolbars/footer-persist-a.html?r=88&amp;spec=svn92"
 
 >...s/toolbars/footer-persist-a.html</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/toolbars/footer-persist-b.html?r=88&amp;spec=svn92"
 
 >...s/toolbars/footer-persist-b.html</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/toolbars/footer-persist-c.html?r=88&amp;spec=svn92"
 
 >...s/toolbars/footer-persist-c.html</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/toolbars/glyphish-icons?r=88&amp;spec=svn92"
 
 >...mo2/docs/toolbars/glyphish-icons</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/toolbars/glyphish-icons/09-chat2.png?r=88&amp;spec=svn92"
 
 >...bars/glyphish-icons/09-chat2.png</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/toolbars/glyphish-icons/100-coffee.png?r=88&amp;spec=svn92"
 
 >...rs/glyphish-icons/100-coffee.png</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/toolbars/glyphish-icons/18-envelope.png?r=88&amp;spec=svn92"
 
 >...s/glyphish-icons/18-envelope.png</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/toolbars/glyphish-icons/19-gear.png?r=88&amp;spec=svn92"
 
 >...lbars/glyphish-icons/19-gear.png</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/toolbars/glyphish-icons/21-skull.png?r=88&amp;spec=svn92"
 
 >...bars/glyphish-icons/21-skull.png</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/toolbars/glyphish-icons/30-key.png?r=88&amp;spec=svn92"
 
 >...olbars/glyphish-icons/30-key.png</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/toolbars/glyphish-icons/34-coffee.png?r=88&amp;spec=svn92"
 
 >...ars/glyphish-icons/34-coffee.png</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/toolbars/glyphish-icons/88-beermug.png?r=88&amp;spec=svn92"
 
 >...rs/glyphish-icons/88-beermug.png</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/toolbars/glyphish-icons/Read me first - license.txt?r=88&amp;spec=svn92"
 
 >...cons/Read me first - license.txt</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/toolbars/images?r=88&amp;spec=svn92"
 
 >...s/jqm/demo2/docs/toolbars/images</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/toolbars/images/photo-run.jpeg?r=88&amp;spec=svn92"
 
 >...s/toolbars/images/photo-run.jpeg</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docs/toolbars/index.html?r=88&amp;spec=svn92"
 
 >...m/demo2/docs/toolbars/index.html</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/docsdemos-style-override.css?r=88&amp;spec=svn92"
 
 >...mo2/docsdemos-style-override.css</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/experiments?r=88&amp;spec=svn92"
 
 >.../resources/jqm/demo2/experiments</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/experiments/ui-datepicker?r=88&amp;spec=svn92"
 
 >.../demo2/experiments/ui-datepicker</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/experiments/ui-datepicker/index.html?r=88&amp;spec=svn92"
 
 >...riments/ui-datepicker/index.html</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/experiments/ui-datepicker/jQuery.ui.datepicker.js?r=88&amp;spec=svn92"
 selected="selected"
 >...tepicker/jQuery.ui.datepicker.js</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/experiments/ui-datepicker/jquery.ui.datepicker.mobile.css?r=88&amp;spec=svn92"
 
 >.../jquery.ui.datepicker.mobile.css</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/experiments/ui-datepicker/jquery.ui.datepicker.mobile.js?r=88&amp;spec=svn92"
 
 >...r/jquery.ui.datepicker.mobile.js</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/index.html?r=88&amp;spec=svn92"
 
 >...g/resources/jqm/demo2/index.html</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/src/com/mds/apg/wizards/PhonegapProjectPopulate.java?r=88&amp;spec=svn92"
 
 >...rds/PhonegapProjectPopulate.java</option>
 
 </select>
 </td></tr></table>
 
 
 



 <div style="white-space:nowrap">
 Project members,
 <a href="https://www.google.com/accounts/ServiceLogin?service=code&amp;ltmpl=phosting&amp;continue=https%3A%2F%2Fcode.google.com%2Fa%2Feclipselabs.org%2Fp%2Fmobile-web-development-with-phonegap%2Fsource%2Fbrowse%2Ftrunk%2Fcom.mds.apg%2Fresources%2Fjqm%2Fdemo2%2Fexperiments%2Fui-datepicker%2FjQuery.ui.datepicker.js%3Fr%3D92&amp;followup=https%3A%2F%2Fcode.google.com%2Fa%2Feclipselabs.org%2Fp%2Fmobile-web-development-with-phonegap%2Fsource%2Fbrowse%2Ftrunk%2Fcom.mds.apg%2Fresources%2Fjqm%2Fdemo2%2Fexperiments%2Fui-datepicker%2FjQuery.ui.datepicker.js%3Fr%3D92"
 >sign in</a> to write a code review</div>


 
 </div>
 
 
 </div>
 <div class="round1"></div>
 <div class="round2"></div>
 <div class="round4"></div>
 </div>
 <div class="pmeta_bubble_bg" style="border:1px solid white">
 <div class="round4"></div>
 <div class="round2"></div>
 <div class="round1"></div>
 <div class="box-inner">
 <div id="older_bubble">
 <p>Older revisions</p>
 
 <a href="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/list?path=/trunk/com.mds.apg/resources/jqm/demo2/experiments/ui-datepicker/jQuery.ui.datepicker.js&start=88">All revisions of this file</a>
 </div>
 </div>
 <div class="round1"></div>
 <div class="round2"></div>
 <div class="round4"></div>
 </div>
 
 <div class="pmeta_bubble_bg" style="border:1px solid white">
 <div class="round4"></div>
 <div class="round2"></div>
 <div class="round1"></div>
 <div class="box-inner">
 <div id="fileinfo_bubble">
 <p>File info</p>
 
 <div>Size: 39427 bytes,
 98 lines</div>
 
 <div><a href="//mobile-web-development-with-phonegap.eclipselabs.org.codespot.com/svn-history/r92/trunk/com.mds.apg/resources/jqm/demo2/experiments/ui-datepicker/jQuery.ui.datepicker.js">View raw file</a></div>
 </div>
 
 <div id="props">
 <p>File properties</p>
 <dl>
 
 <dt>svn:mime-type</dt>
 <dd>text/plain</dd>
 
 </dl>
 </div>
 
 </div>
 <div class="round1"></div>
 <div class="round2"></div>
 <div class="round4"></div>
 </div>
 </div>
 </div>


</div>

</div>
</div>

<script src="https://ssl.gstatic.com/codesite/ph/814337104528787223/js/prettify/prettify.js"></script>
<script type="text/javascript">prettyPrint();</script>


<script src="https://ssl.gstatic.com/codesite/ph/814337104528787223/js/source_file_scripts.js"></script>

 <script type="text/javascript" src="https://ssl.gstatic.com/codesite/ph/814337104528787223/js/kibbles.js"></script>
 <script type="text/javascript">
 var lastStop = null;
 var initialized = false;
 
 function updateCursor(next, prev) {
 if (prev && prev.element) {
 prev.element.className = 'cursor_stop cursor_hidden';
 }
 if (next && next.element) {
 next.element.className = 'cursor_stop cursor';
 lastStop = next.index;
 }
 }
 
 function pubRevealed(data) {
 updateCursorForCell(data.cellId, 'cursor_stop cursor_hidden');
 if (initialized) {
 reloadCursors();
 }
 }
 
 function draftRevealed(data) {
 updateCursorForCell(data.cellId, 'cursor_stop cursor_hidden');
 if (initialized) {
 reloadCursors();
 }
 }
 
 function draftDestroyed(data) {
 updateCursorForCell(data.cellId, 'nocursor');
 if (initialized) {
 reloadCursors();
 }
 }
 function reloadCursors() {
 kibbles.skipper.reset();
 loadCursors();
 if (lastStop != null) {
 kibbles.skipper.setCurrentStop(lastStop);
 }
 }
 // possibly the simplest way to insert any newly added comments
 // is to update the class of the corresponding cursor row,
 // then refresh the entire list of rows.
 function updateCursorForCell(cellId, className) {
 var cell = document.getElementById(cellId);
 // we have to go two rows back to find the cursor location
 var row = getPreviousElement(cell.parentNode);
 row.className = className;
 }
 // returns the previous element, ignores text nodes.
 function getPreviousElement(e) {
 var element = e.previousSibling;
 if (element.nodeType == 3) {
 element = element.previousSibling;
 }
 if (element && element.tagName) {
 return element;
 }
 }
 function loadCursors() {
 // register our elements with skipper
 var elements = CR_getElements('*', 'cursor_stop');
 var len = elements.length;
 for (var i = 0; i < len; i++) {
 var element = elements[i]; 
 element.className = 'cursor_stop cursor_hidden';
 kibbles.skipper.append(element);
 }
 }
 function toggleComments() {
 CR_toggleCommentDisplay();
 reloadCursors();
 }
 function keysOnLoadHandler() {
 // setup skipper
 kibbles.skipper.addStopListener(
 kibbles.skipper.LISTENER_TYPE.PRE, updateCursor);
 // Set the 'offset' option to return the middle of the client area
 // an option can be a static value, or a callback
 kibbles.skipper.setOption('padding_top', 50);
 // Set the 'offset' option to return the middle of the client area
 // an option can be a static value, or a callback
 kibbles.skipper.setOption('padding_bottom', 100);
 // Register our keys
 kibbles.skipper.addFwdKey("n");
 kibbles.skipper.addRevKey("p");
 kibbles.keys.addKeyPressListener(
 'u', function() { window.location = detail_url; });
 kibbles.keys.addKeyPressListener(
 'r', function() { window.location = detail_url + '#publish'; });
 
 kibbles.keys.addKeyPressListener('j', gotoNextPage);
 kibbles.keys.addKeyPressListener('k', gotoPreviousPage);
 
 
 }
 </script>
<script src="https://ssl.gstatic.com/codesite/ph/814337104528787223/js/code_review_scripts.js"></script>
<script type="text/javascript">
 function showPublishInstructions() {
 var element = document.getElementById('review_instr');
 if (element) {
 element.className = 'opened';
 }
 }
 var codereviews;
 function revsOnLoadHandler() {
 // register our source container with the commenting code
 var paths = {'svn92': '/trunk/com.mds.apg/resources/jqm/demo2/experiments/ui-datepicker/jQuery.ui.datepicker.js'}
 codereviews = CR_controller.setup(
 {"token": null, "assetVersionPath": "https://ssl.gstatic.com/codesite/ph/814337104528787223", "projectHomeUrl": "/a/eclipselabs.org/p/mobile-web-development-with-phonegap", "profileUrl": null, "domainName": "eclipselabs.org", "loggedInUserEmail": null, "relativeBaseUrl": "/a/eclipselabs.org", "assetHostPath": "https://ssl.gstatic.com/codesite/ph", "projectName": "mobile-web-development-with-phonegap"}, '', 'svn92', paths,
 CR_BrowseIntegrationFactory);
 
 codereviews.registerActivityListener(CR_ActivityType.REVEAL_DRAFT_PLATE, showPublishInstructions);
 
 codereviews.registerActivityListener(CR_ActivityType.REVEAL_PUB_PLATE, pubRevealed);
 codereviews.registerActivityListener(CR_ActivityType.REVEAL_DRAFT_PLATE, draftRevealed);
 codereviews.registerActivityListener(CR_ActivityType.DISCARD_DRAFT_COMMENT, draftDestroyed);
 
 
 
 
 
 
 
 var initialized = true;
 reloadCursors();
 }
 window.onload = function() {keysOnLoadHandler(); revsOnLoadHandler();};

</script>
<script type="text/javascript" src="https://ssl.gstatic.com/codesite/ph/814337104528787223/js/dit_scripts.js"></script>

 
 
 
 <script type="text/javascript" src="https://ssl.gstatic.com/codesite/ph/814337104528787223/js/ph_core.js"></script>
 
 
 
 
</div> 

<div id="footer" dir="ltr">
 <div class="text">
 <a href="/projecthosting/terms.html">Terms</a> -
 <a href="http://www.google.com/privacy.html">Privacy</a> -
 <a href="/p/support/">Project Hosting Help</a>
 </div>
</div>
 <div class="hostedBy" style="margin-top: -20px;">
 <span style="vertical-align: top;">Powered by <a href="http://code.google.com/projecthosting/">Google Project Hosting</a></span>
 </div>

 
 


 
 
 <script type="text/javascript">_CS_reportToCsi();</script>
 
 </body>
</html>

