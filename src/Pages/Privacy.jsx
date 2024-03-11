import React from 'react'
import HeaderProfile from '../Components/HeaderProfile'
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
<p>Last revised: March 2024</p>
<p><strong>INTRODUCTION</strong></p>
<p>Pythia Grant Ltd.&nbsp;&nbsp;including its affiliates (collectively, the<strong>&nbsp;&quot;Company&quot;,&nbsp;</strong>&quot;<strong>we</strong>&quot;, &quot;<strong>our</strong>&quot; or &quot;<strong>us</strong>&quot;) are deeply committed to safeguarding the privacy expectations of its users (&ldquo;<strong>User(s)</strong>&rdquo;, &ldquo;<strong>you</strong>&rdquo; or &ldquo;<strong>your</strong>&rdquo;).&nbsp;</p>
<p>Accordingly, we have put in place this privacy policy (&quot;<strong>Policy</strong>&quot;), which outlines our data protection practices, including how we collect, use, disclose and protect your personal information, as well as your rights with respect to your personal information.</p>
<p>Please read this Policy very carefully and use it to make informed decisions, as your access to and use of our service, whether by visiting our website, <a href="http://www.Cybersays.club">www.Cybersays.club</a>, <a href="http://www.Cybersays.com">www.Cybersays.com</a>, <a href="http://www.EllaComanda.com">www.EllaComanda.com</a>, www.EllaComandas.com, www.ElaComanda.com (&quot;<strong>Website/s</strong>&quot;) or by creating an account through our service (collectively &quot;<strong>Service</strong>&quot;), signifies that you have read and understand all the terms detailed herein and you hereby agree to this Policy and to the collection, use, retention and disclosure of your personal information in accordance with these terms.&nbsp;</p>
<p><strong>If you do not agree to the terms of this Policy, please do not use our Services</strong>.&nbsp;You are&nbsp;not&nbsp;legally required to provide us with any personal information, but without it, we will not be able to provide you with the full range or with the best experience of using our Services.</p>
<p>Personal information is defined as any information that identifies an individual or could reasonably identify an individual with reasonable effort, including without limitation (1) User name, (2) your browser identification details and (3) your Social media identification details (i.e. you Facebook User details) hereinafter referred to as the &quot;<strong>Personal Information</strong>&quot;. Processing activities include, among other things, the collection, use, retention and disclosure of such data.</p>
<p>Your Personal Information will be processed by us (including any of our agents and/or employees), and (where appropriate) any other company in our company group and/or our partners and subcontractors, in accordance with this Policy.&nbsp;</p>
<p>If you have any questions regarding this Policy or the way we use your Personal Information, please refer to our table of contents and to the section 12. &quot;HOW TO CONTACT US?&quot; below. The Company is the controller of the Personal Information collected, and is responsible for the processing of your Personal Information.</p>
<p>In this Policy, you can learn about:</p>
<ol>
  <li><strong>WHAT INFORMATION WE COLLECT?</strong></li>
  <li><strong>MINORS</strong></li>
  <li><strong>PURPOSES AND CONDITIONS FOR PROCESSING PERSONAL INFORMATION</strong></li>
  <li><strong>MARKETING</strong></li>
  <li><strong>WITH WHOM WE SHARE INFORMATION?</strong></li>
  <li><strong>INTERNATIONAL TRANSFER OF INFORMATION</strong></li>
  <li><strong>THIRD PARTY TRACKING TECHNOLOGIES</strong></li>
  <li><strong>RETENTION OF PERSONAL INFORMATION</strong></li>
  <li><strong>YOUR RIGHTS</strong></li>
  <li><strong>CHANGES TO THE PRIVACY POLICY</strong></li>
  <li><strong>LANGUAGE VERSION</strong></li>
  <li><strong>HOW TO CONTACT US?</strong></li>
</ol>
<p><br></p>
<ol>
  <li><strong>WHAT INFORMATION WE COLLECT?</strong></li>
</ol>
<p>We collect Personal Information from our Users and visitors of our Service, which consists of the following:</p>
<ul>
  <li><strong>Registration and login:</strong> When you open an account and register to use our Service, you will be asked to provide us with certain details about yourself, such as: your email address, your Facebook User details and password. Please note that when you wish to update your account profile, we also collect Personal Information from you.</li>
  <li><strong>Voluntary information</strong>: We also collect information which you provide us voluntarily in order to personalize your account or for a specific function, which you voluntarily provide to us at your discretion for a specific function. In addition, we collect your communication when you respond to communications from us, provide us with feedback, communicate with us via email or share additional information about yourself through your use of the Service.&nbsp;</li>
  <li><strong>Device information</strong>: We collect specific types of connection details and information with regard to your device, software or hardware that could identify you, such as: device&rsquo;s unique identifiers (e.g. UDID, IMEI, MAC address), browser fingerprinting, IP address, blockchain address, wallet type, and geo-location data.</li>
  <li><strong>Information we collect from third parties</strong>: We sometimes collect Personal Information from third party service providers, such as information which is gathered in order to verify your identity and prevent fraudulent or illegal activity.</li>
  <li><strong>Log-in history and technical information</strong>: To enhance the functionality of the Service and to provide you with a better user experience,<strong>&nbsp;</strong>we collect technical information transmitted by your device, including certain software and hardware information (e.g. the type of browser and operating system your device uses, language preference, access time and the domain name of the website from which you linked to the Service; etc.).</li>
  <li><strong>Analytics information</strong>: We collect information about your use of the Service, such as applications&apos; usage, log files, user activity (e.g. pages viewed, user&apos;s movements, time spent, online browsing, clicks, actions, etc.), time stamps, alerts, etc. This information is collected for amongst other things troubleshooting errors and bugs as well as for research and analytics purposes about your use of the Service.</li>
</ul>
<ol>
  <li><strong>MINORS</strong></li>
</ol>
<p>The Service are not designed or directed to persons under the age of 18 or persons under the age of legal consent with respect to the use of the Service of any jurisdiction, whichever is higher (&ldquo;<strong>Legally of Age</strong>&rdquo;).&nbsp;</p>
<p>We do not collect Personal Information of a minor.&nbsp;</p>
<p><strong>If you are not Legally of Age, you are prohibited to access or use the Service and you are prohibited to provide any Personal Information to us.</strong></p>
<p>We reserve the right to access and verify any Personal Information collected from you. In the event that we become aware that a user who is not Legally of Age has shared any information, we shall discard such information.&nbsp;</p>
<ol>
  <li><strong>PURPOSES AND CONDITIONS FOR PROCESSING PERSONAL INFORMATION&nbsp;</strong></li>
