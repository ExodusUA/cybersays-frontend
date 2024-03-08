import React from 'react'
import HeaderProfile from '../Components/HeaderProfile'
import LanguageSocial from '../Components/Language/LanguageSocial';
import { useLanguage } from '../Helpers/Languages/LanguageContext';

function PromotionTerms() {
    let { language } = useLanguage()
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
    )
}

export default PromotionTerms
let en_text = `<p style="text-align:center;font-size:16pt!important;"><strong>Pythia Grant Ltd. &ndash; CyberSays.Club&nbsp;&nbsp;Promotion Terms</strong></p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
    &nbsp;&nbsp;Last revised: March 2024</p>
<p>The following are the terms and conditions of the Company promotion (&quot;<strong>Cyber Says</strong>&quot; and
    &quot;<strong>Cyber Says Promotion Terms</strong>&quot;; &quot;<strong>Promotion</strong>&quot;), which is
    sponsored by Pythia Grant Ltd. (&quot;<strong>Company</strong>&quot;, &quot;<strong>us</strong>&quot; or
    &quot;<strong>we</strong>&quot; or &quot;<strong>our</strong>&quot;).&nbsp;</p>
<p>Participation in the Promotion shall be subject to the provisions below and the Company&apos;s Terms and
    Conditions (&quot;<strong>Terms</strong>&quot;) and Privacy Policy (&quot;<strong>Privacy
        Policy</strong>&quot;).</p>
<p>Capitalized terms used but not defined herein shall have the meaning given to them in the Terms.</p>
<p><strong>NO PURCHASE NECESSARY OR PAYMENT REQUIRED TO ENTER OR WIN A PRIZE</strong><strong>.&nbsp;</strong></p>
<p><strong>General</strong></p>
<ol>
    <li>The Cyber Says Promotion shall commence on March 11, 2024 at: 00:00:01 UTC and shall conclude on July
        2<sup>st</sup> , 2024, at: 23:59:59 UTC (the &ldquo;<strong>Promotion Period</strong>&rdquo;).&nbsp;</li>
</ol>
<p><br></p>
<ol>
    <li>You agree that in order to participate in the Cyber Says Promotion (including, without limitation, in order
        to win any reward), you will fully comply with all applicable laws, regulations, statutes, ordinances and
        provisions that apply to you and to us, including, without limitation, these Cyber Says Promotion Terms and
        the Terms.</li>
</ol>
<p><br></p>
<ol>
    <li>There is no cost to enter the Promotion or any obligation associated with participating in it, except as
        described below.&nbsp;</li>
</ol>
<p><br></p>
<p><strong>Eligibility to participate in the Promotion</strong></p>
<ol>
    <li>In order to be eligible to participate in the Cyber Says Promotion you hereby represent and warrant that you
        will meet all the following conditions:</li>
</ol>
<ul>
    <li>have an account registered with the Services;&nbsp;</li>
    <li>are at least eighteen (18) years old (unless the applicable age of majority in your state of residence at
        the time of the entry is higher) or older;&nbsp;</li>
    <li>are eligible under applicable law and regulation to participate in the Cyber Says Promotion;&nbsp;</li>
    <li>have the full right and authority to participate in Cyber Says Promotion.</li>
</ul>
<p><br></p>
<p>In addition to the cumulative conditions set forth above, to be eligible to participate in the Cyber Says
    Promotion, you hereby represent and warrant that you will complete <strong>one of the following</strong>
    conditions:</p>
<ul>
    <li>Create a new and legitimate account and make a first purchase on <a
            href="http://www.ImLive.com">www.ImLive.com</a> ;&nbsp;</li>
    <li>Create a new and legitimate account on other third-party websites, as presented and dictated by the Company
        on the Cyber Says Promotion, from time to time (&quot;<strong>Third Party Website</strong>&quot;));
        <strong>OR&nbsp;</strong></li>
    <li>Complete the Free Post Form,&nbsp;&nbsp;as defined below (collectively referred as, &quot;<strong>Eligible
            Users</strong>&quot;).</li>
</ul>
<p><br></p>
<ol>
    <li>&quot;<strong>Free Post Form</strong>&quot; shall mean sending <em>the&nbsp;</em><em>&nbsp;&nbsp;
            &nbsp;&nbsp;</em><em>form</em> through registered mail via international courier, to the Company&apos;s
        registered address at Agias Zonis &amp; Thessalonikis, Nicolaou Pentadromos Centre, Office 903A, Limassol,
        Cyprus, 3025 by including all of the following in the mail &ndash;&nbsp;</li>
</ol>
<ul>
    <li>Hard Copy of the form;</li>
    <li>Your Cyber Says User ID details;</li>
    <li>Short explanation for the reasons to be chosen randomly as the winner.</li>
</ul>
<p><br></p>
<ol>
    <li>As part of this Promotion, you acknowledge that (i) any credit bonus received on ImLive.com or any Third
        Party Website as part of this Promotion is <strong>not redeemable, not refundable and
            non-exchangeable</strong>; (ii) these credit bonuses must be used on ImLive.com or any relevant Third
        Party Website <strong>only</strong>; (iii) these credit bonuses do not have any pecuniary value or any kind
        of value outside of ImLive.com or outside of the applicable Third Party Website; (iv) you are solely liable
        towards your use of ImLive.com services or any relevant Third Party Website&nbsp;&nbsp;as well as the use of
        such credits; and (v) you have read <em>ImLive.com terms and conditions</em> or where applicable, the
        relevant Third Party Website terms and conditions before using the relevant services or using any of the
        credit bonuses on their services.</li>
</ol>
<p><br></p>
<ol>
    <li>As part of this Promotion, you acknowledge that the Company, may in its sole discretion, refuse or
        disqualify your participation in the Promotion if any of the information you provided in completing your
        participation in the Promotion as detailed in section 4 above or the Free Post Form is (i) missing,
        inaccurate and/or outdated; (ii) appears to be false, fraudulent or otherwise is in violation of the Cyber
        Says Promotion Terms, the Terms or any applicable laws or regulations.&nbsp;</li>
</ol>
<p><br></p>
<ol>
    <li>You may not use multiple email addresses, accounts and/or identities or any other method in order to
        participate in the Cyber Says Promotion more than once. You may not register on behalf of another person.
    </li>
</ol>
<p><br></p>
<ol>
    <li>Use of robotic, mechanical or other forms of pre-programmed entry methods is strictly prohibited. Entrants
        may not use such manipulation tools and Company reserves the right (in its sole discretion), from time to
        time, to implement entry processes that may frustrate or prohibit such automated entry; provided, however,
        that no entrant in any Promotion may rely upon or insist upon Company&rsquo;s failure or refusal to take any
        of the foregoing actions or to determine, in its sole discretion, that one entrant&rsquo;s entry should be
        discounted because another entrant&rsquo;s entry was or vice versa. Any use of automated system or any
        similar method to participate in any Promotion is strictly prohibited and may result in your
        disqualification from the Promotion and/or future use of the Services. The person to whom the email address
        was assigned by the applicable operator shall be deemed as the owner of such email address.</li>
</ol>
<p>&nbsp;</p>
<ol>
    <li>Company reserves the right to limit the Promotion to entrants located in a particular jurisdiction, in which
        case only users residing in such jurisdiction at the time of entry may be eligible to participate in the
        Promotion.</li>
</ol>
<p><br></p>
<ol>
    <li>Company&apos;s employees (including, without limitation, part-time or temporary employees), officers, and
        representatives, promotion agencies and/or sponsors directly involved in the administration, development,
        fulfilment, and execution of a specific Promotion, and the immediate family and other household members
        (i.e., spouses, parents, grandparents, children, grandchildren, roommates, housemates, significant others,
        partners, and siblings) of any of the above are not eligible to enter and/or to win a Promotion.&nbsp;</li>
</ol>
<p><br></p>
<ol>
    <li>The participation in the Promotion is not available for any users (nationals and residents) from Sweden,
        Israel, Cyprus and Andorra.</li>
</ol>
<p><br></p>
<ol>
    <li>Please note that the use of the Services, which can be downloaded free of charge, requires an internet
        connection and a compatible device. You must enter the Promotion during the Promotion Period of the relevant
        Promotion in order to be eligible to win applicable prize(s).</li>
</ol>
<p><br></p>
<ol>
    <li>You may be asked at any time to provide us or our designated third party with proof of your age and/or
        identity and/or residency and you must, on demand, be able to present a valid documentation which may enable
        us to verify your, residency and/or identity to the reasonable satisfaction of our team. If you are unable
        to provide satisfactory documents, we may exclude you from the Cyber Says Promotion and may forfeit any
        privileges or awards that have been allocated to you without compensation of any kind. You hereby
        irrevocably waive any claims or rights in connection with any such exclusion and/or forfeiture.</li>
</ol>
<p><br></p>
<p><strong>Eligibility to receive Promotion&apos;s tickets and selection of winners</strong></p>
<ol>
    <li>The Cyber Says Promotion consists of a promotion, the winners of which will be entitled to win the Prizes
        (as detailed below).</li>
</ol>
<p><br></p>
<ol>
    <li>Eligible Users will be entitled to earn one (1) ticket to participate in the Promotion for each second and
        above transaction of purchasing real credit on <a href="http://www.ImLive.com">www.ImLive.com</a>
        &nbsp;<strong>or</strong> any other Third Party Website (excluding bonus credits), (i.e. starting the 6 real
        credits purchased and above). &nbsp;</li>
</ol>
<p>Each 1 real credit purchased shall be equal to 1 ticket. &nbsp;</p>
<p><br></p>
<p>You understand and acknowledge that there is no limit to the number of credits you may purchase and therefore, to
    the number of Promotion tickets you may be eligible to receive.</p>
<p><br></p>
<ol>
    <li><strong>You may also receive tickets by participating in the Cyber Says Promotion for
            free</strong>.<strong>&nbsp;</strong></li>
</ol>
<p>In this regard,<strong>&nbsp;</strong>you may contact the Company, as instructed at the Free Post Form, during
    the Promotion Period, via international registered mail to the Company&apos;s registered address&nbsp;&nbsp;at
    Agias Zonis &amp; Thessalonikis, Nicolaou Pentadromos Centre, Office 903A, Limassol, Cyprus,
    3025,&nbsp;&nbsp;and include all the following -</p>
<ol>
    <ol>
        <li>The subject of the post mail must include &quot;<strong>Free participation request &ndash; Cyber Says
                Promotion</strong>&quot;;</li>
        <li>The mail must contain your username, Cyber Says ID account number, phone number, email address and date
            of birth.</li>
        <li>The mail shall be received by us during the applicable Promotion Period for the relevant Promotion and
            will be accepted by no later than <strong>July 7, 2024.</strong></li>
        <li>Irrespective of the above, any mail sent after the end of the Promotion Period will not be deemed valid
            entries and will not entitle the participant to any ticket, even if the mail was received by us before
            <strong>July 7,2024</strong>;</li>
        <li>Each one (1) valid mail received by us will allow you to receive one (1) ticket for the Cyber Says
            Promotion.</li>
    </ol>
</ol>
<p><br></p>
<ol>
    <li><strong>Referred Friends</strong>. You acknowledge that in order to increase your chances of winning, you
        can also refer some of your friends. Each Eligible User that has referred a new legitimate friend in
        compliance with these Cyber Says Promotion Terms and the
        Terms<strong>&nbsp;</strong>and<strong>&nbsp;</strong>that is eligible to participate in the Promotion as
        described in section 4 of this Terms <strong>and</strong> has completed the Online Offer
        (&quot;<strong>Referred Friend</strong>&quot;) shall receive thirty (30) tickets for each legitimate and new
        Referred Friend.</li>
</ol>
<p><br></p>
<p>&quot;<strong>Online Offer</strong>&quot; shall mean completing all of the following steps &ndash;&nbsp;</p>
<ul>
    <li><strong>Create a new and legitimate account on
            ImLive.com&nbsp;</strong><strong>or</strong><strong>&nbsp;where applicable on Third Party
            Website.</strong></li>
    <li><strong>Make a minimum purchase of five credits on
            ImLive.com&nbsp;</strong><strong>or</strong><strong>&nbsp;where applicable on Third Party
            Website</strong> &ndash; you acknowledge that by making a minimum purchase of five credits on
        ImLive.com, you will automatically receive a one-time additional bonus of five credits.</li>
    <li><strong>Spend the entire ten (10) credits that you received on
            ImLive.com&nbsp;</strong><strong>or</strong><strong>&nbsp;where applicable on Third Party
            Website.</strong></li>
</ul>
<p><br></p>
<ol>
    <li>The odds of winning are based on the number of eligible tickets. The winners will be drawn at random from
        all valid tickets by an automated computer system.</li>
</ol>
<p>&nbsp;</p>
<ol>
    <li>Any request for participation that do not comply with the foregoing, the Cyber Says Promotion Terms or our
        Terms may be disqualified or void at our sole discretion. No other form or method for submitting an entry
        will be considered, unless otherwise set forth in the specific Cyber Says Promotion description.</li>
</ol>
<p><br></p>
<ol>
    <li>The winner will be selected randomly on <strong>July 14, 2024</strong>.&nbsp;</li>
</ol>
<p><br></p>
<ol>
    <li>The choice of winners is final and binding, unless stated otherwise in these Cyber Says Promotion Terms.
    </li>
</ol>
<p><br></p>
<p><strong>Prizes/Approximate Retail Value (&quot;ARV&quot;)</strong></p>
<ol>
    <li>The awarded prize will be &ndash;<ol>
            <li>Economy class flight ticket to Las Vegas, Nevada, USA and two (2) nights hotel accommodation for
                &ndash;<ol>
                    <li>The winner and for two (2) of the winner&apos;s Referred Friends (where applicable);&nbsp;
                    </li>
                    <li>The winner and one (1) Referred Friend and one (1) Eligible User that referred the winner
                        (where applicable) <strong>and</strong> completed the Online Offer (&quot;<strong>Referring
                            Friend</strong>&quot;); (both collectively &quot;<strong>Travel Friends</strong>&quot;)
                    </li>
                </ol>
            </li>
            <li>One thousand dollars ($1,000.00 USD) worth of credits to be used on <a
                    href="http://www.ImLive.com">www.ImLive.com</a> &nbsp;(no redeemable, no exchangeable, no
                refundable) for the winner <strong>only</strong>; and&nbsp;</li>
            <li>One thousand dollars ($1,000.00 USD) for the winner and, where applicable, five hundred dollars
                ($500.00 USD) for each of the two winner&apos;s Travel Friends (see definition below) of allowance
                as part of the trip to Las Vegas, Dinner with Porn stars and Cadillac drive (collectively section
                20.a, 20.b and 20.c referred to as &quot;<strong>Prizes</strong>&quot;). ARV: five thousand dollars
                ($5,000.00 USD).</li>
        </ol>
    </li>
</ol>
<p><br></p>
<ol>
    <li>For the avoidance of doubt, the winner and his/her two Travel Friends (where applicable per section 21
        above) are solely responsible for any and all unspecified expenses in conjunction with the acceptance and
        use of the Prizes.</li>
</ol>
<p><br></p>
<ol>
    <li>The winner acknowledges and accepts that &ndash;&nbsp;<ol>
            <li>If he/she is not able to have two eligible Travel Friends, the winner will have to fly alone and the
                Prize granted for the two Travel Friends can be cancelled and void (as per the Company&rsquo;s sole
                discretion);</li>
            <li>For the avoidance of the doubt, in the event that any of the Travel Friends fail to adhere to the
                provisions outlined in the CyberSays Promotion Terms or the Terms, or engages in a violation of any
                applicable law or regulation, the two Travel Friends will be ineligible for the awarding of the
                Prizes;</li>
            <li>The Company retains exclusive discretion in determining the hotel and the flight period for the
                Prizes. If the winner is unavailable on such date for any reason, the winner, and where applicable
                the two Travel Friends, will forfeit the Prizes without any form of compensation;</li>
            <li>The availability of the Prizes, including the award destinations is contingent upon the geographic
                location of the eligible winner and flight availability. The availability of the Prizes may be
                subject to certain changes at the Company&apos;s sole discretion, provided that the ARV of the
                Prizes does not exceed five thousand dollars ($5,000.00 USD).</li>
        </ol>
    </li>
</ol>
<p><br></p>
<ol>
    <li>The winner and, where applicable, their two Travel Friends are required to show a valid passport with at
        least a <strong>six-month validity</strong> at the time of their flight to Vegas, NV, USA. If applicable,
        they must have a valid visa or authorization, otherwise the Prizes can be void.&nbsp;</li>
</ol>
<p>In this regard, the Company may, at its sole discretion, choose an alternative location that the winner will be
    able to fly to.</p>
<p><br></p>
<ol>
    <li>Prizes are non-transferable and cannot be redeemed for a cash equivalent.</li>
</ol>
<p><br></p>
<ol>
    <li>The winners of the Cyber Says Promotion are solely responsible for reporting and paying any and all
        applicable taxes related to the Prizes and paying any expenses associated therewith which are not
        specifically provided for in the Cyber Says Promotion Terms.</li>
</ol>
<p><br></p>
<ol>
    <li>By participating in the Cyber Says Promotion, you allow the Company to contact you, for the purpose of
        administration of the Cyber Says Promotion and awarding of Prizes. We will notify each potential winner by
        sending a notification through the email address (which was used to register to the Services), within
        fifteen (15) business days from the end of the Promotion Period.&nbsp;</li>
</ol>
<p><br></p>
<ol>
    <li>We will make three attempts to contact the potential winner within seventy-two (72) hours. If we are unable
        to contact the potential winner within this specified time frame or is otherwise disqualified or does not
        comply with these Cyber Says Promotion Terms or Terms, Company may forfeit the Prize and grant it
        potentially to another winner.&nbsp;</li>
</ol>
<p><br></p>
<ol>
    <li>It is your sole responsibility to notify us in writing if you changed your email address during the
        Promotion Period.&nbsp;</li>
</ol>
<p><br></p>
<ol>
    <li>Our decisions regarding the administration and operation of any Promotion, including, without limitation,
        the selection of potential winners from all eligible participants are final and binding in all matters
        related to the Promotion.</li>
</ol>
<p><br></p>
<ol>
    <li>You acknowledge and accept that the Company reserves the right, at its sole discretion, to automatically
        transfer each Eligible User and/or the Travel Friends that was/were not chosen as the winner/s of this
        Promotion to participate in future similar Promotions, except where explicitly prohibited under applicable
        laws or regulations.</li>
</ol>
<p><br></p>
<ol>
    <li>You are not allowed to transfer or substitute any Prize received from participating in a Promotion. All
        prizes hereunder are offered &quot;as is&quot; without warranty either expressly or in an implied fashion.
    </li>
</ol>
<p><br></p>
<ol>
    <li>Prizes will be delivered to winners within 30 business days, from the Company receiving the winner&apos;s
        full details (as required to provide the prize), unless Company, in its sole discretion, as any reason to
        believe the winner is not eligible to participate in the Cyber Says Promotion or to be awarded with the
        Prizes.</li>
</ol>
<p><br></p>
<ol>
    <li>Prizes will be granted to winners through their personal email used to register to the Company&apos;s
        Services.&nbsp;</li>
</ol>
<p><br></p>
<ol>
    <li>No Prizes shall be given to any participant who is ineligible to participate in the Promotion or fails to
        comply with the Cyber Says Promotion Terms, the Terms, or any other rules for participation in the
        Promotion.</li>
</ol>
<p><br></p>
<ol>
    <li>If any potential winner is required by any applicable law, the Cyber Says Promotion Terms, the Terms to
        comply with additional conditions or requirements in order to participate in the Promotion and receive the
        Prize, such potential winner must fully comply with such requirements within the time set by us before and
        as a condition to receiving the Prize. If a potential winner is disqualified for any reason, we may award
        the applicable prize to an alternate winner from among the remaining eligible participants, in our sole
        discretion.</li>
</ol>
<p><br></p>
<ol>
    <li>Company is not responsible in any manner for, any warranties, representations, or guarantees, express or
        implied, in fact or law, relating to any of the Prizes, regarding the use, value or enjoyment of the Prizes,
        including, without limitation, their quality, condition, or fitness for a purpose.&nbsp;</li>
</ol>
<p><br></p>
<ol>
    <li>Prizes and Participation in the Cyber Says Promotion are not available to persons under the age of 18 or 21
        (depending on your jurisdiction).&nbsp;</li>
</ol>
<p><br></p>
<p><strong>Limitations of liability and release</strong></p>
<ol>
    <li>By entering into this Promotion, you agree to release, indemnify, and hold harmless Company, and its
        respective parents, subsidiaries, affiliates, distributors, suppliers, and advertising, promotional and
        judging organizations and each of their respective employees, officers, directors, shareholders, and agents
        (collectively, the &ldquo;<strong>Releasees</strong>&rdquo;) from and against any and all claims, actions,
        damages, losses, costs, expenses (including reasonable attorneys/legal fees), injuries or causes of action
        of any kind that in any way now or hereinafter may arise from or relate to the Promotion, including without
        limitation (i) the administration of the Promotion, such as typographical, printing, seeding, human or other
        errors relating to or in connection with the Promotion, the processing of entries, the announcement of the
        Prize or any related materials, inaccurate, fraudulent, incomplete, illegible, late, lost, stolen,
        misdirected, undelivered, incomplete, or damaged entries, any delays in delivery or lack of availability of
        the Prize or Prize materials; (ii) Your participation in the Promotion offered by the Releasees or your
        acceptance or use of a Prize, or participation in any Prize related activities, including, without
        limitation, any travel related thereto, and death and bodily injury (including emotional distress), due in
        whole or in part, directly or indirectly, to participation in the Promotions or any Promotion-related
        activity and for any claims or causes of action based on publicity rights, defamation, or invasion of
        privacy; (iii) Any act or omission, whether negligent, intentional or otherwise, caused by the Releasees
        and/or any Promotion; (iv) any other user&rsquo;s participation in the Promotion.&nbsp;</li>
</ol>
<p><br></p>
<ol>
    <li>You agree that the Releasees are not responsible for any incorrect or inaccurate information, whether caused
        by the Services, other users, or by any of the equipment or programming associated with or utilized in the
        Promotion and that the Releasees assume no responsibility for (i) any injury or damage to persons or
        property which may be caused, directly or indirectly, in whole or in part, from a user&rsquo;s participation
        in a Promotion or receipt or use or misuse of any prize; (ii) any error, omission, interruption, deletion,
        defect, or delay in operation or transmission on the Services; (iii) any computer, telephone, cable,
        satellite, network, electronic or internet hardware or software malfunctions or failures, problems with
        connections or availability; (iv) garbled or jumbled transmissions, service provider/internet/web site/use
        net accessibility or availability; (v) traffic congestion; (vi) unauthorized human intervention; or (vii)
        theft or destruction, tampering, or unauthorized access to entries and/or entry information. If, for any
        reason, a Promotion is not capable of running as planned by reason of infection by computer virus,
        unauthorized intervention, fraud, tampering, technical failures, or any other causes beyond the Releasees
        control and, in the sole opinion of the Releasees, corrupt or affect the administration, security, fairness,
        integrity or proper conduct of a Promotion, the Releasees reserve the right, at their sole discretion, to
        cancel, terminate, modify or suspend such Promotion and select the winner(s) from among all eligible entries
        received for such Promotion prior to the action taken.</li>
</ol>
<p><br></p>
<ol>
    <li>In no event will the Releasees be responsible or liable for any damages or losses of any kind, including
        indirect, incidental, consequential or punitive damages, other than your actual out-of-pocket expenses
        arising out of your participation in a Promotion. Without limiting the foregoing, the Services are provided
        &ldquo;as is&rdquo; without warranty of any kind, either expressed or implied, including but not limited to,
        the implied warranties of merchantability, fitness for a particular purpose or non-infringement. Some
        jurisdictions may not allow the limitations or exclusion of liability for incidental or consequential
        damages or exclusion of implied warranties so some of the above limitations or exclusions may not apply to
        you. In such cases, our liability will be limited to the fullest extent permitted by applicable law.</li>
</ol>
<p><br></p>
<p><strong>Additional General Terms</strong></p>
<ol>
    <li>All requests for entry into a Promotion shall become the exclusive property of Company and will not be
        acknowledged and/or returned. Entries received that are from ineligible entrants and/or do not comply with
        the Cyber Says Promotion Terms or the Terms will be considered void. Entries that are determined to be
        fraudulent will be considered void, and the person making such entry may be barred from participation in the
        Promotion and, in Company&rsquo;s sole discretion on a case-by-case basis, banned from any future
        participation in any future Company Promotions and/or services. Proof of sending or submission will not be
        deemed to be proof of receipt. You hereby agree than in no event will you have any claims against us for any
        requests that were not received or acknowledged by us, for any reason whatsoever, or which were received
        before or after the Promotion Period for the applicable Promotion.</li>
</ol>
<p><br></p>
<ol>
    <li>Company may cancel, modify, alter, change or suspend the Cyber Says Promotion, and any of the Prizes or
        benefits offered hereunder, including without limitation, where required for security reasons or any other
        reason, at its sole discretion, to comply with applicable law or regulation, due to abuse or otherwise where
        due to circumstances beyond its control (including, without limitation, a force majeure, fire, flood,
        epidemic or other national health emergency, earthquake, explosion, labour dispute or strike, act of God or
        public enemy, satellite or equipment failure, riot or civil disturbance, terrorist threat or activity, war
        (declared or undeclared,) or any federal, state or local government law, order, or regulation, order of any
        court or jurisdiction, public health crisis, or other cause not reasonably within its control. In the event
        that the Promotion is terminated, cancelled, or postponed for any reason whatsoever, the actual/appraised
        value of the prize(s) will be awarded solely to the extent required by law.</li>
</ol>
<p><br></p>
<ol>
    <li>Company reserves the right to change the Prizes and/or terms of this Cyber Says Promotion (including but not
        limited to the relevant Promotion Period, related dates or Prizes) at any time and without prior
        notice.&nbsp;</li>
</ol>
<p><br></p>
<p>You acknowledge that you shall be responsible for staying up to date with any and all changes made to the
    Promotion. In the event of modifying the Promotion, your continued participation in the Promotion constitutes
    acceptance of the modified terms and conditions of such Promotion.</p>
<p><br></p>
<ol>
    <li>&nbsp;If we become aware of any fraud, deceit, misconduct (e.g. strong language, insults, threats),
        dishonesty or similar action concerning your participation in the Cyber Says Promotion, or if you acted in a
        disruptive manner or with the intent to disrupt or undermine the legitimate operation of the Cyber Says
        Promotion or if you breached any of these Cyber Says Promotion Terms, the Terms and/or any additional laws,
        regulations and rules which apply to your use of the Services and/or your participation in any Cyber Says
        Promotion, then (i) we reserve the absolute right to automatically and immediately disqualify you or
        invalidate your entry, and (ii) we also reserve the right to seek damages and other remedies from you to the
        full extent permitted by law. If fraud, deceit, misconduct, dishonesty or other action is only discovered
        after any applicable reward has been granted to you, then you shall be required, upon demand, to return the
        Prize (or provide equivalent compensation) to us immediately upon receipt of our demand to do so. Without
        limiting the foregoing, Company may lock out any participant who, in Company&rsquo;s sole judgment, has been
        disqualified, has questionable eligibility, or is otherwise ineligible to participate in the Promotion.</li>
</ol>
<p><br></p>
<ol>
    <li>Winning a Prize constitutes your consent that Company may use the following information concerning you:
        name, username, country of residence and the Prize and you hereby grant us and our affiliates, a perpetual,
        unlimited, non-exclusive, worldwide, fully paid up, royalty free right and license, to use (a) your name and
        username; (b) your image, photograph and likeness; (c) your testimonial regarding the participation and/or
        use of our services or products; and (d) details regarding your winning (collectively, the
        <strong>&quot;Information</strong>&quot;), and to reproduce, distribute, publicly display, publicly perform
        and make derivative works, based upon such Information, in whatever media format, including through
        broadcast media, for public relations, marketing and promotion purposes relating to the Cyber Says Promotion
        or the Company. All processing of personal data by us will be made in accordance with the terms of our
        <em>Privacy Policy.</em></li>
</ol>
<p><br></p>
<ol>
    <li>If you win a Prize, you hereby waive any and all rights of paternity, integrity and any other rights that be
        known as or referred to as &ldquo;moral rights&rdquo; in and to the Information which you may acquire
        pursuant to this release or by operation of law. You understand that will not be entitled to any payment or
        other acknowledgement in relation to the any use of the Information by the Company.</li>
</ol>
<p><br></p>
<ol>
    <li>All products, services and company names referenced and/or included are the registered trademarks of their
        original owners. The use of any mark, name, image, or likeness is for identification and reference purposes
        only and does not imply any association with the trademark holder, respective individual, or their brand.
        The Company expressly disclaims any affiliation with any third-party trademarks or rights of publicity
        referenced and/or included on Cyber Says Promotion, or related materials. The use of any mark, name, image,
        or likeness is not intended to mislead, confuse the customer, or infringe on the copyright, rights of
        publicity, or trademark of any third party. Such use in no way indicates any relationship with any third
        party, nor does it signify that any such third party is the source of, endorses, approves of, or sponsors
        the use of our Services. We make no commercial claim to the use of any copyright, rights of publicity, or
        trademark of any third party, or suggestion of sponsorship or endorsement, and any such use is provided for
        informational purposes only.&nbsp;</li>
</ol>
<p><br></p>
<ol>
    <li>All Promotions shall be subject to all applicable federal, state, and local laws and regulations, and are
        void where prohibited or restricted by law.</li>
</ol>
<p><br></p>
<ol>
    <li>Company reserves the right to: (i) terminate or declare any Promotion null and void and rescind any prize,
        if in its sole judgment, the Cyber Says Promotion Terms or the integrity of the Promotion have been violated
        or compromised in any way, intentionally or unintentionally by any person, whether or not a participant in
        the Promotion; (ii) alter or amend these Cyber Say Promotion Terms at any time; and/or (iii) stop or
        conclude any Promotion at any time without prior notice. Material changes to these rules will be posted on
        the Services, when practical.</li>
</ol>
<p><br></p>
<ol>
    <li>Company shall be the sole arbiter in all matters relating to any Promotion and the interpretation of these
        Cyber Says Promotion Terms and the Terms. The decisions of Company will be final as to all matters,
        including, without limitation, whether any entry submitted is valid or not. Entry into any Promotion
        constitutes agreement by entrants to abide by the Cyber Say Promotion Terms and the Terms, as well as any
        other rules established by the Company.</li>
</ol>
<p><br></p>
<ol>
    <li>The Promotion will be governed by the laws of the Republic of Cyprus and entrants to the Promotion submit to
        the exclusive jurisdiction of the courts of the Republic of Cyprus.</li>
</ol>
<p>&nbsp;&nbsp;</p>
<ol>
    <li>In case of a conflict between these Cyber Says Promotion Terms or the Terms, these Cyber Says Promotion
        Terms shall prevail.</li>
</ol>
<p><br></p>
<p>CAUTION: ANY ATTEMPT TO DELIBERATELY DAMAGE COMPANY&apos;S SERVICES OR UNDERMINE THE LEGITIMATE OPERATION OF THE
    PROMOTION OFFERED BY COMPANY IS A VIOLATION OF CRIMINAL AND CIVIL LAWS. SHOULD SUCH AN ATTEMPT BE MADE, COMPANY
    RESERVES THE RIGHT TO SEEK DAMAGES FROM ANY SUCH INDIVIDUAL TO THE FULLEST EXTENT PERMITTED BY LAW.</p>
<p>For information, support or questions, please contact us at <a
        href="mailto:vegas@cybersays.club">vegas@cybersays.club</a>&nbsp;</p>
<p>&nbsp;</p>
<p><br></p>`
let es_text = ``
let pt_text = `<p style="text-align:center;font-size:16pt!important;" class="p14">
<span class="s1"
  ><strong
    >Pythia Grant Ltd. - Termos da Promo&ccedil;&atilde;o da
    CyberSays.Club</strong
  ></span
>
</p>
<p class="p1">
<span class="Apple-converted-space"
  >&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span
>&Uacute;ltima revis&atilde;o:
<span class="s1">Mar&ccedil;o de 2024</span>
</p>
<p class="p4">
A seguir est&atilde;o os termos e condi&ccedil;&otilde;es da
promo&ccedil;&atilde;o da Empresa ("<strong>Cyber Says</strong>" e
"<strong>Termos da Promo&ccedil;&atilde;o Cyber Says</strong>";
"<strong>Promo&ccedil;&atilde;o</strong>"), que &eacute; patrocinada pela
Pythia Grant Ltd. ("<strong>Empresa</strong>", "<strong
  >n&oacute;s", "n&oacute;s</strong
>" ou "<strong>nosso</strong>").
</p>
<p class="p4">
A participa&ccedil;&atilde;o na Promo&ccedil;&atilde;o estar&aacute;
sujeita &agrave;s disposi&ccedil;&otilde;es abaixo e aos Termos e
Condi&ccedil;&otilde;es da Empresa ("<strong>Termos</strong>") e &agrave;
Pol&iacute;tica de Privacidade ("<strong
  >Pol&iacute;tica de Privacidade</strong
>").
</p>
<p class="p4">
Os termos em mai&uacute;sculos usados, mas n&atilde;o definidos neste
documento, ter&atilde;o o significado dado a eles nos Termos.
</p>
<p class="p4">
<strong
  >N&Atilde;O &Eacute; NECESS&Aacute;RIA NENHUMA COMPRA OU PAGAMENTO PARA
  PARTICIPAR OU GANHAR UM PR&Ecirc;MIO.
</strong>
</p>
<p class="p4">
<span class="s1"><strong>Geral</strong></span>
</p>
<ol class="ol1">
<li class="li6">
  A Promo&ccedil;&atilde;o Cyber Says ter&aacute; in&iacute;cio em
  <span class="s1">11 de mar&ccedil;o de 2024 </span>&agrave;s: 00:00:01
  UTC e ser&aacute; encerrada em
  <span class="s1">2 de julho de 2024</span>, &agrave;s: 23:59:59 UTC (o
  "<strong>Per&iacute;odo da Promo&ccedil;&atilde;o</strong>").
</li>
</ol>
<p class="p7">&nbsp;</p>
<ol class="ol1">
<li class="li6">
  Voc&ecirc; concorda que, para participar da Promo&ccedil;&atilde;o Cyber
  Says (inclusive, sem limita&ccedil;&atilde;o, para ganhar qualquer
  pr&ecirc;mio), cumprir&aacute; integralmente todas as leis,
  regulamentos, estatutos, decretos e disposi&ccedil;&otilde;es
  aplic&aacute;veis a voc&ecirc; e a n&oacute;s, inclusive, sem
  limita&ccedil;&atilde;o, estes Termos da Promo&ccedil;&atilde;o Cyber
  Says e os Termos.
</li>
</ol>
<p class="p7">&nbsp;</p>
<ol class="ol1">
<li class="li6">
  N&atilde;o h&aacute; nenhum custo para participar da
  Promo&ccedil;&atilde;o ou qualquer obriga&ccedil;&atilde;o associada
  &agrave; participa&ccedil;&atilde;o na mesma, exceto conforme descrito
  abaixo.
</li>
</ol>
<p class="p9">&nbsp;</p>
<p class="p4">
<span class="s1"
  ><strong
    >Elegibilidade para participar da Promo&ccedil;&atilde;o</strong
  ></span
>
</p>
<ol class="ol1">
<li class="li6">
  Para se qualificar para participar da Promo&ccedil;&atilde;o Cyber Says,
  voc&ecirc; declara e garante que atender&aacute; a todas as
  condi&ccedil;&otilde;es a seguir:
</li>
</ol>
<ul class="ul1">
<li class="li6">ter uma conta registrada com os Servi&ccedil;os;</li>
<li class="li6">
  ter pelo menos dezoito (18) anos de idade (a menos que a idade de
  maioridade aplic&aacute;vel em seu estado de resid&ecirc;ncia no momento
  da inscri&ccedil;&atilde;o seja maior) ou mais;
</li>
<li class="li6">
  &eacute; eleg&iacute;vel de acordo com as leis e regulamentos
  aplic&aacute;veis, para participar da Promo&ccedil;&atilde;o Cyber Says;
</li>
<li class="li6">
  tem pleno direito e autoridade para participar da Promo&ccedil;&atilde;o
  Cyber Says.
</li>
</ul>
<p class="p8">&nbsp;</p>
<p class="p6">
Al&eacute;m das condi&ccedil;&otilde;es cumulativas estabelecidas acima,
para ser eleg&iacute;vel para participar da Promo&ccedil;&atilde;o Cyber
Says, voc&ecirc; declara e garante que cumprir&aacute;
<strong>uma das seguintes </strong>condi&ccedil;&otilde;es:
</p>
<ul class="ul1">
<li class="li6">
  Criar uma conta nova e leg&iacute;tima e fa&ccedil;a sua primeira compra
  na
  <a href="http://www.ImLive.com"
    ><span class="s3">www.ImLive.com</span></a
  >;
</li>
<li class="li6">
  Criar uma conta nova e leg&iacute;tima em outros sites de terceiros,
  conforme apresentado e ditado pela Empresa na Promo&ccedil;&atilde;o
  Cyber Says, de tempos em tempos ("<strong>Site de terceiros</strong>");
  <strong>OU </strong>
</li>
<li class="li6">
  Preencher o Formul&aacute;rio de Postagem Gratuita, conforme definido
  abaixo (coletivamente denominados "<strong
    >Usu&aacute;rios qualificados</strong
  >").
</li>
</ul>
<p class="p8">&nbsp;</p>
<ol class="ol1">
<li class="li6">
  "<strong>Formul&aacute;rio de Postagem Gratuita</strong>" significa
  enviar para<span class="s1"
    ><em>
      o<span class="Apple-converted-space">&nbsp; &nbsp; &nbsp; </span
      >formul&aacute;rio</em
    ></span
  >
  por meio de correspond&ecirc;ncia registrada via correio internacional,
  para o endere&ccedil;o registrado da Empresa em Agias Zonis &amp;
  Thessalonikis, Nicolaou Pentadromos Centre, Escrit&oacute;rio 903A,
  Limassol, Chipre, 3025, incluindo todos os itens a seguir na
  correspond&ecirc;ncia
</li>
</ol>
<ul class="ul1">
<li class="li6">C&oacute;pia impressa do formul&aacute;rio;</li>
<li class="li6">Seus detalhes de ID de usu&aacute;rio do Cyber Says;</li>
<li class="li6">
  Breve explica&ccedil;&atilde;o dos motivos para ser escolhido
  aleatoriamente como vencedor.
</li>
</ul>
<p class="p8">&nbsp;</p>
<ol class="ol1">
<li class="li6">
  Como parte desta Promo&ccedil;&atilde;o, voc&ecirc; reconhece que (i)
  qualquer b&ocirc;nus de cr&eacute;dito recebido na ImLive.com ou em
  qualquer Site de Terceiros como parte desta Promo&ccedil;&atilde;o
  <strong>n&atilde;o </strong>&eacute;
  <strong
    >resgat&aacute;vel, n&atilde;o &eacute; reembols&aacute;vel e
    n&atilde;o pode ser trocado</strong
  >; (ii) esses b&ocirc;nus de cr&eacute;dito devem ser usados somente na
  ImLive.com ou em qualquer Site de Terceiros relevante; (iii) esses
  b&ocirc;nus de cr&eacute;dito n&atilde;o t&ecirc;m nenhum valor
  pecuni&aacute;rio ou qualquer tipo de valor fora da ImLive.com ou fora
  do Site de Terceiros aplic&aacute;vel; (iv) voc&ecirc; &eacute; o
  &uacute;nico respons&aacute;vel pelo uso dos servi&ccedil;os da
  ImLive.com ou de qualquer Site de Terceiros relevante, bem como pelo uso
  de tais cr&eacute;ditos; e (v) voc&ecirc; leu
  <span class="s1"
    ><em>os Termos e Condi&ccedil;&otilde;es da ImLive.com</em></span
  >
  ou, quando aplic&aacute;vel, os termos e condi&ccedil;&otilde;es do Site
  de Terceiros relevante antes de usar os servi&ccedil;os relevantes ou
  usar qualquer um dos b&ocirc;nus de cr&eacute;dito em seus
  servi&ccedil;os.
</li>
</ol>
<p class="p9">&nbsp;</p>
<ol class="ol1">
<li class="li6">
  Como parte desta Promo&ccedil;&atilde;o, voc&ecirc; reconhece que a
  Empresa poder&aacute;, a seu exclusivo crit&eacute;rio, recusar ou
  desqualificar sua participa&ccedil;&atilde;o na Promo&ccedil;&atilde;o
  se alguma das informa&ccedil;&otilde;es voc&ecirc; forneceu ao completar
  sua participa&ccedil;&atilde;o na Promo&ccedil;&atilde;o, conforme
  detalhado na se&ccedil;&atilde;o 4 acima, ou no Formul&aacute;rio de
  Postagem Gratuita, estiver (i) ausente, imprecisa e/ou desatualizada;
  (ii) aparentar ser falsa, fraudulenta ou violar os Termos da
  Promo&ccedil;&atilde;o Cyber Says, os Termos ou quaisquer leis ou
  regulamentos aplic&aacute;veis.
</li>
</ol>
<p class="p9">&nbsp;</p>
<ol class="ol1">
<li class="li6">
  Voc&ecirc; n&atilde;o poder&aacute; usar v&aacute;rios endere&ccedil;os
  de e-mail, contas e/ou identidades ou qualquer outro m&eacute;todo para
  participar da Promo&ccedil;&atilde;o Cyber Says mais de uma vez.
  Voc&ecirc; n&atilde;o poder&aacute; se registrar em nome de outra
  pessoa.
</li>
</ol>
<p class="p7">&nbsp;</p>
<ol class="ol1">
<li class="li6">
  O uso de m&eacute;todos rob&oacute;ticos, mec&acirc;nicos ou outras
  formas de inscri&ccedil;&atilde;o pr&eacute;-programada &eacute;
  estritamente proibido. Os participantes n&atilde;o podem usar tais
  ferramentas de manipula&ccedil;&atilde;o e a Empresa se reserva o
  direito (a seu crit&eacute;rio exclusivo) de implementar,
  periodicamente, processos de inscri&ccedil;&atilde;o que possam frustrar
  ou proibir tal inscri&ccedil;&atilde;o automatizada; desde que, no
  entanto, nenhum participante de qualquer Promo&ccedil;&atilde;o possa se
  basear ou insistir na falha ou recusa da Empresa em tomar qualquer uma
  das a&ccedil;&otilde;es acima mencionadas ou determinar, a seu
  crit&eacute;rio exclusivo, que a inscri&ccedil;&atilde;o de um
  participante deva ser descontada porque a inscri&ccedil;&atilde;o de
  outro participante foi ou vice-versa. Qualquer uso de sistema
  automatizado ou de qualquer m&eacute;todo semelhante para participar de
  qualquer Promo&ccedil;&atilde;o &eacute; estritamente proibido e pode
  resultar na sua desqualifica&ccedil;&atilde;o da Promo&ccedil;&atilde;o
  e/ou do uso futuro dos Servi&ccedil;os. A pessoa a quem o
  endere&ccedil;o de e-mail foi atribu&iacute;do pela operadora
  aplic&aacute;vel ser&aacute; considerada a propriet&aacute;ria do
  endere&ccedil;o de e-mail.
</li>
</ol>
<p class="p7">&nbsp;</p>
<ol class="ol1">
<li class="li6">
  A Empresa se reserva o direito de limitar a Promo&ccedil;&atilde;o aos
  participantes localizados em uma determinada jurisdi&ccedil;&atilde;o,
  caso em que apenas os usu&aacute;rios residentes em tal
  jurisdi&ccedil;&atilde;o no momento da inscri&ccedil;&atilde;o
  poder&atilde;o ser eleg&iacute;veis para participar da
  Promo&ccedil;&atilde;o.
</li>
</ol>
<p class="p7">&nbsp;</p>
<ol class="ol1">
<li class="li6">
  Os funcion&aacute;rios da Empresa (incluindo, sem
  limita&ccedil;&atilde;o, funcion&aacute;rios tempor&aacute;rios ou de
  meio per&iacute;odo), diretores e representantes, ag&ecirc;ncias de
  promo&ccedil;&atilde;o e/ou patrocinadores diretamente envolvidos na
  administra&ccedil;&atilde;o, desenvolvimento, cumprimento e
  execu&ccedil;&atilde;o de uma Promo&ccedil;&atilde;o espec&iacute;fica,
  e a fam&iacute;lia imediata e outros membros da fam&iacute;lia (ou seja,
  c&ocirc;njuges, pais, av&oacute;s, filhos, netos, colegas de quarto,
  colegas de casa, outras pessoas significativas, parceiros e
  irm&atilde;os) de qualquer um dos itens acima n&atilde;o s&atilde;o
  eleg&iacute;veis para participar e/ou ganhar uma Promo&ccedil;&atilde;o.
</li>
</ol>
<p class="p15">&nbsp;</p>
<ol class="ol1">
<li class="li6">
  A participa&ccedil;&atilde;o na Promo&ccedil;&atilde;o n&atilde;o
  est&aacute; dispon&iacute;vel para usu&aacute;rios (nacionais e
  residentes) da Su&eacute;cia, Israel, Chipre e Andorra.
</li>
</ol>
<p class="p7">&nbsp;</p>
<ol class="ol1">
<li class="li6">
  Por favor observe que o uso dos Servi&ccedil;os, que podem ser baixados
  gratuitamente, requer uma conex&atilde;o com a Internet e um dispositivo
  compat&iacute;vel. Voc&ecirc; deve participar da Promo&ccedil;&atilde;o
  durante o Per&iacute;odo de Promo&ccedil;&atilde;o da
  Promo&ccedil;&atilde;o em quest&atilde;o para ter direito a ganhar o(s)
  pr&ecirc;mio(s) aplic&aacute;vel(is).
</li>
</ol>
<p class="p9">&nbsp;</p>
<ol class="ol1">
<li class="li6">
  Poder&aacute; ser solicitado a voc&ecirc;, a qualquer momento, que nos
  forne&ccedil;a, ou a um terceiro designado por n&oacute;s, um
  comprovante de sua idade e/ou identidade e/ou resid&ecirc;ncia, e
  voc&ecirc; dever&aacute;, quando solicitado, apresentar um documento
  v&aacute;lido que nos permita verificar a sua resid&ecirc;ncia e/ou
  identidade, de forma razoavelmente satisfat&oacute;ria para a nossa
  equipe. Se voc&ecirc; n&atilde;o puder fornecer documentos
  satisfat&oacute;rios, poderemos exclu&iacute;-lo da
  Promo&ccedil;&atilde;o Cyber Says e voc&ecirc; poder&aacute; perder
  quaisquer privil&eacute;gios ou pr&ecirc;mios que lhe tenham sido
  atribu&iacute;dos sem qualquer tipo de compensa&ccedil;&atilde;o. Por
  meio deste instrumento, voc&ecirc; renuncia irrevogavelmente a quaisquer
  reivindica&ccedil;&otilde;es ou direitos relacionados a tal
  exclus&atilde;o e/ou perda.
</li>
</ol>
<p class="p7">&nbsp;</p>
<p class="p4">
<span class="s1"
  ><strong
    >Elegibilidade para receber os bilhetes da Promo&ccedil;&atilde;o e
    sele&ccedil;&atilde;o dos ganhadores</strong
  ></span
>
</p>
<ol class="ol1">
<li class="li6">
  A Promo&ccedil;&atilde;o Cyber Says consiste em uma
  promo&ccedil;&atilde;o, cujos vencedores ter&atilde;o direito a ganhar
  os Pr&ecirc;mios (conforme detalhado abaixo).
</li>
</ol>
<p class="p7">&nbsp;</p>
<ol class="ol1">
<li class="li6">
  Os Usu&aacute;rios Eleg&iacute;veis ter&atilde;o direito a ganhar um (1)
  bilhete para participar da Promo&ccedil;&atilde;o para cada segunda
  transa&ccedil;&atilde;o ou mais de compra de cr&eacute;dito real no site
  <a href="http://www.ImLive.com"
    ><span class="s3">www.ImLive.com</span></a
  >
  <span class="s1"><strong>ou</strong></span
  ><strong> </strong>em qualquer outro site de terceiros (excluindo
  cr&eacute;ditos de b&ocirc;nus), (ou seja, a partir de 6 cr&eacute;ditos
  reais comprados ou mais). Cada cr&eacute;dito real adquirido equivale a
  1 bilhete.&nbsp;
</li>
</ol>
<p class="p7">&nbsp;</p>
<p class="p16">
Voc&ecirc; compreende e reconhece que n&atilde;o h&aacute; limite para o
n&uacute;mero de cr&eacute;ditos que pode adquirir e, portanto, para o
n&uacute;mero de bilhetes da Promo&ccedil;&atilde;o que pode estar
qualificado para receber.
</p>
<p class="p9">&nbsp;</p>
<ol class="ol1">
<li class="li6">
  <strong
    >Voc&ecirc; tamb&eacute;m pode receber bilhetes ao participar da
    promo&ccedil;&atilde;o Cyber Says gratuitamente.
  </strong>
</li>
</ol>
<p class="p16">
Nesse sentido, voc&ecirc; pode entrar em contato com a Empresa, conforme
instru&iacute;do no Formul&aacute;rio de Postagem Gratuita, durante o
Per&iacute;odo da Promo&ccedil;&atilde;o, por meio de
correspond&ecirc;ncia registrada internacional para o endere&ccedil;o
registrado da Empresa em Agias Zonis &amp; Thessalonikis, Nicolaou
Pentadromos Centre, Escrit&oacute;rio 903A, Limassol, Chipre, 3025, e
incluir todos os seguintes dados
</p>
<ol class="ol1">
<ol class="ol2">
  <li class="li6">
    O assunto da correspond&ecirc;ncia deve incluir "<strong
      >Solicita&ccedil;&atilde;o de participa&ccedil;&atilde;o gratuita -
      Promo&ccedil;&atilde;o Cyber Says</strong
    >";
  </li>
  <li class="li6">
    A correspond&ecirc;ncia deve conter seu nome de usu&aacute;rio,
    n&uacute;mero de ID da conta Cyber Says, n&uacute;mero de telefone,
    endere&ccedil;o de e-mail e data de nascimento.
  </li>
  <li class="li6">
    A correspond&ecirc;ncia dever&aacute; ser recebida por n&oacute;s
    durante o Per&iacute;odo da Promo&ccedil;&atilde;o aplic&aacute;vel
    para a Promo&ccedil;&atilde;o relevante e ser&aacute; aceita
    at&eacute;, no m&aacute;ximo,
    <span class="s1"><strong>7 de julho de 2024.</strong></span>
  </li>
  <li class="li6">
    Independentemente do acima exposto, qualquer correspond&ecirc;ncia
    enviada ap&oacute;s o t&eacute;rmino do Per&iacute;odo da
    Promo&ccedil;&atilde;o n&atilde;o ser&aacute; considerada como
    inscri&ccedil;&atilde;o v&aacute;lida e n&atilde;o dar&aacute; direito
    a nenhum bilhete, mesmo que a correspond&ecirc;ncia tenha sido
    recebida por n&oacute;s antes de
    <span class="s1"><strong>7 de julho de 2024</strong></span
    >;
  </li>
  <li class="li6">
    Cada 1 (uma) correspond&ecirc;ncia v&aacute;lida recebida por
    n&oacute;s permitir&aacute; que voc&ecirc; receba 1 (um) bilhete para
    a promo&ccedil;&atilde;o Cyber Says.
  </li>
</ol>
</ol>
<p class="p7">&nbsp;</p>
<ol class="ol1">
<li class="li6">
  <span class="s1"><strong>Amigos indicados</strong></span
  >. Voc&ecirc; reconhece que, para aumentar suas chances de ganhar,
  tamb&eacute;m pode indicar alguns de seus amigos. Cada Usu&aacute;rio
  Eleg&iacute;vel que tenha indicado um novo amigo leg&iacute;timo em
  conformidade com estes Termos da Promo&ccedil;&atilde;o Cyber Says e com
  os Termos e que seja qualificado para participar da
  Promo&ccedil;&atilde;o, conforme descrito na se&ccedil;&atilde;o 4
  destes Termos,<strong> </strong
  ><span class="s1"><strong>e </strong></span>que tenha conclu&iacute;do a
  Oferta On-line ("<strong>Amigo Indicado</strong>") receber&aacute;
  <span class="s1">30 (trinta) bilhetes</span> para cada Amigo Indicado
  leg&iacute;timo e novo.
</li>
</ol>
<p class="p7">&nbsp;</p>
<p class="p16">
"<strong>Oferta on-line</strong>" significa a conclus&atilde;o de todas as
etapas a seguir
</p>
<ul class="ul1">
<li class="li6">
  <strong>Criar uma conta nova e leg&iacute;tima na ImLive.com </strong
  ><span class="s1"><strong>ou</strong></span
  ><strong>, quando aplic&aacute;vel, no Site de Terceiros.</strong>
</li>
<li class="li6">
  <strong
    >Fazer uma compra m&iacute;nima de cinco cr&eacute;ditos na ImLive.com </strong
  ><span class="s1"><strong>ou</strong></span
  ><strong>, quando aplic&aacute;vel, no site de terceiros </strong>- o
  usu&aacute;rio reconhece que, ao fazer uma compra m&iacute;nima de cinco
  cr&eacute;ditos na ImLive.com, receber&aacute; automaticamente um
  b&ocirc;nus adicional &uacute;nico de cinco cr&eacute;ditos.
</li>
<li class="li6">
  <strong
    >Gastar todos os dez (10) cr&eacute;ditos que voc&ecirc; recebeu na
    ImLive.com </strong
  ><span class="s1"><strong>ou</strong></span
  ><strong>, quando aplic&aacute;vel, no site de terceiros.</strong>
</li>
</ul>
<p class="p7">&nbsp;</p>
<ol class="ol1">
<li class="li6">
  As chances de ganhar s&atilde;o baseadas no n&uacute;mero de bilhetes
  eleg&iacute;veis. Os vencedores ser&atilde;o sorteados aleatoriamente
  entre todos os bilhetes v&aacute;lidos por um sistema automatizado de
  computador.
</li>
</ol>
<p class="p7">&nbsp;</p>
<ol class="ol1">
<li class="li6">
  Qualquer solicita&ccedil;&atilde;o de participa&ccedil;&atilde;o que
  n&atilde;o esteja em conformidade com o disposto acima, com os Termos da
  Promo&ccedil;&atilde;o Cyber Says ou com os nossos Termos poder&aacute;
  ser desqualificada ou anulada a nosso exclusivo crit&eacute;rio. Nenhuma
  outra forma ou m&eacute;todo de envio de uma inscri&ccedil;&atilde;o
  ser&aacute; considerado, a menos que estabelecido de outra forma na
  descri&ccedil;&atilde;o espec&iacute;fica da Promo&ccedil;&atilde;o
  Cyber Says.
</li>
</ol>
<p class="p7">&nbsp;</p>
<ol class="ol1">
<li class="li6">
  O vencedor ser&aacute; selecionado aleatoriamente em
  <span class="s1"><strong>14 de julho de 2024</strong></span
  >.
</li>
</ol>
<p class="p7">&nbsp;</p>
<ol class="ol1">
<li class="li6">
  A escolha dos ganhadores &eacute; final e definitiva, a menos que seja
  declarado o contr&aacute;rio nestes Termos da Promo&ccedil;&atilde;o
  Cyber Says.
</li>
</ol>
<p class="p10">&nbsp;</p>
<p class="p4">
<span class="s1"
  ><strong>Pr&ecirc;mios/Valor de Varejo Aproximado ("VVA")</strong></span
>
</p>
<ol class="ol1">
<li class="li6">O pr&ecirc;mio concedido ser&aacute; -</li>
<ol class="ol2">
  <li class="li6">
    Passagem a&eacute;rea em classe econ&ocirc;mica para Las Vegas,
    Nevada, EUA, e 2 (duas) noites de hospedagem em hotel para
  </li>
  <ol class="ol3">
    <li class="li6">
      O ganhador e 2 (dois) dos Amigos Indicados do ganhador (quando
      aplic&aacute;vel);
    </li>
    <li class="li6">
      O vencedor e 1 (um) Amigo Indicado e um (1) Usu&aacute;rio
      Eleg&iacute;vel que indicou o vencedor (quando aplic&aacute;vel)
      <span class="s1"><strong>e</strong></span
      ><strong> </strong>completou a Oferta Online ("<strong
        >Amigo Indicado</strong
      >"); (ambos coletivamente "<strong>Amigos de Viagem</strong>")
    </li>
  </ol>
  <li class="li6">
    US$1.000,00 (mil d&oacute;lares americaos) em cr&eacute;ditos a serem
    usados no site
    <a href="http://www.ImLive.com"
      ><span class="s3">www.ImLive.com</span></a
    >
    (n&atilde;o resgat&aacute;veis, n&atilde;o troc&aacute;veis,
    n&atilde;o reembols&aacute;veis)
    <span class="s1"><strong>somente</strong></span
    ><strong> </strong>para o vencedor; e
  </li>
  <li class="li6">
    US$1.000,00 (mil d&oacute;lares americaos) para o ganhador e, quando
    aplic&aacute;vel, US$ 500,00 (quinhentos d&oacute;lares americanos)
    para cada um dos dois Amigos de Viagem do ganhador (veja a
    defini&ccedil;&atilde;o abaixo) como parte da viagem a Las Vegas,
    jantar com estrelas porn&ocirc;s e passeio de Cadillac (coletivamente,
    as se&ccedil;&otilde;es 20.a, 20.b e 20.c s&atilde;o referidas como
    "<strong>Pr&ecirc;mios</strong>"). VVA: $5.000,00 USD (cinco mil
    d&oacute;lares).
  </li>
</ol>
</ol>
<p class="p17">&nbsp;</p>
<ol class="ol1">
<li class="li6">
  Para evitar d&uacute;vidas, o vencedor e seus dois Amigos de Viagem
  (quando aplic&aacute;vel, de acordo com a se&ccedil;&atilde;o 21 acima)
  s&atilde;o os &uacute;nicos respons&aacute;veis por toda e qualquer
  despesa n&atilde;o especificada em conjunto com a
  aceita&ccedil;&atilde;o e o uso dos Pr&ecirc;mios.
</li>
</ol>
<p class="p17">&nbsp;</p>
<ol class="ol1">
<li class="li6">O ganhador reconhece e aceita que - o</li>
<ol class="ol2">
  <li class="li6">
    Se n&atilde;o for poss&iacute;vel ter dois Amigos de Viagem
    eleg&iacute;veis, o vencedor ter&aacute; que viajar sozinho e o
    pr&ecirc;mio concedido para os dois Amigos de Viagem poder&aacute; ser
    cancelado e anulado (a crit&eacute;rio exclusivo da Empresa);
  </li>
  <li class="li6">
    Para evitar d&uacute;vidas, caso algum dos Amigos de Viagem n&atilde;o
    cumpra as disposi&ccedil;&otilde;es descritas nos Termos da
    Promo&ccedil;&atilde;o Cyber Says ou nos Termos, ou se envolva em uma
    viola&ccedil;&atilde;o de qualquer lei ou regulamento
    aplic&aacute;vel, os dois Amigos de Viagem n&atilde;o ser&atilde;o
    eleg&iacute;veis para a concess&atilde;o dos Pr&ecirc;mios;
  </li>
  <li class="li6">
    A Empresa mant&eacute;m o crit&eacute;rio exclusivo de determinar o
    hotel e o per&iacute;odo de voo para os Pr&ecirc;mios. Se o vencedor
    n&atilde;o estiver dispon&iacute;vel em tal data por qualquer motivo,
    o vencedor e, quando aplic&aacute;vel, os dois Amigos de Viagem,
    perder&atilde;o os Pr&ecirc;mios sem qualquer forma de
    compensa&ccedil;&atilde;o;
  </li>
  <li class="li6">
    A disponibilidade dos Pr&ecirc;mios, incluindo os destinos dos
    pr&ecirc;mios, depende da localiza&ccedil;&atilde;o geogr&aacute;fica
    do ganhador eleg&iacute;vel e da disponibilidade de voos. A
    disponibilidade dos Pr&ecirc;mios pode estar sujeita a determinadas
    altera&ccedil;&otilde;es a crit&eacute;rio exclusivo da Empresa, desde
    que o VVA dos Pr&ecirc;mios n&atilde;o exceda US$ 5.000,00 (cinco mil
    d&oacute;lares).
  </li>
</ol>
</ol>
<p class="p7">&nbsp;</p>
<ol class="ol1">
<li class="li6">
  O vencedor e, quando aplic&aacute;vel, seus dois Amigos de Viagem
  dever&atilde;o apresentar um passaporte v&aacute;lido com
  <strong>validade </strong>m&iacute;nima de
  <strong>seis meses </strong>no momento do voo para Las Vegas, NV, EUA.
  Se for o caso, eles devem ter um visto ou uma autoriza&ccedil;&atilde;o
  v&aacute;lida, caso contr&aacute;rio, os Pr&ecirc;mios poder&atilde;o
  ser anulados.
</li>
</ol>
<p class="p16">
Nesse sentido, a Empresa poder&aacute;, a seu crit&eacute;rio exclusivo,
escolher um local alternativo para o qual o vencedor poder&aacute; viajar.
</p>
<p class="p7">&nbsp;</p>
<ol class="ol1">
<li class="li6">
  Os pr&ecirc;mios s&atilde;o intransfer&iacute;veis e n&atilde;o podem
  ser trocados por um equivalente em dinheiro.
</li>
</ol>
<p class="p7">&nbsp;</p>
<ol class="ol1">
<li class="li6">
  Os vencedores da Promo&ccedil;&atilde;o Cyber Says s&atilde;o os
  &uacute;nicos respons&aacute;veis por declarar e pagar todos e quaisquer
  impostos aplic&aacute;veis relacionados aos Pr&ecirc;mios e pagar
  quaisquer despesas associadas a eles que n&atilde;o estejam
  especificamente previstas nos Termos da Promo&ccedil;&atilde;o Cyber
  Says.
</li>
</ol>
<p class="p7">&nbsp;</p>
<ol class="ol1">
<li class="li6">
  Ao participar da Promo&ccedil;&atilde;o Cyber Says, voc&ecirc; permite
  que a Empresa entre em contato com voc&ecirc;, para fins de
  administra&ccedil;&atilde;o da Promo&ccedil;&atilde;o Cyber Says e
  concess&atilde;o de Pr&ecirc;mios. Notificaremos cada poss&iacute;vel
  vencedor enviando uma notifica&ccedil;&atilde;o por meio do
  endere&ccedil;o de e-mail (que foi usado para se registrar nos
  Servi&ccedil;os), dentro de 15 (quinze) dias &uacute;teis a partir do
  final do Per&iacute;odo da Promo&ccedil;&atilde;o.
</li>
</ol>
<p class="p9">&nbsp;</p>
<ol class="ol1">
<li class="li6">
  Faremos tr&ecirc;s tentativas para entrar em contato com o
  poss&iacute;vel vencedor dentro de 72 (setenta e duas) horas. Se
  n&atilde;o conseguirmos entrar em contato com o poss&iacute;vel vencedor
  dentro do prazo especificado ou se ele for desqualificado ou n&atilde;o
  cumprir estes Termos ou Termos da Promo&ccedil;&atilde;o Cyber Says, a
  Empresa poder&aacute; perder o Pr&ecirc;mio e conced&ecirc;-lo
  potencialmente a outro vencedor.
</li>
</ol>
<p class="p7">&nbsp;</p>
<ol class="ol1">
<li class="li6">
  &Eacute; de sua exclusiva responsabilidade notificar-nos por escrito
  caso tenha alterado seu endere&ccedil;o de e-mail durante o
  Per&iacute;odo da Promo&ccedil;&atilde;o.
</li>
</ol>
<p class="p7">&nbsp;</p>
<ol class="ol1">
<li class="li6">
  Nossas decis&otilde;es relativas &agrave; administra&ccedil;&atilde;o e
  opera&ccedil;&atilde;o de qualquer Promo&ccedil;&atilde;o, incluindo,
  sem limita&ccedil;&atilde;o, a sele&ccedil;&atilde;o de poss&iacute;veis
  ganhadores entre todos os participantes eleg&iacute;veis, s&atilde;o
  finais e definitivas em todos os assuntos relacionados &agrave;
  Promo&ccedil;&atilde;o.
</li>
</ol>
<p class="p7">&nbsp;</p>
<ol class="ol1">
<li class="li6">
  Voc&ecirc; reconhece e aceita que a Empresa se reserva o direito, a seu
  crit&eacute;rio exclusivo, de transferir automaticamente cada
  Usu&aacute;rio Eleg&iacute;vel e/ou os Amigos de Viagem que n&atilde;o
  foram escolhidos como vencedores desta Promo&ccedil;&atilde;o para
  participar de futuras Promo&ccedil;&otilde;es semelhantes, exceto quando
  explicitamente proibido pelas leis ou regulamentos aplic&aacute;veis.
</li>
</ol>
<p class="p7">&nbsp;</p>
<ol class="ol1">
<li class="li6">
  Voc&ecirc; n&atilde;o tem permiss&atilde;o para transferir ou substituir
  qualquer Pr&ecirc;mio recebido pela participa&ccedil;&atilde;o em uma
  Promo&ccedil;&atilde;o. Todos os pr&ecirc;mios aqui descritos s&atilde;o
  oferecidos "no estado em que se encontram", sem garantia expressa ou
  impl&iacute;cita.
</li>
</ol>
<p class="p9">&nbsp;</p>
<ol class="ol1">
<li class="li6">
  Os pr&ecirc;mios ser&atilde;o entregues aos vencedores no prazo de 30
  (trinta) dias &uacute;teis, a partir do recebimento, pela Empresa, dos
  dados completos do vencedor (conforme necess&aacute;rio para fornecer o
  pr&ecirc;mio), a menos que a Empresa, a seu exclusivo crit&eacute;rio,
  tenha qualquer motivo para acreditar que o vencedor n&atilde;o &eacute;
  eleg&iacute;vel para participar da Promo&ccedil;&atilde;o Cyber Says ou
  para receber os Pr&ecirc;mios.
</li>
</ol>
<p class="p7">&nbsp;</p>
<ol class="ol1">
<li class="li6">
  Os pr&ecirc;mios ser&atilde;o concedidos aos vencedores por meio de seu
  e-mail pessoal usado para se registrar nos Servi&ccedil;os da Empresa.
</li>
</ol>
<p class="p7">&nbsp;</p>
<ol class="ol1">
<li class="li6">
  Nenhum pr&ecirc;mio ser&aacute; concedido a qualquer participante que
  n&atilde;o seja eleg&iacute;vel para participar da
  Promo&ccedil;&atilde;o ou que n&atilde;o cumpra os Termos da
  Promo&ccedil;&atilde;o Cyber Says, os Termos ou quaisquer outras regras
  de participa&ccedil;&atilde;o na Promo&ccedil;&atilde;o.
</li>
</ol>
<p class="p7">&nbsp;</p>
<ol class="ol1">
<li class="li6">
  Se qualquer vencedor em potencial for obrigado por qualquer lei
  aplic&aacute;vel, pelos Termos da Promo&ccedil;&atilde;o Cyber Says,
  pelos Termos, a cumprir condi&ccedil;&otilde;es ou requisitos adicionais
  para participar da Promo&ccedil;&atilde;o e receber o Pr&ecirc;mio, esse
  vencedor em potencial dever&aacute; cumprir integralmente esses
  requisitos dentro do prazo estabelecido por n&oacute;s antes e como
  condi&ccedil;&atilde;o para receber o Pr&ecirc;mio. Se um vencedor em
  potencial for desqualificado por qualquer motivo, poderemos conceder o
  pr&ecirc;mio aplic&aacute;vel a um vencedor alternativo dentre os
  participantes eleg&iacute;veis restantes, a nosso crit&eacute;rio
  exclusivo.
</li>
</ol>
<p class="p7">&nbsp;</p>
<ol class="ol1">
<li class="li6">
  A Empresa n&atilde;o &eacute; respons&aacute;vel, de forma alguma, por
  quaisquer garantias, representa&ccedil;&otilde;es ou garantias,
  expressas ou impl&iacute;citas, de fato ou de direito, relacionadas a
  qualquer um dos Pr&ecirc;mios, com rela&ccedil;&atilde;o ao uso, valor
  ou aproveitamento dos Pr&ecirc;mios, incluindo, sem
  limita&ccedil;&atilde;o, sua qualidade, condi&ccedil;&atilde;o ou
  adequa&ccedil;&atilde;o a um prop&oacute;sito.
</li>
</ol>
<p class="p7">&nbsp;</p>
<ol class="ol1">
<li class="li6">
  Os pr&ecirc;mios e a participa&ccedil;&atilde;o na
  Promo&ccedil;&atilde;o Cyber Says n&atilde;o est&atilde;o
  dispon&iacute;veis para pessoas com menos de 18 ou 21 anos de idade
  (dependendo da sua jurisdi&ccedil;&atilde;o).
</li>
</ol>
<p class="p9">&nbsp;</p>
<p class="p6">
<span class="s1"
  ><strong
    >Limita&ccedil;&otilde;es de responsabilidade e
    libera&ccedil;&atilde;o</strong
  ></span
>
</p>
<ol class="ol1">
<li class="li6">
  Ao participar desta Promo&ccedil;&atilde;o, voc&ecirc; concorda em
  liberar, indenizar e isentar de responsabilidade a Empresa e suas
  respectivas controladoras, subsidi&aacute;rias, afiliadas,
  distribuidores, fornecedores e organiza&ccedil;&otilde;es de
  publicidade, promo&ccedil;&atilde;o e julgamento e cada um de seus
  respectivos funcion&aacute;rios, executivos, diretores, acionistas e
  agentes (coletivamente, os "<strong>Liberadores</strong>") de e contra
  todas e quaisquer reivindica&ccedil;&otilde;es, a&ccedil;&otilde;es,
  danos, perdas, custos, despesas (incluindo honor&aacute;rios
  advocat&iacute;cios/legais razo&aacute;veis), les&otilde;es ou causas de
  a&ccedil;&atilde;o de qualquer tipo que, de alguma forma, agora ou no
  futuro, possam surgir ou se relacionar com a Promo&ccedil;&atilde;o,
  incluindo, sem limita&ccedil;&atilde;o (i) a administra&ccedil;&atilde;o
  da Promo&ccedil;&atilde;o, como erros tipogr&aacute;ficos, de
  impress&atilde;o, de semeadura, humanos ou outros erros relacionados ou
  em conex&atilde;o com a Promo&ccedil;&atilde;o, o processamento de
  inscri&ccedil;&otilde;es, o an&uacute;ncio do Pr&ecirc;mio ou quaisquer
  materiais relacionados, inscri&ccedil;&otilde;es imprecisas,
  fraudulentas, incompletas, ileg&iacute;veis, atrasadas, perdidas,
  roubadas, mal direcionadas, n&atilde;o entregues, incompletas ou
  danificadas, quaisquer atrasos na entrega ou falta de disponibilidade do
  Pr&ecirc;mio ou dos materiais do Pr&ecirc;mio; (ii) A sua
  participa&ccedil;&atilde;o na Promo&ccedil;&atilde;o oferecida pelos
  Liberadores ou a sua aceita&ccedil;&atilde;o ou uso de um Pr&ecirc;mio,
  ou a participa&ccedil;&atilde;o em quaisquer atividades relacionadas ao
  Pr&ecirc;mio, incluindo, sem limita&ccedil;&atilde;o, qualquer viagem
  relacionada a isso, e morte e les&otilde;es corporais (incluindo
  ang&uacute;stia emocional), devido, no todo ou em parte, direta ou
  indiretamente, &agrave; participa&ccedil;&atilde;o nas
  Promo&ccedil;&otilde;es ou em qualquer atividade relacionada &agrave;
  Promo&ccedil;&atilde;o e por quaisquer reivindica&ccedil;&otilde;es ou
  causas de a&ccedil;&atilde;o baseadas em direitos de publicidade,
  difama&ccedil;&atilde;o ou invas&atilde;o de privacidade; (iii) qualquer
  ato ou omiss&atilde;o, seja negligente, intencional ou de outra forma,
  causado pelos Liberadores e/ou por qualquer Promo&ccedil;&atilde;o; (iv)
  a participa&ccedil;&atilde;o de qualquer outro usu&aacute;rio na
  Promo&ccedil;&atilde;o.
</li>
</ol>
<p class="p9">&nbsp;</p>
<ol class="ol1">
<li class="li6">
  O usu&aacute;rio concorda que os Liberadores n&atilde;o s&atilde;o
  respons&aacute;veis por informa&ccedil;&otilde;es incorretas ou
  imprecisas, sejam elas causadas pelos Servi&ccedil;os, por outros
  usu&aacute;rios ou por qualquer equipamento ou programa&ccedil;&atilde;o
  associados ou utilizados na Promo&ccedil;&atilde;o e que os Liberadores
  n&atilde;o assumem nenhuma responsabilidade por (i) qualquer
  les&atilde;o ou dano a pessoas ou propriedades que possam ser causados,
  direta ou indiretamente, no todo ou em parte, pela
  participa&ccedil;&atilde;o de um usu&aacute;rio em uma
  Promo&ccedil;&atilde;o ou pelo recebimento ou uso ou mau uso de qualquer
  pr&ecirc;mio; (ii) qualquer erro, omiss&atilde;o,
  interrup&ccedil;&atilde;o, exclus&atilde;o, defeito ou atraso na
  opera&ccedil;&atilde;o ou transmiss&atilde;o dos Servi&ccedil;os; (iii)
  qualquer mau funcionamento ou falha de computador, telefone, cabo,
  sat&eacute;lite, rede, hardware ou software eletr&ocirc;nico ou de
  Internet, problemas de conex&atilde;o ou disponibilidade; (iv)
  transmiss&otilde;es distorcidas ou confusas, provedor de
  servi&ccedil;os/internet/site da Web/acessibilidade ou disponibilidade
  de rede de uso; (v) congestionamento de tr&aacute;fego; (vi)
  interven&ccedil;&atilde;o humana n&atilde;o autorizada; ou (vii) roubo
  ou destrui&ccedil;&atilde;o, adultera&ccedil;&atilde;o ou acesso
  n&atilde;o autorizado a inscri&ccedil;&otilde;es e/ou
  informa&ccedil;&otilde;es de inscri&ccedil;&atilde;o. Se, por qualquer
  motivo, uma Promo&ccedil;&atilde;o n&atilde;o puder ser executada
  conforme planejado em raz&atilde;o de infec&ccedil;&atilde;o por
  v&iacute;rus de computador, interven&ccedil;&atilde;o n&atilde;o
  autorizada, fraude, adultera&ccedil;&atilde;o, falhas t&eacute;cnicas ou
  quaisquer outras causas al&eacute;m do controle dos Fornecedores e que,
  na opini&atilde;o exclusiva dos Fornecedores, corrompam ou afetem a
  administra&ccedil;&atilde;o, a seguran&ccedil;a, a justi&ccedil;a, a
  integridade ou a condu&ccedil;&atilde;o adequada de uma
  Promo&ccedil;&atilde;o, os Fornecedores se reservam o direito, a seu
  crit&eacute;rio exclusivo, de cancelar, encerrar, modificar ou suspender
  tal Promo&ccedil;&atilde;o e selecionar o(s) vencedor(es) entre todas as
  inscri&ccedil;&otilde;es eleg&iacute;veis recebidas para tal
  Promo&ccedil;&atilde;o antes da a&ccedil;&atilde;o tomada.
</li>
</ol>
<p class="p7">&nbsp;</p>
<ol class="ol1">
<li class="li6">
  Em nenhuma circunst&acirc;ncia os Liberadores ser&atilde;o
  respons&aacute;veis por quaisquer danos ou perdas de qualquer tipo,
  incluindo danos indiretos, incidentais, consequenciais ou punitivos,
  al&eacute;m de suas despesas reais decorrentes de sua
  participa&ccedil;&atilde;o em uma Promo&ccedil;&atilde;o. Sem limitar o
  acima exposto, os Servi&ccedil;os s&atilde;o fornecidos "no estado em
  que se encontram", sem garantia de qualquer tipo, expressa ou
  impl&iacute;cita, incluindo, sem limita&ccedil;&atilde;o, as garantias
  impl&iacute;citas de comercializa&ccedil;&atilde;o,
  adequa&ccedil;&atilde;o a uma finalidade espec&iacute;fica ou n&atilde;o
  viola&ccedil;&atilde;o. Algumas jurisdi&ccedil;&otilde;es podem
  n&atilde;o permitir a limita&ccedil;&atilde;o ou exclus&atilde;o de
  responsabilidade por danos incidentais ou consequenciais ou a
  exclus&atilde;o de garantias impl&iacute;citas, portanto, algumas das
  limita&ccedil;&otilde;es ou exclus&otilde;es acima podem n&atilde;o se
  aplicar ao senhor. Nesses casos, nossa responsabilidade ser&aacute;
  limitada &agrave; extens&atilde;o m&aacute;xima permitida pela
  legisla&ccedil;&atilde;o aplic&aacute;vel.
</li>
</ol>
<p class="p5">&nbsp;</p>
<p class="p4">
<span class="s1"><strong>Termos gerais adicionais</strong></span>
</p>
<ol class="ol1">
<li class="li6">
  Todas as solicita&ccedil;&otilde;es de participa&ccedil;&atilde;o em uma
  Promo&ccedil;&atilde;o se tornar&atilde;o propriedade exclusiva da
  Empresa e n&atilde;o ser&atilde;o reconhecidas e/ou devolvidas. As
  inscri&ccedil;&otilde;es recebidas de participantes n&atilde;o
  eleg&iacute;veis e/ou que n&atilde;o estejam em conformidade com os
  Termos da Promo&ccedil;&atilde;o Cyber Says ou com os Termos
  ser&atilde;o consideradas nulas. As inscri&ccedil;&otilde;es que forem
  consideradas fraudulentas ser&atilde;o consideradas nulas, e a pessoa
  que as fizer poder&aacute; ser impedida de participar da
  Promo&ccedil;&atilde;o e, a crit&eacute;rio exclusivo da Empresa, caso a
  caso, proibida de participar de quaisquer Promo&ccedil;&otilde;es e/ou
  servi&ccedil;os futuros da Empresa. A prova de envio ou submiss&atilde;o
  n&atilde;o ser&aacute; considerada prova de recebimento. Voc&ecirc;
  concorda, por meio deste instrumento, que em nenhuma hip&oacute;tese
  ter&aacute; qualquer reivindica&ccedil;&atilde;o contra n&oacute;s por
  quaisquer solicita&ccedil;&otilde;es que n&atilde;o tenham sido
  recebidas ou reconhecidas por n&oacute;s, por qualquer motivo que seja,
  ou que tenham sido recebidas antes ou depois do Per&iacute;odo da
  Promo&ccedil;&atilde;o para a Promo&ccedil;&atilde;o aplic&aacute;vel.
</li>
</ol>
<p class="p7">&nbsp;</p>
<ol class="ol1">
<li class="li6">
  A Empresa poder&aacute; cancelar, modificar, alterar, mudar ou suspender
  a Promo&ccedil;&atilde;o Cyber Says e qualquer um dos Pr&ecirc;mios ou
  benef&iacute;cios oferecidos de acordo com o presente, incluindo, sem
  limita&ccedil;&atilde;o, quando necess&aacute;rio por motivos de
  seguran&ccedil;a ou qualquer outro motivo, a seu crit&eacute;rio
  exclusivo, para cumprir a lei ou regulamenta&ccedil;&atilde;o
  aplic&aacute;vel, devido a abuso ou de outra forma, quando devido a
  circunst&acirc;ncias fora de seu controle (incluindo, sem
  limita&ccedil;&atilde;o, for&ccedil;a maior, inc&ecirc;ndio,
  inunda&ccedil;&atilde;o, epidemia ou outra emerg&ecirc;ncia de
  sa&uacute;de nacional, terremoto, explos&atilde;o, disputa trabalhista
  ou greve, ato de Deus ou inimigo p&uacute;blico, falha de
  sat&eacute;lite ou equipamento, tumulto ou dist&uacute;rbio civil,
  amea&ccedil;a ou atividade terrorista), epidemia ou outra
  emerg&ecirc;ncia de sa&uacute;de nacional, terremoto, explos&atilde;o,
  disputa trabalhista ou greve, ato de Deus ou inimigo p&uacute;blico,
  falha de sat&eacute;lite ou equipamento, tumulto ou dist&uacute;rbio
  civil, amea&ccedil;a ou atividade terrorista, guerra (declarada ou
  n&atilde;o declarada) ou qualquer lei, ordem ou regulamento do governo
  federal, estadual ou local, ordem de qualquer tribunal ou
  jurisdi&ccedil;&atilde;o, crise de sa&uacute;de p&uacute;blica ou outra
  causa que n&atilde;o esteja razoavelmente sob seu controle. No caso de a
  Promo&ccedil;&atilde;o ser encerrada, cancelada ou adiada por qualquer
  motivo, o valor real/avaliado do(s) pr&ecirc;mio(s) ser&aacute;
  concedido somente na medida exigida por lei.
</li>
</ol>
<p class="p11">&nbsp;</p>
<ol class="ol1">
<li class="li6">
  A Empresa se reserva o direito de alterar os Pr&ecirc;mios e/ou os
  termos desta Promo&ccedil;&atilde;o Cyber Says (<span class="s1"
    >incluindo, entre outros, </span
  >o Per&iacute;odo da Promo&ccedil;&atilde;o relevante, as datas
  relacionadas ou os Pr&ecirc;mios) a qualquer momento e sem aviso
  pr&eacute;vio.
</li>
</ol>
<p class="p15">&nbsp;</p>
<p class="p16">
Voc&ecirc; reconhece que ser&aacute; respons&aacute;vel por manter-se
atualizado sobre toda e qualquer altera&ccedil;&atilde;o feita na
Promo&ccedil;&atilde;o. No caso de modifica&ccedil;&atilde;o da
Promo&ccedil;&atilde;o, sua participa&ccedil;&atilde;o cont&iacute;nua na
Promo&ccedil;&atilde;o constitui aceita&ccedil;&atilde;o dos termos e
condi&ccedil;&otilde;es modificados de tal Promo&ccedil;&atilde;o.
</p>
<p class="p7">&nbsp;</p>
<ol class="ol1">
<li class="li6">
  &nbsp;Se tomarmos conhecimento de qualquer fraude, engano, m&aacute;
  conduta (por exemplo, linguagem forte, insultos, amea&ccedil;as),
  desonestidade ou a&ccedil;&atilde;o semelhante em rela&ccedil;&atilde;o
  &agrave; sua participa&ccedil;&atilde;o na Promo&ccedil;&atilde;o Cyber
  Says, ou se voc&ecirc; tiver agido de forma perturbadora ou com a
  inten&ccedil;&atilde;o de perturbar ou prejudicar a
  opera&ccedil;&atilde;o leg&iacute;tima da Promo&ccedil;&atilde;o Cyber
  Says ou se tiver violado qualquer um destes Termos da
  Promo&ccedil;&atilde;o Cyber Says, os Termos e/ou quaisquer leis
  adicionais, regulamentos e regras adicionais que se apliquem ao seu uso
  dos Servi&ccedil;os e/ou &agrave; sua participa&ccedil;&atilde;o em
  qualquer Promo&ccedil;&atilde;o Cyber Says, ent&atilde;o (i) n&oacute;s
  nos reservamos o direito absoluto de desqualific&aacute;-lo
  autom&aacute;tica e imediatamente ou invalidar a sua
  participa&ccedil;&atilde;o, e (ii) tamb&eacute;m nos reservamos o
  direito de buscar indeniza&ccedil;&otilde;es e outros recursos seus na
  medida m&aacute;xima permitida por lei. Se fraude, engano, m&aacute;
  conduta, desonestidade ou outra a&ccedil;&atilde;o s&oacute; for
  descoberta depois que qualquer pr&ecirc;mio aplic&aacute;vel tiver sido
  concedido a voc&ecirc;, ent&atilde;o voc&ecirc; ser&aacute; obrigado(a),
  mediante solicita&ccedil;&atilde;o, a devolver o Pr&ecirc;mio (ou
  fornecer uma compensa&ccedil;&atilde;o equivalente) para n&oacute;s
  imediatamente ap&oacute;s o recebimento de nossa
  solicita&ccedil;&atilde;o para faz&ecirc;-lo. Sem limitar o acima
  exposto, a Empresa poder&aacute; bloquear qualquer participante que, a
  crit&eacute;rio exclusivo da Empresa, tenha sido desqualificado, tenha
  elegibilidade question&aacute;vel ou seja ineleg&iacute;vel para
  participar da Promo&ccedil;&atilde;o.
</li>
</ol>
<p class="p12">&nbsp;</p>
<ol class="ol1">
<li class="li6">
  Ganhar um pr&ecirc;mio constitui seu consentimento para que a Empresa
  possa usar as seguintes informa&ccedil;&otilde;es a seu respeito: nome,
  nome de usu&aacute;rio, pa&iacute;s de resid&ecirc;ncia e o Pr&ecirc;mio
  e, por meio deste, voc&ecirc; concede a n&oacute;s e &agrave;s nossas
  afiliadas um direito e uma licen&ccedil;a perp&eacute;tuos, ilimitados,
  n&atilde;o exclusivos, mundiais, totalmente pagos e isentos de
  royalties, para usar (a) seu nome e nome de usu&aacute;rio; (b) sua
  imagem, fotografia e semelhan&ccedil;a; (c) seu depoimento sobre a
  participa&ccedil;&atilde;o e/ou uso de nossos servi&ccedil;os ou
  produtos; e (d) detalhes relacionados &agrave; sua vit&oacute;ria
  (coletivamente, as <strong>"Informa&ccedil;&otilde;es</strong>"), e para
  reproduzir, distribuir, exibir publicamente, executar publicamente e
  fazer trabalhos derivados, com base em tais Informa&ccedil;&otilde;es,
  em qualquer formato de m&iacute;dia, inclusive por meio de m&iacute;dia
  de transmiss&atilde;o, para fins de rela&ccedil;&otilde;es
  p&uacute;blicas, marketing e promo&ccedil;&atilde;o relacionados
  &agrave; Promo&ccedil;&atilde;o Cyber Says ou &agrave; Empresa. Todo o
  processamento de dados pessoais por n&oacute;s ser&aacute; feito de
  acordo com os termos de nossa Pol&iacute;tica de
  <span class="s1"
    ><em>Privacidade Pol&iacute;tica de Privacidade.</em></span
  >
</li>
</ol>
<p class="p7">&nbsp;</p>
<ol class="ol1">
<li class="li6">
  Se ganhar um Pr&ecirc;mio, voc&ecirc; renuncia a todos e quaisquer
  direitos de paternidade, integridade e quaisquer outros direitos
  conhecidos como ou referidos como "direitos morais" sobre as
  Informa&ccedil;&otilde;es que voc&ecirc; possa adquirir de acordo com
  este comunicado ou por for&ccedil;a de lei. O senhor entende que
  n&atilde;o ter&aacute; direito a qualquer pagamento ou outro
  reconhecimento em rela&ccedil;&atilde;o a qualquer uso das
  Informa&ccedil;&otilde;es pela Empresa.
</li>
</ol>
<p class="p9">&nbsp;</p>
<ol class="ol1">
<li class="li6">
  Todos os produtos, servi&ccedil;os e nomes de empresas mencionados e/ou
  inclu&iacute;dos s&atilde;o marcas registradas de seus
  propriet&aacute;rios originais. O uso de qualquer marca, nome, imagem ou
  semelhan&ccedil;a &eacute; apenas para fins de
  identifica&ccedil;&atilde;o e refer&ecirc;ncia e n&atilde;o implica
  qualquer associa&ccedil;&atilde;o com o detentor da marca registrada,
  respectivo indiv&iacute;duo ou sua marca. A Empresa se isenta
  expressamente de qualquer afilia&ccedil;&atilde;o com quaisquer marcas
  registradas de terceiros ou direitos de publicidade referenciados e/ou
  inclu&iacute;dos na Promo&ccedil;&atilde;o Cyber Says ou em materiais
  relacionados. O uso de qualquer marca, nome, imagem ou semelhan&ccedil;a
  n&atilde;o tem a inten&ccedil;&atilde;o de enganar, confundir o cliente
  ou infringir os direitos autorais, os direitos de publicidade ou a marca
  registrada de terceiros. Tal uso n&atilde;o indica, de forma alguma,
  qualquer relacionamento com terceiros, nem significa que tais terceiros
  sejam a fonte, endossem, aprovem ou patrocinem o uso de nossos
  Servi&ccedil;os. N&atilde;o fazemos nenhuma reivindica&ccedil;&atilde;o
  comercial quanto ao uso de qualquer direito autoral, direitos de
  publicidade ou marca registrada de terceiros, ou sugest&atilde;o de
  patroc&iacute;nio ou endosso, e qualquer uso desse tipo &eacute;
  fornecido apenas para fins informativos.
</li>
</ol>
<p class="p7">&nbsp;</p>
<ol class="ol1">
<li class="li6">
  Todas as Promo&ccedil;&otilde;es estar&atilde;o sujeitas a todas as leis
  e regulamentos federais, estaduais e locais aplic&aacute;veis e
  ser&atilde;o nulas quando proibidas ou restritas por lei.
</li>
</ol>
<p class="p7">&nbsp;</p>
<ol class="ol1">
<li class="li6">
  A Empresa se reserva o direito de: (i) encerrar ou declarar qualquer
  Promo&ccedil;&atilde;o nula e sem efeito e rescindir qualquer
  pr&ecirc;mio, se, a seu exclusivo crit&eacute;rio, os Termos da
  Promo&ccedil;&atilde;o Cyber Says ou a integridade da
  Promo&ccedil;&atilde;o tiverem sido violados ou comprometidos de
  qualquer forma, intencionalmente ou n&atilde;o, por qualquer pessoa,
  seja ou n&atilde;o participante da Promo&ccedil;&atilde;o; (ii) alterar
  ou emendar estes Termos da Promo&ccedil;&atilde;o Cyber Say a qualquer
  momento; e/ou (iii) interromper ou concluir qualquer
  Promo&ccedil;&atilde;o a qualquer momento, sem aviso pr&eacute;vio.
  Altera&ccedil;&otilde;es materiais a essas regras ser&atilde;o
  publicadas nos Servi&ccedil;os, quando poss&iacute;vel.
</li>
</ol>
<p class="p7">&nbsp;</p>
<ol class="ol1">
<li class="li6">
  A Empresa ser&aacute; o &uacute;nico &aacute;rbitro em todas as
  quest&otilde;es relacionadas a qualquer Promo&ccedil;&atilde;o e
  &agrave; interpreta&ccedil;&atilde;o destes Termos da
  Promo&ccedil;&atilde;o Cyber Says e dos Termos. As decis&otilde;es da
  Empresa ser&atilde;o definitivas em todas as quest&otilde;es, incluindo,
  sem limita&ccedil;&atilde;o, a validade ou n&atilde;o de qualquer
  inscri&ccedil;&atilde;o enviada. A participa&ccedil;&atilde;o em
  qualquer Promo&ccedil;&atilde;o constitui a concord&acirc;ncia dos
  participantes em cumprir os Termos da Promo&ccedil;&atilde;o Cyber Say e
  os Termos, bem como quaisquer outras regras estabelecidas pela Empresa.
</li>
</ol>
<p class="p7">&nbsp;</p>
<ol class="ol1">
<li class="li6">
  A Promo&ccedil;&atilde;o ser&aacute; regida pelas leis da
  Rep&uacute;blica do Chipre e os participantes da Promo&ccedil;&atilde;o
  se submetem &agrave; jurisdi&ccedil;&atilde;o exclusiva dos tribunais da
  Rep&uacute;blica do Chipre.
</li>
</ol>
<p class="p7"><span class="Apple-converted-space">&nbsp;&nbsp;</span></p>
<ol class="ol1">
<li class="li6">
  Em caso de conflito entre estes Termos da Promo&ccedil;&atilde;o Cyber
  Says ou os Termos, estes Termos da Promo&ccedil;&atilde;o Cyber Says
  prevalecer&atilde;o.
</li>
</ol>
<p class="p9">&nbsp;</p>
<p class="p18">
<span class="s1">CUIDADO</span>: QUALQUER TENTATIVA DE DANIFICAR
DELIBERADAMENTE OS SERVI&Ccedil;OS DA EMPRESA OU PREJUDICAR A
OPERA&Ccedil;&Atilde;O LEG&Iacute;TIMA DA PROMO&Ccedil;&Atilde;O OFERECIDA
PELA EMPRESA &Eacute; UMA VIOLA&Ccedil;&Atilde;O DAS LEIS CRIMINAIS E
CIVIS. CASO TAL TENTATIVA SEJA FEITA, A EMPRESA SE RESERVA O DIREITO DE
BUSCAR INDENIZA&Ccedil;&Atilde;O DE QUALQUER INDIV&Iacute;DUO NA MEDIDA
M&Aacute;XIMA PERMITIDA POR LEI.
</p>
<p class="p19">
Para obter informa&ccedil;&otilde;es, suporte ou d&uacute;vidas, entre em
contato conosco pelo e-mail vegas@cybersays.club
</p>`
