import React from 'react'
import HeaderProfile from '../Components/HeaderProfile'
import privacyData from '../Pages/socialPageJSON/privacy_en.json';
import LanguageSocial from '../Components/Language/LanguageSocial';
import { useLanguage } from '../Helpers/Languages/LanguageContext';

function Privacy() {
    let { language } = useLanguage()
    return (
        <div>
            <HeaderProfile />
            <div className='absolute right-2 lg:right-[20px] top-1 lg:top-3 flex items-center align-start z-20'>
                <LanguageSocial />
            </div>

            <div className='textStyle max-w-[1240px] m-auto overflow-scroll h-screen pb-[50px] saira p-2' dangerouslySetInnerHTML={
                {
                    __html: language === 'pt' ? pt_text : language === 'es' ? es_text : en_text}
            } />

        </div>
    );
}

export default Privacy
let en_text = `<div>
<p style="margin-top:0pt; margin-bottom:14pt; text-align:center; line-height:115%; font-size:16pt!important;"><strong><u>Cybersays.club - Privacy Policy</u></strong></p>
<p style="margin-top:6pt; margin-bottom:6pt; text-align:right; line-height:115%; font-size:12pt;">Last revised: <u>February 2024</u></p>
<p style="margin-top:6pt; margin-bottom:6pt; text-align:justify; line-height:115%; font-size:14pt"><strong><u>INTRODUCTION</u></strong></p>
<p style="margin-top:6pt; margin-bottom:6pt; text-align:justify; line-height:115%; font-size:12pt;">Pythia Grant Ltd.&nbsp; including its affiliates (collectively, the<strong>&nbsp;&quot;Company&quot;,&nbsp;</strong>&quot;<strong>we</strong>&quot;, &quot;<strong>our</strong>&quot; or &quot;<strong>us</strong>&quot;) are deeply committed to safeguarding the privacy expectations of its users (&ldquo;<strong>User(s)</strong>&rdquo;, &ldquo;<strong>you</strong>&rdquo; or &ldquo;<strong>your</strong>&rdquo;).</p>
<p style="margin-top:6pt; margin-bottom:6pt; text-align:justify; line-height:115%; font-size:12pt;">Accordingly, we have put in place this privacy policy (&quot;<strong>Policy</strong>&quot;), which outlines our data protection practices, including how we collect, use, disclose and protect your personal information, as well as your rights with respect to your personal information.</p>
<p style="margin-top:14pt; margin-bottom:14pt; text-align:justify; line-height:115%; font-size:12pt;;"><span style="line-height:115%; font-size:12pt;">Please read this Policy very carefully and use it to make informed decisions, as your access to and use of our service, whether by visiting our website,&nbsp;</span><a href="http://www.Cybersays.club" style="text-decoration:none;"><u><span style="line-height:115%; font-size:12pt; color:#0000ff;">www.Cybersays.club</span></u></a><span style="line-height:115%; font-size:12pt;">&nbsp;(&quot;</span><strong><span style="line-height:115%; font-size:12pt;">Website</span></strong><span style="line-height:115%; font-size:12pt;">&quot;) or by creating an account through our service (collectively &quot;</span><strong><span style="line-height:115%; font-size:12pt;">Service</span></strong><span style="line-height:115%; font-size:12pt;">&quot;), signifies that you have read and understand all the terms detailed herein and you hereby agree to this Policy and to the collection, use, retention and disclosure of your personal information in accordance with these terms.&nbsp;</span></p>
<p style="margin-top:14pt; margin-bottom:14pt; text-align:justify; line-height:115%; font-size:12pt;"><strong>If you do not agree to the terms of this Policy, please do not use our Services</strong>.&nbsp;You are&nbsp;not&nbsp;legally required to provide us with any personal information, but without it, we will not be able to provide you with the full range or with the best experience of using our Services.</p>
<p style="margin-top:14pt; margin-bottom:14pt; text-align:justify; line-height:115%; font-size:12pt;">Personal information is defined as any information that identifies an individual or could reasonably identify an individual with reasonable effort, including without limitation (1) User name, (2) your browser identification details and (3) your Social media identification details (i.e. you Facebook User details) hereinafter referred to as the &quot;<strong>Personal Information</strong>&quot;. Processing activities include, among other things, the collection, use, retention and disclosure of such data.</p>
<p style="margin-top:14pt; margin-bottom:14pt; text-align:justify; line-height:115%; font-size:12pt;">Your Personal Information will be processed by us (including any of our agents and/or employees), and (where appropriate) any other company in our company group and/or our partners and subcontractors, in accordance with this Policy.</p>
<p style="margin-top:6pt; margin-bottom:6pt; text-align:justify; line-height:115%; font-size:12pt;">If you have any questions regarding this Policy or the way we use your Personal Information, please refer to our table of contents and to the section 12. &quot;HOW TO CONTACT US?&quot; below. The Company is the controller of the Personal Information collected, and is responsible for the processing of your Personal Information.</p>
<p style="margin-top:6pt; margin-bottom:6pt; text-align:justify; line-height:115%; font-size:12pt;">In this Policy, you can learn about:</p>
<ol type="1" style="margin:0pt; padding-left:0pt;">
    <li style="margin-left:12.74pt; line-height:normal; padding-left:5.26pt; font-size:12pt; font-weight:bold;">WHAT INFORMATION WE COLLECT?</li>
    <li style="margin-left:12.74pt; line-height:normal; padding-left:5.26pt; font-size:12pt; font-weight:bold;">MINORS</li>
    <li style="margin-left:12.74pt; line-height:normal; padding-left:5.26pt; font-size:12pt; font-weight:bold;">PURPOSES AND CONDITIONS FOR PROCESSING PERSONAL INFORMATION</li>
    <li style="margin-left:12.74pt; line-height:normal; padding-left:5.26pt; font-size:12pt; font-weight:bold;">MARKETING</li>
    <li style="margin-left:12.74pt; line-height:normal; padding-left:5.26pt; font-size:12pt; font-weight:bold;">WITH WHOM WE SHARE INFORMATION?</li>
    <li style="margin-left:12.74pt; line-height:normal; padding-left:5.26pt; font-size:12pt; font-weight:bold;">INTERNATIONAL TRANSFER OF INFORMATION</li>
    <li style="margin-left:12.74pt; line-height:normal; padding-left:5.26pt; font-size:12pt; font-weight:bold;">THIRD PARTY TRACKING TECHNOLOGIES</li>
    <li style="margin-left:12.74pt; line-height:normal; padding-left:5.26pt; font-size:12pt; font-weight:bold;">RETENTION OF PERSONAL INFORMATION</li>
    <li style="margin-left:12.74pt; line-height:normal; padding-left:5.26pt; font-size:12pt; font-weight:bold;">YOUR RIGHTS</li>
    <li style="margin-left:17.81pt; line-height:normal; padding-left:0.19pt; font-size:12pt; font-weight:bold;">CHANGES TO THE PRIVACY POLICY</li>
    <li style="margin-left:17.81pt; line-height:normal; padding-left:0.19pt; font-size:12pt; font-weight:bold;">LANGUAGE VERSION</li>
    <li style="margin-left:17.81pt; line-height:normal; padding-left:0.19pt; font-size:12pt; font-weight:bold;">HOW TO CONTACT US?</li>
</ol>
<p style="margin-top:10pt; margin-bottom:10pt; text-align:justify; line-height:115%; font-size:12pt;"></p>
<ol type="1" style="margin:0pt; padding-left:0pt;">
    <li style="line-height:115%; font-size:12pt; font-weight:bold; list-style-position:inside;"><span style="width:18.26pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>WHAT INFORMATION WE COLLECT?</li>
</ol>
<p style="margin-top:6pt; margin-bottom:6pt; text-align:justify; line-height:115%; font-size:12pt;">We collect Personal Information from our Users and visitors of our Service, which consists of the following:</p>
<ul type="square" style="margin:0pt; padding-left:0pt;">
    <li style="margin-top:6pt; margin-left:27.58pt; margin-bottom:6pt; text-align:justify; line-height:115%; padding-left:8.42pt; font-family:serif; font-size:12pt;"><strong><span style="font-family:Calibri;">Registration and login:</span></strong><span style="font-family:Calibri;">&nbsp;When you open an account and register to use our Service, you will be asked to provide us with certain details about yourself, such as: your email address, your Facebook User details and password. Please note that when you wish to update your account profile, we also collect Personal Information from you.</span></li>
    <li style="margin-top:6pt; margin-left:27.58pt; margin-bottom:6pt; text-align:justify; line-height:115%; padding-left:8.42pt; font-family:serif; font-size:12pt;"><strong><span style="font-family:Calibri;">Voluntary information</span></strong><span style="font-family:Calibri;">: We also collect information which you provide us voluntarily in order to personalize your account or for a specific function, which you voluntarily provide to us at your discretion for a specific function. In addition, we collect your communication when you respond to communications from us, provide us with feedback, communicate with us via email or share additional information about yourself through your use of the Service.&nbsp;</span></li>
    <li style="margin-top:6pt; margin-left:27.58pt; margin-bottom:6pt; text-align:justify; line-height:115%; padding-left:8.42pt; font-family:serif; font-size:12pt;"><strong><span style="font-family:Calibri;">Device information</span></strong><span style="font-family:Calibri;">: We collect specific types of connection details and information with regard to your device, software or hardware that could identify you, such as: device&rsquo;s unique identifiers (e.g. UDID, IMEI, MAC address), browser fingerprinting, IP address, blockchain address, wallet type, and geo-location data.</span></li>
    <li style="margin-top:6pt; margin-left:27.58pt; margin-bottom:6pt; text-align:justify; line-height:115%; padding-left:8.42pt; font-family:serif; font-size:12pt;"><strong><span style="font-family:Calibri;">Information we collect from third parties</span></strong><span style="font-family:Calibri;">: We sometimes collect Personal Information from third party service providers, such as information which is gathered in order to verify your identity and prevent fraudulent or illegal activity.</span></li>
</ul>
<ul type="square" style="margin:0pt; padding-left:0pt;">
    <li style="margin-top:6pt; margin-left:27.58pt; margin-bottom:6pt; text-align:justify; line-height:115%; padding-left:8.42pt; font-family:serif; font-size:12pt;"><strong><span style="font-family:Calibri;">Log-in history and technical information</span></strong><span style="font-family:Calibri;">: To enhance the functionality of the Service and to provide you with a better user experience,</span><strong><span style="font-family:Calibri;">&nbsp;</span></strong><span style="font-family:Calibri;">we collect technical information transmitted by your device, including certain software and hardware information (e.g. the type of browser and operating system your device uses, language preference, access time and the domain name of the website from which you linked to the Service; etc.).</span></li>
    <li style="margin-top:6pt; margin-left:27.58pt; margin-bottom:6pt; text-align:justify; line-height:115%; padding-left:8.42pt; font-family:serif; font-size:12pt;"><strong><span style="font-family:Calibri;">Analytics information</span></strong><span style="font-family:Calibri;">: We collect information about your use of the Service, such as applications&apos; usage, log files, user activity (e.g. pages viewed, user&apos;s movements, time spent, online browsing, clicks, actions, etc.), time stamps, alerts, etc. This information is collected for amongst other things troubleshooting errors and bugs as well as for research and analytics purposes about your use of the Service.</span></li>
</ul>
<ol start="2" type="1" style="margin:0pt; padding-left:0pt;">
    <li style="line-height:115%; font-size:12pt; font-weight:bold; list-style-position:inside;"><span style="width:23.26pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>MINORS</li>
</ol>
<p style="margin-top:6pt; margin-bottom:6pt; text-align:justify; line-height:115%; font-size:12pt;">The Service are not designed or directed to persons under the age of 18 or persons under the age of legal consent with respect to the use of the Service of any jurisdiction, whichever is higher (&ldquo;<strong>Legally of Age</strong>&rdquo;).</p>
<p style="margin-top:6pt; margin-bottom:6pt; text-align:justify; line-height:115%; font-size:12pt;">We do not collect Personal Information of a minor.</p>
<p style="margin-top:6pt; margin-bottom:6pt; text-align:justify; line-height:115%; font-size:12pt;"><strong>If you are not Legally of Age, you are prohibited to access or use the Service and you are prohibited to provide any Personal Information to us.</strong></p>
<p style="margin-top:6pt; margin-bottom:6pt; text-align:justify; line-height:115%; font-size:12pt;">We reserve the right to access and verify any Personal Information collected from you. In the event that we become aware that a user who is not Legally of Age has shared any information, we shall discard such information.</p>
<ol start="3" type="1" style="margin:0pt; padding-left:0pt;">
    <li style="margin-top:6pt; margin-bottom:6pt; text-align:justify; line-height:115%; font-size:12pt; font-weight:bold; list-style-position:inside;"><span style="width:23.26pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>PURPOSES AND CONDITIONS FOR PROCESSING PERSONAL INFORMATION</li>
</ol>
<p style="margin-top:6pt; margin-bottom:6pt; text-align:justify; line-height:115%; font-size:12pt;">This section outlines the underlying purposes and legal bases for the processing of your Personal Information:</p>
<table cellspacing="0" cellpadding="0" style="width:468.55pt; border:0.75pt solid #000000; border-collapse:collapse;">
    <tbody>
        <tr>
            <td style="width:224.3pt; border-right-style:solid; border-right-width:0.75pt; border-bottom-style:solid; border-bottom-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:top; background-color:#aeaaaa;">
                <p style="margin-top:0pt; margin-bottom:0pt; text-align:center; line-height:115%; font-size:12pt;"><strong>Purpose</strong></p>
            </td>
            <td style="width:221.9pt; border-left-style:solid; border-left-width:0.75pt; border-bottom-style:solid; border-bottom-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:top; background-color:#aeaaaa;">
                <p style="margin-top:0pt; margin-bottom:0pt; text-align:center; line-height:115%; font-size:12pt;"><strong>Legal basis</strong></p>
            </td>
        </tr>
        <tr>
            <td style="width:224.3pt; border-top-style:solid; border-top-width:0.75pt; border-right-style:solid; border-right-width:0.75pt; border-bottom-style:solid; border-bottom-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:top;">
                <p style="margin-top:0pt; margin-bottom:0pt; text-align:justify; line-height:115%; font-size:12pt;"><strong>Provision of our Service; support and customer relations</strong>. We use your Personal Information, such as your username and email address for customer services purposes as well as to present our Websites to you. This includes, for example, managing and updating your account, providing and operating the Service, keeping you informed about our last updates or responding to any of your inquiries, as well as your request to exercise your User rights.</p>
            </td>
            <td style="width:221.9pt; border-top-style:solid; border-top-width:0.75pt; border-left-style:solid; border-left-width:0.75pt; border-bottom-style:solid; border-bottom-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:top;">
                <p style="margin-top:0pt; margin-bottom:0pt; text-align:justify; line-height:115%; font-size:12pt;">The legal bases for processing this data are the performance of our contractual obligations towards you for example as described under this Policy and/or Terms of Use (Art. 6.1(b) GDPR); your consent (for example, when you agree to provide Personal Information by accepting our Cookie Notice, Policy and Terms of Use) (Art. 6.1(a) GDPR); compliance with our legal obligations (Art. 6.1(c) GDPR); and our legitimate interests (Art. 6.1(f) GDPR). Our legitimate interests in this case are enforcing our policies, protection against fraud and misuse of our Service.</p>
            </td>
        </tr>
        <tr>
            <td style="width:224.3pt; border-top-style:solid; border-top-width:0.75pt; border-right-style:solid; border-right-width:0.75pt; border-bottom-style:solid; border-bottom-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:top;">
                <p style="margin-top:0pt; margin-bottom:0pt; text-align:justify; line-height:115%; font-size:12pt;"><strong>Improving our Service</strong>. We collect and analyze information about you and your usage of our Service to improve the usability and effectiveness of our Service, including debugging to identify and repair errors or undertaking internal research for technological development and demonstration.</p>
            </td>
            <td style="width:221.9pt; border-top-style:solid; border-top-width:0.75pt; border-left-style:solid; border-left-width:0.75pt; border-bottom-style:solid; border-bottom-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:top;">
                <p style="margin-top:0pt; margin-bottom:0pt; text-align:justify; line-height:115%; font-size:12pt;">The legal basis for processing this data is our legitimate interests (Art. 6.1(f) GDPR), in this case &ndash; providing and improving our Service.</p>
            </td>
        </tr>
        <tr>
            <td style="width:224.3pt; border-top-style:solid; border-top-width:0.75pt; border-right-style:solid; border-right-width:0.75pt; border-bottom-style:solid; border-bottom-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:top;">
                <p style="margin-top:0pt; margin-bottom:0pt; text-align:justify; line-height:115%; font-size:12pt;"><strong>Marketing, advertising and analytics</strong>. We use your Personal Information in order to provide you with personalized advertisements, including behavioral advertising when you visit our Service, to market our Service and to gather aggregate usage information for analytics, statistical and research purposes, including notification of promotional offers.</p>
            </td>
            <td style="width:221.9pt; border-top-style:solid; border-top-width:0.75pt; border-left-style:solid; border-left-width:0.75pt; border-bottom-style:solid; border-bottom-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:top;">
                <p style="margin-top:0pt; margin-bottom:0pt; text-align:justify; line-height:115%; font-size:12pt;">The legal bases for processing this data are your consent (when required) and our legitimate interests (Art. 6.1(a), 6.1(f) GDPR).</p>
                <p style="margin-top:0pt; margin-bottom:0pt; text-align:justify; line-height:115%; font-size:12pt;">Our legitimate interests in this case are providing you with tailored services, content and advertisements that better fit your interests as well as to promote our Service.</p>
            </td>
        </tr>
        <tr>
            <td style="width:224.3pt; border-top-style:solid; border-top-width:0.75pt; border-right-style:solid; border-right-width:0.75pt; border-bottom-style:solid; border-bottom-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:top;">
                <p style="margin-top:0pt; margin-bottom:0pt; text-align:justify; line-height:115%; font-size:12pt;"><strong>Integrity.</strong> We process certain information about you and your usage of the Services in order to keep the integrity and security of the Services.</p>
            </td>
            <td style="width:221.9pt; border-top-style:solid; border-top-width:0.75pt; border-left-style:solid; border-left-width:0.75pt; border-bottom-style:solid; border-bottom-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:top;">
                <p style="margin-top:0pt; margin-bottom:0pt; text-align:justify; line-height:115%; font-size:12pt;">The legal bases for processing this data are compliance with our legal obligations (Art. 6.1(c) GDPR) and our legitimate interests (Art. 6.1(f) GDPR). Our legitimate interests in this case are keeping the integrity of our Services and the safety of our end-users.</p>
            </td>
        </tr>
        <tr>
            <td style="width:224.3pt; border-top-style:solid; border-top-width:0.75pt; border-right-style:solid; border-right-width:0.75pt; border-bottom-style:solid; border-bottom-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:top;">
                <p style="margin-top:0pt; margin-bottom:0pt; text-align:justify; line-height:115%; font-size:12pt;"><strong>Dispute resolution and protection of our legal claims</strong>. We collect your Personal Information in order to investigate violation of our policies, enable us to resolve disputes in connection with your use of the Service and to establish and defend our legal claims.</p>
            </td>
            <td style="width:221.9pt; border-top-style:solid; border-top-width:0.75pt; border-left-style:solid; border-left-width:0.75pt; border-bottom-style:solid; border-bottom-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:top;">
                <p style="margin-top:0pt; margin-bottom:0pt; text-align:justify; line-height:115%; font-size:12pt;">The legal basis for processing this data is our legitimate interests (Art. 6.1(f) GDPR). Our legitimate interests in this case are to establish and defend our legal claims.</p>
            </td>
        </tr>
        <tr>
            <td style="width:224.3pt; border-top-style:solid; border-top-width:0.75pt; border-right-style:solid; border-right-width:0.75pt; border-bottom-style:solid; border-bottom-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:top;">
                <p style="margin-top:6pt; margin-bottom:6pt; text-align:justify; line-height:115%; font-size:12pt;"><strong>Corporate transactions</strong>. We will share your Personal Information with a potential purchasers, successors or investors in the Company or in the event of a corporate transaction (e.g. sale of a substantial part of our business, merger, reorganization, bankruptcy, consolidation or asset sale of an asset or transfer in the operation thereof) in relation to the Company.</p>
            </td>
            <td style="width:221.9pt; border-top-style:solid; border-top-width:0.75pt; border-left-style:solid; border-left-width:0.75pt; border-bottom-style:solid; border-bottom-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:top;">
                <p style="margin-top:0pt; margin-bottom:0pt; text-align:justify; line-height:115%; font-size:12pt;">The legal basis for processing this data is our legitimate interests (Art. 6.1(f) GDPR).</p>
            </td>
        </tr>
        <tr>
            <td style="width:224.3pt; border-top-style:solid; border-top-width:0.75pt; border-right-style:solid; border-right-width:0.75pt; border-bottom-style:solid; border-bottom-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:top;">
                <p style="margin-top:6pt; margin-bottom:6pt; text-align:justify; line-height:115%; font-size:12pt;"><strong>Prevention of fraud or violation of our policies</strong>. We process your Personal Information to detect and prevent fraudulent and illegal activity or any other type of activity that jeopardizes or negatively affect the integrity of the Service, including by identifying risks associated with your activity on our Service. We will also investigate any violations of our policies and enforce them.</p>
            </td>
            <td style="width:221.9pt; border-top-style:solid; border-top-width:0.75pt; border-left-style:solid; border-left-width:0.75pt; border-bottom-style:solid; border-bottom-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:top;">
                <p style="margin-top:0pt; margin-bottom:0pt; text-align:justify; line-height:115%; font-size:12pt;">The legal basis for processing this data is our legitimate interests (Art. 6.1(f) GDPR). Our legitimate interests in this case are to protect our Company and other Users against fraud.</p>
            </td>
        </tr>
        <tr>
            <td style="width:224.3pt; border-top-style:solid; border-top-width:0.75pt; border-right-style:solid; border-right-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:top;">
                <p style="margin-top:6pt; margin-bottom:6pt; text-align:justify; line-height:115%; font-size:12pt;"><strong>Compliance with applicable laws</strong>. We process your Personal Information to comply with our various legal obligations such as adult content legislation (where applicable), anti-money laundering, identity verification (e.g., suspicion of minor using our Service), prevention of fraud, complying with data subject rights etc.</p>
            </td>
            <td style="width:221.9pt; border-top-style:solid; border-top-width:0.75pt; border-left-style:solid; border-left-width:0.75pt; padding-right:5.03pt; padding-left:5.03pt; vertical-align:top;">
                <p style="margin-top:0pt; margin-bottom:0pt; text-align:justify; line-height:115%; font-size:12pt;">The legal basis for processing this data is to comply with our various legal obligations (Art. 6.1(c) GDPR) and our legitimate interests (Art. 6.1(f) GDPR).</p>
            </td>
        </tr>
    </tbody>
</table>
<p style="margin-top:6pt; margin-bottom:6pt; text-align:justify; line-height:115%; font-size:12pt;">Where you have not consented (or have withdrawn your consent) to the processing of your Personal Information by us, we will continue to process your Personal Information : (a) where processing is required for the performance of the contract (i.e. the Terms of Use) between you and us; and/or (b) where processing is necessary for compliance with a legal obligation to which we are subject; (c) where processing is necessary for the purposes of a legitimate interest of the Company and its affiliates (including for marketing).</p>
<ol start="4" type="1" style="margin:0pt; padding-left:0pt;">
    <li style="line-height:115%; font-size:12pt; font-weight:bold; list-style-position:inside;"><span style="width:23.26pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>MARKETING</li>
</ol>
<p style="margin-top:0pt; margin-bottom:8pt; text-align:justify; line-height:115%; font-size:12pt;">We will use your Personal Information, such as your email address, collected by ourselves or through our trusted third party subcontractors for the purpose of providing you with promotional materials via different marketing techniques such as direct email, telephone marketing, SMS concerning the Service as well as products, services, websites and applications which relate to the Company&apos;s business partners and its affiliates (collectively: &ldquo;<strong>Marketing Affiliates</strong>&rdquo;), which we believe could interest you.</p>
<p style="margin-top:6pt; margin-bottom:6pt; text-align:justify; line-height:115%; font-size:12pt;">We also share and disclose Personal Information with our Marketing Affiliates for the purpose of providing you different marketing offers, which we, or our Marketing Affiliates, believe are relevant for you.</p>
<p style="margin-top:0pt; margin-bottom:8pt; text-align:justify; line-height:115%; font-size:12pt;">We will use your Personal Information for the purpose of providing you with promotional materials solely where we have a legitimate interest in doing so, or where we have obtained your affirmative consent.</p>
<p style="margin-top:6pt; margin-bottom:6pt; text-align:justify; line-height:115%; font-size:12pt;">You have the possibility at any time to decline receiving further marketing offers from us or from our business partners and marketing affiliates by either: following the links inserted in the promotional emails (e.g., selecting the opt-out link) or contacting our customer support.</p>
<p style="margin-top:6pt; margin-bottom:6pt; text-align:justify; line-height:115%; font-size:12pt;">Please note that even if you unsubscribe from our marketing mailing list, we shall continue to send you service-related updates and notifications.</p>
<ol start="5" type="1" style="margin:0pt; padding-left:0pt;">
    <li style="line-height:115%; font-size:12pt; font-weight:bold; list-style-position:inside;"><span style="width:23.26pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>WITH WHOM WE SHARE INFORMATION?</li>
</ol>
<p style="margin-top:6pt; margin-bottom:6pt; text-align:justify; line-height:115%; font-size:12pt;">We do not rent, sell, or share your Personal Information with third parties (&ldquo;<strong>Recipients</strong>&rdquo;) except as described in this Policy.&nbsp; The Personal Information will be disclosed to Recipients only to the extent required for the specific purpose, as stipulated in this Policy.</p>
<p style="margin-top:6pt; margin-bottom:6pt; text-align:justify; line-height:115%; font-size:12pt;">We disclose Personal Information with any of the following recipients:</p>
<ul type="square" style="margin:0pt; padding-left:0pt;">
    <li style="margin-top:6pt; margin-left:9.58pt; margin-bottom:6pt; text-align:justify; line-height:115%; padding-left:8.42pt; font-family:serif; font-size:12pt;"><span style="font-family:Calibri;">Companies within the Company and other affiliated companies;</span></li>
    <li style="margin-top:6pt; margin-left:9.58pt; margin-bottom:6pt; text-align:justify; line-height:115%; padding-left:8.42pt; font-family:serif; font-size:12pt;"><span style="font-family:Calibri;">Subcontractors and third party service providers, as well as their subcontractors, which by way of example include (but is not limited to) cloud computing companies, marketing affiliates, identity verification and fraud prevention services, and other data verifiers;</span></li>
    <li style="margin-top:6pt; margin-left:9.58pt; margin-bottom:6pt; text-align:justify; line-height:115%; padding-left:8.42pt; font-family:serif; font-size:12pt;"><span style="font-family:Calibri;">Payment service providers, payment processors&nbsp;</span></li>
    <li style="margin-top:6pt; margin-left:9.58pt; margin-bottom:6pt; text-align:justify; line-height:115%; padding-left:8.42pt; font-family:serif; font-size:12pt;"><span style="font-family:Calibri;">To any third parties who provide services in relation to the operation or promotion of the Service;</span></li>
    <li style="margin-top:6pt; margin-left:9.58pt; margin-bottom:6pt; text-align:justify; line-height:115%; padding-left:8.42pt; font-family:serif; font-size:12pt;"><span style="font-family:Calibri;">Auditors, contractors or advisers of any of the Company&rsquo;s business processes;</span></li>
    <li style="margin-top:6pt; margin-left:9.58pt; margin-bottom:6pt; text-align:justify; line-height:115%; padding-left:8.42pt; font-family:serif; font-size:12pt;"><span style="font-family:Calibri;">To any third parties who investigate, detect or prevent fraudulent or illegal activity (e.g. governmental authorities, police, banks and other investigatory organizations);</span></li>
    <li style="margin-top:6pt; margin-left:9.58pt; margin-bottom:6pt; text-align:justify; line-height:115%; padding-left:8.42pt; font-family:serif; font-size:12pt;"><span style="font-family:Calibri;">Governmental and regulatory bodies, in accordance with applicable laws and regulations;</span></li>
    <li style="margin-top:6pt; margin-left:9.58pt; margin-bottom:6pt; text-align:justify; line-height:115%; padding-left:8.42pt; font-family:serif; font-size:12pt;"><span style="font-family:Calibri;">Law enforcement agencies or authorities, as a response to their request; and</span></li>
    <li style="margin-top:6pt; margin-left:9.58pt; margin-bottom:6pt; text-align:justify; line-height:115%; padding-left:8.42pt; font-family:serif; font-size:12pt;"><span style="font-family:Calibri;">Potential purchasers or investors in any of the companies within the Company&apos;s group (if applicable), or in the event of a corporate transaction (e.g. sale of a substantial part of our business, merger, reorganization, bankruptcy, consolidation or asset sale of an asset or transfer in the operation thereof) in relation to any company within the Company (in such event, the acquiring company or transferee will assume the rights and obligations as described in this Policy).</span></li>
    <li style="margin-top:6pt; margin-left:9.58pt; margin-bottom:6pt; text-align:justify; line-height:115%; padding-left:8.42pt; font-family:serif; font-size:12pt;"><span style="font-family:Calibri;">Research, technical diagnostics and analytics vendors;&nbsp;</span></li>
    <li style="margin-top:6pt; margin-left:9.58pt; margin-bottom:6pt; text-align:justify; line-height:115%; padding-left:8.42pt; font-family:serif; font-size:12pt;"><span style="font-family:Calibri;">Marketing and advertising partners, in accordance with our marketing policy (see above, under &quot;</span><strong><span style="font-family:Calibri;">Marketing</span></strong><span style="font-family:Calibri;">&quot;); and</span></li>
    <li style="margin-top:6pt; margin-left:9.58pt; margin-bottom:6pt; text-align:justify; line-height:115%; padding-left:8.42pt; font-family:serif; font-size:12pt;"><span style="font-family:Calibri;">Whenever we believe in good faith that disclosure is necessary to protect our rights or legal claims, enforce our policies (including our Terms of Use and Policy), protect your safety or the safety of others, as well as to investigate or prevent any fraud, for security reasons or to help us with any other related technical issue.</span></li>
</ul>
<ol start="6" type="1" style="margin:0pt; padding-left:0pt;">
    <li style="margin-top:6pt; margin-bottom:6pt; text-align:justify; line-height:115%; font-size:12pt; font-weight:bold; list-style-position:inside;"><span style="width:23.26pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>INTERNATIONAL TRANSFER OF INFORMATION</li>
</ol>
<p style="margin-top:6pt; margin-bottom:6pt; text-align:justify; line-height:115%; font-size:12pt;">Since we operate globally, it is necessary for the provision of the Service and to the extent required for the specific purpose, as stipulated in this Policy to transfer your Personal Information to countries outside the European Economic Area (&quot;<strong>EEA</strong>&quot;). The data protection and other laws of these countries are not as comprehensive as those in the EEA.</p>
<p style="margin-top:6pt; margin-bottom:6pt; text-align:justify; line-height:115%;"><span style="line-height:115%; font-size:12pt;">In these circumstances, we use our best efforts to ensure that your Personal Information is protected in accordance with our Policy, through contractual means (such as by using the standard contractual clauses approved by the relevant European Commission for data transfer, as available&nbsp;</span><a href="https://ec.europa.eu/info/law/law-topic/data-protection/international-dimension-data-protection/standard-contractual-clauses-scc_en" style="text-decoration:none;"><u><span style="line-height:115%; font-size:12pt; color:#0000ff;">here</span></u></a><span style="line-height:115%; font-size:12pt;">) or other means (such as ensuring that the European Commission decisions determined that such jurisdictions offer an adequate level of protection as available&nbsp;</span><a href="https://ec.europa.eu/info/law/law-topic/data-protection/international-dimension-data-protection/adequacy-decisions_en" style="text-decoration:none;"><u><span style="line-height:115%; font-size:12pt; color:#0000ff;">here</span></u></a><span style="line-height:115%; font-size:12pt; color:#595959;">).</span></p>
<ol start="7" type="1" style="margin:0pt; padding-left:0pt;">
    <li style="line-height:115%; font-size:12pt; font-weight:bold; list-style-position:inside;"><span style="width:23.26pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>THIRD PARTY TRACKING TECHNOLOGIES</li>
</ol>
<p style="margin-top:6pt; margin-bottom:6pt; text-align:justify; line-height:115%; font-size:12pt;">We use third-party advertising technology across our Websites to serve advertisements when you visit or use our Service. We use and authorize third parties to use web beacons, cookies, pixels, scripts, tags and other technologies (&quot;<strong>Tracking Technologies</strong>&quot;).</p>
<p style="margin-top:6pt; margin-bottom:6pt; text-align:justify; line-height:115%; font-size:12pt;">The Tracking Technologies automatically collect information about you, your online behavior on the Websites, and your device (for example your computer or mobile device), for different purposes, including improving and personalizing your navigation on our Service and enhancing our Service&rsquo; performance. Third parties use this information to provide you with targeted content.</p>
<p style="margin-top:6pt; margin-bottom:6pt; text-align:justify; line-height:115%; font-size:12pt;">You can set your browser to refuse all third party cookies, or to alert you when cookies are being sent, also you can opt-out of many third party ad networks, including those operated by members of the Network Advertising Initiative (&quot;<strong>NAI</strong>&quot;) and the Digital Advertising Alliance (&quot;<strong>DAA</strong>&quot;).</p>
<p style="margin-top:6pt; margin-bottom:6pt; text-align:justify; line-height:115%; font-size:12pt;">We also allow third parties to collect information about you through Tracking Technologies. To learn more please visit our Cookie Notice.</p>
<ol start="8" type="1" style="margin:0pt; padding-left:0pt;">
    <li style="line-height:115%; font-size:12pt; font-weight:bold; list-style-position:inside;"><span style="width:23.26pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>RETENTION OF PERSONAL INFORMATION</li>
</ol>
<p style="margin-top:6pt; margin-bottom:6pt; text-align:justify; line-height:115%; font-size:12pt;">If you have registered with an account through our Service, the Company will retain your Personal Information during the period your account is active. In addition, the Company will retain your Personal Information for additional periods, to enable the Company to meet its legal obligations under applicable laws or regulations.</p>
<p style="margin-top:6pt; margin-bottom:6pt; text-align:justify; line-height:115%; font-size:12pt;">In addition, the Company shall retain your Personal Information for longer periods, provided that retaining such information is only necessary for the Company&rsquo;s legitimate interests, such as fraud prevention and record keeping, resolving or excising claims regarding potential disputes.</p>
<ol start="9" type="1" style="margin:0pt; padding-left:0pt;">
    <li style="line-height:115%; font-size:12pt; font-weight:bold; list-style-position:inside;"><span style="width:23.26pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>YOUR RIGHTS</li>
</ol>
<p style="margin-top:6pt; margin-bottom:6pt; text-align:justify; line-height:115%; font-size:12pt;">You have certain rights regarding the collection and processing of Personal Information. To the extent these rights apply to and concern you, you can exercise them by contacting us via the contact details available under the section below &quot;HOW TO CONTACT US?&quot; and exercise the following rights:</p>
<ol type="1" class="awlist1" style="margin:0pt; padding-left:0pt;">
    <li style="margin-top:6pt; margin-left:36pt; text-indent:-18pt; text-align:justify; line-height:115%; font-size:12pt;"><span style="width:9.9pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>Rights of access &ndash; You can obtain a copy of the Personal Information held by the Company at any time;</li>
    <li style="margin-left:36pt; text-indent:-18pt; text-align:justify; line-height:115%; font-size:12pt;"><span style="width:9.9pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>Right of data portability &ndash; You have the right to receive your Personal Information, in a structured, commonly used and machine-readable format and to request that your Personal Information be transmitted to a third party of your choice;</li>
    <li style="margin-left:36pt; text-indent:-18pt; text-align:justify; line-height:115%; font-size:12pt;"><span style="width:9.9pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>Right of rectification &ndash; In the event that the data held about you by the Company is inaccurate, incomplete or outdated, you have the possibility to request the rectification of said data (except in cases where the information is required to be kept in its original format under any applicable laws and regulations);</li>
    <li style="margin-left:36pt; text-indent:-18pt; text-align:justify; line-height:115%; font-size:12pt;"><span style="width:9.9pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>Right of erasure &ndash; You have the possibility at any time to request that the Company erases data held about you by sending an email to the Company as outlined in this Policy. However, you are advised that with the deletion of your Personal Information, you might not be able to use the Service anymore or the account might be totally closed;</li>
    <li style="margin-left:36pt; text-indent:-18pt; text-align:justify; line-height:115%; font-size:12pt;"><span style="width:9.9pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>Right to restriction of processing, objection to processing &ndash; At any time, you have the right to request that the Company restricts or ceases to conduct certain data processes provided that there exists no other lawful basis on which the Company is authorized to process said data;</li>
    <li style="margin-left:36pt; text-indent:-18pt; text-align:justify; line-height:115%; font-size:12pt;"><span style="width:9.9pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>Right to withdraw your consent &ndash; You have the right to withdraw your given consent at any time. The withdrawal of consent will not affect the lawfulness of processing;</li>
    <li style="margin-left:36pt; text-indent:-18pt; text-align:justify; line-height:115%; font-size:12pt;"><span style="width:9.9pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>Right to lodge a complaint &ndash; All requests, complaints or queries should be addressed to the Company with the subject &lsquo;Privacy&rsquo;. We will consider any requests, complaints or queries and provide you with a reply in a timely manner. You can also file a complaint with the relevant data protection authority should you not be satisfied with the way in which we handle your Personal Information. We take our obligations seriously and we ask that any concerns be first brought to our attention, so that we can try to resolve this.</li>
</ol>
<p style="margin-top:0pt; margin-left:36pt; margin-bottom:6pt; text-align:justify; line-height:115%; font-size:12pt;">&nbsp;</p>
<p style="margin-top:6pt; margin-bottom:6pt; text-align:justify; line-height:115%; font-size:12pt;">Please note that these rights are not absolute, and can be subject to our own legitimate interests and regulatory requirements. You are welcome to contact us for any questions, requests or complaints through our contact details below.</p>
<p style="margin-top:6pt; margin-bottom:6pt; text-align:justify; line-height:115%; font-size:12pt;">We will make an effort to reply within a reasonable timeframe. Please feel free to reach out to us at any time. If you are unsatisfied with our response, you can lodge a complaint with the competent supervisory authority.</p>
<p style="margin-top:6pt; margin-bottom:6pt; text-align:justify; line-height:115%; font-size:12pt;">Also, you should be aware that unless you have registered and created an account on our Website, we could not be able to respond to your request as we do not have sufficient information to identify you. We could also rectify, replenish or remove incomplete or inaccurate information, at any time and at our own discretion, in accordance with our internal policies. Similarly, we will ask you to provide us with additional information in order to adequately verify your identity upon your request.</p>
<ol start="10" type="1" style="margin:0pt; padding-left:0pt;">
    <li style="line-height:115%; font-size:12pt; font-weight:bold; list-style-position:inside;"><span style="width:18.19pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>CHANGES TO THE PRIVACY POLICY</li>
</ol>
<p style="margin-top:6pt; margin-bottom:6pt; text-align:justify; line-height:115%; font-size:12pt;">We reserve the right to change this Policy at any time, so please re-visit this page frequently. We will use reasonable efforts to notify you in the event substantial changes are made to this Policy, as required by law. Any modifications, updates, alteration will be effective upon our publishing of this Privacy on our Websites and as of the stated &ldquo;Last Revised&rdquo; date, and your continued use of the Service after the Last Revised date will constitute acceptance of, and agreement to be bound by those changes.</p>
<ol start="11" type="1" style="margin:0pt; padding-left:0pt;">
    <li style="line-height:115%; font-size:12pt; font-weight:bold; list-style-position:inside;"><span style="width:18.19pt; font:7pt 'Times New Roman'; display:inline-block;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>LANGUAGE VERSION</li>
</ol>
<p style="margin-top:6pt; margin-bottom:6pt; text-align:justify; line-height:115%; font-size:12pt;">The Policy has been drafted in the English language, which is the original and controlling version of this Policy. All translations of this Policy into other languages shall be solely for convenience and shall not control the meaning or application of this Policy. In the event of any discrepancy between the meanings of any translated versions of the Policy and the English language version, the meaning of the English language version shall prevail.</p>
<p style="margin-top:6pt; margin-bottom:6pt; text-align:justify; line-height:115%; font-size:12pt;">&nbsp;<strong>HOW TO CONTACT US</strong></p>
<p style="margin-top:6pt; margin-bottom:6pt; text-align:justify; line-height:115%; font-size:12pt;">If you have any general questions about the Service or the information that we collect about you and how we process it, please contact us via email:</p>
<ul type="square" style="margin:0pt; padding-left:0pt;">
    <li style="margin-top:6pt; margin-left:27.58pt; margin-bottom:6pt; text-align:justify; line-height:115%; padding-left:8.42pt; font-family:serif; font-size:12pt;"><span style="font-family:Calibri;">Pythia Grant Ltd.</span><span style="font-family:Calibri;">&nbsp;&nbsp;</span></li>
    <li style="margin-top:6pt; margin-left:27.58pt; margin-bottom:6pt; text-align:justify; line-height:115%; padding-left:8.42pt; font-family:serif; font-size:12pt;"><span style="font-family:Calibri;">Attn: Cybersays.club Data Protection Officer</span></li>
    <li style="margin-left:27.58pt; margin-bottom:14pt; line-height:normal; padding-left:8.42pt; font-family:serif; font-size:12pt;"><a href="mailto:DPO@Cybersays.club" style="text-decoration:none;"><u><span style="font-family:'Segoe UI'; font-size:9pt; color:#0000ff;">DPO@Cybersays.club</span></u></a><span style="font-family:'Segoe UI'; font-size:9pt;">&nbsp;</span></li>
</ul>
<p style="margin-top:0pt; margin-bottom:0pt; line-height:115%; font-size:12pt;">We will make an effort to reply within a reasonable timeframe. Please feel free to reach out to us at any time. If you are unsatisfied with our response, you can reach out to the applicable data protection supervisory authority<span style="color:#595959;">.</span></p>
<div style="clear:both;">
    <p style="margin-top:0pt; margin-bottom:0pt; line-height:normal;"></p>
    <p style="margin-top:0pt; margin-bottom:0pt; line-height:normal;">&nbsp;</p>
</div>
</div>`
let es_text = ``
let pt_text = `<p style="text-align:center;font-size:16pt!important;" class="p14">
<span class="s1"
  ><strong>Cybersays.club - Pol&iacute;tica de privacidade</strong></span
>
</p>
<p class="p30">
&Uacute;ltima revis&atilde;o: <span class="s1">Fevereiro de 2024</span>
</p>
<p class="p22">
<span class="s1"><strong>INTRODU&Ccedil;&Atilde;O</strong></span>
</p>
<p class="p22">
A Pythia Grant Ltd., incluindo suas afiliadas (coletivamente, a
<strong>"Empresa", </strong>"<strong>n&oacute;s</strong>",
"<strong>nosso</strong>" ou "<strong>nos</strong>"), est&aacute;
profundamente comprometida com a prote&ccedil;&atilde;o das expectativas
de privacidade de seus usu&aacute;rios
("<strong>Usu&aacute;rio(s)</strong>", "<strong>voc&ecirc;</strong>" ou
"<strong>seu</strong>").
</p>
<p class="p22">
Dessa forma, implementamos esta pol&iacute;tica de privacidade
("<strong>Pol&iacute;tica</strong>"), que descreve nossas pr&aacute;ticas
de prote&ccedil;&atilde;o de dados, inclusive como coletamos, usamos,
divulgamos e protegemos suas informa&ccedil;&otilde;es pessoais, bem como
seus direitos com rela&ccedil;&atilde;o a elas.
</p>
<p class="p18">
Leia esta Pol&iacute;tica com muita aten&ccedil;&atilde;o e use-a para
tomar decis&otilde;es informadas, pois seu acesso e uso de nosso
servi&ccedil;o, seja visitando nosso site,
<a href="http://www.Cybersays.club"
  ><span class="s3">www.Cybersays.club</span></a
>
("<strong>Site</strong>") ou criando uma conta por meio de nosso
servi&ccedil;o (coletivamente "<strong>Servi&ccedil;o</strong>"),
significa que voc&ecirc; leu e entendeu todos os termos aqui detalhados e
que concorda com esta Pol&iacute;tica e com a coleta, uso,
reten&ccedil;&atilde;o e divulga&ccedil;&atilde;o de suas
informa&ccedil;&otilde;es pessoais de acordo com esses termos.
</p>
<p class="p18">
<strong
  >Se voc&ecirc; n&atilde;o concordar com os termos desta Pol&iacute;tica,
  n&atilde;o use nossos Servi&ccedil;os</strong
>. Voc&ecirc; n&atilde;o &eacute; legalmente obrigado a nos fornecer
nenhuma informa&ccedil;&atilde;o pessoal, mas, sem elas, n&atilde;o
poderemos lhe oferecer toda a gama de servi&ccedil;os ou a melhor
experi&ecirc;ncia de uso dos nossos Servi&ccedil;os.
</p>
<p class="p18">
As informa&ccedil;&otilde;es pessoais s&atilde;o definidas como qualquer
informa&ccedil;&atilde;o que identifique um indiv&iacute;duo ou que possa
razoavelmente identificar um indiv&iacute;duo com esfor&ccedil;o
razo&aacute;vel, incluindo, sem limita&ccedil;&atilde;o, (1) nome de
usu&aacute;rio, (2) detalhes de identifica&ccedil;&atilde;o do seu
navegador e (3) detalhes de identifica&ccedil;&atilde;o da sua
m&iacute;dia social (ou seja, seus detalhes de usu&aacute;rio do
Facebook), doravante denominados "<strong
  >Informa&ccedil;&otilde;es pessoais</strong
>". As atividades de processamento incluem, entre outras coisas, a coleta,
o uso, a reten&ccedil;&atilde;o e a divulga&ccedil;&atilde;o de tais
dados.
</p>
<p class="p22">
Suas Informa&ccedil;&otilde;es Pessoais ser&atilde;o processadas por
n&oacute;s (incluindo qualquer um de nossos agentes e/ou
funcion&aacute;rios) e (quando apropriado) por qualquer outra empresa de
nosso grupo empresarial e/ou nossos parceiros e subcontratados, de acordo
com esta Pol&iacute;tica.
</p>
<p class="p22">
Se tiver alguma d&uacute;vida sobre esta Pol&iacute;tica ou sobre a forma
como usamos suas Informa&ccedil;&otilde;es Pessoais, consulte nosso
&iacute;ndice e a se&ccedil;&atilde;o 12. "COMO ENTRAR EM CONTATO
CONOSCO?" abaixo. A Empresa &eacute; a controladora das
Informa&ccedil;&otilde;es Pessoais coletadas e &eacute; respons&aacute;vel
pelo processamento de suas Informa&ccedil;&otilde;es Pessoais.
</p>
<p class="p22">Nesta Pol&iacute;tica, voc&ecirc; pode aprender sobre:</p>
<ol class="ol1">
<li class="li13">
  <strong>QUAIS INFORMA&Ccedil;&Otilde;ES COLETAMOS?</strong>
</li>
<li class="li13"><strong>MENORES DE IDADE</strong></li>
<li class="li13">
  <strong
    >PROP&Oacute;SITOS E CONDI&Ccedil;&Otilde;ES PARA O PROCESSAMENTO DE
    INFORMA&Ccedil;&Otilde;ES PESSOAIS</strong
  >
</li>
<li class="li13"><strong>MARKETING</strong></li>
<li class="li13">
  <strong>COM QUEM COMPARTILHAMOS INFORMA&Ccedil;&Otilde;ES?</strong>
</li>
<li class="li13">
  <strong
    >TRANSFER&Ecirc;NCIA INTERNACIONAL DE
    INFORMA&Ccedil;&Otilde;ES</strong
  >
</li>
<li class="li13">
  <strong>TECNOLOGIAS DE RASTREAMENTO DE TERCEIROS</strong>
</li>
<li class="li13">
  <strong
    >RETEN&Ccedil;&Atilde;O DE INFORMA&Ccedil;&Otilde;ES PESSOAIS</strong
  >
</li>
<li class="li13"><strong>SEUS DIREITOS</strong></li>
<li class="li13">
  <strong
    >ALTERA&Ccedil;&Otilde;ES NA POL&Iacute;TICA DE PRIVACIDADE</strong
  >
</li>
<li class="li13"><strong>VERS&Atilde;O DO IDIOMA</strong></li>
<li class="li31"><strong>COMO ENTRAR EM CONTATO CONOSCO?</strong></li>
</ol>
<p class="p32">&nbsp;</p>
<ol class="ol1">
<li class="li31">
  <strong>QUAIS INFORMA&Ccedil;&Otilde;ES COLETAMOS?</strong>
</li>
</ol>
<p class="p22">
Coletamos Informa&ccedil;&otilde;es Pessoais de nossos Usu&aacute;rios e
visitantes de nosso Servi&ccedil;o, que consistem no seguinte:
</p>
<ul class="ul2">
<li class="li22">
  <strong>Registro e login: </strong>Ao abrir uma conta e se registrar
  para usar nosso Servi&ccedil;o, voc&ecirc; ser&aacute; solicitado a nos
  fornecer determinados detalhes sobre voc&ecirc;, como: seu
  endere&ccedil;o de e-mail, seus detalhes de usu&aacute;rio do Facebook e
  sua senha. Observe que, quando voc&ecirc; deseja atualizar o perfil da
  sua conta, tamb&eacute;m coletamos suas Informa&ccedil;&otilde;es
  pessoais.
</li>
<li class="li22">
  <strong>Informa&ccedil;&otilde;es volunt&aacute;rias</strong>:
  Tamb&eacute;m coletamos informa&ccedil;&otilde;es que voc&ecirc; nos
  fornece voluntariamente para personalizar sua conta ou para uma
  fun&ccedil;&atilde;o espec&iacute;fica, que voc&ecirc; nos fornece
  voluntariamente a seu crit&eacute;rio para uma fun&ccedil;&atilde;o
  espec&iacute;fica. Al&eacute;m disso, coletamos sua
  comunica&ccedil;&atilde;o quando voc&ecirc; responde &agrave;s nossas
  comunica&ccedil;&otilde;es, nos fornece feedback, se comunica conosco
  por e-mail ou compartilha informa&ccedil;&otilde;es adicionais sobre
  voc&ecirc; por meio do uso do Servi&ccedil;o.
</li>
<li class="li22">
  <strong>Informa&ccedil;&otilde;es do dispositivo</strong>: Coletamos
  tipos espec&iacute;ficos de detalhes de conex&atilde;o e
  informa&ccedil;&otilde;es relacionadas ao seu dispositivo, software ou
  hardware que podem identific&aacute;-lo, como: identificadores
  exclusivos do dispositivo (por exemplo, UDID, IMEI, endere&ccedil;o
  MAC), impress&atilde;o digital do navegador, endere&ccedil;o IP,
  endere&ccedil;o de blockchain, tipo de carteira e dados de
  localiza&ccedil;&atilde;o geogr&aacute;fica.
</li>
<li class="li22">
  <strong>Informa&ccedil;&otilde;es que coletamos de terceiros</strong>:
  &Agrave;s vezes, coletamos informa&ccedil;&otilde;es pessoais de
  prestadores de servi&ccedil;os terceirizados, como
  informa&ccedil;&otilde;es que s&atilde;o reunidas para verificar sua
  identidade e evitar atividades fraudulentas ou ilegais.
</li>
<li class="li22">
  <strong
    >Hist&oacute;rico de login e informa&ccedil;&otilde;es
    t&eacute;cnicas</strong
  >: Para aprimorar a funcionalidade do Servi&ccedil;o e proporcionar uma
  melhor experi&ecirc;ncia ao usu&aacute;rio,
  <strong>coletamos </strong>informa&ccedil;&otilde;es t&eacute;cnicas
  transmitidas pelo seu dispositivo, incluindo determinadas
  informa&ccedil;&otilde;es de software e hardware (por exemplo, o tipo de
  navegador e o sistema operacional que o seu dispositivo usa,
  prefer&ecirc;ncia de idioma, tempo de acesso e o nome de dom&iacute;nio
  do site a partir do qual voc&ecirc; acessou o Servi&ccedil;o etc.).
</li>
<li class="li22">
  <strong>Informa&ccedil;&otilde;es anal&iacute;ticas</strong>: Coletamos
  informa&ccedil;&otilde;es sobre o seu uso do Servi&ccedil;o, como uso de
  aplicativos, arquivos de registro, atividade do usu&aacute;rio (por
  exemplo, p&aacute;ginas visualizadas, movimentos do usu&aacute;rio,
  tempo gasto, navega&ccedil;&atilde;o on-line, cliques,
  a&ccedil;&otilde;es etc.), registros de data e hora, alertas etc. Essas
  informa&ccedil;&otilde;es s&atilde;o coletadas para, entre outras
  coisas, solucionar erros e bugs, bem como para fins de pesquisa e
  an&aacute;lise sobre o seu uso do Servi&ccedil;o.
</li>
</ul>
<ol class="ol1">
<li class="li31"><strong>MENORES</strong></li>
</ol>
<p class="p22">
O Servi&ccedil;o n&atilde;o foi projetado ou direcionado a pessoas com
menos de 18 anos de idade ou a pessoas com idade inferior ao consentimento
legal com rela&ccedil;&atilde;o ao uso do Servi&ccedil;o em qualquer
jurisdi&ccedil;&atilde;o, o que for maior ("Maior
<strong>de idade</strong>").
</p>
<p class="p22">
N&atilde;o coletamos informa&ccedil;&otilde;es pessoais de menores.
</p>
<p class="p22">
<strong
  >Se voc&ecirc; n&atilde;o for legalmente maior de idade, n&atilde;o
  poder&aacute; acessar ou usar o Servi&ccedil;o e n&atilde;o
  poder&aacute; fornecer nenhuma informa&ccedil;&atilde;o pessoal para
  n&oacute;s.</strong
>
</p>
<p class="p22">
Reservamo-nos o direito de acessar e verificar todas as
Informa&ccedil;&otilde;es Pessoais coletadas do usu&aacute;rio. Caso
tomemos conhecimento de que um usu&aacute;rio que n&atilde;o seja
legalmente maior de idade compartilhou alguma informa&ccedil;&atilde;o,
descartaremos tal informa&ccedil;&atilde;o.
</p>
<ol class="ol1">
<li class="li22">
  <strong
    >PROP&Oacute;SITOS E CONDI&Ccedil;&Otilde;ES PARA O PROCESSAMENTO DE
    INFORMA&Ccedil;&Otilde;ES PESSOAIS
  </strong>
</li>
</ol>
<p class="p22">
Esta se&ccedil;&atilde;o descreve as finalidades subjacentes e as bases
legais para o processamento de suas Informa&ccedil;&otilde;es Pessoais:
</p>
<table class="t1" cellspacing="0" cellpadding="0">
<tbody>
  <tr>
    <td class="td10" valign="top">
      <p class="p1"><strong>Finalidade</strong></p>
    </td>
    <td class="td11" valign="top">
      <p class="p33"><strong>Base legal</strong></p>
    </td>
  </tr>
  <tr>
    <td class="td12" valign="top">
      <p class="p6">
        <strong
          >Presta&ccedil;&atilde;o de nosso Servi&ccedil;o; suporte e
          relacionamento com o cliente</strong
        >. Usamos suas Informa&ccedil;&otilde;es Pessoais, como seu nome
        de usu&aacute;rio e endere&ccedil;o de e-mail, para fins de
        atendimento ao cliente, bem como para apresentar nossos sites a
        voc&ecirc;. Isso inclui, por exemplo, gerenciar e atualizar sua
        conta, fornecer e operar o Servi&ccedil;o, mant&ecirc;-lo
        informado sobre nossas &uacute;ltimas atualiza&ccedil;&otilde;es
        ou responder a qualquer uma de suas perguntas, bem como sua
        solicita&ccedil;&atilde;o para exercer seus direitos de
        usu&aacute;rio.
      </p>
    </td>
    <td class="td13" valign="top">
      <p class="p6">
        As bases legais para o processamento desses dados s&atilde;o o
        cumprimento de nossas obriga&ccedil;&otilde;es contratuais com
        voc&ecirc;, por exemplo, conforme descrito nesta Pol&iacute;tica
        e/ou nos Termos de Uso (Art. 6.1(b) do GDPR); seu consentimento
        (por exemplo, quando voc&ecirc; concorda em fornecer
        Informa&ccedil;&otilde;es Pessoais ao aceitar nosso Aviso de
        Cookies, nossa Pol&iacute;tica e nossos Termos de Uso) (Art.
        6.1(a) do GDPR); o cumprimento de nossas obriga&ccedil;&otilde;es
        legais (Art. 6.1(c) do GDPR); e nossos interesses leg&iacute;timos
        (Art. 6.1(f) do GDPR). Nossos interesses leg&iacute;timos, nesse
        caso, s&atilde;o a aplica&ccedil;&atilde;o de nossas
        pol&iacute;ticas, a prote&ccedil;&atilde;o contra fraudes e o uso
        indevido de nosso Servi&ccedil;o.
      </p>
    </td>
  </tr>
  <tr>
    <td class="td14" valign="top">
      <p class="p6">
        <strong>Aprimoramento do nosso Servi&ccedil;o</strong>. Coletamos
        e analisamos informa&ccedil;&otilde;es sobre voc&ecirc; e seu uso
        do nosso Servi&ccedil;o para melhorar a usabilidade e a
        efic&aacute;cia do nosso Servi&ccedil;o, incluindo
        depura&ccedil;&atilde;o para identificar e reparar erros ou
        realizar pesquisas internas para desenvolvimento e
        demonstra&ccedil;&atilde;o tecnol&oacute;gica.
      </p>
    </td>
    <td class="td15" valign="top">
      <p class="p6">
        A base legal para o processamento desses dados s&atilde;o nossos
        interesses leg&iacute;timos (Art. 6.1(f) GDPR), neste caso -
        fornecer e melhorar nosso Servi&ccedil;o.
      </p>
    </td>
  </tr>
  <tr>
    <td class="td16" valign="top">
      <p class="p6">
        <strong>Marketing, publicidade e an&aacute;lise</strong>. Usamos
        suas Informa&ccedil;&otilde;es Pessoais para fornecer
        an&uacute;ncios personalizados, incluindo publicidade
        comportamental quando voc&ecirc; visita nosso Servi&ccedil;o, para
        comercializar nosso Servi&ccedil;o e para coletar
        informa&ccedil;&otilde;es agregadas de uso para fins de
        an&aacute;lise, estat&iacute;stica e pesquisa, incluindo
        notifica&ccedil;&atilde;o de ofertas promocionais.
      </p>
    </td>
    <td class="td17" valign="top">
      <p class="p6">
        As bases legais para o processamento desses dados s&atilde;o seu
        consentimento (quando necess&aacute;rio) e nossos interesses
        leg&iacute;timos (Art. 6.1(a), 6.1(f) do GDPR).
      </p>
      <p class="p6">
        Nossos interesses leg&iacute;timos, nesse caso, s&atilde;o o
        fornecimento de servi&ccedil;os, conte&uacute;do e an&uacute;ncios
        personalizados que atendam melhor aos seus interesses, bem como a
        promo&ccedil;&atilde;o do nosso Servi&ccedil;o.
      </p>
    </td>
  </tr>
  <tr>
    <td class="td14" valign="top">
      <p class="p6">
        <strong>Integridade. </strong>Processamos determinadas
        informa&ccedil;&otilde;es sobre voc&ecirc; e seu uso dos
        Servi&ccedil;os a fim de manter a integridade e a seguran&ccedil;a
        dos Servi&ccedil;os.
      </p>
    </td>
    <td class="td15" valign="top">
      <p class="p6">
        As bases legais para o processamento desses dados s&atilde;o o
        cumprimento de nossas obriga&ccedil;&otilde;es legais (Art. 6.1(c)
        do GDPR) e nossos interesses leg&iacute;timos (Art. 6.1(f) do
        GDPR). Nossos interesses leg&iacute;timos, nesse caso, s&atilde;o
        manter a integridade de nossos Servi&ccedil;os e a
        seguran&ccedil;a de nossos usu&aacute;rios finais.
      </p>
    </td>
  </tr>
  <tr>
    <td class="td18" valign="top">
      <p class="p6">
        <strong
          >Resolu&ccedil;&atilde;o de disputas e prote&ccedil;&atilde;o de
          nossas reivindica&ccedil;&otilde;es legais</strong
        >. Coletamos suas Informa&ccedil;&otilde;es Pessoais para
        investigar viola&ccedil;&otilde;es de nossas pol&iacute;ticas,
        permitir a resolu&ccedil;&atilde;o de disputas relacionadas ao seu
        uso do Servi&ccedil;o e estabelecer e defender nossas
        reivindica&ccedil;&otilde;es legais.
      </p>
    </td>
    <td class="td19" valign="top">
      <p class="p6">
        A base legal para o processamento desses dados s&atilde;o nossos
        interesses leg&iacute;timos (Art. 6.1(f) do GDPR). Nossos
        interesses leg&iacute;timos, nesse caso, s&atilde;o estabelecer e
        defender nossas reivindica&ccedil;&otilde;es legais.
      </p>
    </td>
  </tr>
  <tr>
    <td class="td20" valign="top">
      <p class="p22">
        <strong>Transa&ccedil;&otilde;es corporativas</strong>.
        Compartilharemos suas Informa&ccedil;&otilde;es Pessoais com
        poss&iacute;veis compradores, sucessores ou investidores na
        Empresa ou no caso de uma transa&ccedil;&atilde;o corporativa (por
        exemplo, venda de uma parte substancial de nossos neg&oacute;cios,
        fus&atilde;o, reorganiza&ccedil;&atilde;o, fal&ecirc;ncia,
        consolida&ccedil;&atilde;o ou venda de um ativo ou
        transfer&ecirc;ncia na opera&ccedil;&atilde;o dele) em
        rela&ccedil;&atilde;o &agrave; Empresa.
      </p>
    </td>
    <td class="td21" valign="top">
      <p class="p6">
        A base legal para o processamento desses dados s&atilde;o nossos
        interesses leg&iacute;timos (Art. 6.1(f) do GDPR).
      </p>
    </td>
  </tr>
  <tr>
    <td class="td22" valign="top">
      <p class="p22">
        <strong
          >Preven&ccedil;&atilde;o de fraude ou viola&ccedil;&atilde;o de
          nossas pol&iacute;ticas</strong
        >. Processamos suas Informa&ccedil;&otilde;es Pessoais para
        detectar e impedir atividades fraudulentas e ilegais ou qualquer
        outro tipo de atividade que comprometa ou afete negativamente a
        integridade do Servi&ccedil;o, inclusive identificando riscos
        associados &agrave; sua atividade em nosso Servi&ccedil;o.
        Tamb&eacute;m investigaremos quaisquer viola&ccedil;&otilde;es de
        nossas pol&iacute;ticas e as aplicaremos.
      </p>
    </td>
    <td class="td23" valign="top">
      <p class="p6">
        A base legal para o processamento desses dados s&atilde;o nossos
        interesses leg&iacute;timos (Art. 6.1(f) do GDPR). Nossos
        interesses leg&iacute;timos, nesse caso, s&atilde;o proteger nossa
        Empresa e outros Usu&aacute;rios contra fraudes.
      </p>
    </td>
  </tr>
  <tr>
    <td class="td20" valign="top">
      <p class="p22">
        <strong>Conformidade com as leis aplic&aacute;veis</strong>.
        Processamos suas Informa&ccedil;&otilde;es Pessoais para cumprir
        nossas diversas obriga&ccedil;&otilde;es legais, como a
        legisla&ccedil;&atilde;o de conte&uacute;do adulto (quando
        aplic&aacute;vel), combate &agrave; lavagem de dinheiro,
        verifica&ccedil;&atilde;o de identidade (por exemplo, suspeita de
        uso do nosso Servi&ccedil;o por menores), preven&ccedil;&atilde;o
        de fraudes, cumprimento dos direitos do titular dos dados etc.
      </p>
    </td>
    <td class="td21" valign="top">
      <p class="p6">
        A base legal para o processamento desses dados &eacute; o
        cumprimento de nossas diversas obriga&ccedil;&otilde;es legais
        (Art. 6.1(c) do GDPR) e nossos interesses leg&iacute;timos (Art.
        6.1(f) do GDPR).
      </p>
    </td>
  </tr>
</tbody>
</table>
<p class="p22">
Caso voc&ecirc; n&atilde;o tenha consentido (ou tenha retirado seu
consentimento) com o processamento de suas Informa&ccedil;&otilde;es
Pessoais por n&oacute;s, continuaremos a processar suas
Informa&ccedil;&otilde;es Pessoais: (a) quando o processamento for
necess&aacute;rio para a execu&ccedil;&atilde;o do contrato (ou seja, os
Termos de Uso) entre voc&ecirc; e n&oacute;s; e/ou (b) quando o
processamento for necess&aacute;rio para o cumprimento de uma
obriga&ccedil;&atilde;o legal &agrave; qual estamos sujeitos; (c) quando o
processamento for necess&aacute;rio para fins de um interesse
leg&iacute;timo da Empresa e de suas afiliadas (inclusive para marketing).
</p>
<ol class="ol1">
<li class="li13"><strong>MARKETING</strong></li>
</ol>
<p class="p4">
Usaremos suas Informa&ccedil;&otilde;es Pessoais, como seu endere&ccedil;o
de e-mail, coletadas por n&oacute;s mesmos ou por meio de terceiros
subcontratados de confian&ccedil;a, com a finalidade de fornecer materiais
promocionais por meio de diferentes t&eacute;cnicas de marketing, como
e-mail direto, marketing por telefone, SMS referente ao Servi&ccedil;o,
bem como produtos, servi&ccedil;os, sites e aplicativos relacionados aos
parceiros de neg&oacute;cios da Empresa e suas afiliadas (coletivamente:
"<strong>Afiliadas de Marketing</strong>"), que acreditamos que possam
interess&aacute;-lo.
</p>
<p class="p22">
Tamb&eacute;m compartilhamos e divulgamos Informa&ccedil;&otilde;es
Pessoais com nossos Afiliados de Marketing com o objetivo de lhe fornecer
diferentes ofertas de marketing que n&oacute;s, ou nossos Afiliados de
Marketing, acreditamos serem relevantes para voc&ecirc;.
</p>
<p class="p4">
Usaremos suas Informa&ccedil;&otilde;es Pessoais com a finalidade de lhe
fornecer materiais promocionais somente quando tivermos um interesse
leg&iacute;timo em faz&ecirc;-lo ou quando tivermos obtido seu
consentimento afirmativo.
</p>
<p class="p22">
Voc&ecirc; tem a possibilidade de, a qualquer momento, recusar o
recebimento de outras ofertas de marketing nossas ou de nossos parceiros
comerciais e afiliados de marketing: seguindo os links inseridos nos
e-mails promocionais (por exemplo, selecionando o link de cancelamento) ou
entrando em contato com nosso suporte ao cliente.
</p>
<p class="p22">
Observe que, mesmo que voc&ecirc; cancele sua inscri&ccedil;&atilde;o em
nossa lista de mala direta de marketing, continuaremos a enviar-lhe
atualiza&ccedil;&otilde;es e notifica&ccedil;&otilde;es relacionadas ao
servi&ccedil;o.
</p>
<ol class="ol1">
<li class="li31">
  <strong>COM QUEM COMPARTILHAMOS INFORMA&Ccedil;&Otilde;ES?</strong>
</li>
</ol>
<p class="p22">
N&atilde;o alugamos, vendemos ou compartilhamos suas
Informa&ccedil;&otilde;es Pessoais com terceiros
("<strong>Destinat&aacute;rios</strong>"), exceto conforme descrito nesta
Pol&iacute;tica.<span class="Apple-converted-space">&nbsp; </span>As
Informa&ccedil;&otilde;es Pessoais ser&atilde;o divulgadas aos
Destinat&aacute;rios somente na medida necess&aacute;ria para a finalidade
espec&iacute;fica, conforme estipulado nesta Pol&iacute;tica.
</p>
<p class="p22">
Divulgamos Informa&ccedil;&otilde;es Pessoais com qualquer um dos
seguintes destinat&aacute;rios:
</p>
<ul class="ul2">
<li class="li22">Empresas da Empresa e outras empresas afiliadas;</li>
<li class="li22">
  Subcontratados e prestadores de servi&ccedil;os terceirizados, bem como
  seus subcontratados, que, a t&iacute;tulo de exemplo, incluem (mas
  n&atilde;o se limitam a) empresas de computa&ccedil;&atilde;o em nuvem,
  afiliadas de marketing, servi&ccedil;os de verifica&ccedil;&atilde;o de
  identidade e preven&ccedil;&atilde;o de fraudes e outros verificadores
  de dados;
</li>
<li class="li22">
  Provedores de servi&ccedil;os de pagamento, processadores de pagamento
</li>
<li class="li22">
  A quaisquer terceiros que prestem servi&ccedil;os relacionados &agrave;
  opera&ccedil;&atilde;o ou promo&ccedil;&atilde;o do Servi&ccedil;o;
</li>
<li class="li22">
  Auditores, contratados ou consultores de qualquer um dos processos
  comerciais da Empresa;
</li>
<li class="li22">
  A terceiros que investiguem, detectem ou impe&ccedil;am atividades
  fraudulentas ou ilegais (por exemplo, autoridades governamentais,
  pol&iacute;cia, bancos e outras organiza&ccedil;&otilde;es de
  investiga&ccedil;&atilde;o);
</li>
<li class="li22">
  &Oacute;rg&atilde;os governamentais e reguladores, de acordo com as leis
  e regulamentos aplic&aacute;veis;
</li>
<li class="li22">
  Ag&ecirc;ncias ou autoridades de aplica&ccedil;&atilde;o da lei, como
  resposta &agrave; sua solicita&ccedil;&atilde;o; e
</li>
<li class="li22">
  Compradores ou investidores em potencial em qualquer uma das empresas do
  grupo da Empresa (se aplic&aacute;vel), ou no caso de uma
  transa&ccedil;&atilde;o corporativa (por exemplo, venda de uma parte
  substancial de nossos neg&oacute;cios, fus&atilde;o,
  reorganiza&ccedil;&atilde;o, fal&ecirc;ncia, consolida&ccedil;&atilde;o
  ou venda de um ativo ou transfer&ecirc;ncia na opera&ccedil;&atilde;o do
  mesmo) em rela&ccedil;&atilde;o a qualquer empresa da Empresa (nesse
  caso, a empresa adquirente ou cession&aacute;ria assumir&aacute; os
  direitos e obriga&ccedil;&otilde;es descritos nesta Pol&iacute;tica).
</li>
<li class="li22">
  Fornecedores de pesquisas, diagn&oacute;sticos t&eacute;cnicos e
  an&aacute;lises;
</li>
<li class="li22">
  Parceiros de marketing e publicidade, de acordo com nossa
  pol&iacute;tica de marketing (veja acima, em
  "<strong>Marketing</strong>"); e
</li>
<li class="li22">
  Sempre que acreditarmos, de boa-f&eacute;, que a
  divulga&ccedil;&atilde;o &eacute; necess&aacute;ria para proteger nossos
  direitos ou reivindica&ccedil;&otilde;es legais, aplicar nossas
  pol&iacute;ticas (incluindo nossos Termos de Uso e Pol&iacute;tica),
  proteger sua seguran&ccedil;a ou a seguran&ccedil;a de outros, bem como
  investigar ou impedir qualquer fraude, por motivos de seguran&ccedil;a
  ou para nos ajudar com qualquer outro problema t&eacute;cnico
  relacionado.
</li>
</ul>
<ol class="ol1">
<li class="li22">
  <strong
    >TRANSFER&Ecirc;NCIA INTERNACIONAL DE
    INFORMA&Ccedil;&Otilde;ES</strong
  >
</li>
</ol>
<p class="p22">
Como operamos globalmente, &eacute; necess&aacute;rio, para a
presta&ccedil;&atilde;o do Servi&ccedil;o e na medida exigida para a
finalidade espec&iacute;fica, conforme estipulado nesta Pol&iacute;tica,
transferir suas Informa&ccedil;&otilde;es Pessoais para pa&iacute;ses fora
do Espa&ccedil;o Econ&ocirc;mico Europeu ("<strong>EEE</strong>"). A
prote&ccedil;&atilde;o de dados e outras leis desses pa&iacute;ses
n&atilde;o s&atilde;o t&atilde;o abrangentes quanto as do EEE.
</p>
<p class="p22">
Nessas circunst&acirc;ncias, nos esfor&ccedil;amos ao m&aacute;ximo para
garantir que suas Informa&ccedil;&otilde;es Pessoais sejam protegidas de
acordo com nossa Pol&iacute;tica, por meios contratuais (como o uso das
cl&aacute;usulas contratuais padr&otilde;es aprovadas pela Comiss&atilde;o
Europeia relevante para transfer&ecirc;ncia de dados, conforme
dispon&iacute;vel
<a
  href="https://ec.europa.eu/info/law/law-topic/data-protection/international-dimension-data-protection/standard-contractual-clauses-scc_en"
  ><span class="s3">aqui</span></a
>) ou outros meios (como a garantia de que as decis&otilde;es da
Comiss&atilde;o Europeia determinaram que tais jurisdi&ccedil;&otilde;es
oferecem um n&iacute;vel adequado de prote&ccedil;&atilde;o, conforme
dispon&iacute;vel
<a
  href="https://ec.europa.eu/info/law/law-topic/data-protection/international-dimension-data-protection/adequacy-decisions_en"
  ><span class="s3">aqui</span></a
><span class="s13">).</span>
</p>
<ol class="ol1">
<li class="li31">
  <strong>TECNOLOGIAS DE RASTREAMENTO DE TERCEIROS</strong>
</li>
</ol>
<p class="p22">
Usamos tecnologia de publicidade de terceiros em nossos sites para
veicular an&uacute;ncios quando voc&ecirc; visita ou usa nosso
Servi&ccedil;o. Usamos e autorizamos terceiros a usar
<em>web beacons, cookies, pixels, scripts, tags</em> e outras tecnologias
("<strong>Tecnologias de Rastreamento</strong>").
</p>
<p class="p22">
As tecnologias de rastreamento coletam automaticamente
informa&ccedil;&otilde;es sobre voc&ecirc;, seu comportamento on-line nos
sites e seu dispositivo (por exemplo, seu computador ou dispositivo
m&oacute;vel), para diferentes finalidades, inclusive para aprimorar e
personalizar sua navega&ccedil;&atilde;o em nosso Servi&ccedil;o e
melhorar o desempenho do nosso Servi&ccedil;o. Terceiros usam essas
informa&ccedil;&otilde;es para fornecer a voc&ecirc; conte&uacute;do
direcionado.
</p>
<p class="p22">
Voc&ecirc; pode configurar seu navegador para recusar todos os cookies de
terceiros ou para alert&aacute;-lo quando os cookies estiverem sendo
enviados, e tamb&eacute;m pode optar por n&atilde;o participar de muitas
redes de an&uacute;ncios de terceiros, incluindo aquelas operadas por
membros da Network Advertising Initiative ("<strong>NAI</strong>") e da
Digital Advertising Alliance ("<strong>DAA</strong>").
</p>
<p class="p22">
Tamb&eacute;m permitimos que terceiros coletem informa&ccedil;&otilde;es
sobre voc&ecirc; por meio de tecnologias de rastreamento. Para saber mais,
visite nosso Aviso sobre Cookies.
</p>
<ol class="ol1">
<li class="li31">
  <strong
    >RETEN&Ccedil;&Atilde;O DE INFORMA&Ccedil;&Otilde;ES PESSOAIS</strong
  >
</li>
</ol>
<p class="p22">
Caso tenha se registrado com uma conta por meio do nosso Servi&ccedil;o, a
Empresa reter&aacute; suas Informa&ccedil;&otilde;es Pessoais durante o
per&iacute;odo em que sua conta estiver ativa. Al&eacute;m disso, a
Empresa reter&aacute; suas Informa&ccedil;&otilde;es Pessoais por
per&iacute;odos adicionais, para permitir que a Empresa cumpra suas
obriga&ccedil;&otilde;es legais de acordo com as leis ou regulamentos
aplic&aacute;veis.
</p>
<p class="p22">
Al&eacute;m disso, a Empresa reter&aacute; suas Informa&ccedil;&otilde;es
Pessoais por per&iacute;odos mais longos, desde que a
reten&ccedil;&atilde;o de tais informa&ccedil;&otilde;es seja
necess&aacute;ria apenas para os interesses leg&iacute;timos da Empresa,
como preven&ccedil;&atilde;o de fraudes e manuten&ccedil;&atilde;o de
registros, resolu&ccedil;&atilde;o ou exclus&atilde;o de
reivindica&ccedil;&otilde;es relativas a poss&iacute;veis disputas.
</p>
<ol class="ol1">
<li class="li31"><strong>SEUS DIREITOS</strong></li>
</ol>
<p class="p22">
Voc&ecirc; tem determinados direitos em rela&ccedil;&atilde;o &agrave;
coleta e ao processamento de Informa&ccedil;&otilde;es Pessoais. Na medida
em que esses direitos se aplicam a voc&ecirc; e lhe dizem respeito,
voc&ecirc; pode exerc&ecirc;-los entrando em contato conosco por meio dos
detalhes de contato dispon&iacute;veis na se&ccedil;&atilde;o abaixo "COMO
ENTRAR EM CONTATO CONOSCO?" e exercer os seguintes direitos:
</p>
<ol class="ol1">
<li class="li22">
  Direitos de acesso - Voc&ecirc; pode obter uma c&oacute;pia das
  informa&ccedil;&otilde;es pessoais mantidas pela Empresa a qualquer
  momento;
</li>
<li class="li22">
  Direito de portabilidade de dados - Voc&ecirc; tem o direito de receber
  suas Informa&ccedil;&otilde;es Pessoais em um formato estruturado,
  comumente utilizado, leg&iacute;vel por m&aacute;quinas e de solicitar
  que suas Informa&ccedil;&otilde;es Pessoais sejam transmitidas a um
  terceiro de sua escolha;
</li>
<li class="li22">
  Direito de retifica&ccedil;&atilde;o - Caso os dados mantidos sobre
  voc&ecirc; pela Empresa sejam imprecisos, incompletos ou desatualizados,
  voc&ecirc; tem a possibilidade de solicitar a retifica&ccedil;&atilde;o
  desses dados (exceto nos casos em que as informa&ccedil;&otilde;es devam
  ser mantidas em seu formato original, de acordo com as leis e os
  regulamentos aplic&aacute;veis);
</li>
<li class="li22">
  Direito de exclus&atilde;o - Voc&ecirc; tem a possibilidade de, a
  qualquer momento, solicitar que a Empresa exclua os dados mantidos sobre
  voc&ecirc; enviando um e-mail para a Empresa, conforme descrito nesta
  Pol&iacute;tica. No entanto, voc&ecirc; est&aacute; ciente de que, com a
  exclus&atilde;o de suas Informa&ccedil;&otilde;es Pessoais, talvez
  n&atilde;o possa mais usar o Servi&ccedil;o ou a conta poder&aacute; ser
  totalmente encerrada;
</li>
<li class="li22">
  Direito &agrave; restri&ccedil;&atilde;o de processamento,
  obje&ccedil;&atilde;o ao processamento - A qualquer momento, voc&ecirc;
  tem o direito de solicitar que a Empresa restrinja ou pare de conduzir
  determinados processos de dados, desde que n&atilde;o exista outra base
  legal sobre a qual a Empresa esteja autorizada a processar esses dados;
</li>
<li class="li22">
  Direito de retirar seu consentimento - Voc&ecirc; tem o direito de
  retirar seu consentimento a qualquer momento. A retirada do
  consentimento n&atilde;o afetar&aacute; a legalidade do processamento;
</li>
<li class="li22">
  Direito de apresentar uma reclama&ccedil;&atilde;o - Todas as
  solicita&ccedil;&otilde;es, reclama&ccedil;&otilde;es ou d&uacute;vidas
  devem ser encaminhadas &agrave; Empresa com o assunto "Privacidade".
  Consideraremos todas as solicita&ccedil;&otilde;es,
  reclama&ccedil;&otilde;es ou d&uacute;vidas e lhe forneceremos uma
  resposta em tempo h&aacute;bil. Voc&ecirc; tamb&eacute;m pode registrar
  uma reclama&ccedil;&atilde;o junto &agrave; autoridade de
  prote&ccedil;&atilde;o de dados relevante caso n&atilde;o esteja
  satisfeito com a forma como tratamos suas Informa&ccedil;&otilde;es
  Pessoais. Levamos nossas obriga&ccedil;&otilde;es a s&eacute;rio e
  pedimos que qualquer preocupa&ccedil;&atilde;o seja primeiramente levada
  ao nosso conhecimento, para que possamos tentar resolv&ecirc;-la.
</li>
</ol>
<p class="p34">&nbsp;</p>
<p class="p22">
Observe que esses direitos n&atilde;o s&atilde;o absolutos e podem estar
sujeitos aos nossos pr&oacute;prios interesses leg&iacute;timos e
requisitos regulamentares. Voc&ecirc; pode entrar em contato conosco para
fazer perguntas, solicita&ccedil;&otilde;es ou reclama&ccedil;&otilde;es
por meio dos detalhes de contato abaixo.
</p>
<p class="p22">
Faremos o poss&iacute;vel para responder em um prazo razo&aacute;vel.
Fique &agrave; vontade para entrar em contato conosco a qualquer momento.
Se n&atilde;o estiver satisfeito com nossa resposta, voc&ecirc; pode
apresentar uma reclama&ccedil;&atilde;o &agrave; autoridade supervisora
competente.
</p>
<p class="p22">
Al&eacute;m disso, voc&ecirc; deve estar ciente de que, a menos que tenha
se registrado e criado uma conta em nosso Site, n&atilde;o poderemos
responder &agrave; sua solicita&ccedil;&atilde;o, pois n&atilde;o temos
informa&ccedil;&otilde;es suficientes para identific&aacute;-lo. Poderemos
tamb&eacute;m retificar, completar ou remover informa&ccedil;&otilde;es
incompletas ou imprecisas, a qualquer momento e a nosso crit&eacute;rio,
de acordo com nossas pol&iacute;ticas internas. Da mesma forma,
solicitaremos que voc&ecirc; nos forne&ccedil;a informa&ccedil;&otilde;es
adicionais para verificar adequadamente sua identidade mediante sua
solicita&ccedil;&atilde;o.
</p>
<ol class="ol1">
<li class="li31">
  <strong
    >ALTERA&Ccedil;&Otilde;ES NA POL&Iacute;TICA DE PRIVACIDADE</strong
  >
</li>
</ol>
<p class="p22">
Reservamo-nos o direito de alterar esta Pol&iacute;tica a qualquer
momento, portanto, volte a visitar esta p&aacute;gina com
frequ&ecirc;ncia. Envidaremos esfor&ccedil;os razo&aacute;veis para
notific&aacute;-lo caso sejam feitas altera&ccedil;&otilde;es substanciais
a esta Pol&iacute;tica, conforme exigido por lei. Quaisquer
modifica&ccedil;&otilde;es, atualiza&ccedil;&otilde;es e
altera&ccedil;&otilde;es entrar&atilde;o em vigor ap&oacute;s a
publica&ccedil;&atilde;o desta Pol&iacute;tica de Privacidade em nossos
sites e a partir da data declarada como "&Uacute;ltima revis&atilde;o", e
seu uso continuado do Servi&ccedil;o ap&oacute;s a data da &Uacute;ltima
revis&atilde;o constituir&aacute; aceita&ccedil;&atilde;o e
concord&acirc;ncia em obedecer a essas altera&ccedil;&otilde;es.
</p>
<ol class="ol1">
<li class="li31"><strong>VERS&Atilde;O DO IDIOMA</strong></li>
</ol>
<p class="p22">
A Pol&iacute;tica foi redigida no idioma ingl&ecirc;s, que &eacute; a
vers&atilde;o original e de controle desta Pol&iacute;tica. Todas as
tradu&ccedil;&otilde;es desta Pol&iacute;tica para outros idiomas
ser&atilde;o apenas para conveni&ecirc;ncia e n&atilde;o
controlar&atilde;o o significado ou a aplica&ccedil;&atilde;o desta
Pol&iacute;tica. No caso de qualquer discrep&acirc;ncia entre os
significados de quaisquer vers&otilde;es traduzidas da Pol&iacute;tica e a
vers&atilde;o em ingl&ecirc;s, o significado da vers&atilde;o em
ingl&ecirc;s prevalecer&aacute;.
</p>
<p class="p22"><strong> COMO ENTRAR EM CONTATO CONOSCO</strong></p>
<p class="p22">
Se tiver alguma d&uacute;vida geral sobre o Servi&ccedil;o ou sobre as
informa&ccedil;&otilde;es que coletamos sobre voc&ecirc; e como as
processamos, entre em contato conosco por e-mail:
</p>
<ul class="ul2">
<li class="li22">Pythia Grant Ltd.&nbsp;</li>
<li class="li22">
  Para: Diretor de Prote&ccedil;&atilde;o de Dados do Cybersays.club
</li>
<li class="li35">
  <span class="s14"
    ><a href="mailto:DPO@Cybersays.club"
      ><span class="s15">DPO@Cybersays.club </span></a
    ></span
  >
</li>
</ul>
<p class="p13">
Faremos o poss&iacute;vel para responder em um prazo razo&aacute;vel.
Fique &agrave; vontade para entrar em contato conosco a qualquer momento.
Se n&atilde;o estiver satisfeito com nossa resposta, voc&ecirc; pode
entrar em contato com a autoridade supervisora de prote&ccedil;&atilde;o
de dados aplic&aacute;vel.
</p>`