</ol>
<p>This section outlines the underlying purposes and legal bases for the processing of your Personal Information:</p>
<table cellspacing="0" cellpadding="0">
  <tbody>
      <tr>
          <td valign="top">
              <p><strong>Purpose</strong></p>
          </td>
          <td valign="top">
              <p><strong>Legal basis</strong></p>
          </td>
      </tr>
      <tr>
          <td valign="top">
              <p><strong>Provision of our Service; support and customer relations</strong>. We use your Personal Information, such as your username and email address for customer services purposes as well as to present our Websites to you. This includes, for example, managing and updating your account, providing and operating the Service, keeping you informed about our last updates or responding to any of your inquiries, as well as your request to exercise your User rights.</p>
          </td>
          <td valign="top">
              <p>The legal bases for processing this data are the performance of our contractual obligations towards you for example as described under this Policy and/or Terms of Use (Art. 6.1(b) GDPR); your consent (for example, when you agree to provide Personal Information by accepting our Cookie Notice, Policy and Terms of Use) (Art. 6.1(a) GDPR); compliance with our legal obligations (Art. 6.1(c) GDPR); and our legitimate interests (Art. 6.1(f) GDPR). Our legitimate interests in this case are enforcing our policies, protection against fraud and misuse of our Service.</p>
          </td>
      </tr>
      <tr>
          <td valign="top">
              <p><strong>Improving our Service</strong>. We collect and analyze information about you and your usage of our Service to improve the usability and effectiveness of our Service, including debugging to identify and repair errors or undertaking internal research for technological development and demonstration.</p>
          </td>
          <td valign="top">
              <p>The legal basis for processing this data is our legitimate interests (Art. 6.1(f) GDPR), in this case &ndash; providing and improving our Service.</p>
          </td>
      </tr>
      <tr>
          <td valign="top">
              <p><strong>Marketing, advertising and analytics</strong>. We use your Personal Information in order to provide you with personalized advertisements, including behavioral advertising when you visit our Service, to market our Service and to gather aggregate usage information for analytics, statistical and research purposes, including notification of promotional offers.</p>
          </td>
          <td valign="top">
              <p>The legal bases for processing this data are your consent (when required) and our legitimate interests (Art. 6.1(a), 6.1(f) GDPR).&nbsp;</p>
              <p>Our legitimate interests in this case are providing you with tailored services, content and advertisements that better fit your interests as well as to promote our Service.&nbsp;</p>
          </td>
      </tr>
      <tr>
          <td valign="top">
              <p><strong>Integrity.</strong> We process certain information about you and your usage of the Services in order to keep the integrity and security of the Services.</p>
          </td>
          <td valign="top">
              <p>The legal bases for processing this data are compliance with our legal obligations (Art. 6.1(c) GDPR) and our legitimate interests (Art. 6.1(f) GDPR). Our legitimate interests in this case are keeping the integrity of our Services and the safety of our end-users.</p>
          </td>
      </tr>
      <tr>
          <td valign="top">
              <p><strong>Dispute resolution and protection of our legal claims</strong>. We collect your Personal Information in order to investigate violation of our policies, enable us to resolve disputes in connection with your use of the Service and to establish and defend our legal claims.</p>
          </td>
          <td valign="top">
              <p>The legal basis for processing this data is our legitimate interests (Art. 6.1(f) GDPR). Our legitimate interests in this case are to establish and defend our legal claims.</p>
          </td>
      </tr>
      <tr>
          <td valign="top">
              <p><strong>Corporate transactions</strong>. We will share your Personal Information with a potential purchasers, successors or investors in the Company or in the event of a corporate transaction (e.g. sale of a substantial part of our business, merger, reorganization, bankruptcy, consolidation or asset sale of an asset or transfer in the operation thereof) in relation to the Company.</p>
          </td>
          <td valign="top">
              <p>The legal basis for processing this data is our legitimate interests (Art. 6.1(f) GDPR).&nbsp;</p>
          </td>
      </tr>
      <tr>
          <td valign="top">
              <p><strong>Prevention of fraud or violation of our policies</strong>. We process your Personal Information to detect and prevent fraudulent and illegal activity or any other type of activity that jeopardizes or negatively affect the integrity of the Service, including by identifying risks associated with your activity on our Service. We will also investigate any violations of our policies and enforce them.</p>
          </td>
          <td valign="top">
              <p>The legal basis for processing this data is our legitimate interests (Art. 6.1(f) GDPR). Our legitimate interests in this case are to protect our Company and other Users against fraud.</p>
          </td>
      </tr>
      <tr>
          <td valign="top">
              <p><strong>Compliance with applicable laws</strong>. We process your Personal Information to comply with our various legal obligations such as adult content legislation (where applicable), anti-money laundering, identity verification (e.g., suspicion of minor using our Service), prevention of fraud, complying with data subject rights etc.</p>
          </td>
          <td valign="top">
              <p>The legal basis for processing this data is to comply with our various legal obligations (Art. 6.1(c) GDPR) and our legitimate interests (Art. 6.1(f) GDPR).&nbsp;</p>
          </td>
      </tr>
  </tbody>
</table>
<p>Where you have not consented (or have withdrawn your consent) to the processing of your Personal Information by us, we will continue to process your Personal Information : (a) where processing is required for the performance of the contract (i.e. the Terms of Use) between you and us; and/or (b) where processing is necessary for compliance with a legal obligation to which we are subject; (c) where processing is necessary for the purposes of a legitimate interest of the Company and its affiliates (including for marketing).</p>
<ol>
  <li><strong>MARKETING</strong></li>
</ol>
<p>We will use your Personal Information, such as your email address, collected by ourselves or through our trusted third party subcontractors for the purpose of providing you with promotional materials via different marketing techniques such as direct email, telephone marketing, SMS concerning the Service as well as products, services, websites and applications which relate to the Company&apos;s business partners and its affiliates (collectively: &ldquo;<strong>Marketing Affiliates</strong>&rdquo;), which we believe could interest you.</p>
<p>We also share and disclose Personal Information with our Marketing Affiliates for the purpose of providing you different marketing offers, which we, or our Marketing Affiliates, believe are relevant for you.&nbsp;</p>
<p>We will use your Personal Information for the purpose of providing you with promotional materials solely where we have a legitimate interest in doing so, or where we have obtained your affirmative consent.</p>
<p>You have the possibility at any time to decline receiving further marketing offers from us or from our business partners and marketing affiliates by either: following the links inserted in the promotional emails (e.g., selecting the opt-out link) or contacting our customer support.&nbsp;</p>
<p>Please note that even if you unsubscribe from our marketing mailing list, we shall continue to send you service-related updates and notifications.</p>
<ol>
  <li><strong>WITH WHOM WE SHARE INFORMATION?</strong></li>
</ol>
<p>We do not rent, sell, or share your Personal Information with third parties (&ldquo;<strong>Recipients</strong>&rdquo;) except as described in this Policy.&nbsp;&nbsp;The Personal Information will be disclosed to Recipients only to the extent required for the specific purpose, as stipulated in this Policy.</p>
<p>We disclose Personal Information with any of the following recipients:</p>
<ul>
  <li>Companies within the Company and other affiliated companies;</li>
  <li>Subcontractors and third party service providers, as well as their subcontractors, which by way of example include (but is not limited to) cloud computing companies, marketing affiliates, identity verification and fraud prevention services, and other data verifiers;</li>
  <li>Payment service providers, payment processors&nbsp;</li>
  <li>To any third parties who provide services in relation to the operation or promotion of the Service;</li>
  <li>Auditors, contractors or advisers of any of the Company&rsquo;s business processes;</li>
  <li>To any third parties who investigate, detect or prevent fraudulent or illegal activity (e.g. governmental authorities, police, banks and other investigatory organizations);</li>
  <li>Governmental and regulatory bodies, in accordance with applicable laws and regulations;</li>
  <li>Law enforcement agencies or authorities, as a response to their request; and</li>
  <li>Potential purchasers or investors in any of the companies within the Company&apos;s group (if applicable), or in the event of a corporate transaction (e.g. sale of a substantial part of our business, merger, reorganization, bankruptcy, consolidation or asset sale of an asset or transfer in the operation thereof) in relation to any company within the Company (in such event, the acquiring company or transferee will assume the rights and obligations as described in this Policy).</li>
  <li>Research, technical diagnostics and analytics vendors;&nbsp;</li>
  <li>Marketing and advertising partners, in accordance with our marketing policy (see above, under &quot;<strong>Marketing</strong>&quot;); and</li>
  <li>Whenever we believe in good faith that disclosure is necessary to protect our rights or legal claims, enforce our policies (including our Terms of Use and Policy), protect your safety or the safety of others, as well as to investigate or prevent any fraud, for security reasons or to help us with any other related technical issue.</li>
