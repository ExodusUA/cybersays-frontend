import React from 'react'
import HeaderProfile from '../Components/HeaderProfile'
import termsData from '../Pages/socialPageJSON/terms_en.json';
import LanguageSocial from '../Components/Language/LanguageSocial';
import { useLanguage } from '../Helpers/Languages/LanguageContext';

function Terms() {
    let {language} = useLanguage()
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

export default Terms
let en_text =  `<p style="text-align:center;font-size:16pt!important;"><strong>Cybersays.Club - Terms of Use</strong></p>
<p>&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;Last revised:&nbsp;February 2024</p>
<p >These Terms of Use (&ldquo;<strong>Terms</strong>&rdquo;) constitute a binding legal agreement between Pythia
    Grant Ltd. (&quot;<strong>Company</strong>&quot;, &quot;<strong>us</strong>&quot;, or
    &quot;<strong>we</strong>&quot;) and yourself (&quot;<strong>End User</strong>&quot;,
    &quot;<strong>you</strong>&quot; or &quot;<strong>your</strong>&quot;), and govern your access and use of all
    features and other services provided by the Company, including without limitation our website: <a
        href="http://www.Cybersays.club">www.Cybersays.club</a> &nbsp;&nbsp;(&ldquo;<strong>Website</strong>&rdquo;;
    collectively the &quot;<strong>Services</strong>&quot;).&nbsp;</p>
<p><br></p>
<p>By registering an account and accessing the Services, you affirmatively signify that you have read, understood,
    and agreed to be bound by these Terms as well as our&nbsp;<em>Privacy Policy</em>, which we may update from time
    to time, each incorporated herein by reference (&quot;<strong>Policies</strong>&quot;).&nbsp;</p>
<p>If you do not agree to these Policies, you must not register an account or otherwise use or access the
    Services.&nbsp;&nbsp;By using our Services, you accept unequivocally the terms and conditions of our Partners
    (as defined below), including but not limited to the terms and conditions specified on <a
        href="http://www.ImLive.com">www.ImLive.com</a> &nbsp;(&quot;<strong>Partner Terms</strong>&quot;).&nbsp;
</p>
<p>These Terms shall supplement all prior agreements you may have had with us or any of our Affiliates. Therefore,
    we encourage you to read carefully these Terms and any terms that may concern your use of the Services.</p>
<p>We may revise the Terms at any time by updating the Terms on our Services. You should periodically visit these
    Terms to review the current terms that apply to your use of the Services. Any use of the Services by you after
    our publication of any such changes shall constitute your acceptance of these Terms as modified. We may, at our
    sole discretion and at any time, discontinue providing the Services, or any part thereof without notice.&nbsp;
</p>
<p>YOU ACKNOWLEDGE THAT THE SERVICES ARE STRICTLY FOR ENTERTAINMENT PURPOSES ONLY.</p>
<p>&nbsp;</p>
<p>By registering an account or otherwise accessing the Services, to the maximum extent permitted under Applicable
    Law (as defined further below), you agree that any claim, dispute or controversy of whatever nature arising out
    of or relating to these Terms, or your use of the Services shall be resolved accordance with the process
    described in Section 13. &quot;Miscellaneous&quot; below.</p>
<ol>
    <li><strong>DEFINITIONS</strong></li>
</ol>
<p>For the purpose of this Agreement, the following capitalized terms shall have the meaning ascribed to them
    hereunder:</p>
<ol>
    <ol>
        <li>&quot;<strong>Account</strong>&quot; means an account you created via our Website that allows you to
            access the Services.</li>
        <li><strong>&quot;Account Information</strong>&quot; means any type of information that we may require from
            End User at the registration process, including but not limited to email address, username, his Facebook
            and Google ID details, and your&nbsp;Partner&rsquo;s Website<strong>&nbsp;</strong>account ID details.
        </li>
        <li><strong>&quot;Affiliate&quot;&nbsp;</strong>means Company&apos;s subsidiaries, joint ventures and other
            corporate entities and their agents, consultant, employees, officers and directors.</li>
        <li><strong>&quot;Applicable Law&quot;</strong> means any law, statute, rule, regulation, order, circular,
            decree, directive, judgment, decision, or other similar mandate of any applicable central, national,
            state or local governmental authority having competent jurisdiction over, or application, related to the
            End-User, or subject matter in question.</li>
        <li><strong>&quot;Intellectual Property Rights&quot;</strong> means any patents, trademarks, copyrights,
            design rights (whether registrable or not), logos, copyright, trade, business and domain names, moral
            rights, know-how, trade secrets, rights in databases, rights in computer software and any other similar
            rights or obligations whether registrable or not (and including all applications and renewals or
            extensions of such rights) in any country.</li>
        <li><strong>&quot;Offers&quot;&nbsp;</strong>means any special online deals and its rules, as presented
            onsite, and may change from time to time, by the Partners or the Company on the Services in which End
            User can participate in. &nbsp;</li>
    </ol>
</ol>
<p>The Offer shall include the possibility of doubling the initial amount purchased by the End User, with respect to
    their initial purchase only. i.e. for the initial 5 credits purchased, the User shall recive 10 credits for use
    at ImLive.com.&nbsp;</p>
<p>In addition, the User shall be eligible to recive a real cash back amount.&nbsp;Due to the currencies difference
    &ndash; the values of the cask back amount, at the Offer, shall be as follows:</p>
<ul>
    <li>For the initial five (5) Credits to be purchased in $USD or in EURO &ndash; the User shall receive ten US
        dollars ($10 USD), upon spending the entire 10 credits.&nbsp;</li>
    <li>For the first and initial five (5) Credits - to be purchased in GBP &ndash; the User shall receive twelve US
        dollars and fifty cents ($12.5USD), upon spending the entire 10 credits.&nbsp;</li>
</ul>
<ol>
    <ol>
        <li><strong>&quot;Partner(s)&quot;&nbsp;</strong>means any third-party service provider that provide Offers
            to the End User on or through the Services.</li>
        <li><strong>&quot;Prize</strong>&quot; means any benefits or advantages End Users may receive by completing
            the Offers successfully subject to the Terms, Partner&apos;s Terms.&nbsp;</li>
        <li><strong>&quot;Provider&quot;&nbsp;</strong>as defined in Section 6.</li>
        <li><strong>&quot;Website(s)</strong>&quot; means the site, <a
                href="http://www.Cybersays.club">www.Cybersays.club</a>, and any other sites as defined by the
            Company, at its sole discretion, from time to time.&nbsp;</li>
    </ol>
</ol>
<p><br></p>
<ol>
    <li><strong>Use of our Services and Offers</strong></li>
</ol>
<p>To access or participate in the Offers that are made available on our Website, you must create an Account with
    us.&nbsp;</p>
<p>Please note that the Services may not be fully compatible with all platforms, devices, and operating systems,
    therefore we encourage you to verify all the compatibility requirements yourself and update where it is needed
    third party software from time to time in order to receive the Services, updates, and to participate in the
    Offers available on our Website.&nbsp;</p>
<p>When you create an Account, you may be asked to provide Account Information, which may involve:&nbsp;</p>
<ol>
    <li>Registering a unique username and password (if applicable) ;&nbsp;</li>
    <li>Providing contact information, such as your email address;&nbsp;</li>
    <li>Providing any other information that we request during the account registration process.&nbsp;</li>
</ol>
<p><br></p>
<p>By accessing or using our Services or participating in our Offers, you agree to abide by all the following:&nbsp;
</p>
<ol style="list-style-type: disc;margin-left:20px;>
    <li style="list-style-type: disc;>You have reached the age of majority both in the territory in which you reside;</li>
    <li style="list-style-type: disc;>You are solely responsible for keeping your Account Information secure and for anything that occurs on your
        Account, whether or not the actions were taken by you or an unauthorized third party that has gained access
        to your Account;</li>
    <li style="list-style-type: disc;>You shall only register for a single Account and you shall not use or access multiple Accounts at the same
        time;</li>
    <li >You shall not create an Account with a false identity or provide incorrect information, or create an Account
        on behalf of someone other than yourself;&nbsp;</li>
    <li>You shall not share or give access to your Account Information to anyone, or do anything else that might
        jeopardize your Account&apos;s security;&nbsp;</li>
    <li>You shall notify us immediately, as detailed in Section 16 &quot;Contact Us&quot; of these Terms, if you
        have lost control of your password or you suspect there is an unauthorized activity in your Account,
        including theft or unauthorized disclosure of your Account Information;</li>
    <li >You will not hold us responsible or liable, for any loss, damage, unauthorized access, or any breach of your
        Account and the disclosure of your Account Information.</li>
</ol>
<p>As the holder of your Account, you are solely responsible for complying with these Terms and Partner Terms and
    only you are entitled to all benefits accruing thereto.&nbsp;</p>
<p><br></p>
<ol>
    <li><strong>Account Verification</strong></li>
</ol>
<p>We reserve the right to verify your registration details, such as name, address, age, at any time, by requesting
    certain documents. In the event that you do not provide the required documentation, we may at our sole
    discretion refuse to provide you with the Services and withhold any Prizes.</p>
<p>You agree to update any information or data you provided or to provide additional documentation as part of
    ongoing efforts to prevent illegal and fraudulent activities, or to comply with any other policies or protocols
    we elect to put in place. You agree that all information and data that you provide to us, either at the time you
    register for an account or at any subsequent time, will be truthful, accurate and verifiable in all respects,
    and that by providing such information and data, you consent to us submitting it to third party verification
    providers.</p>
<p><br></p>
<ol>
    <li><strong>Device and Personal Information</strong></li>
</ol>
<p>Using the Services requires an internet connection to our servers and you understand and acknowledge that you are
    solely responsible to pay for any fees, including Internet connection or mobile fees necessary to access or use
    our Services.&nbsp;&nbsp;We may need to collect certain information from you and your internet-enabled device in
    order to make the software and Services available to you, such as your Account Information, hardware system,
    internet connection data and any other data related to the operation and provision of the
    Services.&nbsp;&nbsp;Please note that we will use and retain such information in accordance with
    our&nbsp;<em>Privacy Policy.</em></p>
<ol>
    <li><strong>Offers&nbsp;</strong></li>
</ol>
<p>When accessing or using our Services, you may choose to select and participate in Offers, as presented onsite and
    may be changed from time to time.&nbsp;</p>
<p><br></p>
<p><strong>You understand and acknowledge that</strong>:&nbsp;</p>
<ol>
    <li>The Services will provide you with Offers, and when you choose to participate in an Offer, you will be
        redirected to the Partner&apos;s website.</li>
    <li>We act solely as an intermediary, providing a platform to display Offers from Partners.&nbsp;</li>
    <li>We are not responsible for the content, quality, or fulfillment of these Offers, and any issues or disputes
        arising from these interactions should be resolved directly with Partners of the Offer.</li>
    <li>You are aware that you are solely responsible for reviewing and adhering to the Partner&apos;s terms of use
        related to each relevant Offer.&nbsp;</li>
    <li>We do not take any responsibility nor endorse the accuracy, or the availability of any content or material
        made available on the Offer&nbsp;or Partner&apos;s services.</li>
</ol>
<p><br></p>
<p>We strongly recommend you save or screenshot each Offer you completed successfully, as you may be required to
    provide us with such proof in the event of any issue that may occur or arise related to the Offer.
    &nbsp;&nbsp;You acknowledge and agree that we may change, modify or update the Terms from time to time, and that
    such revised terms will apply to your use of the Services as well as all subsequent Offer in which you
    participate. You further agree that you will review these Terms, Partner Terms and any terms regarding entering
    or participating in any Offer.</p>
<p><br></p>
<p>We take fraud very seriously. Please note that in addition to taking any desirable or necessary legal action, we
    reserve the right to terminate your use of the Services and confiscate your Prize. We will notify you prior to
    such confiscation or termination to provide an opportunity for you to make an appeal via the Services; provided,
    however, that our determination, in our sole discretion, shall be final and binding on you.</p>
<p><br></p>
<ol>
    <li><strong>Payout and Prizes&nbsp;</strong></li>
</ol>
<p>By using our Services, you understand and acknowledge that you may receive certain Prizes as presented on our
    Website. Failure to comply with any of the provisions contained in the Terms or Partner Terms will result in the
    termination of your Account and forfeiture of eligibility for a payout.&nbsp;</p>
<p><strong>Age limitation</strong>. The information on this Website or our Services or any associated rewards
    <strong>are not</strong> intended for distribution to or use by any person in any country where such
    distribution or use would be contrary to the local laws or regulations or any Applicable Law, or to any person
    under the age of eighteen (18) or under the age of majority in his or her country of residence or
    nationality.&nbsp;&nbsp;It is the responsibility of the visitors and End Users of this Website to ascertain the
    terms of and comply with all Applicable Laws and with these Terms and Partner Terms.</p>
<p><br></p>
<p>You hereby release the Company from all liability relating in any way to any of your actions that you may take or
    any activity in which you may engage that relates in any way to the Company or use of the Services.</p>
<p>Please note: We may use other third parties to perform certain business-related functions such as <a
        href="https://www.xoxoday.com/">https://www.xoxoday.com/</a> and/or <a
        href="https://www.paypal.com/cy/home">https://www.paypal.com/cy/home</a> <strong>(&quot;Providers&quot;).
        &nbsp;</strong></p>
<p>You are solely responsible for reviewing the terms and conditions governing your use of the Provider&apos;s
    services. You understand and acknowledge that the Provider&apos;s terms of services may differ from these
    Terms.&nbsp;</p>
<p>The eligibility for Prizes, as presented onsite and may be amended from time to time, is solely for End-User that
    registered successfully on our Services, who has a valid active Account and who complies with these Terms and
    Partner Terms.&nbsp;</p>
<p>You understand and accept that the payouts to which you may be entitled are strictly for your own benefit and
    that no one else is entitled to them or to benefit from them. Failure to comply with these Terms or Partner
    Terms may result in the closing of your Account and the loss of all payouts accumulated through your use of the
    Services. &nbsp;</p>
<p>All payouts may be confiscated, revoked, deleted, deemed void, if your Account is terminated or suspended for any
    reason, in our sole and absolute discretion, or if the Services are no longer available.&nbsp;</p>
<p>If your Account is terminated, suspended and/or if any payout of your Account are selectively confiscated,
    revoked, deleted, deemed void, no refund will be granted, no payout will be credited to you or converted to cash
    or other forms of reimbursement.</p>
<ol>
    <li><strong>End Users&apos; Representations and Prohibited Uses</strong></li>
</ol>
<p>You may use the Services only for lawful purposes. You are solely responsible for all your activity in connection
    with the Services. You warrant and represent that you are prohibited to (and shall not permit any third party
    to) either take any action that:&nbsp;</p>
<ol>
    <li>Is illegal, violent, threatening, abusive, invasive of any person&apos;s privacy, harassing, defamatory,
        libelous, false, deceptive, fraudulent, misleading, untruthful, tortuous, offensive or otherwise
        inappropriate, as we may determine in our sole discretion;&nbsp;</li>
    <li>Infringes, violates, or misappropriate any third-party right, including any copyright, trademark, patent,
        trade secret, moral right, privacy right or any other intellectual property or proprietary right as may now
        exist or hereafter come into existence;&nbsp;</li>
    <li>Violates any right of publicity, or other right of any person or entity, or any law or contractual
        obligation, including without limitation rights pursuant to data protection, anti-spam and privacy laws and
        regulations;&nbsp;</li>
    <li>Copies, modifies, adapts, translates into any language, distributes, or creates derivative works based on
        the Services;</li>
    <li>Sublicenses, subleases, leases, lends, assigns, sells, licenses, distributes, rent, exports, re-exports or
        grants other rights in the Services and any attempt by you to take such action shall be void;</li>
    <li>Decompiles, disassembles, reverses engineer, or attempts to reconstruct, identifies or discovers any source
        code, underlying ideas, underlying user interface techniques, or algorithms of the Services by any means
        whatsoever;&nbsp;</li>
    <li>Removes, obscures or alters any copyright and/or other proprietary notices contained on or in or otherwise
        connected to the Services;</li>
    <li>Involves commercial activity not expressly permitted by us;&nbsp;</li>
    <li>Contains any harmful or malicious software or computer codes, files or programs that are designed or
        intended to damage, disrupt, interfere with, or limit, the proper functionality of any software or hardware,
        or that enables to obtain unauthorized access to any system, data, password or other information of us, our
        End Users, or any other individual or entity;&nbsp;</li>
    <li>Uses or launches any automated system, including without limitation, &ldquo;robots,&rdquo;
        &ldquo;spiders,&rdquo; &ldquo;offline readers&rdquo;, etc., that accesses the Services in a manner that
        sends more request messages to our servers than a human can reasonably produce in the same period of
        time;&nbsp;</li>
    <li>Transmits invalid data, worms, viruses, Trojan horses or any code of a destructive nature;&nbsp;</li>
    <li>Transmits spam, chain letters, materials related to any political campaigns, commercial solicitations, mass
        mailings, or any form of spam or other unsolicited texts or emails;</li>
    <li>Impersonates any individual or entity, including, without limitation, our employees or
        representatives;&nbsp;</li>
    <li>Uses a false phone number or email, identity, or attempt to use another user&apos;s Account;&nbsp;</li>
    <li>Uses the Services for money laundering, terrorist financing, or other illicit finance or activity;&nbsp;
    </li>
    <li>Targets children or individual under the age of majority in any jurisdiction where the Services are made
        available;</li>
    <li>Engages in any activity that interrupts or attempts to interrupt the operation of the Services.&nbsp;</li>
    <li>Performs any activity intended to defraud the Company or any third party or circumvent any contractual or
        legal restriction, regardless of whether such attempted act has caused Company any actual harm.&nbsp;</li>
</ol>
<p>Anyone who engages in, participates in, or displays behavior that may be interpreted, in our sole discretion, as
    unfair methods in participating in the Services, including but not limited to &ndash;&nbsp;</p>
<ol>
    <li>the opening or use of multiple accounts;&nbsp;</li>
    <li>collusion with or harassment of other End User;&nbsp;</li>
    <li>breach of these Terms;&nbsp;</li>
    <li>breach of security of your Account; and/or&nbsp;</li>
    <li>any other act or omission (whether through the use of automated technology or otherwise), will be subject to
        immediate sanction (as determined by us in our sole discretion), which may include, without limitation,
        disabling the ability to use or access to our Services in whole or in part, as well as other legal actions.
        We reserve the right to disclose or report any money laundering or other suspicious activity to law
        enforcements and regulatory authorities. &nbsp;</li>
</ol>
<p>Please note that by accessing and using Partner&apos;s services, you understand and acknowledge that you may be
    exposed to mature subject matters, human sexuality, and explicit materials.&nbsp;</p>
<p>If you are: (i) under the legal age of mature viewing in your state or country; (ii) bound by your countries law
    not to look at sexual material; (iii) offended by sexually explicit material; or (iv) have no permission to
    access, enter or use the services made available on such websites, therefore you are required to not enter the
    Partner services.&nbsp;</p>
<p>You understand and acknowledge that in such case, you are solely responsible for the Prize you receive, and we
    will not be liable for any action you undertake that might be considered as illegal in your jurisdiction and/or
    under any Applicable Law.&nbsp;</p>
<p>You also agree and confirm that you will not redistribute your Prizes to anyone, and you will not permit any
    minor or any other person to benefit from the Prizes that you have earned or won through the Services or to
    access or use the Partner&apos;s services. You hereby release the Company from all liability relating in any way
    to any of your action that you may take or any activity in which you may engage that relates in any way to the
    Company or use of the Services.</p>
<p><br></p>
<p>Any attempt to deliberately damage the Services or violation of criminal or civil laws and should such an attempt
    be made, we reserve the right to seek damages and other remedies from you to the fullest extent, as permitted
    under Applicable Law.</p>
<p>We reserve the right to exercise whatever lawful means we deem necessary to prevent unauthorized use of the
    Services, including, but not limited to, technological barriers, IP mapping, and directly contacting your
    wireless (cellular) carrier regarding such unauthorized use.</p>
<ol>
    <li><strong>Third Party Links&nbsp;</strong></li>
</ol>
<p>Portions of the Services will involve linking to websites belonging to third parties (such as Partners&apos;
    websites).&nbsp;&nbsp;<strong>We have no control over third-party websites, and all use of third-party websites
        is at your own risk.</strong></p>
<p>We may have direct relationships with Partners, and we may be compensated by such Partners based on your
    interaction with Partner&apos;s offers, websites, or services.&nbsp;&nbsp;Such compensation is not, and should
    not be seen as, an endorsement or recommendation by us.&nbsp;</p>
<p><br></p>
<p><strong>We are not liable for any losses or damages, direct or indirect, that may result from the use of or
        reliance on information contained on any Partner or third party&apos;s websites or services.</strong></p>
<p><br></p>
<p>We encourage you to carefully read the terms of use and privacy policy of such third-party websites and/or
    services, as their terms and privacy policy, not ours, will apply to any of your interactions with such third
    parties as well as any specific requirements or limitation associated within their Offers or services. You
    should always review their practices carefully before accepting the provision of any services by these third
    parties.</p>
<ol>
    <li><strong>License</strong></li>
</ol>
<p>Subject to your compliance with the Terms, we grant you a personal, limited, non-commercial, non-exclusive,
    non-sublicensable, non-assignable, non-transferable, freely revocable license to use the
    Services.&nbsp;&nbsp;The Services include materials that we own or license and are protected by copyrights,
    trademarks, patent, and other worldwide Intellectual Property Rights and by Applicable
    Law.&nbsp;&nbsp;We&nbsp;<strong>do not</strong> grant you or any other party any right, title or interest in the
    Services or any materials available on our Services.&nbsp;</p>
<p>&nbsp;</p>
<p><strong>You understand and acknowledge all of the following &ndash;</strong></p>
<ol>
    <li>The use of the Services is for personal, non-commercial entertainment only and not for any other purpose;
    </li>
    <li>Any material available on our Services, including those appearing on our Website should not be reproduced,
        copied, edited, published, transmitted or uploaded in any way without our written permission. Registering to
        our Services or participating in Offers do not grant you any express or implied right under any of the
        Company&apos;s trademarks, copyrights or other proprietary information;</li>
    <li>If you violate or do not agree to the Terms or Partner Terms, your license to access and/or use the Services
        shall be immediately terminated and you will no longer be able to access and/or use our Services.</li>
</ol>
<p><br></p>
<ol>
    <li><strong>No Warranty</strong></li>
</ol>
<p>You expressly agree that your use of the Services is at your own risk and you are aware that the Services, and
    the Offers are provided on an &quot;as is&quot; and &quot;as available&quot; basis without any representation or
    warranty, whether express, implied (whether by law, statute or otherwise), including but not limited to any
    implied warranties of merchantability, fitness for a particular purpose and non-infringement (whether under
    Applicable Law or otherwise).&nbsp;</p>
<p>The Company does not make any representations or warranties, express or implied, that your access to and/or use
    of the Services will be accurate, free of error, complete, uninterrupted, continuous, or that any defects will
    be corrected, or that the Website is free of viruses and bugs.&nbsp;&nbsp;The Company makes no representation
    concerning the full or partial functionality, accuracy, or reliability of any information or materials obtained
    by you through the Services.</p>
<ol>
    <li><strong>Limitation of Liability</strong></li>
</ol>
<p>To the maximum extent permitted by Applicable Law, in no event will the Company, its Affiliates, licensors or
    service providers, or any of their respective officers, directors, agents, joint venturers, employees or
    representatives, be liable or assume any obligation whatsoever to you or anyone on your behalf, regardless of
    the form of action, for any direct, indirect, special, incidental, or consequential damages or loss of any kind,
    any loss or any damage arising out of or relating to your authorized or unauthorized use of the Services, of the
    payouts, any service, product or content provided by any third party, whether based in contract, tort,
    negligence, strict liability. In the event of any complaint your sole and exclusive remedy is to discontinue
    using the Services.&nbsp;</p>
<p><br></p>
<p>The Company shall not be liable for any acts or omissions made by your internet service provider or other third
    party with whom you have contracted to gain access to the Services.&nbsp;</p>
<p>You agree and confirm that: (i) you are free to choose whether to use the Services and do so at your sole option,
    discretion and risk; (ii) the Company shall not be liable to you or any third party for any modification to,
    suspension of or discontinuance of the Services; (iii) any claim or cause of action, regardless of the form of
    action, which you may have arising out of or related to use of the Services or these Terms, must be filed within
    one (1) year after such claim or cause of action arose.</p>
<p><br></p>
<p><br></p>
<ol>
    <li><strong>Indemnification</strong></li>
</ol>
<p>You hereby agree to indemnify and hold the Company, its officers, directors, employees, or agents harmless for
    any claims, matters, complaints, costs, liabilities and actions arising out of or related to your use of the
    Services, including but not limited to:&nbsp;</p>
<ol>
    <li>Your failure to comply with any Applicable Law;&nbsp;</li>
    <li>Any claim of infringement or misappropriation of any third-party rights, including but not limited to any,
        copyright, privacy rights or Intellectual Property Rights in the Services;&nbsp;</li>
    <li>Your breach of any provision of these Terms, Partner Terms; or&nbsp;</li>
    <li>Your use or misuse of the Services.&nbsp;</li>
</ol>
<p>You agree to promptly notify the Company of any third-party claims and fully cooperate with the Company in
    defending such claims at your sole expense. You further agree that at Company&apos;s sole discretion, the
    Company shall have control of the defense or settlement of any such claims.</p>
<p><br></p>
<ol>
    <li><strong>Miscellaneous</strong></li>
</ol>
<p>These Terms shall be governed by and interpreted in accordance with the law of Cyprus, without giving effect to
    its principles or rules of conflict of laws. Any action to be brought in connection with these Terms shall be
    brought exclusively in the courts of Cyprus, and you irrevocably consent to their jurisdiction. We may assign
    our rights and obligations hereunder to any third party without prior notice.&nbsp;</p>
<p>You shall not assign any of your rights or obligations hereunder, and any assignment shall be null and void. Any
    provisions hereof which expressly or by their nature are required to survive termination or expiration of these
    Terms in order to achieve their purpose shall survive the termination or expiration, including without
    limitation Sections 2/5/6/7/8/9/10/11/12/13 of these Terms. Any translation of these Terms of Use is provided
    solely for your convenience. The meanings of terms, conditions and representations herein are subject to
    definitions and interpretations in the English language and in the event of a dispute, the English language
    version shall prevail. Any translation provided may not accurately represent the information in the original
    English language version of these Terms.</p>
<ol>
    <li><strong>&nbsp; &nbsp; Terms and Termination</strong></li>
</ol>
<p>These Terms apply to you and to us from the date that you accept them as provided above. We reserve the right,
    without notice and in our sole discretion, to terminate these Terms, revoke or forfeit your payouts or terminate
    or suspend your access to or use of all or any part of the Services effective immediately, at any time
    including, <em>inter alia</em>, if we suspect in our sole discretion that (i) you were engaged or are being
    engaged in fraudulent activity or any illegal activity under any Applicable Law; (ii) you have provided false
    information to, or concealed any information from us; or (iii) you have engaged in activity in violation
    (including alleged violations) of these Terms, Partner Terms.&nbsp;</p>
<p><br></p>
<p><br></p>
<ol>
    <li><strong>Changes</strong></li>
</ol>
<p>We reserve the right to amend any of the Terms at any time by publishing the revised versions on our Website or
    by otherwise providing notice of such amendment by email, via the Services or posting on our Website. Notice
    will be deemed given twenty-four (24) hours after email is sent to you.&nbsp;</p>
<p>Notice posted on our Website is deemed given five (5) days following the initial posting. We reserve the right to
    determine the form and means of providing notifications to our End User. The revised versions shall become
    effective following the applicable notice period unless you expressly accept the revised versions earlier by
    clicking on the accept button. Your express acceptance or continued use of the Services after the applicable
    notice period shall constitute your acceptance to be bound by the revised Terms, as applicable. &nbsp;&nbsp;If
    any provision of the Terms is held to be unenforceable, such provision shall be modified only to the extent
    necessary to make it enforceable and shall not affect the enforceability or validity of the remaining
    provisions, which shall remain in full force and effect.</p>
<p><br></p>
<p><br></p>
<ol>
    <li><strong>Contact Us</strong></li>
</ol>
<p>If you have any questions, would like to provide us feedback or receive more information about us, please feel
    free to email us.&nbsp;</p>
<p><br></p>`
let es_text =  `<p style="text-align:center;font-size:16pt!important;"><strong>Cybersays.Club - Condiciones de uso</strong></p>
<p>&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&Uacute;ltima revisi&oacute;n:&nbsp;Febrero 2024</p>
<p>Las presentes Condiciones de uso (&quot;<strong>Condiciones</strong>&quot;) constituyen un Acuerdo legal vinculante entre Pythia Grant Ltd. (&quot;<strong>Empresa</strong>&quot;, &quot;<strong>nosotros</strong>&quot; o &quot;<strong>nuestro</strong>&quot;) y usted (&quot;<strong>Usuario final</strong>&quot;, &quot;<strong>usted</strong>&quot; o &quot;<strong>su</strong>&quot;), y rigen su acceso y uso de todas las funciones y otros servicios proporcionados por la Empresa, incluido, sin limitaci&oacute;n, nuestro sitio web: <a href="http://www.Cybersays.club">www.Cybersays.club</a> (&quot;<strong>Sitio web</strong>&quot;; colectivamente, los &quot;<strong>Servicios</strong>&quot;).&nbsp;</p>
<p><br></p>
<p>Al registrar una cuenta y acceder a los Servicios, usted afirma haber le&iacute;do, comprendido y aceptado quedar vinculado por estas Condiciones, as&iacute; como por nuestra&nbsp;<em>Pol&iacute;tica de Privacidad</em>, que podemos actualizar de vez en cuando, cada una incorporada aqu&iacute; por referencia&nbsp;(&quot;<strong>Pol&iacute;ticas</strong>&quot;).&nbsp;</p>
<p>Si no est&aacute; de acuerdo con estas Pol&iacute;ticas, no debe registrar una cuenta ni utilizar o acceder de otro modo a los Servicios.&nbsp;&nbsp;Al utilizar nuestros Servicios, usted acepta de forma inequ&iacute;voca los T&eacute;rminos y Condiciones de nuestros Socios (tal y como se definen a continuaci&oacute;n), incluidos, entre otros, los T&eacute;rminos y Condiciones especificados en <a href="http://www.ImLive.com">www.ImLive.com</a> (&quot;<strong>T&eacute;rminos de los Socios</strong>&quot;).&nbsp;</p>
<p>Estos Acuerdos complementar&aacute;n todos los Acuerdos anteriores que haya podido tener con nosotros o con cualquiera de nuestros Afiliados. Por lo tanto, le animamos a que lea detenidamente estas Condiciones y todos los t&eacute;rminos que puedan afectar a su uso de los Servicios.</p>
<p>Podemos revisar los T&eacute;rminos en cualquier momento actualizando los T&eacute;rminos en nuestros Servicios. Usted debe visitar peri&oacute;dicamente estos T&eacute;rminos para revisar los t&eacute;rminos actuales que se aplican a su uso de los Servicios. Cualquier uso de los Servicios por su parte tras la publicaci&oacute;n por nuestra parte de cualquiera de dichas modificaciones constituir&aacute; su aceptaci&oacute;n de estos T&eacute;rminos en su versi&oacute;n modificada. Podremos, a nuestra entera discreci&oacute;n y en cualquier momento, dejar de prestar los Servicios, o cualquier parte de los mismos, sin previo aviso.&nbsp;</p>
<p>USTED RECONOCE QUE LOS SERVICIOS SON ESTRICTAMENTE PARA FINES DE ENTRETENIMIENTO.</p>
<p>&nbsp;</p>
<p>Al registrar una cuenta o acceder de cualquier otro modo a los Servicios, en la medida m&aacute;xima permitida por la Legislaci&oacute;n Aplicable (tal y como se define m&aacute;s adelante), usted acepta que cualquier reclamaci&oacute;n, disputa o controversia de cualquier naturaleza que surja o est&eacute; relacionada con estas Condiciones, o con su uso de los Servicios, se resolver&aacute; de acuerdo con el proceso descrito en la Secci&oacute;n 13. &quot;Varios&quot; m&aacute;s adelante.</p>
<ol>
    <li><strong>DEFINICIONES</strong></li>
</ol>
<p>A efectos del presente Acuerdo, los siguientes t&eacute;rminos en may&uacute;sculas tendr&aacute;n el significado que se les atribuye en el mismo:</p>
<ol>
    <ol>
        <li>&quot;<strong>Cuenta</strong>&quot; significa una cuenta creada por usted a trav&eacute;s de nuestro Sitio Web que le permite acceder a los Servicios.</li>
        <li><strong>&quot;Informaci&oacute;n de la cuenta</strong>&quot; se refiere a cualquier tipo de informaci&oacute;n que podamos solicitar al usuario final en el proceso de registro, incluidos, entre otros, la direcci&oacute;n de correo electr&oacute;nico, el nombre de usuario, los datos de su ID de Facebook y Google, y los datos de identificaci&oacute;n de la cuenta del&nbsp;sitio web de su&nbsp;socio.</li>
        <li><strong>&quot;Afiliada&quot;&nbsp;</strong>se refiere a las filiales, Empresas conjuntas y otras entidades corporativas de la Empresa y sus agentes, consultor, empleados, funcionarios y directores.</li>
        <li><strong>&quot;Ley aplicable&quot;&nbsp;</strong>significa cualquier ley, estatuto, norma, reglamento, orden, circular, decreto, directiva, sentencia, decisi&oacute;n u otro mandato similar de cualquier autoridad gubernamental central, nacional, estatal o local aplicable que tenga jurisdicci&oacute;n competente sobre, o aplicaci&oacute;n, relacionada con el Usuario Final, o asunto en cuesti&oacute;n.</li>
        <li><strong>&quot;Derechos de Propiedad Intelectual&quot;&nbsp;</strong>significa cualesquiera patentes, marcas registradas, derechos de autor, derechos de dise&ntilde;o (sean registrables o no), logotipos, derechos de autor, nombres comerciales, Empresariales y de dominio, derechos morales, know-how, secretos comerciales, derechos sobre bases de datos, derechos sobre programas inform&aacute;ticos y cualesquiera otros derechos u obligaciones similares, sean registrables o no (e incluyendo todas las solicitudes y renovaciones o extensiones de tales derechos) en cualquier pa&iacute;s.</li>
        <li><strong>&quot;Ofertas&quot;&nbsp;</strong>se refiere a cualquier oferta especial en l&iacute;nea y sus reglas, tal y como se presentan en el sitio web, y pueden cambiar de vez en cuando, por los Socios o la Empresa en los Servicios en los que el Usuario Final puede participar. &nbsp;</li>
    </ol>
</ol>
<p>La Oferta incluir&aacute; la posibilidad de duplicar la cantidad inicial adquirida por el Usuario Final, &uacute;nicamente con respecto a su compra inicial. es decir, por los 5 cr&eacute;ditos iniciales adquiridos, el Usuario recibir&aacute; 10 cr&eacute;ditos para su uso en ImLive.com.&nbsp;</p>
<p>Adem&aacute;s, el Usuario podr&aacute; recibir un importe real de devoluci&oacute;n de efectivo. Debido a&nbsp;la diferencia de divisas - los valores del importe de devoluci&oacute;n en efectivo, en la Oferta, ser&aacute;n los siguientes:</p>
<ul>
    <li>Por los cinco (5) cr&eacute;ditos iniciales que se compren en $USD o en EURO - el Usuario recibir&aacute; diez d&oacute;lares estadounidenses ($10 USD), al gastar la totalidad de los 10 cr&eacute;ditos.&nbsp;</li>
    <li>Por los primeros e iniciales cinco (5) cr&eacute;ditos -comprados en libras esterlinas GBP- el Usuario recibir&aacute; doce d&oacute;lares estadounidenses con cincuenta centavos ($12,50 USD), al gastar la totalidad de los 10 cr&eacute;ditos.&nbsp;</li>
</ul>
<ol>
    <ol>
        <li><strong>&quot;Socio(s)&quot;&nbsp;</strong>se refiere a cualquier proveedor de servicios externo que proporcione Ofertas al Usuario Final en o a trav&eacute;s de los Servicios.</li>
        <li><strong>&quot;Premio</strong>&quot; significa cualquier beneficio o ventaja que los Usuarios Finales puedan recibir al culminar con &eacute;xito las Ofertas sujetas a los T&eacute;rminos, T&eacute;rminos del Socio.&nbsp;</li>
        <li><strong>&quot;Proveedor&quot;</strong>, tal y como se define en la Secci&oacute;n 6.</li>
        <li><strong>&quot;Sitio(s) web</strong>&quot; significa el sitio,&nbsp;www.Cybersays.club, y cualquier otro sitio seg&uacute;n lo defina la Empresa, a su entera discreci&oacute;n, de vez en cuando.&nbsp;</li>
    </ol>
</ol>
<p><br></p>
<ol>
    <li><strong>Uso de nuestros servicios y ofertas</strong></li>
</ol>
<p>Para acceder o participar en las Ofertas que se ponen a su disposici&oacute;n en nuestro Sitio Web, debe crear una Cuenta con nosotros.&nbsp;</p>
<p>Tenga en cuenta que los Servicios pueden no ser totalmente compatibles con todas las plataformas, dispositivos y sistemas operativos, por lo que le animamos a que verifique usted mismo todos los requisitos de compatibilidad y actualice cuando sea necesario el software de terceros de vez en cuando para poder recibir los Servicios, las actualizaciones y participar en las Ofertas disponibles en nuestro Sitio Web.&nbsp;</p>
<p>Cuando cree una Cuenta, es posible que se le pida que proporcione Informaci&oacute;n de la Cuenta, que puede implicar:&nbsp;</p>
<ol>
    <li>Registrar un nombre de usuario y una contrase&ntilde;a &uacute;nicos (si procede) ;&nbsp;</li>
    <li>Proporcionar informaci&oacute;n de contacto, como su direcci&oacute;n de correo electr&oacute;nico;&nbsp;</li>
    <li>Proporcionar cualquier otra informaci&oacute;n que solicitemos durante el proceso de registro de la cuenta.&nbsp;</li>
</ol>
<p><br></p>
<p>Al acceder o utilizar nuestros Servicios o participar en nuestras Ofertas, usted se compromete a cumplir todo lo siguiente:&nbsp;</p>
<ol>
    <li>Ha alcanzado la mayor&iacute;a de edad tanto en el territorio en el que reside;</li>
    <li>Usted es el &uacute;nico responsable de mantener segura la Informaci&oacute;n de su Cuenta y de cualquier cosa que ocurra en su Cuenta, independientemente de que las acciones hayan sido realizadas por usted o por un tercero no autorizado que haya obtenido acceso a su Cuenta;</li>
    <li>S&oacute;lo podr&aacute; registrarse en una &uacute;nica Cuenta y no podr&aacute; utilizar ni acceder a varias Cuentas al mismo tiempo;</li>
    <li>No crear&aacute; una Cuenta con una identidad falsa ni proporcionar&aacute; informaci&oacute;n incorrecta, ni crear&aacute; una Cuenta en nombre de otra persona que no sea usted;&nbsp;</li>
    <li>No compartir&aacute; ni dar&aacute; acceso a la Informaci&oacute;n de su Cuenta a nadie, ni har&aacute; nada que pueda poner en peligro la seguridad de su Cuenta;&nbsp;</li>
    <li>Deber&aacute; notificarnos inmediatamente, tal y como se detalla en la Secci&oacute;n 16 &quot;Contacte con nosotros&quot; de estas Condiciones, si ha perdido el control de su contrase&ntilde;a o sospecha que se est&aacute; produciendo una actividad no autorizada en su Cuenta, incluido el robo o la divulgaci&oacute;n no autorizada de la Informaci&oacute;n de su Cuenta;</li>
    <li>Usted no nos considerar&aacute; responsables de cualquier p&eacute;rdida, da&ntilde;o, acceso no autorizado o cualquier violaci&oacute;n de su Cuenta y de la divulgaci&oacute;n de la Informaci&oacute;n de su Cuenta.</li>
</ol>
<p>Como titular de su Cuenta, usted es el &uacute;nico responsable del cumplimiento de estas Condiciones y de las Condiciones de Socio y s&oacute;lo usted tiene derecho a todos los beneficios derivados de las mismas.&nbsp;</p>
<p><br></p>
<ol>
    <li><strong>Verificaci&oacute;n de la cuenta</strong></li>
</ol>
<p>Nos reservamos el derecho a verificar en cualquier momento sus datos de registro, como nombre, direcci&oacute;n, edad, solicit&aacute;ndole determinados documentos. En caso de que no facilite la documentaci&oacute;n requerida, podremos, a nuestra entera discreci&oacute;n, negarnos a prestarle los Servicios y retener cualquier Premio.</p>
<p>Usted se compromete a actualizar cualquier informaci&oacute;n o dato que nos haya facilitado o a proporcionar documentaci&oacute;n adicional como parte de los esfuerzos continuos para prevenir actividades ilegales y fraudulentas, o para cumplir con cualquier otra pol&iacute;tica o protocolo que decidamos establecer. Usted acepta que toda la informaci&oacute;n y los datos que nos proporcione, ya sea en el momento de registrarse para obtener una cuenta o en cualquier otro momento posterior, ser&aacute;n veraces, exactos y verificables en todos los aspectos, y que al proporcionar dicha informaci&oacute;n y datos, da su consentimiento para que los enviemos a terceros proveedores de verificaci&oacute;n.</p>
<p><br></p>
<ol>
    <li><strong>Dispositivo e informaci&oacute;n personal</strong></li>
</ol>
<p>El uso de los Servicios requiere una conexi&oacute;n a Internet a nuestros servidores y usted entiende y reconoce que es el &uacute;nico responsable de pagar cualquier tarifa, incluidas las tarifas de conexi&oacute;n a Internet o m&oacute;viles necesarias para acceder o utilizar nuestros Servicios.&nbsp;&nbsp;Es posible que necesitemos recopilar cierta informaci&oacute;n de usted y de su dispositivo con conexi&oacute;n a Internet para poner a su disposici&oacute;n el software y los Servicios, como la Informaci&oacute;n de su Cuenta, el sistema de hardware, los datos de conexi&oacute;n a Internet y cualquier otro dato relacionado con el funcionamiento y la prestaci&oacute;n de los Servicios.&nbsp;&nbsp;Tenga en cuenta que utilizaremos y conservaremos dicha informaci&oacute;n de acuerdo con nuestra&nbsp;<em>Pol&iacute;tica de Privacidad.</em></p>
<ol>
    <li><strong>Ofertas&nbsp;</strong></li>
</ol>
<p>Al acceder o utilizar nuestros Servicios, puede optar por seleccionar y participar en Ofertas, tal y como se presentan in situ y pueden modificarse de vez en cuando.&nbsp;</p>
<p><br></p>
<p><strong>Usted comprende y reconoce que</strong>:&nbsp;</p>
<ol>
    <li>Los Servicios le proporcionar&aacute;n Ofertas, y cuando elija participar en una Oferta, ser&aacute; redirigido a la p&aacute;gina web del Socio.</li>
    <li>Actuamos &uacute;nicamente como intermediarios, proporcionando una plataforma para mostrar las Ofertas de los Socios.&nbsp;</li>
    <li>No somos responsables del contenido, la calidad o el cumplimiento de estas Ofertas, y cualquier problema o disputa que surja de estas interacciones debe resolverse directamente con los Socios de la Oferta.</li>
    <li>Usted es consciente de que es el &uacute;nico responsable de revisar y cumplir las condiciones de uso del Socio relacionadas con cada Oferta pertinente.&nbsp;</li>
    <li>No asumimos ninguna responsabilidad ni avalamos la exactitud, ni la disponibilidad de ning&uacute;n contenido o material puesto a disposici&oacute;n en la Oferta o en los servicios del Socio.</li>
</ol>
<p><br></p>
<p>Le recomendamos encarecidamente que guarde o haga una captura de pantalla de cada Oferta que haya culminado con &eacute;xito, ya que es posible que se le solicite que nos proporcione dicha prueba en caso de que se produzca o surja alg&uacute;n problema relacionado con la Oferta. &nbsp;&nbsp;Usted reconoce y acepta que podemos cambiar, modificar o actualizar las Condiciones de vez en cuando, y que dichas condiciones revisadas se aplicar&aacute;n a su uso de los Servicios, as&iacute; como a todas las Ofertas posteriores en las que participe. Asimismo, acepta que revisar&aacute; las presentes Condiciones, las Condiciones de los Socios y cualquier condici&oacute;n relativa a la introducci&oacute;n o participaci&oacute;n en cualquier Oferta.</p>
<p><br></p>
<p>Nos tomamos el fraude muy en serio. Tenga en cuenta que, adem&aacute;s de emprender cualquier acci&oacute;n legal deseable o necesaria, nos reservamos el derecho de finalizar su uso de los Servicios y confiscar su Premio. Le notificaremos antes de dicha confiscaci&oacute;n o finalizaci&oacute;n para darle la oportunidad de presentar una apelaci&oacute;n a trav&eacute;s de los Servicios; no obstante, nuestra determinaci&oacute;n, a nuestra entera discreci&oacute;n, ser&aacute; definitiva y vinculante para usted.</p>
<p><br></p>
<ol>
    <li><strong>Pago y premios&nbsp;</strong></li>
</ol>
<p>Al utilizar nuestros Servicios, usted entiende y reconoce que puede recibir determinados Premios tal y como se presentan en nuestro Sitio Web. El incumplimiento de cualquiera de las disposiciones contenidas en las Condiciones o en las Condiciones de Socio dar&aacute; lugar a la finalizaci&oacute;n de su Cuenta y a la p&eacute;rdida de su derecho a recibir un premio.&nbsp;</p>
<p><strong>Limitaci&oacute;n de edad</strong>. La informaci&oacute;n contenida en este Sitio Web o en nuestros Servicios o cualquier recompensa asociada <strong>no est&aacute;&nbsp;</strong>destinada a ser distribuida o utilizada por ninguna persona en ning&uacute;n pa&iacute;s en el que dicha distribuci&oacute;n o uso sea contrario a las leyes o reglamentos locales o a cualquier Ley Aplicable, ni a ninguna persona menor de dieciocho (18) a&ntilde;os o menor de la mayor&iacute;a de edad en su pa&iacute;s de residencia o nacionalidad.&nbsp;&nbsp;Es responsabilidad de los visitantes y Usuarios Finales de este Sitio Web cerciorarse de los t&eacute;rminos de y cumplir con todas las Leyes Aplicables y con estos T&eacute;rminos y Condiciones de los Socios.</p>
<p><br></p>
<p>Por la presente, usted exime a la Empresa de toda responsabilidad relacionada de cualquier modo con cualquiera de las acciones que pueda llevar a cabo o cualquier actividad en la que pueda participar y que est&eacute; relacionada de cualquier modo con la Empresa o el uso de los Servicios.</p>
<p>Por favor, tenga en cuenta: Podemos utilizar a otros terceros para realizar ciertas funciones relacionadas con el negocio, como <a href="https://www.xoxoday.com/">https://www.xoxoday.com/</a> y/o <a href="https://www.paypal.com/cy/home">https://www.paypal.com/cy/home</a><strong>&nbsp;(&quot;Proveedores&quot;). &nbsp;</strong></p>
<p>Usted es el &uacute;nico responsable de revisar los T&eacute;rminos y Condiciones que rigen su uso de los servicios del Proveedor. Usted comprende y reconoce que las condiciones de los servicios del Proveedor pueden diferir de las presentes Condiciones.&nbsp;</p>
<p>Los requisitos para optar a los Premios, tal y como se presentan in situ y pueden modificarse de vez en cuando, son &uacute;nicamente para los Usuarios finales que se hayan registrado correctamente en nuestros Servicios, que tengan una Cuenta activa v&aacute;lida y que cumplan estas Condiciones y las Condiciones de los socios.&nbsp;</p>
<p>Usted entiende y acepta que los pagos a los que pueda tener derecho son estrictamente para su propio beneficio y que nadie m&aacute;s tiene derecho a ellos o a beneficiarse de los mismos. El incumplimiento de estas Condiciones o de las Condiciones de los Socios puede dar lugar al cierre de su Cuenta y a la p&eacute;rdida de todos los pagos acumulados por su uso de los Servicios. &nbsp;</p>
<p>Todos los pagos podr&aacute;n ser confiscados, revocados, eliminados, considerados nulos, si su Cuenta es finalizada o suspendida por cualquier motivo, a nuestra entera y absoluta discreci&oacute;n, o si los Servicios dejan de estar disponibles.&nbsp;</p>
<p>Si su Cuenta es finalizada, suspendida y/o si cualquier pago de su Cuenta es confiscado selectivamente, revocado, borrado, considerado nulo, no se le conceder&aacute; ning&uacute;n reembolso, no se le abonar&aacute; ning&uacute;n pago ni se convertir&aacute; en dinero en efectivo u otras formas de reembolso.</p>
<ol>
    <li><strong>Final Declaraciones de los usuarios y usos prohibidos</strong></li>
</ol>
<p>S&oacute;lo podr&aacute; utilizar los Servicios para fines l&iacute;citos. Usted es el &uacute;nico responsable de toda su actividad en relaci&oacute;n con los Servicios. Usted garantiza y declara que tiene prohibido (y no permitir&aacute; que ning&uacute;n tercero lo haga) realizar cualquier acci&oacute;n que:&nbsp;</p>
<ol>
    <li>Sea ilegal, violento, amenazador, abusivo, invasivo de la privacidad de cualquier persona, acosador, difamatorio, calumnioso, falso, enga&ntilde;oso, fraudulento, enga&ntilde;oso, falso, tortuoso, ofensivo o inapropiado de cualquier otro modo, seg&uacute;n determinemos a nuestra entera discreci&oacute;n;&nbsp;</li>
    <li>Infrinja, viole o se apropie indebidamente de cualquier derecho de terceros, incluido cualquier derecho de autor, marca registrada, patente, secreto comercial, derecho moral, derecho a la intimidad o cualquier otro derecho de propiedad intelectual o de propiedad que pueda existir en la actualidad o en el futuro;&nbsp;</li>
    <li>Viola cualquier derecho de publicidad, u otro derecho de cualquier persona o entidad, o cualquier ley u obligaci&oacute;n contractual, incluyendo sin limitaci&oacute;n los derechos de conformidad con las leyes y reglamentos de protecci&oacute;n de datos, anti-spam y privacidad;&nbsp;</li>
    <li>Copie, modifique, adapte, traduzca a cualquier idioma, distribuya o cree trabajos derivados basados en los Servicios;</li>
    <li>Sublicencie, subarriende, arriende, preste, ceda, venda, conceda licencias, distribuya, alquile, exporte, reexporte u otorgue otros derechos sobre los Servicios y cualquier intento por su parte de llevar a cabo tal acci&oacute;n ser&aacute; nulo;</li>
    <li>Descompile, desmonte, realice ingenier&iacute;a inversa o intente reconstruir, identifique o descubra cualquier c&oacute;digo fuente, ideas subyacentes, t&eacute;cnicas de interfaz de usuario subyacentes o algoritmos de los Servicios por cualquier medio;&nbsp;</li>
    <li>Elimine, oculte o altere cualquier aviso de derechos de autor y/u otros avisos de propiedad contenidos en los Servicios o relacionados con ellos;</li>
    <li>Implique una actividad comercial no permitida expresamente por nosotros;&nbsp;</li>
    <li>Contenga software da&ntilde;ino o malicioso o c&oacute;digos inform&aacute;ticos, archivos o programas dise&ntilde;ados o destinados a da&ntilde;ar, interrumpir, interferir o limitar el correcto funcionamiento de cualquier software o hardware, o que permita obtener acceso no autorizado a cualquier sistema, dato, contrase&ntilde;a u otra informaci&oacute;n nuestra, de nuestros Usuarios finales o de cualquier otra persona o entidad;&nbsp;</li>
    <li>Utiliza o pone en marcha cualquier sistema automatizado, incluidos, entre otros, &quot;robots&quot;, &quot;ara&ntilde;as&quot;, &quot;lectores fuera de l&iacute;nea&quot;, etc., que acceda a los Servicios de forma que env&iacute;e m&aacute;s mensajes de solicitud a nuestros servidores de los que un ser humano puede producir razonablemente en el mismo periodo de tiempo;&nbsp;</li>
    <li>Transmita datos no v&aacute;lidos, gusanos, virus, troyanos o cualquier c&oacute;digo de naturaleza destructiva;&nbsp;</li>
    <li>Transmita spam, cartas en cadena, materiales relacionados con cualquier campa&ntilde;a pol&iacute;tica, solicitudes comerciales, correos masivos o cualquier forma de spam u otros textos o correos electr&oacute;nicos no solicitados;</li>
    <li>Suplante a cualquier individuo o entidad, incluyendo, sin limitaci&oacute;n, a nuestros empleados o representantes;&nbsp;</li>
    <li>Utilice un n&uacute;mero de tel&eacute;fono o un correo electr&oacute;nico falsos, una identidad falsa o intente utilizar la Cuenta de otro usuario;&nbsp;</li>
    <li>Utiliza los Servicios para el blanqueo de dinero, la financiaci&oacute;n del terrorismo u otras finanzas o actividades il&iacute;citas;&nbsp;</li>
    <li>Se dirija a ni&ntilde;os o personas menores de edad en cualquier jurisdicci&oacute;n en la que los Servicios est&eacute;n disponibles;</li>
    <li>Realice cualquier actividad que interrumpa o intente interrumpir el funcionamiento de los Servicios.&nbsp;</li>
    <li>Realice cualquier actividad destinada a defraudar a la Empresa o a terceros o a eludir cualquier restricci&oacute;n contractual o legal, independientemente de que dicho intento haya causado a la Empresa alg&uacute;n perjuicio real.&nbsp;</li>
</ol>
<p>Cualquier persona que se involucre, participe o muestre un comportamiento que pueda ser interpretado, a nuestra entera discreci&oacute;n, como m&eacute;todos desleales al participar en los Servicios, incluyendo pero no limitado a:&nbsp;</p>
<ol>
    <li>la apertura o utilizaci&oacute;n de cuentas m&uacute;ltiples;&nbsp;</li>
    <li>la colusi&oacute;n o acoso a otro Usuario Final;&nbsp;</li>
    <li>el incumplimiento de estas Condiciones;&nbsp;</li>
    <li>la violaci&oacute;n de la seguridad de su Cuenta; y/o&nbsp;</li>
    <li>cualquier otro acto u omisi&oacute;n (ya sea mediante el uso de tecnolog&iacute;a automatizada o de otro tipo), estar&aacute; sujeto a una sanci&oacute;n inmediata (seg&uacute;n determinemos a nuestra entera discreci&oacute;n), que puede incluir, sin limitaci&oacute;n, la inhabilitaci&oacute;n total o parcial de la capacidad de uso o acceso a nuestros Servicios, as&iacute; como otras acciones legales. Nos reservamos el derecho a revelar o informar de cualquier blanqueo de dinero u otra actividad sospechosa a las fuerzas del orden y a las autoridades reguladoras.&nbsp;</li>
</ol>
<p>Tenga en cuenta que al acceder y utilizar los servicios de Partner, usted entiende y reconoce que puede estar expuesto a temas maduros, sexualidad humana y materiales expl&iacute;citos.&nbsp;</p>
<p>Si usted es: (i) es menor de la edad legal de visi&oacute;n madura en su estado o pa&iacute;s; (ii) est&aacute; obligado por la ley de su pa&iacute;s a no mirar material sexual; (iii) se siente ofendido por el material sexualmente expl&iacute;cito; o (iv) no tiene permiso para acceder, introducir o utilizar los servicios puestos a su disposici&oacute;n en dichos sitios web, por lo que se le pide que no introduzca los servicios de los Socios.&nbsp;</p>
<p>Usted entiende y reconoce que, en tal caso, usted es el &uacute;nico responsable del Premio que reciba, y nosotros no seremos responsables de ninguna acci&oacute;n que usted lleve a cabo que pudiera considerarse ilegal en su jurisdicci&oacute;n y/o en virtud de cualquier Ley Aplicable.&nbsp;</p>
<p>Tambi&eacute;n acepta y confirma que no redistribuir&aacute; sus Premios a nadie, y que no permitir&aacute; que ning&uacute;n menor o cualquier otra persona se beneficie de los Premios que haya ganado o ganado a trav&eacute;s de los Servicios o que acceda o utilice los servicios del Socio. Por la presente, usted exime a la Empresa de toda responsabilidad relacionada de cualquier modo con cualquier acci&oacute;n que pueda llevar a cabo o cualquier actividad en la que pueda participar y que est&eacute; relacionada de cualquier modo con la Empresa o el uso de los Servicios.</p>
<p><br></p>
<p>Cualquier intento de da&ntilde;ar deliberadamente los Servicios o la violaci&oacute;n de las leyes penales o civiles y en caso de que tal intento se haga, nos reservamos el derecho de reclamarle da&ntilde;os y perjuicios y otros recursos en la m&aacute;xima medida, seg&uacute;n lo permitido por la Ley Aplicable.</p>
<p>Nos reservamos el derecho a ejercer los medios legales que consideremos necesarios para impedir el uso no autorizado de los Servicios, incluyendo, entre otros, barreras tecnol&oacute;gicas, mapeo de IP y contactar directamente con su operador de telefon&iacute;a m&oacute;vil (celular) en relaci&oacute;n con dicho uso no autorizado.</p>
<ol>
    <li><strong>Enlaces de terceros&nbsp;</strong></li>
</ol>
<p>Algunas partes de los Servicios incluir&aacute;n enlaces a sitios web pertenecientes a terceros (como los sitios web de los Socios).&nbsp;&nbsp;<strong>No tenemos ning&uacute;n control sobre los sitios web de terceros, y todo uso de los sitios web de terceros corre por su cuenta y riesgo.</strong></p>
<p>Podemos tener relaciones directas con socios, y podemos ser compensados por dichos socios en funci&oacute;n de su interacci&oacute;n con las ofertas, sitios web o servicios de los socios.&nbsp;&nbsp;Dicha compensaci&oacute;n no es, y no debe ser vista como, una aprobaci&oacute;n o recomendaci&oacute;n por nuestra parte.&nbsp;</p>
<p><br></p>
<p><strong>No nos hacemos responsables de las p&eacute;rdidas o da&ntilde;os, directos o indirectos, que puedan derivarse del uso o la confianza depositada en la informaci&oacute;n contenida en los sitios web o servicios de cualquier socio o tercero.</strong></p>
<p><br></p>
<p>Le recomendamos que lea detenidamente las condiciones de uso y la pol&iacute;tica de privacidad de dichos sitios web y/o servicios de terceros, ya que sus condiciones y su pol&iacute;tica de privacidad, y no las nuestras, se aplicar&aacute;n a cualquiera de sus interacciones con dichos terceros, as&iacute; como a cualquier requisito o limitaci&oacute;n espec&iacute;ficos asociados a sus ofertas o servicios. Siempre debe revisar sus pr&aacute;cticas cuidadosamente antes de aceptar la prestaci&oacute;n de cualquier servicio por parte de estos terceros.</p>
<ol>
    <li><strong>Licencia</strong></li>
</ol>
<p>Sujeto al cumplimiento por su parte de las Condiciones, le concedemos una licencia personal, limitada, no comercial, no exclusiva, no sublicenciable, no transferible y libremente revocable para utilizar los Servicios.&nbsp;&nbsp;Los Servicios incluyen materiales de los que somos propietarios o licenciatarios y que est&aacute;n protegidos por derechos de autor, marcas registradas, patentes y otros Derechos de Propiedad Intelectual mundiales y por la Legislaci&oacute;n Aplicable.&nbsp;&nbsp;<strong>No le&nbsp;</strong>concedemos a usted ni a ninguna otra parte ning&uacute;n derecho, t&iacute;tulo o inter&eacute;s sobre los Servicios o cualquier material disponible en nuestros Servicios.&nbsp;</p>
<p>&nbsp;</p>
<p><strong>Usted entiende y reconoce todo lo siguiente -.</strong></p>
<ol>
    <li>El uso de los Servicios es &uacute;nicamente para entretenimiento personal y no comercial y no para ning&uacute;n otro prop&oacute;sito;</li>
    <li>Cualquier material disponible en nuestros Servicios, incluidos los que aparecen en nuestro Sitio Web, no debe ser reproducido, copiado, editado, publicado, transmitido o cargado de ninguna manera sin nuestro permiso por escrito. El registro en nuestros Servicios o la participaci&oacute;n en Ofertas no le otorgan ning&uacute;n derecho expreso o impl&iacute;cito sobre ninguna de las marcas comerciales, derechos de autor u otra informaci&oacute;n de propiedad de la Empresa;</li>
    <li>Si incumple o no acepta las Condiciones o las Condiciones de los socios, su licencia para acceder y/o utilizar los Servicios quedar&aacute; inmediatamente finalizada y ya no podr&aacute; acceder y/o utilizar nuestros Servicios.</li>
</ol>
<p><br></p>
<ol>
    <li><strong>Sin garant&iacute;a</strong></li>
</ol>
<p>Usted acepta expresamente que el uso que haga de los Servicios corre por su cuenta y riesgo y es consciente de que los Servicios y las Ofertas se proporcionan &quot;tal cual&quot; y &quot;seg&uacute;n est&eacute;n disponibles&quot;, sin ning&uacute;n tipo de representaci&oacute;n o garant&iacute;a, ya sea expresa o impl&iacute;cita (ya sea por ley, estatuto o de otro modo), incluidas, entre otras, las garant&iacute;as impl&iacute;citas de comerciabilidad, idoneidad para un fin determinado y no infracci&oacute;n (ya sea en virtud de la legislaci&oacute;n aplicable o de otro modo).&nbsp;</p>
<p>La Empresa no ofrece ninguna declaraci&oacute;n ni garant&iacute;a, expresa o impl&iacute;cita, de que su acceso a los Servicios y/o su uso de los mismos sea preciso, libre de errores, completo, ininterrumpido, continuo, o de que se corrija cualquier defecto, o de que el sitio web est&eacute; libre de virus y errores.&nbsp;&nbsp;La Empresa no se hace responsable de la funcionalidad total o parcial, la exactitud o la fiabilidad de la informaci&oacute;n o los materiales obtenidos por usted a trav&eacute;s de los Servicios.</p>
<ol>
    <li><strong>Limitaci&oacute;n de responsabilidad</strong></li>
</ol>
<p>En la medida m&aacute;xima permitida por la legislaci&oacute;n aplicable, en ning&uacute;n caso la Empresa, sus filiales, licenciantes o proveedores de servicios, ni ninguno de sus respectivos directivos, directores, agentes, socios, empleados o representantes, ser&aacute;n responsables ni asumir&aacute;n obligaci&oacute;n alguna frente a usted o cualquier persona en su nombre, independientemente de la forma de la acci&oacute;n, por cualquier da&ntilde;o o p&eacute;rdida directa, indirecta, especial, incidental o consecuente de cualquier tipo, cualquier p&eacute;rdida o cualquier da&ntilde;o derivado o relacionado con su uso autorizado o no autorizado de los Servicios, de los pagos, cualquier servicio, producto o contenido proporcionado por terceros, ya sea basado en contrato, agravio, negligencia, responsabilidad estricta. En caso de reclamaci&oacute;n, su &uacute;nico y exclusivo recurso es dejar de utilizar los Servicios.&nbsp;</p>
<p><br></p>
<p>La Empresa no ser&aacute; responsable de los actos u omisiones cometidos por su proveedor de servicios de Internet u otro tercero con el que usted haya contratado el acceso a los Servicios.&nbsp;</p>
<p>Usted acepta y confirma que: (i) usted es libre de elegir si desea utilizar los Servicios y lo hace a su entera opci&oacute;n, discreci&oacute;n y riesgo; (ii) la Empresa no ser&aacute; responsable ante usted ni ante ning&uacute;n tercero por cualquier modificaci&oacute;n, suspensi&oacute;n o interrupci&oacute;n de los Servicios; (iii) cualquier reclamaci&oacute;n o causa de acci&oacute;n, independientemente de la forma de acci&oacute;n, que usted pueda tener derivada de o relacionada con el uso de los Servicios o de estas Condiciones, deber&aacute; presentarse en el plazo de un (1) a&ntilde;o despu&eacute;s de que dicha reclamaci&oacute;n o causa de acci&oacute;n haya surgido.</p>
<p><br></p>
<p><br></p>
<ol>
    <li><strong>Indemnizaci&oacute;n</strong></li>
</ol>
<p>Por la presente, acepta indemnizar y eximir de responsabilidad a la Empresa, sus directivos, directores, empleados o agentes por cualquier reclamaci&oacute;n, asunto, queja, coste, responsabilidad y acci&oacute;n que surja o est&eacute; relacionada con el uso que usted haga de los Servicios, incluyendo, pero sin limitarse a:&nbsp;</p>
<ol>
    <li>Su incumplimiento de cualquier Ley Aplicable;&nbsp;</li>
    <li>Cualquier reclamaci&oacute;n de infracci&oacute;n o apropiaci&oacute;n indebida de cualquier derecho de terceros, incluyendo pero no limitado a cualquier, derechos de autor, derechos de privacidad o Derechos de Propiedad Intelectual en los Servicios;&nbsp;</li>
    <li>El incumplimiento por su parte de cualquier disposici&oacute;n de estas Condiciones, Condiciones del socio; o&nbsp;</li>
    <li>Su uso o mal uso de los Servicios.&nbsp;</li>
</ol>
<p>Usted se compromete a notificar con prontitud a la Empresa cualquier reclamaci&oacute;n de terceros y a cooperar plenamente con la Empresa en la defensa de dichas reclamaciones a su exclusivo cargo. Asimismo, acepta que, a la entera discreci&oacute;n de la Empresa, &eacute;sta tendr&aacute; el control de la defensa o resoluci&oacute;n de dichas reclamaciones.</p>
<p><br></p>
<ol>
    <li><strong>Varios</strong></li>
</ol>
<p>Estas Condiciones se regir&aacute;n e interpretar&aacute;n de conformidad con la legislaci&oacute;n de Chipre, sin dar efecto a sus principios o normas de conflicto de leyes. Cualquier acci&oacute;n que se emprenda en relaci&oacute;n con estas Condiciones se interpondr&aacute; exclusivamente ante los tribunales de Chipre, y usted consiente irrevocablemente en su jurisdicci&oacute;n. Podemos ceder nuestros derechos y obligaciones en virtud del presente documento a cualquier tercero sin previo aviso.&nbsp;</p>
<p>Usted no ceder&aacute; ninguno de sus derechos u obligaciones en virtud del presente, y cualquier cesi&oacute;n ser&aacute; nula y sin efecto. Todas las disposiciones del presente documento que, expresamente o por su naturaleza, deban sobrevivir a la finalizaci&oacute;n o expiraci&oacute;n de estas Condiciones para lograr su prop&oacute;sito, sobrevivir&aacute;n a la finalizaci&oacute;n o expiraci&oacute;n, incluyendo, sin limitaci&oacute;n, las Secciones 2/5/6/7/8/9/10/11/12/13 de estas Condiciones. Cualquier traducci&oacute;n de estas Condiciones de uso se proporciona &uacute;nicamente para su comodidad. Los significados de los T&eacute;rminos, Condiciones y representaciones aqu&iacute; contenidos est&aacute;n sujetos a definiciones e interpretaciones en lengua inglesa y, en caso de disputa, prevalecer&aacute; la versi&oacute;n en lengua inglesa. Cualquier traducci&oacute;n proporcionada puede no representar con exactitud la informaci&oacute;n de la versi&oacute;n original en lengua inglesa de estas Condiciones.</p>
<ol>
    <li><strong>&nbsp; &nbsp; Condiciones y finalizaci&oacute;n</strong></li>
</ol>
<p>Estas Condiciones se aplican a usted y a nosotros a partir de la fecha en que las acepte seg&uacute;n lo dispuesto anteriormente. Nos reservamos el derecho, sin previo aviso y a nuestra entera discreci&oacute;n, de finalizar estas Condiciones, revocar o renunciar a sus pagos o finalizar o suspender su acceso o uso de todos o parte de los Servicios con efecto inmediato, en cualquier momento, incluyendo, <em>entre otros,&nbsp;</em>si sospechamos a nuestra entera discreci&oacute;n que (i) ha participado o est&aacute; participando en una actividad fraudulenta o en cualquier actividad ilegal en virtud de cualquier Ley Aplicable; (ii) nos ha proporcionado informaci&oacute;n falsa o nos ha ocultado cualquier informaci&oacute;n; o (iii) ha participado en una actividad que vulnera (incluidas supuestas vulneraciones) las presentes Condiciones, las Condiciones de socio.&nbsp;</p>
<p><br></p>
<p><br></p>
<ol>
    <li><strong>Cambios</strong></li>
</ol>
<p>Nos reservamos el derecho a modificar cualquiera de las Condiciones en cualquier momento publicando las versiones revisadas en nuestro Sitio Web o notificando de otro modo dicha modificaci&oacute;n por correo electr&oacute;nico, a trav&eacute;s de los Servicios o mediante un anuncio en nuestro Sitio Web. La notificaci&oacute;n se considerar&aacute; efectuada veinticuatro (24) horas despu&eacute;s de que se le env&iacute;e el correo electr&oacute;nico.&nbsp;</p>
<p>Las notificaciones publicadas en nuestro Sitio Web se considerar&aacute;n realizadas cinco (5) d&iacute;as despu&eacute;s de la publicaci&oacute;n inicial. Nos reservamos el derecho a determinar la forma y los medios de proporcionar notificaciones a nuestro Usuario final. Las versiones revisadas entrar&aacute;n en vigor tras el periodo de notificaci&oacute;n aplicable, a menos que usted acepte expresamente las versiones revisadas con anterioridad haciendo clic en el bot&oacute;n de aceptaci&oacute;n. Su aceptaci&oacute;n expresa o el uso continuado de los Servicios tras el periodo de notificaci&oacute;n aplicable constituir&aacute; su aceptaci&oacute;n de quedar vinculado por las Condiciones revisadas, seg&uacute;n corresponda. &nbsp;&nbsp;Si alguna disposici&oacute;n de las Condiciones se considera inaplicable, dicha disposici&oacute;n se modificar&aacute; &uacute;nicamente en la medida necesaria para hacerla aplicable y no afectar&aacute; a la aplicabilidad o validez de las disposiciones restantes, que permanecer&aacute;n en pleno vigor y efecto.</p>
<p><br></p>
<p><br></p>
<ol>
    <li><strong>Contacte con nosotros</strong></li>
</ol>
<p>Si tiene alguna pregunta, desea hacernos llegar sus comentarios o recibir m&aacute;s informaci&oacute;n sobre nosotros, no dude en enviarnos un correo electr&oacute;nico.&nbsp;</p>
<p><br></p>`
let pt_text =  `<p style="text-align:center;font-size:16pt!important;" class="p14">
<span class="s1"><strong>Cybersays.Club - Termos de uso</strong></span>
</p>
<p class="p36">
<span class="s16"
  ><span class="Apple-converted-space">&nbsp; &nbsp; &nbsp; &nbsp; </span
  >&Uacute;ltima revis&atilde;o: </span
><span class="s17">Fevereiro de 2024</span>
</p>
<p class="p6">
<span class="s16"
  >Estes Termos de Uso ("<strong>Termos</strong>") constituem um acordo
  legal vinculativo entre a Pythia Grant Ltd. ("<strong>Empresa</strong>",
  "<strong>n&oacute;s</strong>" ou "<strong>nosso</strong>") e voc&ecirc;
  ("<strong>Usu&aacute;rio Final</strong>", "<strong>voc&ecirc;</strong>"
  ou "<strong>seu</strong>"), e regem seu acesso e uso de todos os
  recursos e outros servi&ccedil;os fornecidos pela Empresa, incluindo,
  sem limita&ccedil;&atilde;o, nosso site:
  <a href="http://www.Cybersays.club"
    ><span class="s3">www.Cybersays.club</span></a
  ></span
>
(<span class="s16"
  ><strong>Site</strong>"; coletivamente, os
  "<strong>Servi&ccedil;os</strong>").
</span>
</p>
<p class="p9">&nbsp;</p>
<p class="p4">
<span class="s16"
  >Ao registrar uma conta e acessar os Servi&ccedil;os, voc&ecirc; afirma
  que leu, entendeu e concordou em cumprir estes Termos, bem como nossa </span
><span class="s17"><em>Pol&iacute;tica de Privacidade</em></span
><span class="s16"
  >, que pode ser atualizada periodicamente, cada uma delas incorporada a
  este documento por refer&ecirc;ncia </span
>("<strong>Pol&iacute;ticas</strong>").
</p>
<p class="p4">
<span class="s16"
  >Se n&atilde;o concordar com estas Pol&iacute;ticas, n&atilde;o
  dever&aacute; criar uma conta nem usar ou acessar os
  Servi&ccedil;os</span
>.<span class="Apple-converted-space">&nbsp; </span>Ao usar nossos
Servi&ccedil;os, voc&ecirc; aceita inequivocamente os termos e
condi&ccedil;&otilde;es de nossos Parceiros (conforme definido abaixo),
incluindo, entre outros, os termos e condi&ccedil;&otilde;es especificados
em
<a href="http://www.ImLive.com"
  ><span class="s18">www.ImLive.com</span></a
>
("<strong>Termos de Parceiros</strong>").
</p>
<p class="p4">
Estes Termos complementam todos os contratos anteriores que voc&ecirc;
possa ter celebrado conosco ou com qualquer uma de nossas Afiliadas.
Portanto, recomendamos que voc&ecirc; leia atentamente estes Termos e
quaisquer termos que possam estar relacionados ao seu uso dos
Servi&ccedil;os.
</p>
<p class="p4">
<span class="s16"
  >Poderemos revisar os Termos a qualquer momento, atualizando-os em
  nossos Servi&ccedil;os. Voc&ecirc; deve visitar periodicamente estes
  Termos para analisar os termos atuais que se aplicam ao seu uso dos
  Servi&ccedil;os. Qualquer uso dos Servi&ccedil;os por voc&ecirc;
  ap&oacute;s a publica&ccedil;&atilde;o de tais altera&ccedil;&otilde;es
  constituir&aacute; sua aceita&ccedil;&atilde;o destes Termos conforme
  modificados. Poderemos, a nosso crit&eacute;rio exclusivo e a qualquer
  momento, interromper o fornecimento dos Servi&ccedil;os, ou de qualquer
  parte deles, sem aviso pr&eacute;vio.
</span>
</p>
<p class="p6">
<span class="s16"
  >VOC&Ecirc; RECONHECE QUE OS SERVI&Ccedil;OS S&Atilde;O ESTRITAMENTE
  PARA FINS DE ENTRETENIMENTO APENAS.</span
>
</p>
<p class="p9">&nbsp;</p>
<p class="p4">
<span class="s16"
  >Ao registrar uma conta ou acessar os Servi&ccedil;os, at&eacute; o
  limite m&aacute;ximo permitido pela Legisla&ccedil;&atilde;o
  Aplic&aacute;vel (conforme definido mais adiante), voc&ecirc; concorda
  que qualquer reivindica&ccedil;&atilde;o, disputa ou controv&eacute;rsia
  de qualquer natureza decorrente ou relacionada a estes Termos ou ao seu
  uso dos Servi&ccedil;os dever&aacute; ser resolvida de acordo com o
  processo descrito na Se&ccedil;&atilde;o 13. "Diversos" abaixo.</span
>
</p>
<ol class="ol1">
<li class="li37"><strong>DEFINI&Ccedil;&Otilde;ES</strong></li>
</ol>
<p class="p6">
<span class="s16"
  >Para os fins deste Contrato, os seguintes termos em letras
  mai&uacute;sculas ter&atilde;o o significado atribu&iacute;do a eles
  neste documento:</span
>
</p>
<ol class="ol1">
<ol class="ol1">
  <li class="li6">
    "<strong>Conta</strong>"
    <span class="s16"
      >significa uma conta que voc&ecirc; criou por meio do nosso Site e
      que lhe permite acessar os Servi&ccedil;os.</span
    >
  </li>
  <li class="li6">
    <strong>"Informa&ccedil;&otilde;es da conta</strong>"
    <span class="s16"
      >significa qualquer tipo de informa&ccedil;&atilde;o que possamos
      solicitar do Usu&aacute;rio Final no processo de registro,
      incluindo, entre outros, o endere&ccedil;o de e-mail, o nome de
      usu&aacute;rio, os detalhes da ID do Facebook e do Google e os
      detalhes da ID da conta do </span
    >site do <span class="s16">seu </span>parceiro.
  </li>
  <li class="li6">
    <strong>"Afiliada" </strong
    ><span class="s16"
      >significa as subsidi&aacute;rias, joint ventures e outras entidades
      corporativas da Empresa e seus agentes, consultores,
      funcion&aacute;rios, executivos e diretores.</span
    >
  </li>
  <li class="li6">
    <strong>"Lei aplic&aacute;vel" </strong
    ><span class="s16"
      >significa qualquer lei, estatuto, regra, regulamento, ordem,
      circular, decreto, diretriz, julgamento, decis&atilde;o ou outro
      mandato semelhante de qualquer autoridade governamental central,
      nacional, estadual ou local aplic&aacute;vel que tenha
      jurisdi&ccedil;&atilde;o competente ou aplica&ccedil;&atilde;o
      relacionada ao Usu&aacute;rio Final ou ao assunto em
      quest&atilde;o</span
    >.
  </li>
  <li class="li6">
    <strong>"Direitos de Propriedade Intelectual" </strong
    ><span class="s16"
      >significa quaisquer patentes, marcas registradas, direitos
      autorais, direitos de design (registr&aacute;veis ou n&atilde;o),
      logotipos, direitos autorais, nomes comerciais, comerciais e de
      dom&iacute;nio, direitos morais, know-how, segredos comerciais,
      direitos em bancos de dados, direitos em software de computador e
      quaisquer outros direitos ou obriga&ccedil;&otilde;es semelhantes,
      registr&aacute;veis ou n&atilde;o (e incluindo todos os pedidos e
      renova&ccedil;&otilde;es ou extens&otilde;es de tais direitos) em
      qualquer pa&iacute;s.</span
    >
  </li>
  <li class="li6">
    <strong>"Ofertas" </strong
    ><span class="s16"
      >significa quaisquer ofertas especiais on-line e suas regras,
      conforme apresentadas no site e que podem ser alteradas
      periodicamente pelos Parceiros ou pela Empresa nos Servi&ccedil;os
      dos quais o Usu&aacute;rio Final pode participar.&nbsp;</span
    >
  </li>
</ol>
</ol>
<p class="p38">
<span class="s16"
  >A Oferta dever&aacute; incluir a possibilidade de dobrar o valor
  inicial comprado pelo Usu&aacute;rio Final, com rela&ccedil;&atilde;o
  apenas &agrave; sua compra inicial, ou seja, para os 5 cr&eacute;ditos
  iniciais comprados, o Usu&aacute;rio receber&aacute; 10 cr&eacute;ditos
  para uso na ImLive.com.
</span>
</p>
<p class="p38">
<span class="s16"
  >Al&eacute;m disso, o Usu&aacute;rio ser&aacute; eleg&iacute;vel para
  receber um valor real de cashback. </span
>Devido &agrave; diferen&ccedil;a de moedas, os valores do montante de
cashback, na Oferta, ser&atilde;o os seguintes:
</p>
<ul class="ul1">
<li class="li6">
  <span class="s16"
    >Para os 5 (cinco) cr&eacute;ditos iniciais a serem comprados em
    d&oacute;lares americanos ou em euros, o usu&aacute;rio
    receber&aacute; US$ 10 (dez d&oacute;lares americanos) ao gastar todos
    os 10 cr&eacute;ditos.
  </span>
</li>
<li class="li6">
  <span class="s16"
    >Para os primeiros e iniciais 5 (cinco) Cr&eacute;ditos - a serem
    comprados em libras esterlinas - o Usu&aacute;rio receber&aacute;
    US$12,50 (doze d&oacute;lares e cinquenta centavos americanos), ao
    gastar os 10 cr&eacute;ditos completos.
  </span>
</li>
</ul>
<ol class="ol1">
<ol class="ol1">
  <li class="li6">
    <strong>"Parceiro(s)" </strong
    ><span class="s16"
      >significa qualquer prestador de servi&ccedil;os terceirizado que
      forne&ccedil;a Ofertas ao Usu&aacute;rio Final nos Servi&ccedil;os
      ou por meio deles.</span
    >
  </li>
  <li class="li6">
    <strong>"Pr&ecirc;mio</strong
    ><span class="s16"
      >" significa quaisquer benef&iacute;cios ou vantagens que os
      Usu&aacute;rios Finais possam receber ao concluir com &ecirc;xito as
      Ofertas sujeitas aos Termos, Termos do Parceiro</span
    >.
  </li>
  <li class="li6">
    <strong>"Provedor" </strong
    ><span class="s16">conforme definido na Se&ccedil;&atilde;o 6.</span>
  </li>
  <li class="li6">
    <strong>"Website(s)</strong>"
    <span class="s16"
      >significa o site,
      <a href="http://www.Cybersays.club"
        ><span class="s3">www.Cybersays.club</span></a
      ></span
    >
    <span class="s16"
      >e quaisquer outros sites conforme definido pela Empresa, a seu
      crit&eacute;rio exclusivo, de tempos em tempos</span
    >.
  </li>
</ol>
</ol>
<p class="p39">&nbsp;</p>
<ol class="ol1">
<li class="li37">
  <strong>Uso de nossos servi&ccedil;os e ofertas</strong>
</li>
</ol>
<p class="p4">
<span class="s16"
  >Para acessar ou participar das Ofertas disponibilizadas em nosso
  Website, &eacute; necess&aacute;rio criar uma Conta conosco.
</span>
</p>
<p class="p4">
<span class="s16"
  >Observe que os Servi&ccedil;os podem n&atilde;o ser totalmente
  compat&iacute;veis com todas as plataformas, dispositivos e sistemas
  operacionais; portanto, recomendamos que voc&ecirc; verifique todos os
  requisitos de compatibilidade por conta pr&oacute;pria e atualize
  periodicamente o software de terceiros, quando necess&aacute;rio, para
  receber os Servi&ccedil;os, as atualiza&ccedil;&otilde;es e participar
  das Ofertas dispon&iacute;veis em nosso Site.
</span>
</p>
<p class="p40">
<span class="s16"
  >Ao criar uma conta, voc&ecirc; pode ser solicitado a fornecer
  informa&ccedil;&otilde;es sobre a conta, o que pode envolver:
</span>
</p>
<ol class="ol3">
<li class="li40">
  <span class="s16"
    >Registro de um nome de usu&aacute;rio &uacute;nico e senha (se
    aplic&aacute;vel);
  </span>
</li>
<li class="li40">
  <span class="s16"
    >Fornecimento de informa&ccedil;&otilde;es de contato, como seu
    endere&ccedil;o de e-mail;
  </span>
</li>
<li class="li6">
  <span class="s16"
    >Fornecimento quaisquer outras informa&ccedil;&otilde;es que
    solicitarmos durante o processo de registro da conta.
  </span>
</li>
</ol>
<p class="p17">&nbsp;</p>
<p class="p40">
Ao acessar ou usar nossos Servi&ccedil;os ou participar de nossas Ofertas,
voc&ecirc; concorda em cumprir todos os itens a seguir:
</p>
<ol class="ol3">
<li class="li40">
  <span class="s16"
    >Voc&ecirc; atingiu a maioridade no territ&oacute;rio em que
    reside;</span
  >
</li>
<li class="li40">
  <span class="s16"
    >Voc&ecirc; &eacute; o &uacute;nico respons&aacute;vel por manter suas
    informa&ccedil;&otilde;es de conta seguras e por qualquer coisa que
    ocorra em sua conta, independentemente de as a&ccedil;&otilde;es terem
    sido tomadas por voc&ecirc; ou por um terceiro n&atilde;o autorizado
    que tenha obtido acesso &agrave; sua conta;</span
  >
</li>
<li class="li40">
  <span class="s16"
    >Voc&ecirc; dever&aacute; se registrar apenas para uma &uacute;nica
    Conta e n&atilde;o dever&aacute; usar ou acessar v&aacute;rias Contas
    ao mesmo tempo;</span
  >
</li>
<li class="li40">
  <span class="s16"
    >Voc&ecirc; n&atilde;o dever&aacute; criar uma Conta com uma
    identidade falsa ou fornecer informa&ccedil;&otilde;es incorretas, nem
    criar uma Conta em nome de algu&eacute;m que n&atilde;o seja
    voc&ecirc; mesmo;
  </span>
</li>
<li class="li40">
  <span class="s16"
    >Voc&ecirc; n&atilde;o dever&aacute; compartilhar ou dar acesso
    &agrave;s suas Informa&ccedil;&otilde;es de Conta a ningu&eacute;m,
    nem fazer qualquer outra coisa que possa colocar em risco a
    seguran&ccedil;a da sua Conta;
  </span>
</li>
<li class="li40">
  <span class="s16"
    >Voc&ecirc; dever&aacute; nos notificar imediatamente, conforme
    detalhado na Se&ccedil;&atilde;o 16 "Fale Conosco" destes Termos, caso
    tenha perdido o controle de sua senha ou suspeite de atividade
    n&atilde;o autorizada em sua Conta, inclusive roubo ou
    divulga&ccedil;&atilde;o n&atilde;o autorizada de suas
    Informa&ccedil;&otilde;es da Conta;</span
  >
</li>
<li class="li40">
  <span class="s16"
    >Voc&ecirc; n&atilde;o nos responsabilizar&aacute; por qualquer perda,
    dano, acesso n&atilde;o autorizado ou qualquer viola&ccedil;&atilde;o
    de sua Conta e pela divulga&ccedil;&atilde;o de suas
    Informa&ccedil;&otilde;es da Conta.</span
  >
</li>
</ol>
<p class="p40">
<span class="s16"
  >Como titular da sua Conta, voc&ecirc; &eacute; o &uacute;nico
  respons&aacute;vel pelo cumprimento destes Termos e dos Termos de
  Parceiros, e somente voc&ecirc; tem direito a todos os benef&iacute;cios
  decorrentes deles.
</span>
</p>
<p class="p9">&nbsp;</p>
<ol class="ol1">
<li class="li40"><strong>Verifica&ccedil;&atilde;o de conta</strong></li>
</ol>
<p class="p40">
<span class="s16"
  >Reservamo-nos o direito de verificar seus detalhes de registro, como
  nome, endere&ccedil;o e idade, a qualquer momento, solicitando
  determinados documentos. Caso o usu&aacute;rio n&atilde;o forne&ccedil;a
  a documenta&ccedil;&atilde;o exigida, poderemos, a nosso crit&eacute;rio
  exclusivo, recusar o fornecimento dos Servi&ccedil;os e reter quaisquer
  Pr&ecirc;mios.</span
>
</p>
<p class="p40">
<span class="s16"
  >Voc&ecirc; concorda em atualizar quaisquer informa&ccedil;&otilde;es ou
  dados que forneceu ou em fornecer documenta&ccedil;&atilde;o adicional
  como parte dos esfor&ccedil;os cont&iacute;nuos para evitar atividades
  ilegais e fraudulentas ou para cumprir quaisquer outras pol&iacute;ticas
  ou protocolos que decidirmos implementar. Voc&ecirc; concorda que todas
  as informa&ccedil;&otilde;es e dados que nos fornecer, seja no momento
  em que se registrar para uma conta ou em qualquer momento posterior,
  ser&atilde;o verdadeiros, precisos e verific&aacute;veis em todos os
  aspectos e que, ao fornecer tais informa&ccedil;&otilde;es e dados,
  voc&ecirc; consente que os enviemos a provedores de
  verifica&ccedil;&atilde;o terceirizados.</span
>
</p>
<p class="p17">&nbsp;</p>
<ol class="ol1">
<li class="li37">
  <strong>Informa&ccedil;&otilde;es pessoais e do dispositivo</strong>
</li>
</ol>
<p class="p4">
<span class="s16"
  >O uso dos Servi&ccedil;os requer uma conex&atilde;o com a Internet para
  nossos servidores, e voc&ecirc; entende e reconhece que &eacute; o
  &uacute;nico respons&aacute;vel pelo pagamento de quaisquer taxas,
  inclusive taxas de conex&atilde;o com a Internet ou de celular,
  necess&aacute;rias para acessar ou usar nossos Servi&ccedil;os.<span
    class="Apple-converted-space"
    >&nbsp; </span
  >Talvez precisemos coletar determinadas informa&ccedil;&otilde;es suas e
  de seu dispositivo habilitado para Internet para disponibilizar o
  software e os Servi&ccedil;os, como suas Informa&ccedil;&otilde;es de
  Conta, sistema de hardware, dados de conex&atilde;o &agrave; Internet e
  quaisquer outros dados relacionados &agrave; opera&ccedil;&atilde;o e ao
  fornecimento dos Servi&ccedil;os.<span class="Apple-converted-space"
    >&nbsp; </span
  >Observe que usaremos e reteremos essas informa&ccedil;&otilde;es de
  acordo com nossa </span
><span class="s17"><em>Pol&iacute;tica de Privacidade.</em></span>
</p>
<ol class="ol1">
<li class="li37"><strong>Ofertas </strong></li>
</ol>
<p class="p29">
<span class="s16"
  >Ao acessar ou usar nossos Servi&ccedil;os, voc&ecirc; poder&aacute;
  optar por selecionar e participar de Ofertas, conforme apresentadas no
  local e que podem ser alteradas periodicamente.
</span>
</p>
<p class="p11">&nbsp;</p>
<p class="p29">
<span class="s17"
  ><strong>Voc&ecirc; entende e reconhece isso</strong></span
><span class="s16">: </span>
</p>
<ol class="ol3">
<li class="li40">
  <span class="s21"
    >Os Servi&ccedil;os lhe fornecer&atilde;o Ofertas e, quando voc&ecirc;
    optar por participar de uma Oferta, ser&aacute; redirecionado para o
    site do Parceiro.</span
  >
</li>
<li class="li40">
  <span class="s16"
    >Atuamos apenas como uma intermedi&aacute;ria, fornecendo uma
    plataforma para exibir ofertas de parceiros.
  </span>
</li>
<li class="li40">
  <span class="s16"
    >N&atilde;o somos respons&aacute;veis pelo conte&uacute;do, qualidade
    ou cumprimento dessas Ofertas, e quaisquer problemas ou disputas
    decorrentes dessas intera&ccedil;&otilde;es devem ser resolvidos
    diretamente com os Parceiros da Oferta.</span
  >
</li>
<li class="li40">
  <span class="s16"
    >Voc&ecirc; est&aacute; ciente de que &eacute; o &uacute;nico
    respons&aacute;vel por analisar e aderir aos termos de uso do Parceiro
    relacionados a cada Oferta relevante.
  </span>
</li>
<li class="li6">
  <span class="s16"
    >N&atilde;o assumimos nenhuma responsabilidade nem endossamos a
    precis&atilde;o ou a disponibilidade de qualquer conte&uacute;do ou
    material disponibilizado na Oferta ou nos servi&ccedil;os do
    Parceiro.</span
  >
</li>
</ol>
<p class="p11">&nbsp;</p>
<p class="p29">
<span class="s16"
  >Recomendamos enfaticamente que voc&ecirc; salve ou fa&ccedil;a uma
  captura de tela de cada Oferta conclu&iacute;da com &ecirc;xito, pois
  poder&aacute; ser solicitado que voc&ecirc; nos forne&ccedil;a essa
  prova no caso de qualquer problema que possa ocorrer ou surgir
  relacionado &agrave; Oferta.
  <span class="Apple-converted-space">&nbsp; </span>Voc&ecirc; reconhece e
  concorda que poderemos alterar, modificar ou atualizar os Termos
  periodicamente e que esses termos revisados se aplicar&atilde;o ao seu
  uso dos Servi&ccedil;os, bem como a todas as Ofertas subsequentes das
  quais voc&ecirc; participar. Voc&ecirc; tamb&eacute;m concorda em
  revisar estes Termos, os Termos de Parceiros e quaisquer termos
  relativos &agrave; entrada ou participa&ccedil;&atilde;o em qualquer
  Oferta.</span
>
</p>
<p class="p11">&nbsp;</p>
<p class="p29">
<span class="s17">Levamos fraudes muito a s&eacute;rio</span
><span class="s16"
  >. Observe que, al&eacute;m de tomar qualquer a&ccedil;&atilde;o legal
  desej&aacute;vel ou necess&aacute;ria, reservamo-nos o direito de
  encerrar o seu uso dos Servi&ccedil;os e confiscar o seu Pr&ecirc;mio.
  N&oacute;s o notificaremos antes de tal confisco ou rescis&atilde;o para
  lhe dar a oportunidade de fazer uma apela&ccedil;&atilde;o por meio dos
  Servi&ccedil;os; desde que, no entanto, nossa
  determina&ccedil;&atilde;o, a nosso crit&eacute;rio exclusivo, seja
  final e definitiva para voc&ecirc;.</span
>
</p>
<p class="p11">&nbsp;</p>
<ol class="ol1">
<li class="li37">
  <span class="s16"><strong>Pagamento e pr&ecirc;mios </strong></span>
</li>
</ol>
<p class="p40">
<span class="s16"
  >Ao usar nossos Servi&ccedil;os, voc&ecirc; entende e reconhece que
  poder&aacute; receber determinados Pr&ecirc;mios conforme apresentados
  em nosso Site. O n&atilde;o cumprimento de qualquer uma das
  disposi&ccedil;&otilde;es contidas nos Termos ou nos Termos de Parceiros
  resultar&aacute; no encerramento de sua Conta e na perda da
  elegibilidade para um pagamento.
</span>
</p>
<p class="p29">
<span class="s1"><strong>Limita&ccedil;&atilde;o de idade</strong></span
>. As informa&ccedil;&otilde;es contidas neste Site, em nossos
Servi&ccedil;os ou em quaisquer recompensas associadas
<span class="s1"><strong>n&atilde;o se destinam </strong></span>&agrave;
distribui&ccedil;&atilde;o ou ao uso por qualquer pessoa em qualquer
pa&iacute;s em que tal distribui&ccedil;&atilde;o ou uso seja
contr&aacute;rio &agrave;s leis ou aos regulamentos locais ou a qualquer
Lei Aplic&aacute;vel, ou a qualquer pessoa com menos de 18 (dezoito) anos
de idade ou com idade inferior &agrave; da maioridade em seu pa&iacute;s
de resid&ecirc;ncia ou nacionalidade.<span class="Apple-converted-space"
  >&nbsp; </span
>&Eacute; de responsabilidade dos visitantes e Usu&aacute;rios Finais
deste Site verificar os termos e cumprir todas as Leis Aplic&aacute;veis e
estes Termos e os Termos de Parceiros.
</p>
<p class="p9">&nbsp;</p>
<p class="p40">
<span class="s16"
  >Por meio deste instrumento, o usu&aacute;rio isenta a Empresa de toda e
  qualquer responsabilidade relacionada, de qualquer forma, a quaisquer
  a&ccedil;&otilde;es que possa tomar ou a qualquer atividade em que possa
  se envolver e que esteja relacionada, de qualquer forma, &agrave;
  Empresa ou ao uso dos Servi&ccedil;os.</span
>
</p>
<p class="p40">
<span class="s17">Observa&ccedil;&atilde;o</span
><span class="s16"
  >: podemos usar outros terceiros para realizar determinadas
  fun&ccedil;&otilde;es relacionadas aos neg&oacute;cios, como
  <a href="https://www.xoxoday.com/"
    ><span class="s3">https://www.xoxoday.com/</span></a
  ></span
>
e/ou
<a href="https://www.paypal.com/cy/home"
  ><span class="s18">https://www.paypal.com/cy/home</span></a
><span class="s16"><strong> ("Provedores").&nbsp;</strong></span>
</p>
<p class="p6">
<span class="s16"
  >Voc&ecirc; &eacute; o &uacute;nico respons&aacute;vel por analisar os
  termos e condi&ccedil;&otilde;es que regem seu uso dos servi&ccedil;os
  do Provedor. Voc&ecirc; entende e reconhece que os termos de
  servi&ccedil;os do Provedor podem ser diferentes destes Termos.
</span>
</p>
<p class="p4">
<span class="s16"
  >A elegibilidade para os Pr&ecirc;mios, conforme apresentada no local e
  que pode ser alterada de tempos em tempos, &eacute; exclusivamente para
  o Usu&aacute;rio Final que se registrou com sucesso em nossos
  Servi&ccedil;os, que tem uma Conta ativa v&aacute;lida e que cumpre
  estes Termos e os Termos de Parceiros.
</span>
</p>
<p class="p4">
<span class="s16"
  >Voc&ecirc; entende e aceita que os pagamentos aos quais voc&ecirc; pode
  ter direito s&atilde;o estritamente para seu pr&oacute;prio
  benef&iacute;cio e que ningu&eacute;m mais tem direito a eles ou a se
  beneficiar deles. O n&atilde;o cumprimento destes Termos ou dos Termos
  de Parceiros poder&aacute; resultar no fechamento de sua Conta e na
  perda de todos os pagamentos acumulados por meio do uso dos
  Servi&ccedil;os.&nbsp;</span
>
</p>
<p class="p4">
<span class="s16"
  >Todos os pagamentos poder&atilde;o ser confiscados, revogados,
  exclu&iacute;dos, considerados nulos, se sua Conta for encerrada ou
  suspensa por qualquer motivo, a nosso crit&eacute;rio exclusivo e
  absoluto, ou se os Servi&ccedil;os n&atilde;o estiverem mais
  dispon&iacute;veis.
</span>
</p>
<p class="p41">
<span class="s16"
  >Se sua Conta for encerrada, suspensa e/ou se qualquer pagamento de sua
  Conta for seletivamente confiscado, revogado, exclu&iacute;do,
  considerado nulo, nenhum reembolso ser&aacute; concedido, nenhum
  pagamento ser&aacute; creditado a voc&ecirc; ou convertido em dinheiro
  ou outras formas de reembolso.</span
>
</p>
<ol class="ol1">
<li class="li37">
  <span class="s16"
    ><strong
      >Representa&ccedil;&otilde;es dos Usu&aacute;rios Finais e Usos
      Proibidos</strong
    ></span
  >
</li>
</ol>
<p class="p4">
<span class="s16"
  >Voc&ecirc; poder&aacute; usar os Servi&ccedil;os somente para fins
  legais. Voc&ecirc; &eacute; o &uacute;nico respons&aacute;vel por todas
  as suas atividades relacionadas aos Servi&ccedil;os. Voc&ecirc; garante
  e declara que est&aacute; proibido (e n&atilde;o permitir&aacute; que
  terceiros) de realizar qualquer a&ccedil;&atilde;o que:
</span>
</p>
<ol class="ol3">
<li class="li37">
  <span class="s16"
    >Seja ilegal, violento, amea&ccedil;ador, abusivo, invasivo da
    privacidade de qualquer pessoa, assediador, difamat&oacute;rio,
    calunioso, falso, enganoso, fraudulento, enganoso, inver&iacute;dico,
    tortuoso, ofensivo ou inadequado, conforme determinarmos a nosso
    exclusivo crit&eacute;rio;
  </span>
</li>
<li class="li37">
  <span class="s16"
    >Infringe, viola ou se apropria indevidamente de qualquer direito de
    terceiros, incluindo direitos autorais, marcas registradas, patentes,
    segredos comerciais, direitos morais, direitos de privacidade ou
    qualquer outra propriedade intelectual ou direito de propriedade que
    possa existir ou vir a existir no futuro;
  </span>
</li>
<li class="li37">
  <span class="s16"
    >Viola qualquer direito de publicidade ou outro direito de qualquer
    pessoa ou entidade, ou qualquer lei ou obriga&ccedil;&atilde;o
    contratual, incluindo, sem limita&ccedil;&atilde;o, direitos de acordo
    com leis e regulamentos de prote&ccedil;&atilde;o de dados, anti-spam
    e privacidade;
  </span>
</li>
<li class="li37">
  <span class="s16"
    >Possa opiar, modificar, adaptar, traduzir para qualquer idioma,
    distribuir ou criar trabalhos derivados com base nos
    Servi&ccedil;os;</span
  >
</li>
<li class="li37">
  <span class="s16"
    >Sublicenciar, sublocar, arrendar, emprestar, ceder, vender,
    licenciar, distribuir, alugar, exportar, reexportar ou conceder outros
    direitos sobre os Servi&ccedil;os, e qualquer tentativa de tomar essa
    medida ser&aacute; nula;</span
  >
</li>
<li class="li37">
  <span class="s16"
    >Descompilar, desmontar, fazer engenharia reversa ou tentar
    reconstruir, identificar ou descobrir qualquer c&oacute;digo-fonte,
    ideias subjacentes, t&eacute;cnicas de interface de usu&aacute;rio
    subjacentes ou algoritmos dos Servi&ccedil;os por qualquer meio;
  </span>
</li>
<li class="li37">
  <span class="s16"
    >Remova, oculte ou altere quaisquer avisos de direitos autorais e/ou
    outros avisos de propriedade contidos nos Servi&ccedil;os ou
    conectados a eles;</span
  >
</li>
<li class="li37">
  <span class="s16"
    >Envolva atividade comercial n&atilde;o expressamente permitida por
    n&oacute;s;
  </span>
</li>
<li class="li37">
  <span class="s16"
    >Contenha qualquer software nocivo ou malicioso ou c&oacute;digos de
    computador, arquivos ou programas projetados ou destinados a
    danificar, interromper, interferir ou limitar a funcionalidade
    adequada de qualquer software ou hardware, ou que permitam obter
    acesso n&atilde;o autorizado a qualquer sistema, dados, senha ou
    outras informa&ccedil;&otilde;es nossas, de nossos Usu&aacute;rios
    Finais ou de qualquer outro indiv&iacute;duo ou entidade;
  </span>
</li>
<li class="li37">
  <span class="s16"
    >Usar ou lan&ccedil;ar qualquer sistema automatizado, incluindo, sem
    limita&ccedil;&atilde;o, "rob&ocirc;s", "<em>spiders</em>", "leitores
    off-line", etc., que acessem os Servi&ccedil;os de forma a enviar mais
    mensagens de solicita&ccedil;&atilde;o aos nossos servidores do que um
    ser humano pode razoavelmente produzir no mesmo per&iacute;odo de
    tempo;
  </span>
</li>
<li class="li37">
  <span class="s16"
    >Transmitir dados inv&aacute;lidos, <em>worms</em>, v&iacute;rus,
    cavalos de Troia ou qualquer c&oacute;digo de natureza destrutiva;
  </span>
</li>
<li class="li37">
  <span class="s16"
    >Transmitir <em>spam</em>, correntes, materiais relacionados a
    campanhas pol&iacute;ticas, solicita&ccedil;&otilde;es comerciais,
    correspond&ecirc;ncias em massa ou qualquer forma de spam ou outros
    textos ou e-mails n&atilde;o solicitados;</span
  >
</li>
<li class="li37">
  <span class="s16"
    >Se fizer passar por qualquer indiv&iacute;duo ou entidade, incluindo,
    sem limita&ccedil;&atilde;o, nossos funcion&aacute;rios ou
    representantes;
  </span>
</li>
<li class="li37">
  <span class="s16"
    >Usar um n&uacute;mero de telefone ou e-mail falso, identidade ou
    tentativa de usar a Conta de outro usu&aacute;rio;
  </span>
</li>
<li class="li37">
  <span class="s16"
    >Usar os Servi&ccedil;os para lavagem de dinheiro, financiamento de
    terrorismo ou outras atividades ou finan&ccedil;as il&iacute;citas;
  </span>
</li>
<li class="li37">
  <span class="s16"
    >Visar crian&ccedil;as ou indiv&iacute;duos com idade inferior
    &agrave; da maioridade em qualquer jurisdi&ccedil;&atilde;o em que os
    Servi&ccedil;os sejam disponibilizados;</span
  >
</li>
<li class="li37">
  <span class="s16"
    >Envolver-se em qualquer atividade que interrompa ou tente interromper
    a opera&ccedil;&atilde;o dos Servi&ccedil;os.
  </span>
</li>
<li class="li37">
  <span class="s16"
    >Realizar qualquer atividade com a inten&ccedil;&atilde;o de fraudar a
    Empresa ou qualquer terceiro ou contornar qualquer
    restri&ccedil;&atilde;o contratual ou legal, independentemente de tal
    tentativa ter causado qualquer dano real &agrave; Empresa.
  </span>
</li>
</ol>
<p class="p4">
<span class="s16"
  >Qualquer pessoa que se envolva, participe ou exiba comportamento que
  possa ser interpretado, a nosso crit&eacute;rio exclusivo, como
  m&eacute;todos injustos ao participar dos Servi&ccedil;os, incluindo,
  entre outros
</span>
</p>
<ol class="ol3">
<li class="li37">
  <span class="s16">a abertura ou o uso de v&aacute;rias contas; </span>
</li>
<li class="li37">
  <span class="s16"
    >conluio com ou ass&eacute;dio de outro Usu&aacute;rio Final;
  </span>
</li>
<li class="li37">
  <span class="s16">viola&ccedil;&atilde;o destes Termos; </span>
</li>
<li class="li37">
  <span class="s16"
    >viola&ccedil;&atilde;o da seguran&ccedil;a de sua conta; e/ou
  </span>
</li>
<li class="li40">
  <span class="s16"
    >qualquer outro ato ou omiss&atilde;o (seja por meio do uso de
    tecnologia automatizada ou de outra forma), estar&aacute; sujeito a
    san&ccedil;&otilde;es imediatas (conforme determinado por n&oacute;s a
    nosso exclusivo crit&eacute;rio), que podem incluir, sem
    limita&ccedil;&atilde;o, a desativa&ccedil;&atilde;o da capacidade de
    uso ou acesso aos nossos Servi&ccedil;os, no todo ou em parte, bem
    como outras a&ccedil;&otilde;es legais. Reservamo-nos o direito de
    divulgar ou relatar qualquer lavagem de dinheiro ou outra atividade
    suspeita &agrave;s autoridades policiais e regulat&oacute;rias.
  </span>
</li>
</ol>
<p class="p42">
<span class="s16"
  >Observe que, ao acessar e usar os servi&ccedil;os do Parceiro,
  voc&ecirc; entende e reconhece que poder&aacute; ser exposto a assuntos
  adultos, sexualidade humana e materiais expl&iacute;citos.
</span>
</p>
<p class="p42">
<span class="s16"
  >Se voc&ecirc; for: (i) estiver abaixo da idade legal para assistir a
  conte&uacute;do adulto em seu estado ou pa&iacute;s; (ii) estiver
  obrigado pela lei de seu pa&iacute;s a n&atilde;o ver material sexual;
  (iii) estiver ofendido por material sexualmente expl&iacute;cito; ou
  (iv) n&atilde;o tiver permiss&atilde;o para acessar, entrar ou usar os
  servi&ccedil;os disponibilizados em tais sites, portanto, &eacute;
  necess&aacute;rio que n&atilde;o entre nos servi&ccedil;os do Parceiro.
</span>
</p>
<p class="p42">
Voc&ecirc; entende e reconhece que, nesse caso, voc&ecirc; &eacute; o
&uacute;nico respons&aacute;vel pelo Pr&ecirc;mio que receber, e
n&atilde;o seremos respons&aacute;veis por qualquer a&ccedil;&atilde;o que
voc&ecirc; tome que possa ser considerada ilegal em sua
jurisdi&ccedil;&atilde;o e/ou sob qualquer Lei Aplic&aacute;vel.
</p>
<p class="p29">
Voc&ecirc; tamb&eacute;m concorda e confirma que n&atilde;o
redistribuir&aacute; seus Pr&ecirc;mios a ningu&eacute;m e n&atilde;o
permitir&aacute; que nenhum menor de idade ou qualquer outra pessoa se
beneficie dos Pr&ecirc;mios que voc&ecirc; ganhou ou obteve por meio dos
Servi&ccedil;os ou acesse ou use os servi&ccedil;os do Parceiro. Por meio
deste instrumento, o usu&aacute;rio isenta a Empresa de toda e qualquer
responsabilidade relacionada, de qualquer forma, a qualquer
a&ccedil;&atilde;o que possa tomar ou a qualquer atividade em que possa se
envolver e que esteja relacionada, de qualquer forma, &agrave; Empresa ou
ao uso dos Servi&ccedil;os.
</p>
<p class="p5">&nbsp;</p>
<p class="p4">
<span class="s16"
  >Qualquer tentativa de danificar deliberadamente os Servi&ccedil;os ou
  de violar leis criminais ou civis e, caso tal tentativa seja feita,
  reservamo-nos o direito de buscar indeniza&ccedil;&atilde;o e outros
  recursos de sua parte em toda a extens&atilde;o, conforme permitido pela
  legisla&ccedil;&atilde;o aplic&aacute;vel.</span
>
</p>
<p class="p4">
<span class="s16"
  >Reservamo-nos o direito de usar todos os meios legais que julgarmos
  necess&aacute;rios para impedir o uso n&atilde;o autorizado dos
  Servi&ccedil;os, incluindo, entre outros, barreiras tecnol&oacute;gicas,
  mapeamento de IP e contato direto com a sua operadora de celular em
  rela&ccedil;&atilde;o a esse uso n&atilde;o autorizado.</span
>
</p>
<ol class="ol1">
<li class="li37">
  <span class="s16"><strong>Links de terceiros </strong></span>
</li>
</ol>
<p class="p4">
<span class="s16"
  >Algumas partes dos Servi&ccedil;os envolver&atilde;o links para sites
  pertencentes a terceiros (como os sites dos Parceiros).<span
    class="Apple-converted-space"
    >&nbsp; </span
  ><strong
    >N&atilde;o temos controle sobre sites de terceiros, e todo uso de
    sites de terceiros &eacute; por sua conta e risco.</strong
  ></span
>
</p>
<p class="p6">
Podemos ter rela&ccedil;&otilde;es diretas com Parceiros e podemos ser
compensados por esses Parceiros com base em sua intera&ccedil;&atilde;o
com ofertas, sites ou servi&ccedil;os do Parceiro.<span
  class="Apple-converted-space"
  >&nbsp; </span
>Essa remunera&ccedil;&atilde;o n&atilde;o &eacute;, e n&atilde;o deve ser
vista como, um endosso ou recomenda&ccedil;&atilde;o de nossa parte.
</p>
<p class="p9">&nbsp;</p>
<p class="p6">
<strong
  >N&atilde;o nos responsabilizamos por quaisquer perdas ou danos, diretos
  ou indiretos, que possam resultar do uso ou da confian&ccedil;a nas
  informa&ccedil;&otilde;es contidas em quaisquer sites ou servi&ccedil;os
  de Parceiros ou de terceiros.</strong
>
</p>
<p class="p5">&nbsp;</p>
<p class="p4">
<span class="s16"
  >Recomendamos que voc&ecirc; leia atentamente os Termos de Uso e a
  Pol&iacute;tica de Privacidade desses sites e/ou servi&ccedil;os de
  terceiros, pois os termos e a pol&iacute;tica de privacidade deles, e
  n&atilde;o os nossos, se aplicar&atilde;o a todas as suas
  intera&ccedil;&otilde;es com esses terceiros, bem como a quaisquer
  requisitos ou limita&ccedil;&otilde;es espec&iacute;ficos associados
  &agrave;s suas Ofertas ou servi&ccedil;os. Voc&ecirc; deve sempre
  analisar suas pr&aacute;ticas cuidadosamente antes de aceitar a
  presta&ccedil;&atilde;o de quaisquer servi&ccedil;os por esses
  terceiros.</span
>
</p>
<ol class="ol1">
<li class="li37">
  <span class="s16"><strong>Licen&ccedil;a</strong></span>
</li>
</ol>
<p class="p29">
<span class="s16"
  >Sujeito &agrave; sua conformidade com os Termos, concedemos a
  voc&ecirc; uma licen&ccedil;a pessoal, limitada, n&atilde;o comercial,
  n&atilde;o exclusiva, n&atilde;o sublicenci&aacute;vel, n&atilde;o
  atribu&iacute;vel, n&atilde;o transfer&iacute;vel e livremente
  revog&aacute;vel para usar os Servi&ccedil;os.<span
    class="Apple-converted-space"
    >&nbsp; </span
  >Os Servi&ccedil;os incluem materiais de nossa propriedade ou
  licenciados e s&atilde;o protegidos por direitos autorais, marcas
  registradas, patentes e outros direitos de propriedade intelectual em
  todo o mundo e pela legisla&ccedil;&atilde;o aplic&aacute;vel.<span
    class="Apple-converted-space"
    >&nbsp;
  </span></span
><span class="s17"><strong>N&atilde;o</strong></span
><span class="s16"
  ><strong> </strong>concedemos a voc&ecirc; ou a qualquer outra parte
  qualquer direito, t&iacute;tulo ou interesse nos Servi&ccedil;os ou em
  quaisquer materiais dispon&iacute;veis em nossos Servi&ccedil;os.
</span>
</p>
<p class="p11">&nbsp;</p>
<p class="p29">
<span class="s17"
  ><strong
    >Voc&ecirc; entende e reconhece todos os itens a seguir</strong
  ></span
>
</p>
<ol class="ol3">
<li class="li6">
  <span class="s21"
    >O uso dos Servi&ccedil;os &eacute; apenas para entretenimento pessoal
    e n&atilde;o comercial e n&atilde;o para qualquer outra
    finalidade;</span
  >
</li>
<li class="li6">
  <span class="s21"
    >Qualquer material dispon&iacute;vel em nossos Servi&ccedil;os,
    inclusive os que aparecem em nosso Site, n&atilde;o deve ser
    reproduzido, copiado, editado, publicado, transmitido ou carregado de
    nenhuma forma sem nossa permiss&atilde;o por escrito. O registro em
    nossos Servi&ccedil;os ou a participa&ccedil;&atilde;o em Ofertas
    n&atilde;o lhe concede nenhum direito expresso ou impl&iacute;cito sob
    nenhuma das marcas registradas, direitos autorais ou outras
    informa&ccedil;&otilde;es de propriedade da Empresa;</span
  >
</li>
<li class="li6">
  <span class="s21"
    >Se voc&ecirc; violar ou n&atilde;o concordar com os Termos ou com os
    Termos de Parceiros, sua licen&ccedil;a para acessar e/ou usar os
    Servi&ccedil;os ser&aacute; imediatamente rescindida e voc&ecirc;
    n&atilde;o poder&aacute; mais acessar e/ou usar nossos
    Servi&ccedil;os.</span
  >
</li>
</ol>
<p class="p43">&nbsp;</p>
<ol class="ol1">
<li class="li37">
  <span class="s16"><strong>Sem Garantia</strong></span>
</li>
</ol>
<p class="p4">
<span class="s16"
  >Voc&ecirc; concorda expressamente que o uso dos Servi&ccedil;os
  &eacute; por sua conta e risco e est&aacute; ciente de que os
  Servi&ccedil;os e as Ofertas s&atilde;o fornecidos "no estado em que se
  encontram" e "conforme dispon&iacute;veis", sem qualquer
  representa&ccedil;&atilde;o ou garantia, seja expressa ou
  impl&iacute;cita (seja por lei, estatuto ou de outra forma), incluindo,
  sem limita&ccedil;&atilde;o, quaisquer garantias impl&iacute;citas de
  comercializa&ccedil;&atilde;o, adequa&ccedil;&atilde;o a uma finalidade
  espec&iacute;fica e n&atilde;o viola&ccedil;&atilde;o (seja sob a Lei
  Aplic&aacute;vel ou de outra forma).
</span>
</p>
<p class="p4">
<span class="s16"
  >A Empresa n&atilde;o faz nenhuma declara&ccedil;&atilde;o ou garantia,
  expressa ou impl&iacute;cita, de que seu acesso e/ou uso dos
  Servi&ccedil;os ser&aacute; preciso, livre de erros, completo,
  ininterrupto, cont&iacute;nuo, ou que quaisquer defeitos ser&atilde;o
  corrigidos, ou que o Site est&aacute; livre de v&iacute;rus e bugs.<span
    class="Apple-converted-space"
    >&nbsp; </span
  >A Empresa n&atilde;o faz nenhuma declara&ccedil;&atilde;o sobre a
  funcionalidade total ou parcial, a precis&atilde;o ou a confiabilidade
  de quaisquer informa&ccedil;&otilde;es ou materiais obtidos pelo
  usu&aacute;rio por meio dos Servi&ccedil;os.</span
>
</p>
<ol class="ol1">
<li class="li37">
  <span class="s16"
    ><strong>Limita&ccedil;&atilde;o de Responsabilidade</strong></span
  >
</li>
</ol>
<p class="p6">
<span class="s16"
  >At&eacute; o limite m&aacute;ximo permitido pela Lei Aplic&aacute;vel,
  em nenhum caso a Empresa, suas Afiliadas, licenciadores ou prestadores
  de servi&ccedil;os, ou qualquer um de seus respectivos executivos,
  diretores, agentes, <em>joint venturers</em>, funcion&aacute;rios ou
  representantes, ser&atilde;o respons&aacute;veis ou assumir&atilde;o
  qualquer obriga&ccedil;&atilde;o com o usu&aacute;rio ou qualquer pessoa
  em seu nome, independentemente da forma de a&ccedil;&atilde;o, por
  qualquer dano ou perda direta, indireta, especial, incidental ou
  consequente de qualquer tipo, qualquer perda ou dano decorrente ou
  relacionado ao seu uso autorizado ou n&atilde;o autorizado dos
  Servi&ccedil;os, dos pagamentos, de qualquer servi&ccedil;o, produto ou
  conte&uacute;do fornecido por terceiros, seja com base em contrato, ato
  il&iacute;cito, neglig&ecirc;ncia ou responsabilidade estrita. No caso
  de qualquer reclama&ccedil;&atilde;o, seu &uacute;nico e exclusivo
  recurso &eacute; interromper o uso dos Servi&ccedil;os.
</span>
</p>
<p class="p9">&nbsp;</p>
<p class="p6">
<span class="s16"
  >A Empresa n&atilde;o ser&aacute; respons&aacute;vel por quaisquer atos
  ou omiss&otilde;es cometidas pelo seu provedor de servi&ccedil;os de
  Internet ou outro terceiro com quem voc&ecirc; tenha contratado para
  obter acesso aos Servi&ccedil;os.
</span>
</p>
<p class="p44">
<span class="s16"
  >Voc&ecirc; concorda e confirma que: (i) voc&ecirc; &eacute; livre para
  escolher se deseja usar os Servi&ccedil;os e o faz por sua
  pr&oacute;pria op&ccedil;&atilde;o, discri&ccedil;&atilde;o e risco;
  (ii) a Empresa n&atilde;o ser&aacute; respons&aacute;vel perante
  voc&ecirc; ou qualquer terceiro por qualquer modifica&ccedil;&atilde;o,
  suspens&atilde;o ou descontinuidade dos Servi&ccedil;os; (iii) qualquer
  reivindica&ccedil;&atilde;o ou causa de a&ccedil;&atilde;o,
  independentemente da forma de a&ccedil;&atilde;o, que voc&ecirc; possa
  ter decorrente ou relacionada ao uso dos Servi&ccedil;os ou destes
  Termos, deve ser apresentada no prazo de um (1) ano ap&oacute;s o
  surgimento de tal reivindica&ccedil;&atilde;o ou causa de
  a&ccedil;&atilde;o.</span
>
</p>
<p class="p45">&nbsp;</p>
<p class="p45">&nbsp;</p>
<ol class="ol1">
<li class="li37">
  <span class="s16"><strong>Indeniza&ccedil;&atilde;o</strong></span>
</li>
</ol>
<p class="p4">
<span class="s16"
  >Por meio deste instrumento, voc&ecirc; concorda em indenizar e isentar
  a Empresa, seus executivos, diretores, funcion&aacute;rios ou agentes de
  quaisquer reivindica&ccedil;&otilde;es, quest&otilde;es,
  reclama&ccedil;&otilde;es, custos, responsabilidades e
  a&ccedil;&otilde;es decorrentes ou relacionadas ao seu uso dos
  Servi&ccedil;os, incluindo, entre outros:
</span>
</p>
<ol class="ol3">
<li class="li37">
  <span class="s16"
    >Sua falha em cumprir com qualquer lei aplic&aacute;vel;
  </span>
</li>
<li class="li37">
  <span class="s16"
    >Qualquer alega&ccedil;&atilde;o de viola&ccedil;&atilde;o ou
    apropria&ccedil;&atilde;o indevida de quaisquer direitos de terceiros,
    inclusive, entre outros, direitos autorais, direitos de privacidade ou
    direitos de propriedade intelectual nos Servi&ccedil;os;
  </span>
</li>
<li class="li37">
  <span class="s16"
    >Sua viola&ccedil;&atilde;o de qualquer disposi&ccedil;&atilde;o
    destes Termos, dos Termos de Parceiros; ou
  </span>
</li>
<li class="li37">
  <span class="s16">Seu uso ou mau uso dos Servi&ccedil;os. </span>
</li>
</ol>
<p class="p4">
<span class="s16"
  >Voc&ecirc; concorda em notificar imediatamente a Empresa sobre
  quaisquer reivindica&ccedil;&otilde;es de terceiros e cooperar
  totalmente com a Empresa na defesa de tais reivindica&ccedil;&otilde;es,
  &agrave;s suas pr&oacute;prias custas. Voc&ecirc; tamb&eacute;m concorda
  que, a crit&eacute;rio exclusivo da Empresa, ela ter&aacute; o controle
  da defesa ou do acordo de tais reivindica&ccedil;&otilde;es.</span
>
</p>
<p class="p5">&nbsp;</p>
<ol class="ol1">
<li class="li37">
  <span class="s16"><strong>Diversos</strong></span>
</li>
</ol>
<p class="p4">
<span class="s16"
  >Estes Termos ser&atilde;o regidos e interpretados de acordo com a
  legisla&ccedil;&atilde;o do Chipre, sem dar efeito a seus
  princ&iacute;pios ou regras de conflito de leis. Qualquer
  a&ccedil;&atilde;o relacionada a estes Termos dever&aacute; ser movida
  exclusivamente nos tribunais do Chipre, e voc&ecirc; consente
  irrevogavelmente com a jurisdi&ccedil;&atilde;o deles. Poderemos ceder
  nossos direitos e obriga&ccedil;&otilde;es aqui previstos a qualquer
  terceiro sem aviso pr&eacute;vio.
</span>
</p>
<p class="p4">
<span class="s16"
  >O usu&aacute;rio n&atilde;o poder&aacute; ceder nenhum de seus direitos
  ou obriga&ccedil;&otilde;es nos termos deste instrumento, e qualquer
  cess&atilde;o ser&aacute; nula e sem efeito. Quaisquer
  disposi&ccedil;&otilde;es deste documento que, expressamente ou por sua
  natureza, sejam necess&aacute;rias para sobreviver &agrave;
  rescis&atilde;o ou expira&ccedil;&atilde;o destes Termos, a fim de
  atingir seu objetivo, sobreviver&atilde;o &agrave; rescis&atilde;o ou
  expira&ccedil;&atilde;o, incluindo, sem limita&ccedil;&atilde;o, as
  Se&ccedil;&otilde;es 2/5/6/7/8/9/10/11/12/13 destes Termos. Qualquer
  tradu&ccedil;&atilde;o destes Termos de Uso &eacute; fornecida apenas
  para sua conveni&ecirc;ncia. Os significados dos termos,
  condi&ccedil;&otilde;es e representa&ccedil;&otilde;es aqui contidos
  est&atilde;o sujeitos a defini&ccedil;&otilde;es e
  interpreta&ccedil;&otilde;es no idioma ingl&ecirc;s e, em caso de
  disputa, a vers&atilde;o em ingl&ecirc;s prevalecer&aacute;. Qualquer
  tradu&ccedil;&atilde;o fornecida pode n&atilde;o representar com
  precis&atilde;o as informa&ccedil;&otilde;es contidas na vers&atilde;o
  original em ingl&ecirc;s destes Termos.</span
>
</p>
<ol class="ol1">
<li class="li37">
  <span class="s16"><strong> Termos e Rescis&atilde;o</strong></span>
</li>
</ol>
<p class="p4">
<span class="s16"
  >Estes Termos se aplicam a voc&ecirc; e a n&oacute;s a partir da data em
  que voc&ecirc; os aceitar, conforme disposto acima. Reservamo-nos o
  direito, sem aviso pr&eacute;vio e a nosso crit&eacute;rio exclusivo, de
  rescindir estes Termos, revogar ou perder seus pagamentos ou rescindir
  ou suspender seu acesso ou uso de toda ou qualquer parte dos
  Servi&ccedil;os com efeito imediato, a qualquer momento, incluindo,
  <em>entre outros</em>, se suspeitarmos, a nosso crit&eacute;rio
  exclusivo, que (i) voc&ecirc; estava envolvido ou est&aacute; envolvido
  em atividade fraudulenta ou qualquer atividade ilegal de acordo com
  qualquer Lei Aplic&aacute;vel; (ii) voc&ecirc; forneceu
  informa&ccedil;&otilde;es falsas ou ocultou qualquer
  informa&ccedil;&atilde;o de n&oacute;s; ou (iii) voc&ecirc; se envolveu
  em atividades que violam (inclusive supostas viola&ccedil;&otilde;es)
  destes Termos, dos Termos de Parceiros.
</span>
</p>
<p class="p5">&nbsp;</p>
<p class="p5">&nbsp;</p>
<ol class="ol1">
<li class="li37">
  <span class="s16"><strong>Mudan&ccedil;as</strong></span>
</li>
</ol>
<p class="p29">
<span class="s16"
  >Reservamo-nos o direito de alterar qualquer um dos Termos a qualquer
  momento, publicando as vers&otilde;es revisadas em nosso Site ou, de
  outra forma, fornecendo aviso de tal altera&ccedil;&atilde;o por e-mail,
  por meio dos Servi&ccedil;os ou por publica&ccedil;&atilde;o em nosso
  Site. A notifica&ccedil;&atilde;o ser&aacute; considerada entregue 24
  (vinte e quatro) horas ap&oacute;s o envio do e-mail ao usu&aacute;rio.
</span>
</p>
<p class="p29">
<span class="s16"
  >Os avisos publicados em nosso Site s&atilde;o considerados entregues 5
  (cinco) dias ap&oacute;s a publica&ccedil;&atilde;o inicial.
  Reservamo-nos o direito de determinar a forma e os meios de fornecer
  notifica&ccedil;&otilde;es ao nosso Usu&aacute;rio Final. As
  vers&otilde;es revisadas entrar&atilde;o em vigor ap&oacute;s o
  per&iacute;odo de aviso aplic&aacute;vel, a menos que voc&ecirc; aceite
  expressamente as vers&otilde;es revisadas antes, clicando no
  bot&atilde;o aceitar. Sua aceita&ccedil;&atilde;o expressa ou o uso
  continuado dos Servi&ccedil;os ap&oacute;s o per&iacute;odo de
  notifica&ccedil;&atilde;o aplic&aacute;vel constituir&aacute; sua
  aceita&ccedil;&atilde;o de estar vinculado aos Termos revisados,
  conforme aplic&aacute;vel. Se qualquer disposi&ccedil;&atilde;o dos
  Termos for considerada inexequ&iacute;vel, essa disposi&ccedil;&atilde;o
  ser&aacute; modificada apenas na medida necess&aacute;ria para
  torn&aacute;-la exequ&iacute;vel e n&atilde;o afetar&aacute; a
  exequibilidade ou a validade das demais disposi&ccedil;&otilde;es, que
  permanecer&atilde;o em pleno vigor e efeito.</span
>
</p>
<p class="p11">&nbsp;</p>
<p class="p11">&nbsp;</p>
<ol class="ol1">
<li class="li37">
  <span class="s16"><strong> Fale Conosco</strong></span>
</li>
</ol>
<p class="p6">
<span class="s16"
  >Se tiver alguma d&uacute;vida, quiser nos dar um feedback ou receber
  mais informa&ccedil;&otilde;es sobre n&oacute;s, sinta-se &agrave;
  vontade para nos enviar um e-mail.
</span>
</p>
<p class="p5">&nbsp;</p>`

