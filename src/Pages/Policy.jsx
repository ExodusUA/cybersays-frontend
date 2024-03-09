import React from 'react'
import HeaderProfile from '../Components/HeaderProfile'
import policyData from '../Pages/socialPageJSON/policy_en.json';
import LanguageSocial from '../Components/Language/LanguageSocial';
import { useLanguage } from '../Helpers/Languages/LanguageContext';

function Policy() {
    let { language } = useLanguage();
    return (
        <div>
            <HeaderProfile />
            <div className='absolute right-2 lg:right-[20px] top-1 lg:top-3 flex items-center align-start z-20'>
                <LanguageSocial />
            </div>

            <div className='textStyle max-w-[1240px] m-auto overflow-scroll h-screen pb-[50px] saira p-2' dangerouslySetInnerHTML={
                {
                    __html: language === 'pt' ? pt_text : language === 'es' ? es_text : en_text
                }
            } />

        </div>
    );
}

export default Policy
let en_text = `<p style="text-align:center; margin-bottom:14pt;  font-size:16pt!important">
<strong><u><span style="font-family:Saira; ">Cybersays.club</span></u></strong><strong><u><span style="font-family:Saira; ">&#xa0; </span></u></strong><strong><u><span style="font-family:Saira; ">- Cookie Policy</span></u></strong>
</p>
<p style="text-align:right; font-size:10pt!important">
<span style="font-family:Saira">Last revised: </span><u><span style="font-family:Saira; ">February 2024</span></u>
</p>
<ol style="margin:0pt; padding-left:0pt">
<li class="ListParagraph" style="margin-top:6pt; margin-left:13.51pt; margin-bottom:6pt; text-align:justify; line-height:115%; padding-left:0.69pt; font-family:Saira; font-size:14pt; font-weight:bold">
    Introduction
</li>
</ol>
<p style="text-align:justify; line-height:115%; font-size:10pt">
<span style="font-family:Saira">When you visit or access our websites, or when you interact or engage with our content ("</span><strong><span style="font-family:Saira; ">Services</span></strong><span style="font-family:Saira">"), we use (and authorize third parties to use) cookies, pixels, beacons, local storage and similar technologies ("</span><strong><span style="font-family:Saira; ">Tracking Technologies</span></strong><span style="font-family:Saira">"). </span>
</p>
<p style="text-align:justify; line-height:115%; font-size:10pt">
<span style="font-family:Saira">&#xa0;</span>
</p>
<p style="text-align:justify; line-height:115%; font-size:10pt">
<span style="font-family:Saira">These allow us to automatically collect information about you, your device, and your online behavior, in order to enhance your navigation on our Services, improve our Services' performance, perform analytics, customize your experience and offer you, for example, tailored content and advertisements that better correspond with your interests.</span>
</p>
<p style="text-align:justify; line-height:115%; font-size:10pt">
<span style="font-family:Saira">&#xa0;</span>
</p>
<p style="text-align:justify; line-height:115%; font-size:10pt">
<span style="font-family:Saira">This Cookie Policy is integrated into and forms part of Company's Privacy Policy. </span>
</p>
<p style="font-size:14pt!important">
<span style="font-family:Saira">&#xa0;</span>
</p>
<ol start="2" style="margin:0pt; padding-left:0pt">
<li class="ListParagraph" style="margin-top:6pt; margin-left:13.51pt; margin-bottom:6pt; text-align:justify; line-height:115%; padding-left:0.69pt; font-family:Saira; font-size:14pt!important; font-weight:bold">
    What are cookies?
</li>
</ol>
<p style="text-align:justify">
<span style="font-family:Saira; font-size:10pt">Cookies are small text files (composed only of letters and numbers) that a web server places on your computer or mobile device when you visit a webpage. When used, the cookie can help make our Services more user-friendly, for example by remembering your language preferences and settings. You can find more information about cookies at</span><span style="font-family:Saira; font-size:10pt">&#xa0;</span><a href="http://www.allaboutcookies.org" style="text-decoration:none"><span class="Hyperlink" style="font-family:Saira; font-size:10pt">www.allaboutcookies.org</span></a><span style="font-family:Saira; font-size:10pt">.</span>
</p>
<p style="text-align:justify; font-size:10pt">
<span style="font-family:Saira">&#xa0;</span>
</p>
<p style="text-align:justify; font-size:10pt">
<span style="font-family:Saira">Cookies are widely used in order to make websites work in an efficient way. The use of cookies allows you to navigate between pages efficiently. Cookies remember your preferences, and make the interaction between you and the Services smoother and more efficient. Cookies are also used to help ensure that the advertisements you see online are relevant to you and your interests.</span>
</p>
<p style="font-size:11pt">
<span style="font-family:Saira">&#xa0;</span>
</p>
<ol start="3" style="margin:0pt; padding-left:0pt">
<li class="ListParagraph" style="margin-top:6pt; margin-left:13.51pt; margin-bottom:6pt; text-align:justify; line-height:115%; padding-left:0.69pt; font-family:Saira; font-size:14pt!important; font-weight:bold">
    Storing Tracking Technologies
</li>
</ol>
<p style="text-align:justify; line-height:115%; font-size:10pt">
<span style="font-family:Saira">We store Tracking Technologies when you visit or access our Services (for example when you are visiting our Website) – these are called "First Party Tracking Technologies". In addition, Tracking Technologies are stored by other third parties (for example our analytics service providers, business partners and advertisers) who run content on our Services – these are called "Third Party Tracking Technologies".</span>
</p>
<p style="text-align:justify; line-height:115%; font-size:10pt">
<span style="font-family:Saira">&#xa0;</span>
</p>
<p style="text-align:justify; line-height:115%; font-size:10pt">
<span style="font-family:Saira">Both types of Tracking Technologies are stored either for the duration of your visit on our Services or for repeat visits.</span>
</p>
<p style="font-size:11pt">
<span style="font-family:Saira">&#xa0;</span>
</p>
<ol start="4" style="margin:0pt; padding-left:0pt">
<li class="ListParagraph" style="margin-top:6pt; margin-left:13.51pt; margin-bottom:6pt; text-align:justify; line-height:115%; padding-left:0.69pt; font-family:Saira; font-size:14pt!important; font-weight:bold">
    What types of Tracking Technologies do we use?
</li>
</ol>
<p style="margin-bottom:18.75pt; text-align:justify; line-height:115%; font-size:10pt; background-color:#fefefe">
<span style="font-family:Saira">When you use or access our Services, we use the following categories of Tracking Technologies:</span>
</p>
<ul style="margin:0pt; padding-left:0pt">
<li class="ListParagraph" style="margin-top:14pt; margin-left:27.6pt; text-align:justify; line-height:115%; padding-left:8.4pt; font-family:serif; font-size:10pt">
    <u><span style="font-family:Saira; ">Strictly necessary Tracking Technologies</span></u><span style="font-family:Saira"> – these Tracking Technologies are automatically placed on your computer or device when you access our Services. These Tracking Technologies are essential to </span><span class="IntenseEmphasis" style="font-family:Saira; font-weight:normal">enable</span><strong><span style="font-family:Saira; "> </span></strong><span style="font-family:Saira">you to navigate around and use the features of our Services. We do not need to obtain your consent in order to use these Tracking Technologies;</span><u><span style="font-family:Saira; "> </span></u>
</li>
<li class="ListParagraph" style="margin-top:5pt;margin-left:27.6pt; text-align:justify; line-height:115%; padding-left:8.4pt; font-family:serif; font-size:10pt">
    <u><span style="font-family:Saira; ">Tracking and advertising Tracking Technologies</span></u><span style="font-family:Saira"> – these Tracking Technologies collect information about your browsing habits and are used to make advertising more relevant to you and your interests. They are also used to limit the number of times you see an advertisement as well as help measure the effectiveness of an advertising campaign. </span>
</li>
<li class="ListParagraph" style="margin-top:5pt;margin-left:27.6pt; text-align:justify; line-height:115%; padding-left:8.4pt; font-family:serif; font-size:10pt">
    <u><span style="font-family:Saira; ">Functionality Tracking Technologies</span></u><span style="font-family:Saira"> – these Tracking Technologies allow our Services to remember choices you make (such as your language) and provide enhanced and personalized features. For example, these Tracking Technologies are used for authentication (to remember when you are logged-in) and support other features of our Services; </span>
</li>
<li class="ListParagraph" style="margin-top:5pt;margin-left:27.6pt; text-align:justify; line-height:115%; padding-left:8.4pt; font-family:serif; font-size:10pt">
    <u><span style="font-family:Saira; ">Performance Tracking Technologies</span></u><span style="font-family:Saira"> – these Tracking Technologies collect information about your online activity (for example the duration of your visit on our Services), including behavioral data and content engagement metrics. These Tracking Technologies are used for analytics, research and to perform statistics (based on aggregated information).</span>
</li>
<li class="ListParagraph" style="margin-top:5pt;margin-left:27.6pt; text-align:justify; line-height:115%; padding-left:8.4pt; font-family:serif; font-size:10pt">
    <u><span style="font-family:Saira; ">Social media Tracking Technologies – </span></u><span style="font-family:Saira">Our website includes social media features, such as the Facebook "Like" or "Share" buttons. These features are either hosted by a third party or hosted directly on our Services. Your interactions with these features are governed by the privacy statement of the company providing these features.</span>
</li>
</ul>
<p class="ListParagraph" style="font-size:10pt">
<span style="font-family:Saira">&#xa0;</span>
</p>
<p style="margin-bottom:18.75pt; text-align:justify; line-height:115%; font-size:10pt; background-color:#fefefe">
<span style="font-family:Saira">The following Tracking Technologies are used in connection with our Services. For additional information about any of the Third Party Tracking Technologies, please visit the links of those companies provided.</span>
</p>
<table style="width:489.8pt; margin-left:6pt; border:0.75pt solid #000000; border-collapse:collapse">
<thead>
    <tr>
        <td style="width:24.64%; border-right:0.75pt solid #000000; border-bottom:0.75pt solid #000000; padding:6pt 5.62pt; vertical-align:bottom; background-color:#bfbfbf">
            <p style="text-align:center; font-size:10pt">
                <strong><span style="font-family:Saira; ">Tracking Technologies</span></strong>
            </p>
        </td>
        <td style="width:26.4%; border-right:0.75pt solid #000000; border-left:0.75pt solid #000000; border-bottom:0.75pt solid #000000; padding:6pt 5.62pt; vertical-align:bottom; background-color:#bfbfbf">
            <p style="text-align:center; font-size:10pt">
                <strong><span style="font-family:Saira; ">Type</span></strong>
            </p>
        </td>
        <td style="width:48.96%; border-left:0.75pt solid #000000; border-bottom:0.75pt solid #000000; padding:6pt 5.62pt; vertical-align:bottom; background-color:#bfbfbf">
            <p style="text-align:center; font-size:10pt">
                <strong><span style="font-family:Saira; ">Purpose</span></strong>
            </p>
        </td>
    </tr>
</thead>
<tbody>
    <tr>
        <td style="width:24.64%; border-top:0.75pt solid #000000; border-right:0.75pt solid #000000; border-bottom:0.75pt solid #000000; padding:6pt 5.62pt; vertical-align:top">
            <p style="font-size:10pt">
                <strong><span style="font-family:Saira; ">Analytics Cookies</span></strong>
            </p>
        </td>
        <td style="width:26.4%; border:0.75pt solid #000000; padding:6pt 5.62pt; vertical-align:top">
            <p style="font-size:10pt">
                <span style="font-family:Saira">First party Tracking Technology</span>
            </p>
        </td>
        <td style="width:48.96%; border-top:0.75pt solid #000000; border-left:0.75pt solid #000000; border-bottom:0.75pt solid #000000; padding:6pt 5.62pt; vertical-align:top">
            <p style="font-size:10pt">
                <strong><span style="font-family:Saira; ">Performance and Functionality Tracking Technologies</span></strong><span style="font-family:Saira"> </span>
            </p>
            <p style="text-align:justify; font-size:10pt">
                <span style="font-family:Saira">These Tracking Technologies are used to collect information regarding how you interact with the content on our Services, attribution purposes (for example, the referral URL), and to remember your language preferences and authentication (remember you are logged-in). We use the information to compile reports, calculate the revenues due to us, help us improve the Services and to offer personalized products and content. </span>
            </p>
        </td>
    </tr>
    <tr>
        <td style="width:24.64%; border-top:0.75pt solid #000000; border-right:0.75pt solid #000000; padding:6pt 5.62pt; vertical-align:top">
            <p style="font-size:10pt">
                <strong><span style="font-family:Saira; ">Other cookies</span></strong>
            </p>
        </td>
        <td style="width:26.4%; border-top:0.75pt solid #000000; border-right:0.75pt solid #000000; border-left:0.75pt solid #000000; padding:6pt 5.62pt; vertical-align:top">
            <p style="font-size:10pt">
                <span style="font-family:Saira">First and Third party Tracking Technology</span>
            </p>
        </td>
        <td style="width:48.96%; border-top:0.75pt solid #000000; border-left:0.75pt solid #000000; padding:6pt 5.62pt; vertical-align:top">
            <p style="text-align:justify; font-size:10pt">
                <strong><span style="font-family:Saira; ">Strictly necessary Tracking Technologies</span></strong><br /><span style="font-family:Saira">These unlisted cookies might be in use on internal sections of the Services, in order to customize and simplify the user experience on the site by remembering choices you made and your log in credentials.</span>
            </p>
        </td>
    </tr>
</tbody>
</table>
<p>
<strong><span style="font-family:Saira; ">&#xa0;</span></strong>
</p>
<p class="wysiwyg-text-align-justify" style="margin-top:14pt; margin-bottom:14pt; text-align:justify; font-size:10pt">
<u><span style="font-family:Saira; ">Cookies allow us to:</span></u>
</p>
<ul style="margin:0pt; padding-left:0pt">
<li style="margin-top:14pt; margin-left:42.6pt; text-align:justify; padding-left:8.4pt; font-family:serif; font-size:10pt">
    <span style="font-family:Saira">Improve the use of the Service and to make the content more interesting and relevant to the wishes of users, like offering you more relevant promotional offers.</span>
</li>
<li style="margin-left:42.6pt; text-align:justify; padding-left:8.4pt; font-family:serif; font-size:10pt">
    <span style="font-family:Saira">Distinguish you from other users of our sites to grant a good user experience.</span>
</li>
<li style="margin-left:42.6pt; text-align:justify; padding-left:8.4pt; font-family:serif; font-size:10pt">
    <span style="font-family:Saira">Identify your settings and preferences regarding customized content or functionality.</span>
</li>
<li style="margin-left:42.6pt; text-align:justify; padding-left:8.4pt; font-family:serif; font-size:10pt">
    <span style="font-family:Saira">Your log-in details for the confirmation as a registered user for our Service.</span>
</li>
<li style="margin-left:42.6pt; text-align:justify; padding-left:8.4pt; font-family:serif; font-size:10pt">
    <span style="font-family:Saira">Collect statistical analysis on the use of our Service.</span>
</li>
</ul>
<ol start="5" style="margin:0pt; padding-left:0pt">
<li class="ListParagraph" style="margin-top:6pt; margin-left:13.51pt; margin-bottom:6pt; text-align:justify; line-height:115%; padding-left:0.69pt; font-family:Saira; font-size:14pt!important; font-weight:bold">
    How to manage and control Tracking Technologies
</li>
</ol>
<p style="font-size:11pt">
<strong><span style="font-family:Saira; ">&#xa0;</span></strong>
</p>
<p style="text-align:justify; line-height:115%; widows:0; orphans:0; font-size:10pt; background-color:#ffffff">
<span style="font-family:Saira">There are various ways in which you can manage and control your Tracking Technologies settings. Please note that we do not recognize or respond to automated browser signals regarding Tracking Technologies, including "Do Not Track" requests. However, there are various methods of managing your Tracking Technology preferences includes: setting your browser to refuse all or some browser cookies, or to alert you when cookies are being sent. Please note that certain features of the Services could not work properly or effectively if you delete or disable cookies or other tracking technologies. </span>
</p>
<p style="text-align:justify; line-height:115%; widows:0; orphans:0; font-size:10pt; background-color:#ffffff">
<span style="font-family:Saira">&#xa0;</span>
</p>
<p style="text-align:justify; line-height:115%; widows:0; orphans:0; font-size:10pt; background-color:#ffffff">
<span style="font-family:Saira">To learn more about how can manage your cookies, below is a list of useful links that can provide you with more information on how to manage your cookies:</span>
</p>
<ul style="margin:0pt; padding-left:0pt">
<li class="ListParagraph" style="margin-left:27.6pt; text-align:justify; line-height:115%; widows:0; orphans:0; padding-left:8.4pt; font-family:serif; font-size:10pt; background-color:#ffffff">
    <a href="https://support.google.com/chrome/answer/95647?hl=en" style="text-decoration:underline"><span class="Hyperlink" style="font-family:Saira; color:#000000">Google Chrome</span></a>
</li>
<li class="ListParagraph" style="margin-left:27.6pt; text-align:justify; line-height:115%; widows:0; orphans:0; padding-left:8.4pt; font-family:serif; font-size:10pt; background-color:#ffffff">
    <a href="https://support.microsoft.com/en-us/help/260971/description-of-cookies" style="text-decoration:underline"><span class="Hyperlink" style="font-family:Saira; color:#000000">Internet Explorer</span></a>
</li>
<li class="ListParagraph" style="margin-left:27.6pt; text-align:justify; line-height:115%; widows:0; orphans:0; padding-left:8.4pt; font-family:serif; font-size:10pt; background-color:#ffffff">
    <a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" style="text-decoration:underline"><span class="Hyperlink" style="font-family:Saira; color:#000000">Mozilla Firefox</span></a>
</li>
<li class="ListParagraph" style="margin-left:27.6pt; text-align:justify; line-height:115%; widows:0; orphans:0; padding-left:8.4pt; font-family:serif; font-size:10pt; background-color:#ffffff">
    <a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" style="text-decoration:underline"><span class="Hyperlink" style="font-family:Saira; color:#000000">Safari (Desktop)</span></a>
</li>
<li class="ListParagraph" style="margin-left:27.6pt; text-align:justify; line-height:115%; widows:0; orphans:0; padding-left:8.4pt; font-family:serif; font-size:10pt; background-color:#ffffff">
    <a href="https://support.apple.com/en-us/HT201265" style="text-decoration:underline"><span class="Hyperlink" style="font-family:Saira; color:#000000">Safari (Mobile)</span></a>
</li>
<li class="ListParagraph" style="margin-left:27.6pt; margin-bottom:6pt; text-align:justify; line-height:115%; widows:0; orphans:0; padding-left:8.4pt; font-family:serif; font-size:10pt; background-color:#ffffff">
    <a href="https://support.google.com/nexus/answer/54068?visit_id=637249861772874734-2281104728&amp;hl=en&amp;rd=1" style="text-decoration:underline"><span class="Hyperlink" style="font-family:Saira; color:#000000">Android Browser</span></a>
</li>
</ul>
<p style="margin-bottom:6pt; text-align:justify; line-height:115%; widows:0; orphans:0; font-size:10pt; background-color:#ffffff">
<span style="font-family:Saira">You can learn more and turn off certain third party targeting and advertising cookies by visiting the following third party webpages:</span>
</p>
<ul style="margin:0pt; padding-left:0pt">
<li class="ListParagraph" style="margin-right:15.05pt; margin-left:27.6pt; text-align:justify; line-height:115%; widows:0; orphans:0; padding-left:8.4pt; font-family:serif; font-size:10pt; background-color:#ffffff">
    <a href="https://www.iab.com/" style="text-decoration:underline"><span class="Hyperlink" style="font-family:Saira; color:#000000">The Interactive Advertising Bureau (US)</span></a>
</li>
<li class="ListParagraph" style="margin-right:15.05pt; margin-left:27.6pt; text-align:justify; line-height:115%; widows:0; orphans:0; padding-left:8.4pt; font-family:serif; font-size:10pt; background-color:#ffffff">
    <a href="https://iabeurope.eu/" style="text-decoration:underline"><span class="Hyperlink" style="font-family:Saira; color:#000000">The Interactive Advertising Bureau (EU)</span></a>
</li>
<li class="ListParagraph" style="margin-right:15.05pt; margin-left:27.6pt; text-align:justify; line-height:115%; widows:0; orphans:0; padding-left:8.4pt; font-family:serif; font-size:10pt; background-color:#ffffff">
    <a href="https://www.youronlinechoices.com/" style="text-decoration:underline"><span class="Hyperlink" style="font-family:Saira; color:#000000">European Interactive Digital Advertising Alliance (EU)</span><span style="width:0.79pt; font-family:Saira; color:#000000; display:inline-block">&#xa0;</span><br /></a><span style="font-family:Saira">&#xa0;</span>
</li>
</ul>
<p style="font-size:11pt">
<span style="font-family:Saira">&#xa0;</span>
</p>`
let es_text = `<p style="text-align:center; margin-bottom:14pt;  font-size:16pt!important"><strong>Cybersays.club - Pol&iacute;tica de cookies</strong></p>
<p>&Uacute;ltima revisi&oacute;n: Febrero 2024</p>
<ol>
    <li><strong>Introducci&oacute;n</strong></li>
</ol>
<p>Cuando visita o accede a nuestros sitios web, o cuando interact&uacute;a o participa en nuestros contenidos (&quot;<strong>Servicios</strong>&quot;), utilizamos (y autorizamos a terceros a utilizar) cookies, p&iacute;xeles, balizas, almacenamiento local y tecnolog&iacute;as similares (&quot;<strong>Tecnolog&iacute;as de seguimiento</strong>&quot;).&nbsp;</p>
<p><br></p>
<p>&Eacute;stas nos permiten recopilar autom&aacute;ticamente informaci&oacute;n sobre usted, su dispositivo y su comportamiento en l&iacute;nea, con el fin de mejorar su navegaci&oacute;n en nuestros Servicios, mejorar el rendimiento de nuestros Servicios, realizar an&aacute;lisis, personalizar su experiencia y ofrecerle, por ejemplo, contenidos y anuncios personalizados que se correspondan mejor con sus intereses.</p>
<p><br></p>
<p>Esta Pol&iacute;tica de Cookies est&aacute; integrada y forma parte de la Pol&iacute;tica de Privacidad de la Empresa.&nbsp;</p>
<p><br></p>
<ol>
    <li><strong>&iquest;Qu&eacute; son las cookies?</strong></li>
</ol>
<p>Las cookies son peque&ntilde;os archivos de texto (compuestos &uacute;nicamente por letras y n&uacute;meros) que un servidor web coloca en su ordenador o dispositivo m&oacute;vil cuando visita una p&aacute;gina web. Cuando se utilizan, las cookies pueden ayudar a que nuestros Servicios sean m&aacute;s f&aacute;ciles de usar, por ejemplo, recordando sus preferencias y ajustes de idioma. Puede encontrar m&aacute;s informaci&oacute;n sobre las cookies en www.allaboutcookies.org.</p>
<p><br></p>
<p>Las cookies se utilizan ampliamente para que las p&aacute;ginas web funcionen de forma eficaz. El uso de cookies le permite navegar entre p&aacute;ginas de forma eficiente. Las cookies recuerdan sus preferencias y hacen que la interacci&oacute;n entre usted y los Servicios sea m&aacute;s fluida y eficaz. Las cookies tambi&eacute;n se utilizan para ayudar a garantizar que los anuncios que ve en l&iacute;nea son relevantes para usted y sus intereses.</p>
<p><br></p>
<ol>
    <li><strong>Almacenamiento de tecnolog&iacute;as de seguimiento</strong></li>
</ol>
<p>Almacenamos Tecnolog&iacute;as de Seguimiento cuando usted visita o accede a nuestros Servicios (por ejemplo, cuando visita nuestro Sitio Web) - &eacute;stas se denominan &quot;Tecnolog&iacute;as de Seguimiento de Primera Parte&quot;. Adem&aacute;s, las Tecnolog&iacute;as de Seguimiento son almacenadas por otros terceros (por ejemplo, nuestros proveedores de servicios de an&aacute;lisis, socios comerciales y anunciantes) que ejecutan contenidos en nuestros Servicios - &eacute;stas se denominan &quot;Tecnolog&iacute;as de Seguimiento de Terceros&quot;.</p>
<p><br></p>
<p>Ambos tipos de tecnolog&iacute;as de rastreo se almacenan durante la duraci&oacute;n de su visita a nuestros Servicios o para visitas repetidas.</p>
<p><br></p>
<ol>
    <li><strong>&iquest;Qu&eacute; tipos de tecnolog&iacute;as de seguimiento utilizamos?</strong></li>
</ol>
<p>Cuando usted utiliza o accede a nuestros Servicios, utilizamos las siguientes categor&iacute;as de Tecnolog&iacute;as de Seguimiento:</p>
<ul>
    <li>Tecnolog&iacute;as de seguimiento estrictamente necesarias: estas tecnolog&iacute;as de seguimiento se colocan autom&aacute;ticamente en su ordenador o dispositivo cuando accede a nuestros Servicios. Estas Tecnolog&iacute;as de Seguimiento son esenciales para <strong>permitirle&nbsp;</strong>navegar y utilizar las funciones de nuestros Servicios. No necesitamos obtener su consentimiento para utilizar estas Tecnolog&iacute;as de Seguimiento;&nbsp;</li>
    <li>Seguimiento y publicidad Tecnolog&iacute;as de seguimiento: estas tecnolog&iacute;as de seguimiento recopilan informaci&oacute;n sobre sus h&aacute;bitos de navegaci&oacute;n y se utilizan para que la publicidad sea m&aacute;s relevante para usted y sus intereses. Tambi&eacute;n se utilizan para limitar el n&uacute;mero de veces que usted ve un anuncio, as&iacute; como para ayudar a medir la eficacia de una campa&ntilde;a publicitaria.&nbsp;</li>
    <li>Tecnolog&iacute;as de seguimiento de funciones: estas tecnolog&iacute;as de seguimiento permiten a nuestros Servicios recordar las elecciones que usted realiza (como su idioma) y proporcionar funciones mejoradas y personalizadas. Por ejemplo, estas Tecnolog&iacute;as de Seguimiento se utilizan para la autenticaci&oacute;n (para recordar cu&aacute;ndo ha iniciado sesi&oacute;n) y para apoyar otras funciones de nuestros Servicios;&nbsp;</li>
    <li>Tecnolog&iacute;as de seguimiento del rendimiento: estas tecnolog&iacute;as de seguimiento recopilan informaci&oacute;n sobre su actividad en l&iacute;nea (por ejemplo, la duraci&oacute;n de su visita en nuestros Servicios), incluidos datos de comportamiento y m&eacute;tricas de participaci&oacute;n en los contenidos. Estas Tecnolog&iacute;as de Seguimiento se utilizan para an&aacute;lisis, investigaci&oacute;n y para realizar estad&iacute;sticas (basadas en informaci&oacute;n agregada).</li>
    <li>Tecnolog&iacute;as de seguimiento de redes sociales:&nbsp;nuestro sitio web incluye funciones de redes sociales, como los botones &quot;Me gusta&quot; o &quot;Compartir&quot; de Facebook. Estas funciones est&aacute;n alojadas por un tercero o directamente en nuestros servicios. Sus interacciones con estas funciones se rigen por la declaraci&oacute;n de privacidad de la Empresa que las proporciona.</li>
</ul>
<p><br></p>
<p>Las siguientes Tecnolog&iacute;as de Seguimiento se utilizan en relaci&oacute;n con nuestros Servicios. Para obtener informaci&oacute;n adicional sobre cualquiera de las Tecnolog&iacute;as de Rastreo de Terceros, por favor visite los enlaces de esas Empresas proporcionados.</p>
<table cellspacing="0" cellpadding="0">
    <tbody>
        <tr>
            <td valign="bottom">
                <p><strong>Tecnolog&iacute;as de seguimiento</strong></p>
            </td>
            <td valign="bottom">
                <p><strong>Tipo</strong></p>
            </td>
            <td valign="bottom">
                <p><strong>Prop&oacute;sito</strong></p>
            </td>
        </tr>
        <tr>
            <td valign="top">
                <p><strong>Cookies anal&iacute;ticas</strong></p>
            </td>
            <td valign="top">
                <p>Tecnolog&iacute;a de seguimiento de primera parte</p>
            </td>
            <td valign="top">
                <p><strong>Tecnolog&iacute;as de seguimiento del rendimiento y la funcionalidad&nbsp;</strong></p>
                <p>Estas tecnolog&iacute;as de seguimiento se utilizan para recopilar informaci&oacute;n sobre c&oacute;mo interact&uacute;a con el contenido de nuestros Servicios, con fines de atribuci&oacute;n (por ejemplo, la URL de referencia) y para recordar sus preferencias de idioma y autenticaci&oacute;n (recordar que ha iniciado sesi&oacute;n). Utilizamos la informaci&oacute;n para elaborar informes, calcular los ingresos que nos corresponden, ayudarnos a mejorar los Servicios y ofrecer productos y contenidos personalizados.&nbsp;</p>
            </td>
        </tr>
        <tr>
            <td valign="top">
                <p><strong>Otras cookies</strong></p>
            </td>
            <td valign="top">
                <p>Tecnolog&iacute;a de rastreo propia y de terceros</p>
            </td>
            <td valign="top">
                <p><strong>Tecnolog&iacute;as de seguimiento estrictamente necesarias&nbsp;</strong><br>Estas cookies no incluidas en la lista podr&iacute;an utilizarse en secciones internas de los Servicios, con el fin de personalizar y simplificar la experiencia del usuario en el sitio recordando las elecciones que ha realizado y sus credenciales de inicio de sesi&oacute;n.</p>
            </td>
        </tr>
    </tbody>
</table>
<p><br></p>
<p>Las cookies nos permiten:</p>
<ul>
    <li>Mejorar el uso del Servicio y hacer el contenido m&aacute;s interesante y relevante a los deseos de los usuarios, como ofrecerle ofertas promocionales m&aacute;s relevantes.</li>
    <li>Distinguirle de otros usuarios de nuestros sitios para garantizar una buena experiencia de usuario.</li>
    <li>Identificar sus ajustes y preferencias en relaci&oacute;n con contenidos o funcionalidades personalizados.</li>
    <li>Sus datos de inicio de sesi&oacute;n para la confirmaci&oacute;n como usuario registrado de nuestro Servicio.</li>
    <li>Recopilar an&aacute;lisis estad&iacute;sticos sobre el uso de nuestro Servicio.</li>
</ul>
<ol>
    <li><strong>C&oacute;mo gestionar y controlar las tecnolog&iacute;as de seguimiento</strong></li>
</ol>
<p><br></p>
<p>Existen varias formas de gestionar y controlar la configuraci&oacute;n de sus Tecnolog&iacute;as de Seguimiento. Tenga en cuenta que no reconocemos ni respondemos a las se&ntilde;ales automatizadas de los navegadores en relaci&oacute;n con las Tecnolog&iacute;as de Seguimiento, incluidas las solicitudes de &quot;No Rastrear&quot;. No obstante, existen varios m&eacute;todos para gestionar sus preferencias sobre Tecnolog&iacute;as de Seguimiento, entre los que se incluyen: configurar su navegador para que rechace todas o algunas de las cookies del navegador, o para que le avise cuando se env&iacute;en cookies. Tenga en cuenta que algunas caracter&iacute;sticas de los Servicios podr&iacute;an no funcionar correcta o eficazmente si elimina o desactiva las cookies u otras tecnolog&iacute;as de seguimiento.&nbsp;</p>
<p><br></p>
<p>Para saber m&aacute;s sobre c&oacute;mo puede gestionar sus cookies, a continuaci&oacute;n le ofrecemos una lista de enlaces &uacute;tiles que pueden proporcionarle m&aacute;s informaci&oacute;n sobre c&oacute;mo gestionar sus cookies:</p>
<ul>
    <li><a href="https://support.google.com/chrome/answer/95647?hl=en">Google Chrome</a></li>
    <li><a href="https://support.microsoft.com/en-us/help/260971/description-of-cookies">Internet Explorer</a></li>
    <li><a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer">Mozilla Firefox</a></li>
    <li><a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac">Safari (Escritorio)</a></li>
    <li><a href="https://support.apple.com/en-us/HT201265">Safari (M&oacute;vil)</a></li>
    <li><a href="https://support.google.com/nexus/answer/54068?visit_id=637249861772874734-2281104728&hl=en&rd=1">Navegador Android</a></li>
</ul>
<p>Puede obtener m&aacute;s informaci&oacute;n y desactivar determinadas cookies de publicidad y orientaci&oacute;n de terceros visitando las siguientes p&aacute;ginas web de terceros:</p>
<ul>
    <li><a href="https://www.iab.com/">La Oficina de Publicidad Interactiva (EE.UU.)</a></li>
    <li><a href="https://iabeurope.eu/">La Oficina de Publicidad Interactiva (UE)</a></li>
    <li><a href="https://www.youronlinechoices.com/">Alianza Europea de Publicidad Digital Interactiva (UE)&nbsp; &nbsp;&nbsp;<br></a></li>
</ul>
<p>Este documento ha sido redactado en lengua inglesa, que es la versi&oacute;n original y de control de esta Pol&iacute;tica. Todas las traducciones de este documento a otros idiomas se har&aacute;n &uacute;nicamente por conveniencia y no controlar&aacute;n el significado o la aplicaci&oacute;n de este documento. En caso de discrepancia entre los significados de las versiones traducidas del documento y la versi&oacute;n en lengua inglesa, prevalecer&aacute; el significado de la versi&oacute;n en lengua inglesa.</p>
<p><br></p>`
let pt_text = `<p style="text-align:center; margin-bottom:14pt;  font-size:16pt!important" class="p14">
<span class="s1"
  ><strong>Cybersays.club - Pol&iacute;tica de cookies</strong></span
>
</p>
<p class="p21">
&Uacute;ltima revis&atilde;o: <span class="s1">Fevereiro de 2024</span>
</p>
<ol class="ol1">
<li class="li22"><strong>Introdu&ccedil;&atilde;o</strong></li>
</ol>
<p class="p4">
Quando voc&ecirc; visita ou acessa nossos sites, ou quando interage ou se
envolve com nosso conte&uacute;do ("<strong>Servi&ccedil;os</strong>"),
usamos (e autorizamos terceiros a usar) cookies, pixels, beacons,
armazenamento local e tecnologias semelhantes ("<strong
  >Tecnologias de Rastreamento</strong
>").
</p>
<p class="p5">&nbsp;</p>
<p class="p4">
Eles nos permitem coletar automaticamente informa&ccedil;&otilde;es sobre
voc&ecirc;, seu dispositivo e seu comportamento on-line, a fim de
aprimorar sua navega&ccedil;&atilde;o em nossos Servi&ccedil;os, melhorar
o desempenho dos Servi&ccedil;os, realizar an&aacute;lises, personalizar
sua experi&ecirc;ncia e oferecer, por exemplo, conte&uacute;do e
an&uacute;ncios personalizados que correspondam melhor aos seus
interesses.
</p>
<p class="p5">&nbsp;</p>
<p class="p4">
Esta Pol&iacute;tica de Cookies est&aacute; integrada e faz parte da
Pol&iacute;tica de Privacidade da Empresa.
</p>
<p class="p20">&nbsp;</p>
<ol class="ol1">
<li class="li22"><strong>O que s&atilde;o cookies?</strong></li>
</ol>
<p class="p4">
Cookies s&atilde;o pequenos arquivos de texto (compostos apenas de letras
e n&uacute;meros) que um servidor da Web coloca em seu computador ou
dispositivo m&oacute;vel quando voc&ecirc; visita uma p&aacute;gina da
Web. Quando usado, o cookie pode ajudar a tornar nossos Servi&ccedil;os
mais f&aacute;ceis de usar, por exemplo, lembrando suas prefer&ecirc;ncias
e configura&ccedil;&otilde;es de idioma. Voc&ecirc; pode obter mais
informa&ccedil;&otilde;es sobre cookies em
<a href="http://www.allaboutcookies.org"
  ><span class="s3">www.allaboutcookies.org</span></a
>.
</p>
<p class="p5">&nbsp;</p>
<p class="p4">
Os cookies s&atilde;o amplamente utilizados para que os sites funcionem de
maneira eficiente. O uso de cookies permite que voc&ecirc; navegue entre
as p&aacute;ginas de forma eficiente. Os cookies lembram suas
prefer&ecirc;ncias e tornam a intera&ccedil;&atilde;o entre voc&ecirc; e
os Servi&ccedil;os mais suave e eficiente. Os cookies tamb&eacute;m
s&atilde;o usados para ajudar a garantir que os an&uacute;ncios que
voc&ecirc; v&ecirc; on-line sejam relevantes para voc&ecirc; e seus
interesses.
</p>
<p class="p20">&nbsp;</p>
<ol class="ol1">
<li class="li22">
  <strong>Armazenamento de tecnologias de rastreamento</strong>
</li>
</ol>
<p class="p4">
Armazenamos Tecnologias de Rastreamento quando voc&ecirc; visita ou acessa
nossos Servi&ccedil;os (por exemplo, quando voc&ecirc; visita nosso site)
- essas s&atilde;o chamadas de "Tecnologias de Rastreamento
Prim&aacute;rias". Al&eacute;m disso, as Tecnologias de Rastreamento
s&atilde;o armazenadas por outros terceiros (por exemplo, nossos
provedores de servi&ccedil;os de an&aacute;lise, parceiros comerciais e
anunciantes) que executam conte&uacute;do em nossos Servi&ccedil;os -
essas s&atilde;o chamadas de "Tecnologias de Rastreamento de Terceiros".
</p>
<p class="p5">&nbsp;</p>
<p class="p4">
Ambos os tipos de tecnologias de rastreamento s&atilde;o armazenados
durante sua visita aos nossos Servi&ccedil;os ou para visitas repetidas.
</p>
<p class="p20">&nbsp;</p>
<ol class="ol1">
<li class="li22">
  <strong>Que tipos de tecnologias de rastreamento usamos?</strong>
</li>
</ol>
<p class="p23">
Quando voc&ecirc; usa ou acessa nossos Servi&ccedil;os, usamos as
seguintes categorias de Tecnologias de Rastreamento:
</p>
<ul class="ul1">
<li class="li18">
  <span class="s1"
    >Tecnologias de rastreamento estritamente necess&aacute;rias </span
  >- essas tecnologias de rastreamento s&atilde;o colocadas
  automaticamente em seu computador ou dispositivo quando voc&ecirc;
  acessa nossos Servi&ccedil;os. Essas tecnologias de rastreamento
  s&atilde;o essenciais para <strong>permitir que </strong>voc&ecirc;
  navegue e use os recursos dos nossos Servi&ccedil;os. N&atilde;o
  precisamos obter seu consentimento para usar essas tecnologias de
  rastreamento<span class="s1">; </span>
</li>
<li class="li18">
  <span class="s1"
    >Tecnologias de rastreamento e publicidade Tecnologias de rastreamento </span
  >- essas tecnologias de rastreamento coletam informa&ccedil;&otilde;es
  sobre seus h&aacute;bitos de navega&ccedil;&atilde;o e s&atilde;o usadas
  para tornar a publicidade mais relevante para voc&ecirc; e seus
  interesses. Elas tamb&eacute;m s&atilde;o usadas para limitar o
  n&uacute;mero de vezes que voc&ecirc; v&ecirc; um an&uacute;ncio, bem
  como para ajudar a medir a efic&aacute;cia de uma campanha
  publicit&aacute;ria.
</li>
<li class="li18">
  <span class="s1">Tecnologias de rastreamento de funcionalidade </span>-
  essas tecnologias de rastreamento permitem que nossos servi&ccedil;os se
  lembrem das escolhas que voc&ecirc; faz (como seu idioma) e
  forne&ccedil;am recursos aprimorados e personalizados. Por exemplo,
  essas Tecnologias de Rastreamento s&atilde;o usadas para
  autentica&ccedil;&atilde;o (para lembrar quando voc&ecirc; est&aacute;
  logado) e oferecem suporte a outros recursos dos nossos Servi&ccedil;os;
</li>
<li class="li18">
  <span class="s1">Tecnologias de rastreamento de desempenho </span>-
  essas tecnologias de rastreamento coletam informa&ccedil;&otilde;es
  sobre sua atividade on-line (por exemplo, a dura&ccedil;&atilde;o de sua
  visita aos nossos Servi&ccedil;os), incluindo dados comportamentais e
  m&eacute;tricas de engajamento de conte&uacute;do. Essas Tecnologias de
  Rastreamento s&atilde;o usadas para an&aacute;lise, pesquisa e para
  realizar estat&iacute;sticas (com base em informa&ccedil;&otilde;es
  agregadas).
</li>
<li class="li18">
  <span class="s1"
    >Tecnologias de rastreamento de m&iacute;dia social - </span
  >Nosso site inclui recursos de m&iacute;dia social, como os
  bot&otilde;es "Curtir" ou "Compartilhar" do Facebook. Esses recursos
  s&atilde;o hospedados por terceiros ou diretamente em nossos
  Servi&ccedil;os. Suas intera&ccedil;&otilde;es com esses recursos
  s&atilde;o regidas pela declara&ccedil;&atilde;o de privacidade da
  empresa que fornece esses recursos.
</li>
</ul>
<p class="p15">&nbsp;</p>
<p class="p23">
As seguintes Tecnologias de Rastreamento s&atilde;o usadas em
conex&atilde;o com nossos Servi&ccedil;os. Para obter
informa&ccedil;&otilde;es adicionais sobre qualquer uma das Tecnologias de
Rastreamento de Terceiros, visite os links dessas empresas fornecidos.
</p>
<table class="t1" cellspacing="0" cellpadding="0">
<tbody>
  <tr>
    <td class="td1" valign="bottom">
      <p class="p1"><strong>Tecnologias de rastreamento</strong></p>
    </td>
    <td class="td2" valign="bottom">
      <p class="p1"><strong>Tipo</strong></p>
    </td>
    <td class="td3" valign="bottom">
      <p class="p1"><strong>Finalidade</strong></p>
    </td>
  </tr>
  <tr>
    <td class="td4" valign="top">
      <p class="p14"><strong>Cookies anal&iacute;ticos</strong></p>
    </td>
    <td class="td5" valign="top">
      <p class="p14">Tecnologia de rastreamento pr&oacute;prio</p>
    </td>
    <td class="td6" valign="top">
      <p class="p14">
        Tecnologias<strong>
          de rastreamento de desempenho e funcionalidade
        </strong>
      </p>
      <p class="p14">
        Essas tecnologias de rastreamento s&atilde;o usadas para coletar
        informa&ccedil;&otilde;es sobre como voc&ecirc; interage com o
        conte&uacute;do dos nossos Servi&ccedil;os, para fins de
        atribui&ccedil;&atilde;o (por exemplo, o URL de refer&ecirc;ncia)
        e para lembrar suas prefer&ecirc;ncias de idioma e
        autentica&ccedil;&atilde;o (lembrar que voc&ecirc; est&aacute;
        conectado). Usamos as informa&ccedil;&otilde;es para compilar
        relat&oacute;rios, calcular as receitas que nos s&atilde;o
        devidas, ajudar-nos a aprimorar os Servi&ccedil;os e oferecer
        produtos e conte&uacute;do personalizados.
      </p>
    </td>
  </tr>
  <tr>
    <td class="td7" valign="top">
      <p class="p14"><strong>Outros cookies</strong></p>
    </td>
    <td class="td8" valign="top">
      <p class="p14">
        Tecnologia de rastreamento pr&oacute;pria e de terceiros
      </p>
    </td>
    <td class="td9" valign="top">
      <p class="p4">
        <strong
          >Tecnologias de rastreamento estritamente necess&aacute;rias </strong
        ><br />Esses cookies n&atilde;o listados podem estar em uso em
        se&ccedil;&otilde;es internas dos Servi&ccedil;os, a fim de
        personalizar e simplificar a experi&ecirc;ncia do usu&aacute;rio
        no site, lembrando as escolhas que voc&ecirc; fez e suas
        credenciais de login.
      </p>
    </td>
  </tr>
</tbody>
</table>
<p class="p20">&nbsp;</p>
<p class="p18"><span class="s1">Os cookies nos permitem:</span></p>
<ul class="ul1">
<li class="li18">
  Melhorar o uso do Servi&ccedil;o e tornar o conte&uacute;do mais
  interessante e relevante para os desejos dos usu&aacute;rios, como
  oferecer a voc&ecirc; ofertas promocionais mais relevantes.
</li>
<li class="li18">
  Distinguir voc&ecirc; de outros usu&aacute;rios de nossos sites para
  garantir uma boa experi&ecirc;ncia de usu&aacute;rio.
</li>
<li class="li18">
  Identificar suas configura&ccedil;&otilde;es e prefer&ecirc;ncias com
  rela&ccedil;&atilde;o a conte&uacute;do ou funcionalidade
  personalizados.
</li>
<li class="li18">
  Seus detalhes de login para a confirma&ccedil;&atilde;o como
  usu&aacute;rio registrado do nosso Servi&ccedil;o.
</li>
<li class="li22">
  Coletar an&aacute;lises estat&iacute;sticas sobre o uso de nosso
  Servi&ccedil;o.
</li>
</ul>
<ol class="ol1">
<li class="li22">
  <strong
    >Como gerenciar e controlar as tecnologias de rastreamento</strong
  >
</li>
</ol>
<p class="p20">&nbsp;</p>
<p class="p24">
H&aacute; v&aacute;rias maneiras de gerenciar e controlar suas
configura&ccedil;&otilde;es de tecnologias de rastreamento. Observe que
n&atilde;o reconhecemos nem respondemos a sinais automatizados do
navegador com rela&ccedil;&atilde;o a tecnologias de rastreamento,
inclusive solicita&ccedil;&otilde;es de "N&atilde;o rastrear". Entretanto,
h&aacute; v&aacute;rios m&eacute;todos para gerenciar suas
prefer&ecirc;ncias de tecnologias de rastreamento, incluindo: configurar o
navegador para recusar todos ou alguns cookies do navegador ou para
alert&aacute;-lo quando os cookies estiverem sendo enviados. Observe que
determinados recursos dos Servi&ccedil;os poder&atilde;o n&atilde;o
funcionar de forma adequada ou eficaz se voc&ecirc; excluir ou desativar
os cookies ou outras tecnologias de rastreamento.
</p>
<p class="p25">&nbsp;</p>
<p class="p24">
Para saber mais sobre como gerenciar seus cookies, segue abaixo uma lista
de links &uacute;teis que podem fornecer mais informa&ccedil;&otilde;es
sobre como gerenciar seus cookies:
</p>
<ul class="ul1">
<li class="li26">
  <span class="s6"
    ><a href="https://support.google.com/chrome/answer/95647?hl=en"
      ><span class="s8">Google Chrome</span></a
    ></span
  >
</li>
<li class="li26">
  <span class="s6"
    ><a
      href="https://support.microsoft.com/en-us/help/260971/description-of-cookies"
      ><span class="s8">Internet Explorer</span></a
    ></span
  >
</li>
<li class="li26">
  <span class="s6"
    ><a
      href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer"
      ><span class="s8">Mozilla Firefox</span></a
    ></span
  >
</li>
<li class="li26">
  <span class="s6"
    ><a
      href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac"
      ><span class="s8">Safari (Desktop)</span></a
    ></span
  >
</li>
<li class="li26">
  <span class="s6"
    ><a href="https://support.apple.com/en-us/HT201265"
      ><span class="s8">Safari (celular)</span></a
    ></span
  >
</li>
<li class="li26">
  <span class="s9"
    ><a
      href="https://support.google.com/nexus/answer/54068?visit_id=637249861772874734-2281104728&amp;hl=en&amp;rd=1"
      ><span class="s8">Navegador Android</span></a
    ></span
  >
</li>
</ul>
<p class="p27">
Voc&ecirc; pode saber mais e desativar determinados cookies de publicidade
e direcionamento de terceiros visitando as seguintes p&aacute;ginas da Web
de terceiros:
</p>
<ul class="ul1">
<li class="li28">
  <span class="s9"
    ><a href="https://www.iab.com/"
      ><span class="s8">The Interactive Advertising Bureau (EUA)</span></a
    ></span
  >
</li>
<li class="li28">
  <span class="s9"
    ><a href="https://iabeurope.eu/"
      ><span class="s8">O Interactive Advertising Bureau (UE)</span></a
    ></span
  >
</li>
<li class="li28">
  <span class="s9"
    ><a href="https://www.youronlinechoices.com/"
      ><span class="s8"
        >Alian&ccedil;a Europeia de Publicidade Digital Interativa
        (UE)</span
      ><span class="s10"> <br /></span></a
  ></span>
</li>
</ul>
<p class="p29">
Este documento foi redigido no idioma ingl&ecirc;s, que &eacute; a
vers&atilde;o original e de controle desta Pol&iacute;tica. Todas as
tradu&ccedil;&otilde;es deste documento para outros idiomas devem ser
feitas apenas por conveni&ecirc;ncia e n&atilde;o devem controlar o
significado ou a aplica&ccedil;&atilde;o deste documento. No caso de
qualquer discrep&acirc;ncia entre os significados de quaisquer
vers&otilde;es traduzidas do documento e a vers&atilde;o em ingl&ecirc;s,
o significado da vers&atilde;o em ingl&ecirc;s prevalecer&aacute;.
</p>
<p class="p20">&nbsp;</p>`