</ul>
<ol>
  <li><strong>INTERNATIONAL TRANSFER OF INFORMATION</strong></li>
</ol>
<p>Since we operate globally, it is necessary for the provision of the Service and to the extent required for the specific purpose, as stipulated in this Policy to transfer your Personal Information to countries outside the European Economic Area (&quot;<strong>EEA</strong>&quot;). The data protection and other laws of these countries are not as comprehensive as those in the EEA.&nbsp;</p>
<p>In these circumstances, we use our best efforts to ensure that your Personal Information is protected in accordance with our Policy, through contractual means (such as by using the standard contractual clauses approved by the relevant European Commission for data transfer, as available <a href="https://ec.europa.eu/info/law/law-topic/data-protection/international-dimension-data-protection/standard-contractual-clauses-scc_en">here</a>) or other means (such as ensuring that the European Commission decisions determined that such jurisdictions offer an adequate level of protection as available <a href="https://ec.europa.eu/info/law/law-topic/data-protection/international-dimension-data-protection/adequacy-decisions_en">here</a>).</p>
<ol>
  <li><strong>THIRD PARTY TRACKING TECHNOLOGIES</strong></li>
</ol>
<p>We use third-party advertising technology across our Websites to serve advertisements when you visit or use our Service. We use and authorize third parties to use web beacons, cookies, pixels, scripts, tags and other technologies (&quot;<strong>Tracking Technologies</strong>&quot;).&nbsp;</p>
<p>The Tracking Technologies automatically collect information about you, your online behavior on the Websites, and your device (for example your computer or mobile device), for different purposes, including improving and personalizing your navigation on our Service and enhancing our Service&rsquo; performance. Third parties use this information to provide you with targeted content.</p>
<p>You can set your browser to refuse all third party cookies, or to alert you when cookies are being sent, also you can opt-out of many third party ad networks, including those operated by members of the Network Advertising Initiative (&quot;<strong>NAI</strong>&quot;) and the Digital Advertising Alliance (&quot;<strong>DAA</strong>&quot;).</p>
<p>We also allow third parties to collect information about you through Tracking Technologies. To learn more please visit our Cookie Notice.&nbsp;</p>
<ol>
  <li><strong>RETENTION OF PERSONAL INFORMATION</strong></li>
</ol>
<p>If you have registered with an account through our Service, the Company will retain your Personal Information during the period your account is active. In addition, the Company will retain your Personal Information for additional periods, to enable the Company to meet its legal obligations under applicable laws or regulations.</p>
<p>In addition, the Company shall retain your Personal Information for longer periods, provided that retaining such information is only necessary for the Company&rsquo;s legitimate interests, such as fraud prevention and record keeping, resolving or excising claims regarding potential disputes.</p>
<ol>
  <li><strong>YOUR RIGHTS</strong></li>
</ol>
<p>You have certain rights regarding the collection and processing of Personal Information. To the extent these rights apply to and concern you, you can exercise them by contacting us via the contact details available under the section below &quot;HOW TO CONTACT US?&quot; and exercise the following rights:&nbsp;</p>
<ol>
  <li>Rights of access &ndash; You can obtain a copy of the Personal Information held by the Company at any time;</li>
  <li>Right of data portability &ndash; You have the right to receive your Personal Information, in a structured, commonly used and machine-readable format and to request that your Personal Information be transmitted to a third party of your choice;</li>
  <li>Right of rectification &ndash; In the event that the data held about you by the Company is inaccurate, incomplete or outdated, you have the possibility to request the rectification of said data (except in cases where the information is required to be kept in its original format under any applicable laws and regulations);</li>
  <li>Right of erasure &ndash; You have the possibility at any time to request that the Company erases data held about you by sending an email to the Company as outlined in this Policy. However, you are advised that with the deletion of your Personal Information, you might not be able to use the Service anymore or the account might be totally closed;</li>
  <li>Right to restriction of processing, objection to processing &ndash; At any time, you have the right to request that the Company restricts or ceases to conduct certain data processes provided that there exists no other lawful basis on which the Company is authorized to process said data;</li>
  <li>Right to withdraw your consent &ndash; You have the right to withdraw your given consent at any time. The withdrawal of consent will not affect the lawfulness of processing;</li>
  <li>Right to lodge a complaint &ndash; All requests, complaints or queries should be addressed to the Company with the subject &lsquo;Privacy&rsquo;. We will consider any requests, complaints or queries and provide you with a reply in a timely manner. You can also file a complaint with the relevant data protection authority should you not be satisfied with the way in which we handle your Personal Information. We take our obligations seriously and we ask that any concerns be first brought to our attention, so that we can try to resolve this.</li>
</ol>
<p><br></p>
<p>Please note that these rights are not absolute, and can be subject to our own legitimate interests and regulatory requirements. You are welcome to contact us for any questions, requests or complaints through our contact details below.</p>
<p>We will make an effort to reply within a reasonable timeframe. Please feel free to reach out to us at any time. If you are unsatisfied with our response, you can lodge a complaint with the competent supervisory authority.</p>
<p>Also, you should be aware that unless you have registered and created an account on our Website, we could not be able to respond to your request as we do not have sufficient information to identify you. We could also rectify, replenish or remove incomplete or inaccurate information, at any time and at our own discretion, in accordance with our internal policies. Similarly, we will ask you to provide us with additional information in order to adequately verify your identity upon your request.</p>
<ol>
  <li><strong>CHANGES TO THE PRIVACY POLICY</strong></li>
</ol>
<p>We reserve the right to change this Policy at any time, so please re-visit this page frequently. We will use reasonable efforts to notify you in the event substantial changes are made to this Policy, as required by law. Any modifications, updates, alteration will be effective upon our publishing of this Privacy on our Websites and as of the stated &ldquo;Last Revised&rdquo; date, and your continued use of the Service after the Last Revised date will constitute acceptance of, and agreement to be bound by those changes.</p>
<ol>
  <li><strong>LANGUAGE VERSION</strong></li>
</ol>
<p>The Policy has been drafted in the English language, which is the original and controlling version of this Policy. All translations of this Policy into other languages shall be solely for convenience and shall not control the meaning or application of this Policy. In the event of any discrepancy between the meanings of any translated versions of the Policy and the English language version, the meaning of the English language version shall prevail.</p>
<p>&nbsp;<strong>HOW TO CONTACT US</strong></p>
<p>If you have any general questions about the Service or the information that we collect about you and how we process it, please contact us via email:</p>
<ul>
  <li>Pythia Grant Ltd. &nbsp;</li>
  <li>Attn: Cybersays.club Data Protection Officer</li>
  <li><a href="mailto:DPO@Cybersays.club">DPO@Cybersays.club</a>&nbsp;</li>
