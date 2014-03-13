



<!DOCTYPE html>
<html>
<head>
 <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" >
 <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" >
 
 <meta name="ROBOTS" content="NOARCHIVE">
 
 <link rel="icon" type="image/vnd.microsoft.icon" href="https://ssl.gstatic.com/codesite/ph/images/phosting.ico">
 
 
 <script type="text/javascript">
 
 
 
 
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
 
 
 <title>jquery.ui.datepicker.mobile.js - 
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
 | <a href="https://www.google.com/accounts/ServiceLogin?service=code&amp;ltmpl=phosting&amp;continue=https%3A%2F%2Fcode.google.com%2Fa%2Feclipselabs.org%2Fp%2Fmobile-web-development-with-phonegap%2Fsource%2Fbrowse%2Ftrunk%2Fcom.mds.apg%2Fresources%2Fjqm%2Fdemo2%2Fexperiments%2Fui-datepicker%2Fjquery.ui.datepicker.mobile.js%3Fr%3D92&amp;followup=https%3A%2F%2Fcode.google.com%2Fa%2Feclipselabs.org%2Fp%2Fmobile-web-development-with-phonegap%2Fsource%2Fbrowse%2Ftrunk%2Fcom.mds.apg%2Fresources%2Fjqm%2Fdemo2%2Fexperiments%2Fui-datepicker%2Fjquery.ui.datepicker.mobile.js%3Fr%3D92" onclick="_CS_click('/gb/ph/signin');"><u>Sign in</u></a>
 
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
 <span id="crumb_links" class="ifClosed"><a href="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/?r=92">trunk</a><span class="sp">/&nbsp;</span><a href="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/?r=92">com.mds.apg</a><span class="sp">/&nbsp;</span><a href="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/?r=92">resources</a><span class="sp">/&nbsp;</span><a href="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/?r=92">jqm</a><span class="sp">/&nbsp;</span><a href="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/?r=92">demo2</a><span class="sp">/&nbsp;</span><a href="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/experiments/?r=92">experiments</a><span class="sp">/&nbsp;</span><a href="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/experiments/ui-datepicker/?r=92">ui-datepicker</a><span class="sp">/&nbsp;</span>jquery.ui.datepicker.mobile.js</span>
 
 


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
></table></pre>
<pre><table width="100%"><tr class="nocursor"><td></td></tr></table></pre>
</td>
<td id="lines">
<pre><table width="100%"><tr class="cursor_stop cursor_hidden"><td></td></tr></table></pre>
<pre class="prettyprint lang-js"><table id="src_table_0"><tr
id=sl_svn92_1

><td class="source">/*<br></td></tr
><tr
id=sl_svn92_2

><td class="source">* jQuery Mobile Framework : temporary extension to port jQuery UI&#39;s datepicker for mobile<br></td></tr
><tr
id=sl_svn92_3

><td class="source">* Copyright (c) jQuery Project<br></td></tr
><tr
id=sl_svn92_4

><td class="source">* Dual licensed under the MIT or GPL Version 2 licenses.<br></td></tr
><tr
id=sl_svn92_5

><td class="source">* http://jquery.org/license<br></td></tr
><tr
id=sl_svn92_6

><td class="source">*/<br></td></tr
><tr
id=sl_svn92_7

