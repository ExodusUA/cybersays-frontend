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
let pt_text =  '<div>Termos de Uso2</div>'
let es_text =  '<div>Termos de Uso3</div>'