</ul>
<p>We will make an effort to reply within a reasonable timeframe. Please feel free to reach out to us at any time. If you are unsatisfied with our response, you can reach out to the applicable data protection supervisory authority.&nbsp;</p>
<p><br></p>`
let es_text = `<p style="text-align:center;font-size:16pt!important;"><strong>Cybersays.club - Pol&iacute;tica de privacidad</strong></p>
<p>&Uacute;ltima revisi&oacute;n: Febrero 2024</p>
<p><strong>INTRODUCCI&Oacute;N</strong></p>
<p>Pythia Grant Ltd. incluyendo sus filiales (colectivamente, la <strong>&quot;Empresa&quot;,&nbsp;</strong>&quot;<strong>nosotros</strong>&quot;, &quot;<strong>nuestro</strong>&quot; o &quot;<strong>nos&quot;</strong>) est&aacute;n profundamente comprometidos a salvaguardar las expectativas de privacidad de sus usuarios (&quot;<strong>Usuario(s)</strong>&quot;, &quot;<strong>usted</strong>&quot; o &quot;<strong>su</strong>&quot;).&nbsp;</p>
<p>En consecuencia, hemos puesto en marcha esta pol&iacute;tica de privacidad (&quot;<strong>Pol&iacute;tica</strong>&quot;), que describe nuestras pr&aacute;cticas de protecci&oacute;n de datos, incluyendo c&oacute;mo recopilamos, utilizamos, revelamos y protegemos su informaci&oacute;n personal, as&iacute; como sus derechos con respecto a su informaci&oacute;n personal.</p>
<p>Le rogamos que lea atentamente esta Pol&iacute;tica y la utilice para tomar decisiones con conocimiento de causa, ya que su acceso y uso de nuestro servicio, ya sea visitando nuestro sitio web, <a href="http://www.Cybersays.club">www.Cybersays.club</a> (&quot;<strong>Sitio web</strong>&quot;) o creando una cuenta a trav&eacute;s de nuestro servicio (colectivamente &quot;<strong>Servicio</strong>&quot;), significa que ha le&iacute;do y comprendido todos los t&eacute;rminos aqu&iacute; detallados y por la presente acepta esta Pol&iacute;tica y la recopilaci&oacute;n, uso, conservaci&oacute;n y divulgaci&oacute;n de su informaci&oacute;n personal de acuerdo con estos t&eacute;rminos.&nbsp;</p>
<p><strong>Si no est&aacute; de acuerdo con los t&eacute;rminos de esta Pol&iacute;tica, le rogamos que no utilice nuestros Servicios</strong>. Usted no est&aacute; legalmente obligado a proporcionarnos ninguna informaci&oacute;n personal, pero sin ella, no podremos ofrecerle toda la gama o la mejor experiencia de uso de nuestros Servicios.</p>
<p>La informaci&oacute;n personal se define como cualquier informaci&oacute;n que identifique a un individuo o que pudiera razonablemente identificar a un individuo con un esfuerzo razonable, incluyendo sin limitaci&oacute;n (1) el nombre de usuario, (2) los datos de identificaci&oacute;n de su navegador y (3) los datos de identificaci&oacute;n de sus redes sociales (es decir, sus datos de usuario de Facebook) en lo sucesivo denominados la &quot;<strong>Informaci&oacute;n Personal</strong>&quot;. Las actividades de tratamiento incluyen, entre otras, la recopilaci&oacute;n, el uso, la conservaci&oacute;n y la divulgaci&oacute;n de dichos datos.</p>
<p>Sus Datos Personales ser&aacute;n procesados por nosotros (incluyendo cualquiera de nuestros agentes y/o empleados), y (en su caso) cualquier otra Empresa de nuestro grupo Empresarial y/o nuestros socios y subcontratistas, de acuerdo con esta Pol&iacute;tica.&nbsp;</p>
<p>Si tiene alguna pregunta sobre esta Pol&iacute;tica o sobre la forma en que utilizamos sus Datos Personales, consulte nuestro &iacute;ndice y la secci&oacute;n 12. &quot;&iquest;C&Oacute;MO CONTACTAR CON NOSOTROS? &quot;&iquest;C&Oacute;MO CONTACTAR CON NOSOTROS?&quot; a continuaci&oacute;n. La Empresa es el controlador de la Informaci&oacute;n Personal recopilada, y es responsable del procesamiento de su Informaci&oacute;n Personal.</p>
<p>En esta Pol&iacute;tica, usted puede conocer m&aacute;s sobre:</p>
<ol>
    <li><strong>&iquest;QU&Eacute; INFORMACI&Oacute;N RECOPILAMOS?</strong></li>
    <li><strong>MENORES DE EDAD</strong></li>
    <li><strong>FINES Y CONDICIONES DEL TRATAMIENTO DE LA INFORMACI&Oacute;N PERSONAL</strong></li>
    <li><strong>MARKETING</strong></li>
    <li><strong>&iquest;CON QUI&Eacute;N COMPARTIMOS LA INFORMACI&Oacute;N?</strong></li>
    <li><strong>TRANSFERENCIA INTERNACIONAL DE INFORMACI&Oacute;N</strong></li>
    <li><strong>TECNOLOG&Iacute;AS DE SEGUIMIENTO DE TERCEROS</strong></li>
    <li><strong>CONSERVACI&Oacute;N DE LA INFORMACI&Oacute;N PERSONAL</strong></li>
    <li><strong>SUS DERECHOS</strong></li>
    <li><strong>CAMBIOS EN LA POL&Iacute;TICA DE PRIVACIDAD</strong></li>
    <li><strong>VERSI&Oacute;N LING&Uuml;&Iacute;STICA</strong></li>
    <li><strong>&iquest;C&Oacute;MO CONTACTARNOS?</strong></li>
</ol>
<p><br></p>
<ol>
    <li><strong>&iquest;QU&Eacute; INFORMACI&Oacute;N RECOPILAMOS?</strong></li>