><td class="source">(function($, undefined ) {<br></td></tr
><tr
id=sl_svn92_8

><td class="source"><br></td></tr
><tr
id=sl_svn92_9

><td class="source">	//cache previous datepicker ui method<br></td></tr
><tr
id=sl_svn92_10

><td class="source">	var prevDp = $.fn.datepicker;<br></td></tr
><tr
id=sl_svn92_11

><td class="source">	<br></td></tr
><tr
id=sl_svn92_12

><td class="source">	//rewrite datepicker<br></td></tr
><tr
id=sl_svn92_13

><td class="source">	$.fn.datepicker = function( options ){<br></td></tr
><tr
id=sl_svn92_14

><td class="source">		<br></td></tr
><tr
id=sl_svn92_15

><td class="source">		var dp = this;<br></td></tr
><tr
id=sl_svn92_16

><td class="source">	<br></td></tr
><tr
id=sl_svn92_17

><td class="source">		//call cached datepicker plugin<br></td></tr
><tr
id=sl_svn92_18

><td class="source">		prevDp.call( this, options );<br></td></tr
><tr
id=sl_svn92_19

><td class="source">		<br></td></tr
><tr
id=sl_svn92_20

><td class="source">		//extend with some dom manipulation to update the markup for jQM<br></td></tr
><tr
id=sl_svn92_21

><td class="source">		//call immediately<br></td></tr
><tr
id=sl_svn92_22

><td class="source">		function updateDatepicker(){<br></td></tr
><tr
id=sl_svn92_23

><td class="source">			$( &quot;.ui-datepicker-header&quot;, dp ).addClass(&quot;ui-body-c ui-corner-top&quot;).removeClass(&quot;ui-corner-all&quot;);<br></td></tr
><tr
id=sl_svn92_24

><td class="source">			$( &quot;.ui-datepicker-prev, .ui-datepicker-next&quot;, dp ).attr(&quot;href&quot;, &quot;#&quot;);<br></td></tr
><tr
id=sl_svn92_25

><td class="source">			$( &quot;.ui-datepicker-prev&quot;, dp ).buttonMarkup({iconpos: &quot;notext&quot;, icon: &quot;arrow-l&quot;, shadow: true, corners: true});<br></td></tr
><tr
id=sl_svn92_26

><td class="source">			$( &quot;.ui-datepicker-next&quot;, dp ).buttonMarkup({iconpos: &quot;notext&quot;, icon: &quot;arrow-r&quot;, shadow: true, corners: true});<br></td></tr
><tr
id=sl_svn92_27

><td class="source">			$( &quot;.ui-datepicker-calendar th&quot;, dp ).addClass(&quot;ui-bar-c&quot;);<br></td></tr
><tr
id=sl_svn92_28

><td class="source">			$( &quot;.ui-datepicker-calendar td&quot;, dp ).addClass(&quot;ui-body-c&quot;);<br></td></tr
><tr
id=sl_svn92_29

><td class="source">			$( &quot;.ui-datepicker-calendar a&quot;, dp ).buttonMarkup({corners: false, shadow: false}); <br></td></tr
><tr
id=sl_svn92_30

><td class="source">			$( &quot;.ui-datepicker-calendar a.ui-state-active&quot;, dp ).addClass(&quot;ui-btn-active&quot;); // selected date<br></td></tr
><tr
id=sl_svn92_31

><td class="source">			$( &quot;.ui-datepicker-calendar a.ui-state-highlight&quot;, dp ).addClass(&quot;ui-btn-up-e&quot;); // today&quot;s date<br></td></tr
><tr
id=sl_svn92_32

><td class="source">	        $( &quot;.ui-datepicker-calendar .ui-btn&quot;, dp ).each(function(){<br></td></tr
><tr
id=sl_svn92_33

><td class="source">				var el = $(this);<br></td></tr
><tr
id=sl_svn92_34

><td class="source">				// remove extra button markup - necessary for date value to be interpreted correctly<br></td></tr
><tr
id=sl_svn92_35

><td class="source">				el.html( el.find( &quot;.ui-btn-text&quot; ).text() ); <br></td></tr
><tr
id=sl_svn92_36

><td class="source">	        });<br></td></tr
><tr
id=sl_svn92_37

><td class="source">		};<br></td></tr
><tr
id=sl_svn92_38

><td class="source">		<br></td></tr
><tr
id=sl_svn92_39

><td class="source">		//update now<br></td></tr
><tr
id=sl_svn92_40

><td class="source">		updateDatepicker();<br></td></tr
><tr
id=sl_svn92_41

><td class="source">		<br></td></tr
><tr
id=sl_svn92_42

><td class="source">		// and on click<br></td></tr
><tr
id=sl_svn92_43

><td class="source">		$( dp ).click( updateDatepicker );<br></td></tr
><tr
id=sl_svn92_44

><td class="source">		<br></td></tr
><tr
id=sl_svn92_45

><td class="source">		//return jqm obj <br></td></tr
><tr
id=sl_svn92_46

><td class="source">		return this;<br></td></tr
><tr
id=sl_svn92_47

><td class="source">	};<br></td></tr
><tr
id=sl_svn92_48

><td class="source">		<br></td></tr
><tr
id=sl_svn92_49

><td class="source">	//bind to pagecreate to automatically enhance date inputs	<br></td></tr
><tr
id=sl_svn92_50

><td class="source">	$( &quot;.ui-page&quot; ).live( &quot;pagecreate&quot;, function(){		<br></td></tr
><tr
id=sl_svn92_51

><td class="source">		$( &quot;input[type=&#39;date&#39;], input:jqmData(type=&#39;date&#39;)&quot; ).each(function(){<br></td></tr
><tr
id=sl_svn92_52

><td class="source">			$(this).after( $( &quot;&lt;div /&gt;&quot; ).datepicker({ altField: &quot;#&quot; + $(this).attr( &quot;id&quot; ), showOtherMonths: true }) );<br></td></tr
><tr
id=sl_svn92_53

><td class="source">		});	<br></td></tr
><tr
id=sl_svn92_54

><td class="source">	});<br></td></tr
><tr
id=sl_svn92_55

><td class="source">})( jQuery );<br></td></tr
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
 &nbsp; <a href="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/diff?spec=svn92&r=88&amp;format=side&amp;path=/trunk/com.mds.apg/resources/jqm/demo2/experiments/ui-datepicker/jquery.ui.datepicker.mobile.js&amp;old_path=/trunk/com.mds.apg/resources/jqm/demo2/experiments/ui-datepicker/jquery.ui.datepicker.mobile.js&amp;old=">Diff</a>
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
 
 
 changed_paths.push('/trunk/com.mds.apg/resources/jqm/demo2/experiments/ui-datepicker/jquery.ui.datepicker.mobile.css');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/experiments/ui-datepicker/jquery.ui.datepicker.mobile.css?r\x3d88\x26spec\x3dsvn92');
 
 
 changed_paths.push('/trunk/com.mds.apg/resources/jqm/demo2/experiments/ui-datepicker/jquery.ui.datepicker.mobile.js');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/experiments/ui-datepicker/jquery.ui.datepicker.mobile.js?r\x3d88\x26spec\x3dsvn92');
 
 var selected_path = '/trunk/com.mds.apg/resources/jqm/demo2/experiments/ui-datepicker/jquery.ui.datepicker.mobile.js';
 
 
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
 
 >...tepicker/jQuery.ui.datepicker.js</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/experiments/ui-datepicker/jquery.ui.datepicker.mobile.css?r=88&amp;spec=svn92"
 
 >.../jquery.ui.datepicker.mobile.css</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/experiments/ui-datepicker/jquery.ui.datepicker.mobile.js?r=88&amp;spec=svn92"
 selected="selected"
 >...r/jquery.ui.datepicker.mobile.js</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/demo2/index.html?r=88&amp;spec=svn92"
 
 >...g/resources/jqm/demo2/index.html</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/src/com/mds/apg/wizards/PhonegapProjectPopulate.java?r=88&amp;spec=svn92"
 
 >...rds/PhonegapProjectPopulate.java</option>
 
 </select>
 </td></tr></table>
 
 
 



 <div style="white-space:nowrap">
 Project members,
 <a href="https://www.google.com/accounts/ServiceLogin?service=code&amp;ltmpl=phosting&amp;continue=https%3A%2F%2Fcode.google.com%2Fa%2Feclipselabs.org%2Fp%2Fmobile-web-development-with-phonegap%2Fsource%2Fbrowse%2Ftrunk%2Fcom.mds.apg%2Fresources%2Fjqm%2Fdemo2%2Fexperiments%2Fui-datepicker%2Fjquery.ui.datepicker.mobile.js%3Fr%3D92&amp;followup=https%3A%2F%2Fcode.google.com%2Fa%2Feclipselabs.org%2Fp%2Fmobile-web-development-with-phonegap%2Fsource%2Fbrowse%2Ftrunk%2Fcom.mds.apg%2Fresources%2Fjqm%2Fdemo2%2Fexperiments%2Fui-datepicker%2Fjquery.ui.datepicker.mobile.js%3Fr%3D92"
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
 
 <a href="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/list?path=/trunk/com.mds.apg/resources/jqm/demo2/experiments/ui-datepicker/jquery.ui.datepicker.mobile.js&start=88">All revisions of this file</a>
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
 
 <div>Size: 2117 bytes,
 55 lines</div>
 
 <div><a href="//mobile-web-development-with-phonegap.eclipselabs.org.codespot.com/svn-history/r92/trunk/com.mds.apg/resources/jqm/demo2/experiments/ui-datepicker/jquery.ui.datepicker.mobile.js">View raw file</a></div>
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
 var paths = {'svn92': '/trunk/com.mds.apg/resources/jqm/demo2/experiments/ui-datepicker/jquery.ui.datepicker.mobile.js'}
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

 
 


 
 </body>
</html>