</ol>
<p>Recogemos Informaci&oacute;n Personal de nuestros Usuarios y visitantes de nuestro Servicio, que consiste en lo siguiente:</p>
<ul>
    <li><strong>Registro e inicio de sesi&oacute;n:&nbsp;</strong>Cuando abra una cuenta y se registre para utilizar nuestro Servicio, se le pedir&aacute; que nos facilite ciertos datos sobre usted, como: su direcci&oacute;n de correo electr&oacute;nico, sus datos de usuario de Facebook y su contrase&ntilde;a. Tenga en cuenta que cuando desee actualizar el perfil de su cuenta, tambi&eacute;n recopilaremos sus datos personales.</li>
    <li><strong>Informaci&oacute;n voluntaria</strong>: Tambi&eacute;n recopilamos informaci&oacute;n que usted nos proporciona voluntariamente para personalizar su cuenta o para una funci&oacute;n espec&iacute;fica. Adem&aacute;s, recopilamos su comunicaci&oacute;n cuando responde a comunicaciones nuestras, nos proporciona comentarios, se comunica con nosotros por correo electr&oacute;nico o comparte informaci&oacute;n adicional sobre usted a trav&eacute;s de su uso del Servicio.&nbsp;</li>
    <li><strong>Informaci&oacute;n sobre el dispositivo</strong>: Recopilamos tipos espec&iacute;ficos de detalles de conexi&oacute;n e informaci&oacute;n con respecto a su dispositivo, software o hardware que podr&iacute;an identificarle, como: identificadores &uacute;nicos del dispositivo (por ejemplo, UDID, IMEI, direcci&oacute;n MAC), huella digital del navegador, direcci&oacute;n IP, direcci&oacute;n de blockchain, tipo de monedero y datos de geolocalizaci&oacute;n.</li>
    <li><strong>Informaci&oacute;n que recopilamos de terceros</strong>: A veces recopilamos Informaci&oacute;n Personal de terceros proveedores de servicios, como la informaci&oacute;n que se recoge para verificar su identidad y evitar actividades fraudulentas o ilegales.</li>
    <li><strong>Historial de inicio de sesi&oacute;n e informaci&oacute;n t&eacute;cnica</strong>: Para mejorar la funcionalidad del Servicio y ofrecerle una mejor experiencia de usuario<strong>,&nbsp;</strong>recopilamos la informaci&oacute;n t&eacute;cnica transmitida por su dispositivo, incluida determinada informaci&oacute;n de software y hardware (por ejemplo, el tipo de navegador y sistema operativo que utiliza su dispositivo, el idioma preferido, la hora de acceso y el nombre de dominio del sitio web desde el que ha accedido al Servicio, etc.).</li>
    <li><strong>Informaci&oacute;n anal&iacute;tica</strong>: Recopilamos informaci&oacute;n sobre su uso del Servicio, como el uso de las aplicaciones, archivos de registro, actividad del usuario (por ejemplo, p&aacute;ginas visitadas, movimientos del usuario, tiempo empleado, navegaci&oacute;n en l&iacute;nea, clics, acciones, etc.), marcas de tiempo, alertas, etc. Esta informaci&oacute;n se recopila, entre otras cosas, para solucionar errores y fallos, as&iacute; como para fines de investigaci&oacute;n y an&aacute;lisis sobre el uso que usted hace del Servicio.</li>
</ul>
<ol>
    <li><strong>MENORES DE EDAD</strong></li>
</ol>
<p>El Servicio no est&aacute; dise&ntilde;ado ni dirigido a personas menores de 18 a&ntilde;os o a personas menores de la edad de consentimiento legal con respecto al uso del Servicio de cualquier jurisdicci&oacute;n, la que sea superior (&quot;Mayor&iacute;a de edad <strong>legal</strong>&quot;).&nbsp;</p>
<p>No recopilamos informaci&oacute;n personal de menores.&nbsp;</p>
<p><strong>Si usted no es legalmente mayor de edad, se le proh&iacute;be acceder o utilizar el Servicio y se le proh&iacute;be proporcionarnos cualquier Informaci&oacute;n Personal.</strong></p>
<p>Nos reservamos el derecho de acceder y verificar cualquier Informaci&oacute;n Personal recopilada de usted. En el evento de que tengamos sensibilizaci&oacute;n de que un usuario que no es Legalmente Mayor de Edad ha compartido cualquier informaci&oacute;n, descartaremos dicha informaci&oacute;n.&nbsp;</p>
<ol>
    <li><strong>FINES Y CONDICIONES DEL TRATAMIENTO DE LA INFORMACI&Oacute;N PERSONAL&nbsp;</strong></li>
</ol>
<p>En esta secci&oacute;n se describen las finalidades subyacentes y los fundamentos jur&iacute;dicos del tratamiento de sus Datos Personales:</p>
<table cellspacing="0" cellpadding="0">
    <tbody>
        <tr>
            <td valign="top">
                <p><strong>Prop&oacute;sito</strong></p>
            </td>
            <td valign="top">
                <p><strong>Base jur&iacute;dica</strong></p>
            </td>
        </tr>
        <tr>
            <td valign="top">
                <p><strong>Prestaci&oacute;n de nuestro Servicio; apoyo y relaciones con los clientes</strong>. Utilizamos sus Datos Personales, como su nombre de usuario y su direcci&oacute;n de correo electr&oacute;nico, con fines de atenci&oacute;n al cliente, as&iacute; como para presentarle nuestros Sitios Web. Esto incluye, por ejemplo, la gesti&oacute;n y actualizaci&oacute;n de su cuenta, la prestaci&oacute;n y funcionamiento del Servicio, mantenerle informado sobre nuestras &uacute;ltimas actualizaciones o responder a cualquiera de sus consultas, as&iacute; como a su solicitud para ejercer sus derechos de Usuario.</p>
            </td>
            <td valign="top">
                <p>Las bases legales para procesar estos datos son el cumplimiento de nuestras obligaciones contractuales con usted, por ejemplo, como se describe en esta Pol&iacute;tica y/o Condiciones de Uso (Art. 6.1(b) GDPR); su consentimiento (por ejemplo, cuando usted acepta proporcionar Informaci&oacute;n Personal al aceptar nuestro Aviso de Cookies, Pol&iacute;tica y Condiciones de Uso) (Art. 6.1(a) GDPR); el cumplimiento de nuestras obligaciones legales (Art. 6.1(c) GDPR); y nuestros intereses leg&iacute;timos (Art. 6.1(f) GDPR). Nuestros intereses leg&iacute;timos en este caso son el cumplimiento de nuestras pol&iacute;ticas, la protecci&oacute;n contra el fraude y el uso indebido de nuestro Servicio.</p>
            </td>
        </tr>
        <tr>
            <td valign="top">
                <p><strong>Mejora de nuestro Servicio</strong>. Recopilamos y analizamos informaci&oacute;n sobre usted y su uso de nuestro Servicio para mejorar la facilidad de uso y la eficacia de nuestro Servicio, incluida la depuraci&oacute;n para identificar y reparar errores o la realizaci&oacute;n de investigaciones internas para el desarrollo tecnol&oacute;gico y la demostraci&oacute;n.</p>
            </td>
            <td valign="top">
                <p>La base legal para procesar estos datos son nuestros intereses leg&iacute;timos (Art. 6.1(f) GDPR), en este caso - proporcionar y mejorar nuestro Servicio.</p>
            </td>
        </tr>
        <tr>
            <td valign="top">
                <p><strong>Marketing, publicidad y an&aacute;lisis</strong>. Utilizamos sus Datos Personales para ofrecerle publicidad personalizada, incluida la publicidad basada en el comportamiento cuando visita nuestro Servicio, para comercializar nuestro Servicio y para recopilar informaci&oacute;n de uso agregada con fines anal&iacute;ticos, estad&iacute;sticos y de investigaci&oacute;n, incluida la notificaci&oacute;n de ofertas promocionales.</p>
            </td>
            <td valign="top">
                <p>Las bases legales para procesar estos datos son su consentimiento (cuando sea necesario) y nuestros intereses leg&iacute;timos (Art. 6.1(a), 6.1(f) GDPR).&nbsp;</p>
                <p>Nuestros intereses leg&iacute;timos en este caso son proporcionarle servicios, contenidos y anuncios personalizados que se ajusten mejor a sus intereses, as&iacute; como promocionar nuestro Servicio.&nbsp;</p>
            </td>
        </tr>
        <tr>
            <td valign="top">
                <p><strong>Integridad.&nbsp;</strong>Procesamos cierta informaci&oacute;n sobre usted y su uso de los Servicios para mantener la integridad y seguridad de los mismos.</p>
            </td>
            <td valign="top">
                <p>Las bases jur&iacute;dicas para el tratamiento de estos datos son el cumplimiento de nuestras obligaciones legales (Art. 6.1(c) GDPR) y nuestros intereses leg&iacute;timos (Art. 6.1(f) GDPR). Nuestros intereses leg&iacute;timos en este caso son mantener la integridad de nuestros Servicios y la seguridad de nuestros usuarios finales.</p>
            </td>
        </tr>
        <tr>
            <td valign="top">
                <p><strong>Resoluci&oacute;n de disputas y protecci&oacute;n de nuestras reclamaciones legales</strong>. Recopilamos su Informaci&oacute;n Personal con el fin de investigar la violaci&oacute;n de nuestras pol&iacute;ticas, permitirnos resolver disputas en relaci&oacute;n con su uso del Servicio y establecer y defender nuestras reclamaciones legales.</p>
            </td>
            <td valign="top">
                <p>La base jur&iacute;dica para el tratamiento de estos datos son nuestros intereses leg&iacute;timos (Art. 6.1(f) GDPR). Nuestros intereses leg&iacute;timos en este caso son establecer y defender nuestras reclamaciones legales.</p>
            </td>
        </tr>
        <tr>
            <td valign="top">
                <p><strong>Transacciones corporativas</strong>. Compartiremos su informaci&oacute;n personal con posibles compradores, sucesores o inversores de la Empresa o en el evento de una transacci&oacute;n corporativa (por ejemplo, venta de una parte sustancial de nuestro negocio, fusi&oacute;n, reorganizaci&oacute;n, quiebra, consolidaci&oacute;n o venta de un activo o transferencia en la operaci&oacute;n del mismo) en relaci&oacute;n con la Empresa.</p>
            </td>
            <td valign="top">
                <p>La base jur&iacute;dica para el tratamiento de estos datos son nuestros intereses leg&iacute;timos (Art. 6.1(f) GDPR).&nbsp;</p>
            </td>
        </tr>
        <tr>
            <td valign="top">
                <p><strong>Prevenci&oacute;n del fraude o de la violaci&oacute;n de nuestras pol&iacute;ticas</strong>. Procesamos su Informaci&oacute;n Personal para detectar y prevenir actividades fraudulentas e ilegales o cualquier otro tipo de actividad que ponga en peligro o afecte negativamente a la integridad del Servicio, incluyendo la identificaci&oacute;n de riesgos asociados a su actividad en nuestro Servicio. Tambi&eacute;n investigaremos cualquier violaci&oacute;n de nuestras pol&iacute;ticas y las haremos cumplir.</p>
            </td>
            <td valign="top">
                <p>La base legal para procesar estos datos son nuestros intereses leg&iacute;timos (Art. 6.1(f) GDPR). Nuestros intereses leg&iacute;timos en este caso son proteger a nuestra Empresa y a otros usuarios contra el fraude.</p>
            </td>
        </tr>
        <tr>
            <td valign="top">
                <p><strong>Cumplimiento de las leyes aplicables</strong>. Procesamos sus Datos Personales para cumplir con nuestras diversas obligaciones legales, como la legislaci&oacute;n sobre contenidos para adultos (cuando proceda), la lucha contra el blanqueo de dinero, la verificaci&oacute;n de la identidad (por ejemplo, en caso de sospecha de que un menor utilice nuestro Servicio), la prevenci&oacute;n del fraude, el cumplimiento de los derechos de los interesados, etc.</p>
            </td>
            <td valign="top">
                <p>La base legal para procesar estos datos es cumplir con nuestras diversas obligaciones legales (Art. 6.1(c) GDPR) y nuestros intereses leg&iacute;timos (Art. 6.1(f) GDPR).&nbsp;</p>
            </td>
        </tr>
    </tbody>
</table>
<p>Cuando usted no haya consentido (o haya retirado su consentimiento) al tratamiento de sus Datos Personales por nuestra parte, seguiremos tratando sus Datos Personales : (a) cuando el tratamiento sea necesario para la ejecuci&oacute;n del contrato (es decir, las Condiciones de Uso) entre usted y nosotros; y/o (b) cuando el tratamiento sea necesario para el cumplimiento de una obligaci&oacute;n legal a la que estemos sujetos; (c) cuando el tratamiento sea necesario a efectos de un inter&eacute;s leg&iacute;timo de la Empresa y sus filiales (incluido el marketing).</p>
<ol>
    <li><strong>MARKETING</strong></li>
</ol>
<p>Utilizaremos sus Datos Personales, como su direcci&oacute;n de correo electr&oacute;nico, recopilados por nosotros mismos o a trav&eacute;s de nuestros subcontratistas de confianza, con el fin de proporcionarle material promocional a trav&eacute;s de diferentes t&eacute;cnicas de marketing, como el correo electr&oacute;nico directo, el marketing telef&oacute;nico, los SMS relativos al Servicio, as&iacute; como a productos, servicios, sitios web y aplicaciones relacionados con los socios comerciales de la Empresa y sus afiliados (colectivamente: &quot;<strong>Afiliados de marketing</strong>&quot;), que consideremos que puedan interesarle.</p>
<p>Tambi&eacute;n compartimos y divulgamos Informaci&oacute;n Personal con nuestros Afiliados de Marketing con el prop&oacute;sito de proporcionarle diferentes ofertas de marketing, que nosotros, o nuestros Afiliados de Marketing, creemos que son relevantes para usted.&nbsp;</p>
<p>Utilizaremos sus Datos Personales con el fin de proporcionarle material promocional &uacute;nicamente cuando tengamos un inter&eacute;s leg&iacute;timo en hacerlo, o cuando hayamos obtenido su consentimiento afirmativo.</p>
<p>Tiene la posibilidad de rechazar en cualquier momento la recepci&oacute;n de nuevas ofertas de marketing por nuestra parte o por parte de nuestros socios comerciales y afiliados de marketing: siguiendo los enlaces insertados en los correos electr&oacute;nicos promocionales (por ejemplo, seleccionando el enlace de exclusi&oacute;n voluntaria) o poni&eacute;ndose en contacto con nuestro servicio de atenci&oacute;n al cliente.&nbsp;</p>
<p>Tenga en cuenta que aunque cancele su suscripci&oacute;n a nuestra lista de correo de marketing, seguiremos envi&aacute;ndole actualizaciones y notificaciones relacionadas con el servicio.</p>
<ol>
    <li><strong>&iquest;CON QUI&Eacute;N COMPARTIMOS LA INFORMACI&Oacute;N?</strong></li>
</ol>
<p>No alquilamos, vendemos ni compartimos su Informaci&oacute;n Personal con terceros (&quot;<strong>Destinatarios</strong>&quot;) excepto en los casos descritos en esta Pol&iacute;tica.&nbsp;&nbsp;La Informaci&oacute;n Personal se revelar&aacute; a los Destinatarios s&oacute;lo en la medida necesaria para el fin espec&iacute;fico, tal y como se estipula en esta Pol&iacute;tica.</p>
<p>Divulgamos Informaci&oacute;n Personal con cualquiera de los siguientes destinatarios:</p>
<ul>
    <li>Empresas de la Sociedad y otras Empresas afiliadas;</li>
    <li>Subcontratistas y terceros proveedores de servicios, as&iacute; como sus subcontratistas, que a modo de ejemplo incluyen (pero no se limitan a) Empresas de computaci&oacute;n en nube, filiales de marketing, servicios de verificaci&oacute;n de identidad y prevenci&oacute;n del fraude y otros verificadores de datos;</li>
    <li>Proveedores de servicios de pago, procesadores de pagos&nbsp;</li>
    <li>A cualquier tercero que preste servicios en relaci&oacute;n con el funcionamiento o la promoci&oacute;n del Servicio;</li>
    <li>Auditores, contratistas o asesores de cualquiera de los procesos Empresariales de la Empresa;</li>
    <li>A terceros que investiguen, detecten o prevengan actividades fraudulentas o ilegales (por ejemplo, autoridades gubernamentales, polic&iacute;a, bancos y otras organizaciones de investigaci&oacute;n);</li>
    <li>Organismos gubernamentales y reguladores, de conformidad con las leyes y reglamentos aplicables;</li>
    <li>Agencias o autoridades encargadas de hacer cumplir la ley, como respuesta a su solicitud; y</li>
    <li>Compradores potenciales o inversores en cualquiera de las Empresas del grupo de la Empresa (si procede), o en el caso de una transacci&oacute;n corporativa (por ejemplo, la venta de una parte sustancial de nuestro negocio, fusi&oacute;n, reorganizaci&oacute;n, quiebra, consolidaci&oacute;n o venta de un activo o transferencia en la operaci&oacute;n del mismo) en relaci&oacute;n con cualquier Empresa de la Empresa (en tal evento, la Empresa adquirente o cesionaria asumir&aacute; los derechos y obligaciones descritos en esta Pol&iacute;tica).</li>
    <li>Investigaci&oacute;n, diagn&oacute;sticos t&eacute;cnicos y proveedores de an&aacute;lisis;&nbsp;</li>
    <li>Socios de marketing y publicidad, de acuerdo con nuestra pol&iacute;tica de marketing (v&eacute;ase m&aacute;s arriba, en el apartado &quot;<strong>Marketing</strong>&quot;); y</li>
    <li>Siempre que creamos de buena fe que la divulgaci&oacute;n es necesaria para proteger nuestros derechos o reclamaciones legales, hacer cumplir nuestras pol&iacute;ticas (incluidas nuestras Condiciones de uso y Pol&iacute;tica), proteger su seguridad o la de otros, as&iacute; como para investigar o prevenir cualquier fraude, por motivos de seguridad o para ayudarnos con cualquier otro problema t&eacute;cnico relacionado.</li>
</ul>
<ol>
    <li><strong>TRANSFERENCIA INTERNACIONAL DE INFORMACI&Oacute;N</strong></li>
</ol>
<p>Dado que operamos a nivel mundial, es necesario para la prestaci&oacute;n del Servicio y en la medida requerida para el prop&oacute;sito espec&iacute;fico, seg&uacute;n lo estipulado en esta Pol&iacute;tica transferir su Informaci&oacute;n Personal a pa&iacute;ses fuera del Espacio Econ&oacute;mico Europeo (&quot;<strong>EEE</strong>&quot;). Las leyes de protecci&oacute;n de datos y otras leyes de estos pa&iacute;ses no son tan exhaustivas como las del EEE.&nbsp;</p>
<p>En estas circunstancias, hacemos todo lo posible para garantizar que sus Datos Personales est&eacute;n protegidos de acuerdo con nuestra Pol&iacute;tica, a trav&eacute;s de medios contractuales (como el uso de las cl&aacute;usulas contractuales est&aacute;ndar aprobadas por la Comisi&oacute;n Europea pertinente para la transferencia de datos, disponibles <a href="https://ec.europa.eu/info/law/law-topic/data-protection/international-dimension-data-protection/adequacy-decisions_en">aqu&iacute;</a>) u otros medios (como garantizar que las decisiones de la Comisi&oacute;n Europea determinen que dichas jurisdicciones ofrecen un nivel de protecci&oacute;n adecuado, disponible <a href="https://ec.europa.eu/info/law/law-topic/data-protection/international-dimension-data-protection/adequacy-decisions_en">aqu&iacute;</a>).</p>
<ol>
    <li><strong>TECNOLOG&Iacute;AS DE SEGUIMIENTO DE TERCEROS</strong></li>
</ol>
<p>Utilizamos tecnolog&iacute;a publicitaria de terceros en nuestros sitios web para publicar anuncios cuando usted visita o utiliza nuestro Servicio. Utilizamos y autorizamos a terceros a utilizar balizas web, cookies, p&iacute;xeles, scripts, etiquetas y otras tecnolog&iacute;as (&quot;<strong>Tecnolog&iacute;as de seguimiento</strong>&quot;).&nbsp;</p>
<p>Las tecnolog&iacute;as de seguimiento recopilan autom&aacute;ticamente informaci&oacute;n sobre usted, su comportamiento en l&iacute;nea en los sitios web y su dispositivo (por ejemplo, su ordenador o dispositivo m&oacute;vil), con diferentes fines, entre ellos mejorar y personalizar su navegaci&oacute;n en nuestro Servicio y mejorar el rendimiento de nuestro Servicio. Los terceros utilizan esta informaci&oacute;n para ofrecerle contenidos espec&iacute;ficos.</p>
<p>Puede configurar su navegador para que rechace todas las cookies de terceros, o para que le avise cuando se env&iacute;en cookies, tambi&eacute;n puede darse de baja de muchas redes publicitarias de terceros, incluidas las operadas por miembros de la Network Advertising Initiative (&quot;<strong>NAI</strong>&quot;) y la Digital Advertising Alliance (&quot;<strong>DAA</strong>&quot;).</p>
<p>Tambi&eacute;n permitimos que terceros recopilen informaci&oacute;n sobre usted a trav&eacute;s de tecnolog&iacute;as de seguimiento. Para obtener m&aacute;s informaci&oacute;n, visite nuestro Aviso sobre cookies.&nbsp;</p>
<ol>
    <li><strong>CONSERVACI&Oacute;N DE LA INFORMACI&Oacute;N PERSONAL</strong></li>
</ol>
<p>Si se ha registrado con una cuenta a trav&eacute;s de nuestro Servicio, la Empresa conservar&aacute; su Informaci&oacute;n personal durante el periodo en que su cuenta est&eacute; activa. Adem&aacute;s, la Empresa conservar&aacute; su Informaci&oacute;n Personal durante per&iacute;odos adicionales, para permitir a la Empresa cumplir con sus obligaciones legales en virtud de las leyes o reglamentos aplicables.</p>
<p>Adem&aacute;s, la Empresa conservar&aacute; su informaci&oacute;n personal durante periodos m&aacute;s largos, siempre que la conservaci&oacute;n de dicha informaci&oacute;n s&oacute;lo sea necesaria para los intereses leg&iacute;timos de la Empresa, como la prevenci&oacute;n del fraude y el mantenimiento de registros, la resoluci&oacute;n o la excisi&oacute;n de reclamaciones relativas a posibles litigios.</p>
<ol>
    <li><strong>SUS DERECHOS</strong></li>
</ol>
<p>Usted tiene ciertos derechos en relaci&oacute;n con la recopilaci&oacute;n y el tratamiento de sus datos personales. En la medida en que estos derechos le sean aplicables y le conciernan, puede ejercerlos poni&eacute;ndose en contacto con nosotros a trav&eacute;s de los datos de contacto disponibles en la secci&oacute;n &quot;&iquest;C&Oacute;MO CONTACTARNOS?&quot; y ejercer los siguientes derechos:&nbsp;</p>
<ol>
    <li>Derechos de acceso - Usted puede obtener en cualquier momento una copia de los Datos Personales que obran en poder de la Empresa;</li>
    <li>Derecho a la portabilidad de los datos - Usted tiene derecho a recibir sus Datos Personales, en un formato estructurado, de uso com&uacute;n y lectura mec&aacute;nica y a solicitar que sus Datos Personales sean transmitidos a un tercero de su elecci&oacute;n;</li>
    <li>Derecho de rectificaci&oacute;n - En el evento de que los datos que la Empresa posea sobre usted sean inexactos, incompletos o no est&eacute;n actualizados, usted tiene la posibilidad de solicitar la rectificaci&oacute;n de dichos datos (excepto en los casos en que se requiera mantener la informaci&oacute;n en su formato original en virtud de las leyes y reglamentos aplicables);</li>
    <li>Derecho de supresi&oacute;n - Tiene la posibilidad de solicitar en cualquier momento que la Empresa borre los datos que tiene sobre usted enviando un correo electr&oacute;nico a la Empresa tal y como se indica en esta Pol&iacute;tica. No obstante, se le advierte de que, con la eliminaci&oacute;n de sus Datos Personales, es posible que ya no pueda utilizar el Servicio o que se cierre totalmente la cuenta;</li>
    <li>Derecho a la limitaci&oacute;n del tratamiento, oposici&oacute;n al tratamiento - En cualquier momento, usted tiene derecho a solicitar que la Empresa restrinja o deje de realizar determinados tratamientos de datos siempre que no exista otro fundamento jur&iacute;dico que autorice a la Empresa a tratar dichos datos;</li>
    <li>Derecho a retirar su consentimiento - Usted tiene derecho a retirar el consentimiento dado en cualquier momento. La retirada del consentimiento no afectar&aacute; a la legalidad del tratamiento;</li>
    <li>Derecho a presentar una queja - Todas las solicitudes, quejas o consultas deben dirigirse a la Empresa con el asunto &quot;Privacidad&quot;. Estudiaremos todas las solicitudes, quejas o consultas y le proporcionaremos una respuesta a su debido tiempo. Tambi&eacute;n puede presentar una queja ante la autoridad de protecci&oacute;n de datos pertinente si no est&aacute; satisfecho con la forma en que tratamos su informaci&oacute;n personal. Nos tomamos muy en serio nuestras obligaciones y le rogamos que nos comunique primero cualquier preocupaci&oacute;n para que podamos intentar resolverla.</li>
</ol>
<p><br></p>
<p>Tenga en cuenta que estos derechos no son absolutos y pueden estar sujetos a nuestros propios intereses leg&iacute;timos y a los requisitos normativos. Le invitamos a ponerse en contacto con nosotros para cualquier pregunta, solicitud o queja a trav&eacute;s de nuestros datos de contacto que figuran a continuaci&oacute;n.</p>
<p>Nos esforzaremos por responderle en un plazo razonable. No dude en ponerse en contacto con nosotros en cualquier momento. Si no est&aacute; satisfecho con nuestra respuesta, puede presentar una reclamaci&oacute;n ante la autoridad de control competente.</p>
<p>Asimismo, debe tener en cuenta que, a menos que se haya registrado y haya creado una cuenta en nuestro Sitio Web, no podr&iacute;amos responder a su demanda, ya que no disponemos de informaci&oacute;n suficiente para identificarle. Tambi&eacute;n podr&iacute;amos rectificar, reponer o eliminar informaci&oacute;n incompleta o inexacta, en cualquier momento y a nuestra propia discreci&oacute;n, de acuerdo con nuestras pol&iacute;ticas internas. Del mismo modo, le pediremos que nos proporcione informaci&oacute;n adicional para verificar adecuadamente su identidad si as&iacute; lo solicita.</p>
<ol>
    <li><strong>CAMBIOS EN LA POL&Iacute;TICA DE PRIVACIDAD</strong></li>
</ol>
<p>Nos reservamos el derecho a modificar esta Pol&iacute;tica en cualquier momento, por lo que le rogamos que vuelva a visitar esta p&aacute;gina con frecuencia. Haremos todos los esfuerzos razonables para notificarle en caso de que se realicen cambios sustanciales en esta Pol&iacute;tica, tal y como exige la ley. Cualquier modificaci&oacute;n, actualizaci&oacute;n o alteraci&oacute;n entrar&aacute; en vigor en el momento en que publiquemos esta Pol&iacute;tica en nuestros Sitios Web y a partir de la fecha indicada como &quot;&Uacute;ltima revisi&oacute;n&quot;, y su uso continuado del Servicio despu&eacute;s de la fecha de la &Uacute;ltima revisi&oacute;n constituir&aacute; la aceptaci&oacute;n de dichos cambios y el Acuerdo de obligarse por ellos.</p>
<ol>
    <li><strong>VERSI&Oacute;N LING&Uuml;&Iacute;STICA</strong></li>
</ol>
<p>La Pol&iacute;tica ha sido redactada en lengua inglesa, que es la versi&oacute;n original y de control de esta Pol&iacute;tica. Todas las traducciones de esta Pol&iacute;tica a otros idiomas se har&aacute;n &uacute;nicamente por conveniencia y no controlar&aacute;n el significado o la aplicaci&oacute;n de esta Pol&iacute;tica. En caso de discrepancia entre los significados de las versiones traducidas de la Pol&iacute;tica y la versi&oacute;n en lengua inglesa, prevalecer&aacute; el significado de la versi&oacute;n en lengua inglesa.</p>
<p><strong>&nbsp;C&Oacute;MO PONERSE EN CONTACTO CON NOSOTROS</strong></p>
<p>Si tiene alguna pregunta general sobre el Servicio o la informaci&oacute;n que recopilamos sobre usted y c&oacute;mo la procesamos, p&oacute;ngase en contacto con nosotros por correo electr&oacute;nico:</p>
<ul>
    <li>Pythia Grant Ltd. &nbsp;</li>
    <li>Attn: Responsable de protecci&oacute;n de datos de Cybersays.club</li>
    <li><a href="mailto:DPO@Cybersays.club">DPO@Cybersays.club&nbsp;</a></li>
</ul>
<p>Nos esforzaremos por responderle en un plazo razonable. No dude en ponerse en contacto con nosotros en cualquier momento. Si no est&aacute; satisfecho con nuestra respuesta, puede dirigirse a la autoridad supervisora de protecci&oacute;n de datos aplicable.&nbsp;</p><p><br></p>`
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
</p><p><br></p>`

