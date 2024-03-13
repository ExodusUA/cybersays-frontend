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
<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;Last revised: March 2024</p>
<p>The following are the terms and conditions of the Company promotion available at,&nbsp;&nbsp;<a href="http://www.CyberSays.com">www.CyberSays.com</a>, <a href="http://www.EllaComanda.com">www.EllaComanda.com</a>, <a href="http://www.Ellacomandas.com">www.Ellacomandas.com</a>, <a href="http://www.Ellacomanda.com">www.Ellacomanda.com</a> &nbsp;(all as &quot;<strong>Cyber Says</strong>&quot; or &quot;<strong>Cyber Says Promotion Terms</strong>&quot;; &quot;<strong>Promotion</strong>&quot;), which is sponsored by Pythia Grant Ltd. (&quot;<strong>Company</strong>&quot;, &quot;<strong>us</strong>&quot; or &quot;<strong>we</strong>&quot; or &quot;<strong>our</strong>&quot;).&nbsp;</p>
<p>Participation in the Promotion shall be subject to the provisions below and the Company&apos;s Terms and Conditions (&quot;<strong>Terms</strong>&quot;) and Privacy Policy (&quot;<strong>Privacy Policy</strong>&quot;).</p>
<p>Capitalized terms used but not defined herein shall have the meaning given to them in the Terms.</p>
<p><strong>NO PURCHASE NECESSARY OR PAYMENT REQUIRED TO ENTER OR WIN A PRIZE</strong><strong>.&nbsp;</strong></p>
<p><strong>General</strong></p>
<ol>
  <li>The Cyber Says Promotion shall commence on March 13<sup>th</sup>, 2024 at: 00:00:01 UTC and shall conclude on July 21<sup>st</sup> , 2024, at: 23:59:59 UTC (the &ldquo;<strong>Promotion Period</strong>&rdquo;).&nbsp;</li>
</ol>
<p><br></p>
<ol>
  <li>You agree that in order to participate in the Cyber Says Promotion (including, without limitation, in order to win any reward), you will fully comply with all applicable laws, regulations, statutes, ordinances and provisions that apply to you and to us, including, without limitation, these Cyber Says Promotion Terms and the Terms.</li>
</ol>
<p><br></p>
<ol>
  <li>There is no cost to enter the Promotion or any obligation associated with participating in it, except as described below.&nbsp;</li>
</ol>
<p><br></p>
<p><strong>Eligibility to participate in the Promotion</strong></p>
<ol>
  <li>In order to be eligible to participate in the Cyber Says Promotion you hereby represent and warrant that you will meet all the following conditions:</li>
</ol>
<ul>
  <li>have an account registered with the Services;&nbsp;</li>
  <li>are at least eighteen (18) years old (unless the applicable age of majority in your state of residence at the time of the entry is higher) or older;&nbsp;</li>
  <li>are eligible under applicable law and regulation to participate in the Cyber Says Promotion;&nbsp;</li>
  <li>have the full right and authority to participate in Cyber Says Promotion.</li>
</ul>
<p><br></p>
<p>In addition to the cumulative conditions set forth above, to be eligible to participate in the Cyber Says Promotion, you hereby represent and warrant that you will complete <strong>one of the following</strong> conditions:</p>
<ul>
  <li>Create a new and legitimate account and make a first purchase on <a href="http://www.ImLive.com">www.ImLive.com</a> ;&nbsp;</li>
  <li>Create a new and legitimate account on other third-party websites, as presented and dictated by the Company on the Cyber Says Promotion, from time to time (&quot;<strong>Third Party Website</strong>&quot;)); <strong>OR&nbsp;</strong></li>
  <li>Complete the Free Post Form,&nbsp;&nbsp;as defined below (collectively referred as, &quot;<strong>Eligible Users</strong>&quot;).</li>
</ul>
<p><br></p>
<ol>
  <li>&quot;<strong>Free Post Form</strong>&quot; shall mean sending <em>the&nbsp;</em><em>&nbsp;&nbsp; &nbsp;&nbsp;</em><em>form</em> through registered mail via international courier, to the Company&apos;s registered address at Agias Zonis &amp; Thessalonikis, Nicolaou Pentadromos Centre, Office 903A, Limassol, Cyprus, 3025 by including all of the following in the mail &ndash;&nbsp;</li>
</ol>
<ul>
  <li>Hard Copy of the form;</li>
  <li>Your Cyber Says User ID details;</li>
  <li>Short explanation for the reasons to be chosen randomly as the winner.</li>
</ul>
<p><br></p>
<ol>
  <li>As part of this Promotion, you acknowledge that (i) any credit bonus received on ImLive.com or any Third Party Website as part of this Promotion is <strong>not redeemable, not refundable and non-exchangeable</strong>; (ii) these credit bonuses must be used on ImLive.com or any relevant Third Party Website <strong>only</strong>; (iii) these credit bonuses do not have any pecuniary value or any kind of value outside of ImLive.com or outside of the applicable Third Party Website; (iv) you are solely liable towards your use of ImLive.com services or any relevant Third Party Website&nbsp;&nbsp;as well as the use of such credits; and (v) you have read <em>ImLive.com terms and conditions</em> or where applicable, the relevant Third Party Website terms and conditions before using the relevant services or using any of the credit bonuses on their services.</li>
</ol>
<p><br></p>
<ol>
  <li>As part of this Promotion, you acknowledge that the Company, may in its sole discretion, refuse or disqualify your participation in the Promotion if any of the information you provided in completing your participation in the Promotion as detailed in section 4 above or the Free Post Form is (i) missing, inaccurate and/or outdated; (ii) appears to be false, fraudulent or otherwise is in violation of the Cyber Says Promotion Terms, the Terms or any applicable laws or regulations.&nbsp;</li>
</ol>
<p><br></p>
<ol>
  <li>You may not use multiple email addresses, accounts and/or identities or any other method in order to participate in the Cyber Says Promotion more than once. You may not register on behalf of another person.</li>
</ol>
<p><br></p>
<ol>
  <li>Use of robotic, mechanical or other forms of pre-programmed entry methods is strictly prohibited. Entrants may not use such manipulation tools and Company reserves the right (in its sole discretion), from time to time, to implement entry processes that may frustrate or prohibit such automated entry; provided, however, that no entrant in any Promotion may rely upon or insist upon Company&rsquo;s failure or refusal to take any of the foregoing actions or to determine, in its sole discretion, that one entrant&rsquo;s entry should be discounted because another entrant&rsquo;s entry was or vice versa. Any use of automated system or any similar method to participate in any Promotion is strictly prohibited and may result in your disqualification from the Promotion and/or future use of the Services. The person to whom the email address was assigned by the applicable operator shall be deemed as the owner of such email address.</li>
</ol>
<p>&nbsp;</p>
<ol>
  <li>Company reserves the right to limit the Promotion to entrants located in a particular jurisdiction, in which case only users residing in such jurisdiction at the time of entry may be eligible to participate in the Promotion.</li>
</ol>
<p><br></p>
<ol>
  <li>Company&apos;s employees (including, without limitation, part-time or temporary employees), officers, and representatives, promotion agencies and/or sponsors directly involved in the administration, development, fulfilment, and execution of a specific Promotion, and the immediate family and other household members (i.e., spouses, parents, grandparents, children, grandchildren, roommates, housemates, significant others, partners, and siblings) of any of the above are not eligible to enter and/or to win a Promotion.&nbsp;</li>
</ol>
<p><br></p>
<ol>
  <li>The participation in the Promotion is not available for any users (nationals and residents) from Sweden, Israel, Cyprus and Andorra.</li>
</ol>
<p><br></p>
<ol>
  <li>Please note that the use of the Services, which can be downloaded free of charge, requires an internet connection and a compatible device. You must enter the Promotion during the Promotion Period of the relevant Promotion in order to be eligible to win applicable prize(s).</li>
</ol>
<p><br></p>
<ol>
  <li>You may be asked at any time to provide us or our designated third party with proof of your age and/or identity and/or residency and you must, on demand, be able to present a valid documentation which may enable us to verify your, residency and/or identity to the reasonable satisfaction of our team. If you are unable to provide satisfactory documents, we may exclude you from the Cyber Says Promotion and may forfeit any privileges or awards that have been allocated to you without compensation of any kind. You hereby irrevocably waive any claims or rights in connection with any such exclusion and/or forfeiture.</li>
</ol>
<p><br></p>
<p><strong>Eligibility to receive Promotion&apos;s tickets and selection of winners</strong></p>
<ol>
  <li>The Cyber Says Promotion consists of a promotion, the winners of which will be entitled to win the Prizes (as detailed below).</li>
</ol>
<p><br></p>
<ol>
  <li>Eligible Users will be entitled to earn one (1) ticket to participate in the Promotion for each second and above transaction of purchasing real credit on <a href="http://www.ImLive.com">www.ImLive.com</a> &nbsp;<strong>or</strong> any other Third Party Website (excluding bonus credits), (i.e. starting the 6 real credits purchased and above). &nbsp;</li>
</ol>
<p>Each 1 real credit purchased shall be equal to 1 ticket. &nbsp;</p>
<p><br></p>
<p>You understand and acknowledge that there is no limit to the number of credits you may purchase and therefore, to the number of Promotion tickets you may be eligible to receive.</p>
<p><br></p>
<ol>
  <li><strong>You may also receive tickets by participating in the Cyber Says Promotion for free</strong>.<strong>&nbsp;</strong></li>
</ol>
<p>In this regard,<strong>&nbsp;</strong>you may contact the Company, as instructed at the Free Post Form, during the Promotion Period, via international registered mail to the Company&apos;s registered address&nbsp;&nbsp;at Agias Zonis &amp; Thessalonikis, Nicolaou Pentadromos Centre, Office 903A, Limassol, Cyprus, 3025,&nbsp;&nbsp;and include all the following -</p>
<ol>
  <ol>
      <li>The subject of the post mail must include &quot;<strong>Free participation request &ndash; Cyber Says Promotion</strong>&quot;;</li>
      <li>The mail must contain your username, Cyber Says ID account number, phone number, email address and date of birth.</li>
      <li>The mail shall be received by us during the applicable Promotion Period for the relevant Promotion and will be accepted by no later than <strong>July 7, 2024.</strong></li>
      <li>Irrespective of the above, any mail sent after the end of the Promotion Period will not be deemed valid entries and will not entitle the participant to any ticket, even if the mail was received by us before <strong>July 7,2024</strong>;</li>
      <li>Each one (1) valid mail received by us will allow you to receive one (1) ticket for the Cyber Says Promotion.</li>
  </ol>
</ol>
<p><br></p>
<ol>
  <li><strong>Referred Friends</strong>. You acknowledge that in order to increase your chances of winning, you can also refer some of your friends. Each Eligible User that has referred a new legitimate friend in compliance with these Cyber Says Promotion Terms and the Terms<strong>&nbsp;</strong>and<strong>&nbsp;</strong>that is eligible to participate in the Promotion as described in section 4 of this Terms <strong>and</strong> has completed the Online Offer (&quot;<strong>Referred Friend</strong>&quot;) shall receive thirty (30) tickets for each legitimate and new Referred Friend.</li>
</ol>
<p><br></p>
<p>&quot;<strong>Online Offer</strong>&quot; shall mean completing all of the following steps &ndash;&nbsp;</p>
<ul>
  <li><strong>Create a new and legitimate account on ImLive.com&nbsp;</strong><strong>or</strong><strong>&nbsp;where applicable on Third Party Website.</strong></li>
  <li><strong>Make a minimum purchase of five credits on ImLive.com&nbsp;</strong><strong>or</strong><strong>&nbsp;where applicable on Third Party Website</strong> &ndash; you acknowledge that by making a minimum purchase of five credits on ImLive.com, you will automatically receive a one-time additional bonus of five credits.</li>
  <li><strong>Spend the entire ten (10) credits that you received on ImLive.com&nbsp;</strong><strong>or</strong><strong>&nbsp;where applicable on Third Party Website.</strong></li>
</ul>
<p><br></p>
<ol>
  <li>The odds of winning are based on the number of eligible tickets. The winners will be drawn at random from all valid tickets by an automated computer system.</li>
</ol>
<p>&nbsp;</p>
<ol>
  <li>Any request for participation that do not comply with the foregoing, the Cyber Says Promotion Terms or our Terms may be disqualified or void at our sole discretion. No other form or method for submitting an entry will be considered, unless otherwise set forth in the specific Cyber Says Promotion description.</li>
</ol>
<p><br></p>
<ol>
  <li>The winner will be selected randomly on <strong>July 21<sup>st</sup>, 2024</strong>.&nbsp;</li>
</ol>
<p><br></p>
<ol>
  <li>The choice of winners is final and binding, unless stated otherwise in these Cyber Says Promotion Terms.</li>
</ol>
<p><br></p>
<p><strong>Prizes/Approximate Retail Value (&quot;ARV&quot;)</strong></p>
<ol>
  <li>The awarded prize will be &ndash;<ol>
          <li>Economy class flight ticket to Las Vegas, Nevada, USA and two (2) nights hotel accommodation for &ndash;<ol>
                  <li>The winner and for two (2) of the winner&apos;s Referred Friends (where applicable);&nbsp;</li>
                  <li>The winner and one (1) Referred Friend and one (1) Eligible User that referred the winner (where applicable) <strong>and</strong> completed the Online Offer (&quot;<strong>Referring Friend</strong>&quot;); (both collectively &quot;<strong>Travel Friends</strong>&quot;)</li>
              </ol>
          </li>
          <li>One thousand dollars ($1,000.00 USD) worth of credits to be used on <a href="http://www.ImLive.com">www.ImLive.com</a> &nbsp;(no redeemable, no exchangeable, no refundable) for the winner <strong>only</strong>; and&nbsp;</li>
          <li>One thousand dollars ($1,000.00 USD) for the winner and, where applicable, five hundred dollars ($500.00 USD) for each of the two winner&apos;s Travel Friends (see definition below) of allowance as part of the trip to Las Vegas, Dinner with Porn stars and Cadillac drive (collectively section 20.a, 20.b and 20.c referred to as &quot;<strong>Prizes</strong>&quot;). ARV: five thousand dollars ($5,000.00 USD).</li>
      </ol>
  </li>
</ol>
<p><br></p>
<ol>
  <li>For the avoidance of doubt, the winner and his/her two Travel Friends (where applicable per section 21 above) are solely responsible for any and all unspecified expenses in conjunction with the acceptance and use of the Prizes.</li>
</ol>
<p><br></p>
<ol>
  <li>The winner acknowledges and accepts that &ndash;&nbsp;<ol>
          <li>If he/she is not able to have two eligible Travel Friends, the winner will have to fly alone and the Prize granted for the two Travel Friends can be cancelled and void (as per the Company&rsquo;s sole discretion);</li>
          <li>For the avoidance of the doubt, in the event that any of the Travel Friends fail to adhere to the provisions outlined in the CyberSays Promotion Terms or the Terms, or engages in a violation of any applicable law or regulation, the two Travel Friends will be ineligible for the awarding of the Prizes;</li>
          <li>The Company retains exclusive discretion in determining the hotel and the flight period for the Prizes. If the winner is unavailable on such date for any reason, the winner, and where applicable the two Travel Friends, will forfeit the Prizes without any form of compensation;</li>
          <li>The availability of the Prizes, including the award destinations is contingent upon the geographic location of the eligible winner and flight availability. The availability of the Prizes may be subject to certain changes at the Company&apos;s sole discretion, provided that the ARV of the Prizes does not exceed five thousand dollars ($5,000.00 USD).</li>
      </ol>
  </li>
</ol>
<p><br></p>
<ol>
  <li>The winner and, where applicable, their two Travel Friends are required to show a valid passport with at least a <strong>six-month validity</strong> at the time of their flight to Vegas, NV, USA. If applicable, they must have a valid visa or authorization, otherwise the Prizes can be void.&nbsp;</li>
</ol>
<p>In this regard, the Company may, at its sole discretion, choose an alternative location that the winner will be able to fly to.</p>
<p><br></p>
<ol>
  <li><strong>Prizes are non-transferable and cannot be redeemed for a cash equivalent.</strong></li>
</ol>
<p><br></p>
<ol>
  <li>The winners of the Cyber Says Promotion are solely responsible for reporting and paying any and all applicable taxes related to the Prizes and paying any expenses associated therewith which are not specifically provided for in the Cyber Says Promotion Terms.</li>
</ol>
<p><br></p>
<ol>
  <li>By participating in the Cyber Says Promotion, you allow the Company to contact you, for the purpose of administration of the Cyber Says Promotion and awarding of Prizes. We will notify each potential winner by sending a notification through the email address (which was used to register to the Services), within fifteen (15) business days from the end of the Promotion Period.&nbsp;</li>
</ol>
<p><br></p>
<ol>
  <li>We will make three attempts to contact the potential winner within seventy-two (72) hours. If we are unable to contact the potential winner within this specified time frame or is otherwise disqualified or does not comply with these Cyber Says Promotion Terms or Terms, Company may forfeit the Prize and grant it potentially to another winner.&nbsp;</li>
</ol>
<p><br></p>
<ol>
  <li>It is your sole responsibility to notify us in writing if you changed your email address during the Promotion Period.&nbsp;</li>
</ol>
<p><br></p>
<ol>
  <li>Our decisions regarding the administration and operation of any Promotion, including, without limitation, the selection of potential winners from all eligible participants are final and binding in all matters related to the Promotion.</li>
</ol>
<p><br></p>
<ol>
  <li>You acknowledge and accept that the Company reserves the right, at its sole discretion, to automatically transfer each Eligible User and/or the Travel Friends that was/were not chosen as the winner/s of this Promotion to participate in future similar Promotions, except where explicitly prohibited under applicable laws or regulations.</li>
</ol>
<p><br></p>
<ol>
  <li>You are not allowed to transfer or substitute any Prize received from participating in a Promotion. All prizes hereunder are offered &quot;as is&quot; without warranty either expressly or in an implied fashion.</li>
</ol>
<p><br></p>
<ol>
  <li>Prizes will be delivered to winners within 30 business days, from the Company receiving the winner&apos;s full details (as required to provide the prize), unless Company, in its sole discretion, as any reason to believe the winner is not eligible to participate in the Cyber Says Promotion or to be awarded with the Prizes.</li>
</ol>
<p><br></p>
<ol>
  <li>Prizes will be granted to winners through their personal email used to register to the Company&apos;s Services.&nbsp;</li>
</ol>
<p><br></p>
<ol>
  <li>No Prizes shall be given to any participant who is ineligible to participate in the Promotion or fails to comply with the Cyber Says Promotion Terms, the Terms, or any other rules for participation in the Promotion.</li>
</ol>
<p><br></p>
<ol>
  <li>If any potential winner is required by any applicable law, the Cyber Says Promotion Terms, the Terms to comply with additional conditions or requirements in order to participate in the Promotion and receive the Prize, such potential winner must fully comply with such requirements within the time set by us before and as a condition to receiving the Prize. If a potential winner is disqualified for any reason, we may award the applicable prize to an alternate winner from among the remaining eligible participants, in our sole discretion.</li>
</ol>
<p><br></p>
<ol>
  <li>Company is not responsible in any manner for, any warranties, representations, or guarantees, express or implied, in fact or law, relating to any of the Prizes, regarding the use, value or enjoyment of the Prizes, including, without limitation, their quality, condition, or fitness for a purpose.&nbsp;</li>
</ol>
<p><br></p>
<ol>
  <li>Prizes and Participation in the Cyber Says Promotion are not available to persons under the age of 18 or 21 (depending on your jurisdiction).&nbsp;</li>
</ol>
<p><br></p>
<p><strong>Limitations of liability and release</strong></p>
<ol>
  <li>By entering into this Promotion, you agree to release, indemnify, and hold harmless Company, and its respective parents, subsidiaries, affiliates, distributors, suppliers, and advertising, promotional and judging organizations and each of their respective employees, officers, directors, shareholders, and agents (collectively, the &ldquo;<strong>Releasees</strong>&rdquo;) from and against any and all claims, actions, damages, losses, costs, expenses (including reasonable attorneys/legal fees), injuries or causes of action of any kind that in any way now or hereinafter may arise from or relate to the Promotion, including without limitation (i) the administration of the Promotion, such as typographical, printing, seeding, human or other errors relating to or in connection with the Promotion, the processing of entries, the announcement of the Prize or any related materials, inaccurate, fraudulent, incomplete, illegible, late, lost, stolen, misdirected, undelivered, incomplete, or damaged entries, any delays in delivery or lack of availability of the Prize or Prize materials; (ii) Your participation in the Promotion offered by the Releasees or your acceptance or use of a Prize, or participation in any Prize related activities, including, without limitation, any travel related thereto, and death and bodily injury (including emotional distress), due in whole or in part, directly or indirectly, to participation in the Promotions or any Promotion-related activity and for any claims or causes of action based on publicity rights, defamation, or invasion of privacy; (iii) Any act or omission, whether negligent, intentional or otherwise, caused by the Releasees and/or any Promotion; (iv) any other user&rsquo;s participation in the Promotion.&nbsp;</li>
</ol>
<p><br></p>
<ol>
  <li>You agree that the Releasees are not responsible for any incorrect or inaccurate information, whether caused by the Services, other users, or by any of the equipment or programming associated with or utilized in the Promotion and that the Releasees assume no responsibility for (i) any injury or damage to persons or property which may be caused, directly or indirectly, in whole or in part, from a user&rsquo;s participation in a Promotion or receipt or use or misuse of any prize; (ii) any error, omission, interruption, deletion, defect, or delay in operation or transmission on the Services; (iii) any computer, telephone, cable, satellite, network, electronic or internet hardware or software malfunctions or failures, problems with connections or availability; (iv) garbled or jumbled transmissions, service provider/internet/web site/use net accessibility or availability; (v) traffic congestion; (vi) unauthorized human intervention; or (vii) theft or destruction, tampering, or unauthorized access to entries and/or entry information. If, for any reason, a Promotion is not capable of running as planned by reason of infection by computer virus, unauthorized intervention, fraud, tampering, technical failures, or any other causes beyond the Releasees control and, in the sole opinion of the Releasees, corrupt or affect the administration, security, fairness, integrity or proper conduct of a Promotion, the Releasees reserve the right, at their sole discretion, to cancel, terminate, modify or suspend such Promotion and select the winner(s) from among all eligible entries received for such Promotion prior to the action taken.</li>
</ol>
<p><br></p>
<ol>
  <li>In no event will the Releasees be responsible or liable for any damages or losses of any kind, including indirect, incidental, consequential or punitive damages, other than your actual out-of-pocket expenses arising out of your participation in a Promotion. Without limiting the foregoing, the Services are provided &ldquo;as is&rdquo; without warranty of any kind, either expressed or implied, including but not limited to, the implied warranties of merchantability, fitness for a particular purpose or non-infringement. Some jurisdictions may not allow the limitations or exclusion of liability for incidental or consequential damages or exclusion of implied warranties so some of the above limitations or exclusions may not apply to you. In such cases, our liability will be limited to the fullest extent permitted by applicable law.</li>
</ol>
<p><br></p>
<p><strong>Additional General Terms</strong></p>
<ol>
  <li>All requests for entry into a Promotion shall become the exclusive property of Company and will not be acknowledged and/or returned. Entries received that are from ineligible entrants and/or do not comply with the Cyber Says Promotion Terms or the Terms will be considered void. Entries that are determined to be fraudulent will be considered void, and the person making such entry may be barred from participation in the Promotion and, in Company&rsquo;s sole discretion on a case-by-case basis, banned from any future participation in any future Company Promotions and/or services. Proof of sending or submission will not be deemed to be proof of receipt. You hereby agree than in no event will you have any claims against us for any requests that were not received or acknowledged by us, for any reason whatsoever, or which were received before or after the Promotion Period for the applicable Promotion.</li>
</ol>
<p><br></p>
<ol>
  <li>Company may cancel, modify, alter, change or suspend the Cyber Says Promotion, and any of the Prizes or benefits offered hereunder, including without limitation, where required for security reasons or any other reason, at its sole discretion, to comply with applicable law or regulation, due to abuse or otherwise where due to circumstances beyond its control (including, without limitation, a force majeure, fire, flood, epidemic or other national health emergency, earthquake, explosion, labour dispute or strike, act of God or public enemy, satellite or equipment failure, riot or civil disturbance, terrorist threat or activity, war (declared or undeclared,) or any federal, state or local government law, order, or regulation, order of any court or jurisdiction, public health crisis, or other cause not reasonably within its control. In the event that the Promotion is terminated, cancelled, or postponed for any reason whatsoever, the actual/appraised value of the prize(s) will be awarded solely to the extent required by law.</li>
</ol>
<p><br></p>
<ol>
  <li>Company reserves the right to change the Prizes and/or terms of this Promotion (including but not limited to the relevant Promotion Period, related dates and/or Prizes) at any time and without prior notice.&nbsp;</li>
</ol>
<p><br></p>
<p>You acknowledge that you shall be responsible for staying up to date with any and all changes made to the Promotion. In the event of modifying the Promotion, your continued participation in the Promotion constitutes acceptance of the modified terms and conditions of such Promotion.</p>
<p><br></p>
<ol>
  <li>&nbsp;If we become aware of any fraud, deceit, misconduct (e.g. strong language, insults, threats), dishonesty or similar action concerning your participation in the Cyber Says Promotion, or if you acted in a disruptive manner or with the intent to disrupt or undermine the legitimate operation of the Cyber Says Promotion or if you breached any of these Cyber Says Promotion Terms, the Terms and/or any additional laws, regulations and rules which apply to your use of the Services and/or your participation in any Cyber Says Promotion, then (i) we reserve the absolute right to automatically and immediately disqualify you or invalidate your entry, and (ii) we also reserve the right to seek damages and other remedies from you to the full extent permitted by law. If fraud, deceit, misconduct, dishonesty or other action is only discovered after any applicable reward has been granted to you, then you shall be required, upon demand, to return the Prize (or provide equivalent compensation) to us immediately upon receipt of our demand to do so. Without limiting the foregoing, Company may lock out any participant who, in Company&rsquo;s sole judgment, has been disqualified, has questionable eligibility, or is otherwise ineligible to participate in the Promotion.</li>
</ol>
<p><br></p>
<ol>
  <li>Winning a Prize constitutes your consent that Company may use the following information concerning you: name, username, country of residence and the Prize and you hereby grant us and our affiliates, a perpetual, unlimited, non-exclusive, worldwide, fully paid up, royalty free right and license, to use (a) your name and username; (b) your image, photograph and likeness; (c) your testimonial regarding the participation and/or use of our services or products; and (d) details regarding your winning (collectively, the <strong>&quot;Information</strong>&quot;), and to reproduce, distribute, publicly display, publicly perform and make derivative works, based upon such Information, in whatever media format, including through broadcast media, for public relations, marketing and promotion purposes relating to the Cyber Says Promotion or the Company. All processing of personal data by us will be made in accordance with the terms of our <em>Privacy Policy.</em></li>
</ol>
<p><br></p>
<ol>
  <li>If you win a Prize, you hereby waive any and all rights of paternity, integrity and any other rights that be known as or referred to as &ldquo;moral rights&rdquo; in and to the Information which you may acquire pursuant to this release or by operation of law. You understand that will not be entitled to any payment or other acknowledgement in relation to the any use of the Information by the Company.</li>
</ol>
<p><br></p>
<ol>
  <li>All products, services and company names referenced and/or included are the registered trademarks of their original owners. The use of any mark, name, image, or likeness is for identification and reference purposes only and does not imply any association with the trademark holder, respective individual, or their brand. The Company expressly disclaims any affiliation with any third-party trademarks or rights of publicity referenced and/or included on Cyber Says Promotion, or related materials. The use of any mark, name, image, or likeness is not intended to mislead, confuse the customer, or infringe on the copyright, rights of publicity, or trademark of any third party. Such use in no way indicates any relationship with any third party, nor does it signify that any such third party is the source of, endorses, approves of, or sponsors the use of our Services. We make no commercial claim to the use of any copyright, rights of publicity, or trademark of any third party, or suggestion of sponsorship or endorsement, and any such use is provided for informational purposes only.&nbsp;</li>
</ol>
<p><br></p>
<ol>
  <li>All Promotions shall be subject to all applicable federal, state, and local laws and regulations, and are void where prohibited or restricted by law.</li>
</ol>
<p><br></p>
<ol>
  <li>Company reserves the right to: (i) terminate or declare any Promotion null and void and rescind any prize, if in its sole judgment, the Cyber Says Promotion Terms or the integrity of the Promotion have been violated or compromised in any way, intentionally or unintentionally by any person, whether or not a participant in the Promotion; (ii) alter or amend these Cyber Say Promotion Terms at any time; and/or (iii) stop or conclude any Promotion at any time without prior notice. Material changes to these rules will be posted on the Services, when practical.</li>
</ol>
<p><br></p>
<ol>
  <li>Company shall be the sole arbiter in all matters relating to any Promotion and the interpretation of these Cyber Says Promotion Terms and the Terms.&nbsp;</li>
</ol>
<p>The decisions of Company will be final as to all matters, including, without limitation, whether any entry submitted is valid or not. Entry into any Promotion constitutes agreement by entrants to abide by the Cyber Say Promotion Terms and the Terms, as well as any other rules established by the Company.</p>
<p><br></p>
<ol>
  <li>The Promotion will be governed by the laws of the Republic of Cyprus and entrants to the Promotion submit to the exclusive jurisdiction of the courts of the Republic of Cyprus.</li>
</ol>
<p>&nbsp;&nbsp;</p>
<ol>
  <li>In case of a conflict between these Cyber Says Promotion Terms or the Terms, these Cyber Says Promotion Terms shall prevail.</li>
</ol>
<p><br></p>
<p>CAUTION: ANY ATTEMPT TO DELIBERATELY DAMAGE COMPANY&apos;S SERVICES OR UNDERMINE THE LEGITIMATE OPERATION OF THE PROMOTION OFFERED BY COMPANY IS A VIOLATION OF CRIMINAL AND CIVIL LAWS. SHOULD SUCH AN ATTEMPT BE MADE, COMPANY RESERVES THE RIGHT TO SEEK DAMAGES FROM ANY SUCH INDIVIDUAL TO THE FULLEST EXTENT PERMITTED BY LAW.</p>
<p>For information, support or questions, please contact us at <a href="mailto:vegas@cybersays.club">vegas@cybersays.club</a>&nbsp;</p>
<p>&nbsp;</p>
<p><br></p>`
let es_text = `<p style="text-align:center;font-size:16pt!important;"><strong>Pythia Grant Ltd. - Condiciones de promoci&oacute;n de CyberSays.Club</strong></p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&Uacute;ltima revisi&oacute;n: Marzo 2024</p>
<p>A continuaci&oacute;n se exponen los T&eacute;rminos y Condiciones de la promoci&oacute;n de la Empresa (&quot;<strong>Cyber Says</strong>&quot; y &quot;<strong>Condiciones de la promoci&oacute;n Cyber Says</strong>&quot;; &quot;<strong>Promoci&oacute;n</strong>&quot;), patrocinada por Pythia Grant Ltd. (&quot;<strong>Empresa</strong>&quot;, &quot;<strong>nosotros</strong>&quot; o &quot;<strong>nos</strong>&quot; o &quot;<strong>nuestro</strong>&quot;).&nbsp;</p>
<p>La participaci&oacute;n en la Promoci&oacute;n estar&aacute; sujeta a las disposiciones que figuran a continuaci&oacute;n y a los T&eacute;rminos y Condiciones (&quot;<strong>T&eacute;rminos</strong>&quot;) y la Pol&iacute;tica de Privacidad<strong>&nbsp;</strong>(&quot;<strong>Pol&iacute;tica de Privacidad</strong>&quot;) de la Empresa.</p>
<p>Los t&eacute;rminos en may&uacute;sculas utilizados pero no definidos en el presente documento tendr&aacute;n el significado que se les atribuye en las Condiciones.</p>
<p><strong>NO ES NECESARIO REALIZAR NINGUNA COMPRA NI EFECTUAR NING&Uacute;N PAGO PARA ENTRAR O GANAR UN PREMIO</strong><strong>.&nbsp;</strong></p>
<p><strong>General</strong></p>
<ol>
    <li>La promoci&oacute;n Cyber Says comenzar&aacute; el 11 de marzo de 2024 a las: 00:00:01 UTC y concluir&aacute; el 2 de julio de , 2024, a las: 23:59:59 UTC (el &quot;<strong>Periodo de la Promoci&oacute;n</strong>&quot;).&nbsp;</li>
</ol>
<p><br></p>
<ol>
    <li>Usted acepta que para participar en la Promoci&oacute;n Cyber Says (incluyendo, sin limitaci&oacute;n, para ganar cualquier recompensa), cumplir&aacute; plenamente con todas las leyes, reglamentos, estatutos, ordenanzas y disposiciones aplicables a usted y a nosotros, incluyendo, sin limitaci&oacute;n, estas Condiciones de la Promoci&oacute;n Cyber Says y las Condiciones.</li>
</ol>
<p><br></p>
<ol>
    <li>No hay ning&uacute;n costo por introducirse en la Promoci&oacute;n ni ninguna obligaci&oacute;n asociada a la participaci&oacute;n en la misma, salvo lo descrito a continuaci&oacute;n.&nbsp;</li>
</ol>
<p><br></p>
<p><strong>Requisitos para participar en la promoci&oacute;n</strong></p>
<ol>
    <li>Para poder participar en la promoci&oacute;n Cyber Says, usted declara y garantiza que cumplir&aacute; todas las condiciones siguientes:</li>
</ol>
<ul>
    <li>tener una cuenta registrada en los Servicios;&nbsp;</li>
    <li>tener al menos dieciocho (18) a&ntilde;os (a menos que la mayor&iacute;a de edad aplicable en su estado de residencia en el momento de la inscripci&oacute;n sea superior) o m&aacute;s;&nbsp;</li>
    <li>reunir los requisitos legales y reglamentarios aplicables para participar en la promoci&oacute;n &quot;Cyber Says&quot;;&nbsp;</li>
    <li>tener pleno derecho y autoridad para participar en la promoci&oacute;n Cyber Says.</li>
</ul>
<p><br></p>
<p>Adem&aacute;s de las condiciones acumulativas expuestas anteriormente, para poder participar en la promoci&oacute;n Cyber Says, usted declara y garantiza que cumplir&aacute; <strong>una de las siguientes&nbsp;</strong>condiciones:</p>
<ul>
    <li>Crear una cuenta nueva y leg&iacute;tima y realice una primera compra en <a href="http://www.ImLive.com">www.ImLive.com</a> ;&nbsp;</li>
    <li>Crear una cuenta nueva y leg&iacute;tima en otros sitios web de terceros, tal y como presente y dicte la Empresa en la promoci&oacute;n Cyber Says, de vez en cuando (&quot;<strong>Sitio web de terceros</strong>&quot;); <strong>O bien&nbsp;</strong></li>
    <li>Culminar el formulario de env&iacute;o gratuito, tal y como se define a continuaci&oacute;n (denominados colectivamente, &quot;<strong>Usuarios Elegibles</strong>&quot;).</li>
</ul>
<p><br></p>
<ol>
    <li>&quot;<strong>Formulario de correo gratuito</strong>&quot; significar&aacute; el env&iacute;o <em>del formulario</em> por correo certificado a trav&eacute;s de un servicio de mensajer&iacute;a internacional, a la direcci&oacute;n registrada de la Empresa en Agias Zonis &amp; Thessalonikis, Nicolaou Pentadromos Centre, Oficina 903A, Limassol, Chipre, 3025 incluyendo en el correo todo lo siguiente -.&nbsp;</li>
</ol>
<ul>
    <li>Copia impresa del formulario;</li>
    <li>Sus datos de identificaci&oacute;n de usuario de Cyber Says;</li>
    <li>Breve explicaci&oacute;n de los motivos para ser elegido ganador al azar.</li>
</ul>
<p><br></p>
<ol>
    <li>Como parte de esta Promoci&oacute;n, usted reconoce que (i) cualquier bonificaci&oacute;n de cr&eacute;dito recibida en ImLive.com o en cualquier Sitio Web de Terceros como parte de esta Promoci&oacute;n <strong>no es canjeable, no es reembolsable y no es intercambiable; (ii) estas bonificaciones de cr&eacute;dito&nbsp;</strong>deben utilizarse &uacute;nicamente en ImLive.com o en cualquier sitio web de terceros pertinente <strong>&uacute;nicamente; (iii) estos bonos de cr&eacute;dito&nbsp;</strong>no tienen ning&uacute;n valor pecuniario ni ning&uacute;n tipo de valor fuera de ImLive.com o fuera del sitio web de terceros pertinente; (iv) usted es el &uacute;nico responsable del uso que haga de los servicios de ImLive.com o de cualquier sitio web de terceros pertinente, as&iacute; como del uso de dichos cr&eacute;ditos; y (v) ha le&iacute;do las <em>los T&eacute;rminos y Condiciones de ImLive.com</em> o, en su caso, los T&eacute;rminos y Condiciones del Sitio Web de Terceros pertinente antes de utilizar los servicios correspondientes o de utilizar cualquiera de los bonos de cr&eacute;dito de sus servicios.</li>
</ol>
<p><br></p>
<ol>
    <li>Como parte de esta Promoci&oacute;n, usted reconoce que la Empresa, a su entera discreci&oacute;n, puede rechazar o descalificar su participaci&oacute;n en la Promoci&oacute;n si alguno de los datos que ha facilitado al culminar su participaci&oacute;n en la Promoci&oacute;n, tal y como se detalla en la secci&oacute;n 4 anterior o en el Formulario de env&iacute;o gratuito, (i) falta, es inexacto y/o no est&aacute; actualizado; (ii) parece ser falso, fraudulento o infringe de cualquier otro modo las Condiciones de la promoci&oacute;n Cyber Says, las Condiciones o cualquier ley o normativa aplicable.&nbsp;</li>
</ol>
<p><br></p>
<ol>
    <li>No podr&aacute; utilizar varias direcciones de correo electr&oacute;nico, cuentas y/o identidades o cualquier otro m&eacute;todo para participar en la Promoci&oacute;n Cyber Says m&aacute;s de una vez. No podr&aacute; inscribirse en nombre de otra persona.</li>
</ol>
<p><br></p>
<ol>
    <li>Queda estrictamente prohibido el uso de m&eacute;todos de participaci&oacute;n robotizados, mec&aacute;nicos o preprogramados de cualquier otra forma. Los participantes no podr&aacute;n utilizar dichas herramientas de manipulaci&oacute;n y la Empresa se reserva el derecho (a su entera discreci&oacute;n), de vez en cuando, de implementar procesos de participaci&oacute;n que puedan frustrar o prohibir dicha participaci&oacute;n automatizada; siempre y cuando, no obstante, ning&uacute;n participante de ninguna Promoci&oacute;n pueda confiar o insistir en el hecho de que la Empresa no tome o se niegue a tomar alguna de las medidas anteriores o a determinar, a su entera discreci&oacute;n, que la participaci&oacute;n de un participante debe ser descontada porque la participaci&oacute;n de otro participante s&iacute; lo fue o viceversa. Cualquier uso de un sistema automatizado o cualquier m&eacute;todo similar para participar en cualquier Promoci&oacute;n est&aacute; estrictamente prohibido y puede dar lugar a su descalificaci&oacute;n de la Promoci&oacute;n y/o del uso futuro de los Servicios. La persona a la que el operador correspondiente haya asignado la direcci&oacute;n de correo electr&oacute;nico ser&aacute; considerada propietaria de dicha direcci&oacute;n.</li>
</ol>
<p>&nbsp;</p>
<ol>
    <li>La Empresa se reserva el derecho de limitar la Promoci&oacute;n a los participantes ubicados en una jurisdicci&oacute;n concreta, en cuyo caso s&oacute;lo podr&aacute;n participar en la Promoci&oacute;n los usuarios que residan en dicha jurisdicci&oacute;n en el momento de la inscripci&oacute;n.</li>
</ol>
<p><br></p>
<ol>
    <li>Los empleados de la Empresa (incluidos, entre otros, los empleados a tiempo parcial o temporales), directivos y representantes, agencias de promoci&oacute;n y/o patrocinadores que participen directamente en la administraci&oacute;n, desarrollo, cumplimiento y ejecuci&oacute;n de una Promoci&oacute;n espec&iacute;fica, as&iacute; como los familiares directos y otros miembros del hogar (es decir, c&oacute;nyuges, padres, abuelos, hijos, nietos, compa&ntilde;eros de habitaci&oacute;n, compa&ntilde;eros de piso, parejas sentimentales, socios y hermanos) de cualquiera de los anteriores no podr&aacute;n introducirse y/o ganar una Promoci&oacute;n.&nbsp;</li>
</ol>
<p><br></p>
<ol>
    <li>La participaci&oacute;n en la Promoci&oacute;n no est&aacute; disponible para usuarios (nacionales y residentes) de Suecia, Israel, Chipre y Andorra.</li>
</ol>
<p><br></p>
<ol>
    <li>Tenga en cuenta que el uso de los Servicios, que pueden descargarse gratuitamente, requiere una conexi&oacute;n a Internet y un dispositivo compatible. Debe introducir la Promoci&oacute;n durante el Periodo de Promoci&oacute;n de la Promoci&oacute;n correspondiente para poder optar a ganar el/los premio(s) aplicable(s).</li>
</ol>
<p><br></p>
<ol>
    <li>Se le podr&aacute; pedir en cualquier momento que nos proporcione a nosotros o a nuestro tercero designado una prueba de su edad y/o identidad y/o residencia y deber&aacute;, cuando se le solicite, poder presentar una documentaci&oacute;n v&aacute;lida que nos permita verificar su, residencia y/o identidad a satisfacci&oacute;n razonable de nuestro equipo. Si no puede presentar documentos satisfactorios, podremos excluirle de la Promoci&oacute;n Cyber Says y podr&aacute; perder todos los privilegios o premios que le hayan sido asignados sin compensaci&oacute;n de ning&uacute;n tipo. Por la presente, renuncia irrevocablemente a cualquier reclamaci&oacute;n o derecho en relaci&oacute;n con dicha exclusi&oacute;n y/o confiscaci&oacute;n.</li>
</ol>
<p><br></p>
<p><strong>Requisitos para recibir las entradas de la promoci&oacute;n y selecci&oacute;n de los ganadores</strong></p>
<ol>
    <li>La Promoci&oacute;n Cyber Says consiste en una promoci&oacute;n cuyos ganadores tendr&aacute;n derecho a ganar los Premios (que se detallan a continuaci&oacute;n).</li>
</ol>
<p><br></p>
<ol>
    <li>Los Usuarios Elegibles tendr&aacute;n derecho a ganar un (1) ticket para participar en la Promoci&oacute;n por cada segunda transacci&oacute;n y superior de compra de cr&eacute;ditos reales en www.ImLive.com <strong>o en&nbsp;</strong>cualquier otro Sitio Web de Terceros (excluyendo los cr&eacute;ditos de bonificaci&oacute;n), (es decir, a partir de los 6 cr&eacute;ditos reales comprados y superiores). &nbsp;</li>
</ol>
<p>Cada cr&eacute;dito real (1) adquirido equivaldr&aacute; a un (1) billete. &nbsp;</p>
<p><br></p>
<p>Usted entiende y reconoce que no hay l&iacute;mite en el n&uacute;mero de cr&eacute;ditos que puede comprar y, por lo tanto, en el n&uacute;mero de entradas de la Promoci&oacute;n que puede optar a recibir.</p>
<p><br></p>
<ol>
    <li><strong>Tambi&eacute;n puede recibir entradas participando gratuitamente en la promoci&oacute;n Cyber Says.&nbsp;</strong></li>
</ol>
<p>A este respecto<strong>,&nbsp;</strong>puede ponerse en contacto con la Empresa, tal y como se indica en el formulario de correo gratuito, durante el periodo de la promoci&oacute;n, a trav&eacute;s de correo certificado internacional a la direcci&oacute;n registrada de la Empresa en Agias Zonis &amp; Thessalonikis, Nicolaou Pentadromos Centre, Office 903A, Limassol, Chipre, 3025, e incluir todo lo siguiente -.</p>
<ol>
    <ol>
        <li>El asunto del correo debe incluir &quot;<strong>Solicitud de participaci&oacute;n gratuita - Promoci&oacute;n Cyber Says</strong>&quot;;</li>
        <li>El correo debe contener su nombre de usuario, n&uacute;mero de cuenta Cyber Says ID, n&uacute;mero de tel&eacute;fono, direcci&oacute;n de correo electr&oacute;nico y fecha de nacimiento.</li>
        <li>El correo deber&aacute; ser recibido por nosotros durante el Periodo de Promoci&oacute;n aplicable para la Promoci&oacute;n en cuesti&oacute;n y ser&aacute; aceptado no m&aacute;s tarde del <strong>7 de julio de 2024.</strong></li>
        <li>Independientemente de lo anterior, cualquier correo enviado una vez finalizado el Periodo de la Promoci&oacute;n no se considerar&aacute; una participaci&oacute;n v&aacute;lida y no dar&aacute; derecho al participante a ninguna entrada, aunque el correo haya sido recibido por nosotros antes del <strong>7 de julio de 2024</strong>;</li>
        <li>Cada (1) correo v&aacute;lido recibido por nosotros le permitir&aacute; recibir un (1) ticket para la Promoci&oacute;n Cyber Says.</li>
    </ol>
</ol>
<p><br></p>
<ol>
    <li><strong>Amigos recomendados</strong>. Usted reconoce que, para aumentar sus posibilidades de ganar, tambi&eacute;n puede recomendar a algunos de sus amigos. Cada usuario apto que haya recomendado a un nuevo amigo leg&iacute;timo de conformidad con las presentes Condiciones de la promoci&oacute;n Cyber Says y las Condiciones y<strong>&nbsp;</strong>que<strong>&nbsp;</strong>re&uacute;na los requisitos para participar en la promoci&oacute;n tal y como se describe en la secci&oacute;n 4 de estas Condiciones <strong>y&nbsp;</strong>haya culminado la Oferta en l&iacute;nea (&quot;<strong>Amigo recomendado</strong>&quot;) recibir&aacute; treinta (30) tickets por cada amigo recomendado leg&iacute;timo y nuevo.</li>
</ol>
<p><br></p>
<p>&quot;<strong>Oferta en l&iacute;nea</strong>&quot; significar&aacute; la culminaci&oacute;n de todos los pasos siguientes -&nbsp;</p>
<ul>
    <li><strong>Crear una cuenta nueva y leg&iacute;tima en ImLive.com&nbsp;</strong><strong>o</strong><strong>, en su caso, en el sitio web de terceros.</strong></li>
    <li><strong>Realice una compra m&iacute;nima de cinco cr&eacute;ditos en&nbsp;</strong>ImLive.com <strong>o</strong><strong>, en su caso, en el sitio web de terceros&nbsp;</strong>- usted reconoce que al realizar una compra m&iacute;nima de cinco cr&eacute;ditos en ImLive.com, recibir&aacute; autom&aacute;ticamente una bonificaci&oacute;n adicional &uacute;nica de cinco cr&eacute;ditos.</li>
    <li><strong>Gaste la totalidad de los diez (10) cr&eacute;ditos que ha recibido en ImLive.com&nbsp;</strong><strong>o,&nbsp;</strong><strong>en su caso, en el sitio web de terceros.</strong></li>
</ul>
<p><br></p>
<ol>
    <li>Las probabilidades de ganar se basan en el n&uacute;mero de tickets v&aacute;lidos. Los ganadores ser&aacute;n elegidos al azar entre todos los tickets v&aacute;lidos por un sistema inform&aacute;tico automatizado.</li>
</ol>
<p>&nbsp;</p>
<ol>
    <li>Cualquier solicitud de participaci&oacute;n que no cumpla lo anterior, las Condiciones de la promoci&oacute;n Cyber Says o nuestras Condiciones podr&aacute; ser descalificada o anulada a nuestra entera discreci&oacute;n. No se tendr&aacute; en cuenta ninguna otra forma o m&eacute;todo para enviar una participaci&oacute;n, a menos que se establezca lo contrario en la descripci&oacute;n espec&iacute;fica de la Promoci&oacute;n Cyber Says.</li>
</ol>
<p><br></p>
<ol>
    <li>El ganador ser&aacute; seleccionado al azar el <strong>14 de julio de 2024</strong>.&nbsp;</li>
</ol>
<p><br></p>
<ol>
    <li>La elecci&oacute;n de los ganadores es definitiva y vinculante, salvo que se indique lo contrario en las presentes Condiciones de la promoci&oacute;n Cyber Says.</li>
</ol>
<p><br></p>
<p><strong>Premios/Valor Aproximado de Venta al P&uacute;blico (&quot;VAVP&quot;)</strong></p>
<ol>
    <li>El premio ser&aacute; -<ol>
            <li>Billete de avi&oacute;n en clase turista a Las Vegas, Nevada, EE.UU. y dos (2) noches de hotel para -.<ol>
                    <li>El ganador y para dos (2) de los Amigos Recomendados del ganador (si procede);&nbsp;</li>
                    <li>El ganador y un (1) Amigo Recomendado y un (1) Usuario Apto que haya recomendado al ganador (cuando proceda) <strong>y&nbsp;</strong>haya culminado la Oferta en l&iacute;nea (&quot;<strong>Amigo Recomendado</strong>&quot;); (ambos colectivamente &quot;<strong>Amigos Viajeros</strong>&quot;)</li>
                </ol>
            </li>
            <li>Mil d&oacute;lares (1.000,00 USD) en cr&eacute;ditos para utilizar en <a href="http://www.ImLive.com">www.ImLive.com</a> (no canjeables ni reembolsables) <strong>s&oacute;lo&nbsp;</strong>para el ganador; y&nbsp;</li>
            <li>Mil d&oacute;lares ($1.000,00 USD) para el ganador y, en su caso, quinientos d&oacute;lares ($500,00 USD) para cada uno de los dos Amigos de viaje del ganador (v&eacute;ase la definici&oacute;n m&aacute;s abajo) de asignaci&oacute;n como parte del viaje a Las Vegas, Cena con estrellas del porno y Paseo en Cadillac (denominados colectivamente &quot;<strong>Premios</strong>&quot; en las secciones 20.a, 20.b y 20.c). VAVP: cinco mil d&oacute;lares ($5.000,00 USD).</li>
        </ol>
    </li>
</ol>
<p><br></p>
<ol>
    <li>Para evitar cualquier duda, el ganador y sus dos Amigos de viaje (en su caso, seg&uacute;n la secci&oacute;n 21 anterior) son los &uacute;nicos responsables de todos y cada uno de los gastos no especificados relacionados con la aceptaci&oacute;n y el uso de los Premios.</li>
</ol>
<p><br></p>
<ol>
    <li>El ganador reconoce y acepta que -&nbsp;<ol>
            <li>En caso de no poder contar con dos Amigos de Viaje elegibles, el ganador tendr&aacute; que volar solo y el Premio concedido para los dos Amigos de Viaje podr&aacute; ser cancelado y anulado (seg&uacute;n el criterio exclusivo de la Empresa);</li>
            <li>Para evitar cualquier duda, en el evento de que alguno de los Amigos Viajeros no se adhiera a las disposiciones descritas en las Condiciones de la Promoci&oacute;n CyberSays o en las Condiciones, o incurra en una violaci&oacute;n de cualquier ley o regulaci&oacute;n aplicable, los dos Amigos Viajeros no ser&aacute;n elegibles para la concesi&oacute;n de los Premios;</li>
            <li>La Empresa se reserva el derecho exclusivo de determinar el hotel y el periodo de vuelo para los Premios. Si el ganador no est&aacute; disponible en dicha fecha por cualquier motivo, el ganador, y en su caso los dos Travel Friends, perder&aacute;n los Premios sin ning&uacute;n tipo de compensaci&oacute;n;</li>
            <li>La disponibilidad de los Premios, incluidos los destinos de los premios, depende de la ubicaci&oacute;n geogr&aacute;fica del ganador que re&uacute;na los requisitos y de la disponibilidad de vuelos. La disponibilidad de los Premios puede estar sujeta a ciertos cambios a discreci&oacute;n exclusiva de la Empresa, siempre que el VAVP de los Premios no supere los cinco mil d&oacute;lares ($5.000,00 USD).</li>
        </ol>
    </li>
</ol>
<p><br></p>
<ol>
    <li>El ganador y, en su caso, sus dos amigos de viaje deber&aacute;n presentar un pasaporte v&aacute;lido con una <strong>validez m&iacute;nima de seis meses&nbsp;</strong>en el momento de su vuelo a Las Vegas, NV, EE.UU. En su caso, deber&aacute;n disponer de un visado o autorizaci&oacute;n v&aacute;lidos, de lo contrario los Premios podr&aacute;n quedar anulados.&nbsp;</li>
</ol>
<p>A este respecto, la Empresa podr&aacute;, a su entera discreci&oacute;n, elegir un lugar alternativo al que el ganador podr&aacute; volar.</p>
<p><br></p>
<ol>
    <li>Los premios son intransferibles y no pueden canjearse por un equivalente en met&aacute;lico.</li>
</ol>
<p><br></p>
<ol>
    <li>Los ganadores de la Promoci&oacute;n Cyber Says son los &uacute;nicos responsables de declarar y pagar todos y cada uno de los impuestos aplicables relacionados con los Premios y de pagar cualquier gasto asociado a los mismos que no est&eacute; espec&iacute;ficamente previsto en las Condiciones de la Promoci&oacute;n Cyber Says.</li>
</ol>
<p><br></p>
<ol>
    <li>Al participar en la Promoci&oacute;n Cyber Says, usted autoriza a la Empresa a ponerse en contacto con usted, con el fin de administrar la Promoci&oacute;n Cyber Says y otorgar los Premios. Notificaremos a cada ganador potencial mediante el env&iacute;o de una notificaci&oacute;n a trav&eacute;s de la direcci&oacute;n de correo electr&oacute;nico (que se utiliz&oacute; para registrarse en los Servicios), en un plazo de quince (15) d&iacute;as h&aacute;biles a partir de la finalizaci&oacute;n del Periodo de la Promoci&oacute;n.&nbsp;</li>
</ol>
<p><br></p>
<ol>
    <li>Realizaremos tres intentos para ponernos en contacto con el ganador potencial en un plazo de setenta y dos (72) horas. Si no logramos ponernos en contacto con el ganador potencial dentro de este plazo especificado o queda descalificado por cualquier otro motivo o no cumple estas Condiciones de la Promoci&oacute;n Cyber Says o las Condiciones, la Empresa podr&aacute; renunciar al Premio y conced&eacute;rselo potencialmente a otro ganador.&nbsp;</li>
</ol>
<p><br></p>
<ol>
    <li>Es su exclusiva responsabilidad notificarnos por escrito si ha cambiado su direcci&oacute;n de correo electr&oacute;nico durante el Periodo de la Promoci&oacute;n.&nbsp;</li>
</ol>
<p><br></p>
<ol>
    <li>Nuestras decisiones relativas a la administraci&oacute;n y el funcionamiento de cualquier Promoci&oacute;n, incluyendo, sin limitaci&oacute;n, la selecci&oacute;n de los posibles ganadores entre todos los participantes que cumplan los requisitos, son definitivas y vinculantes en todos los asuntos relacionados con la Promoci&oacute;n.</li>
</ol>
<p><br></p>
<ol>
    <li>Usted reconoce y acepta que la Empresa se reserva el derecho, a su entera discreci&oacute;n, de transferir autom&aacute;ticamente a cada Usuario Elegible y/o a los Amigos de Viaje que no hayan sido elegidos como ganador/es de esta Promoci&oacute;n para participar en futuras Promociones similares, excepto cuando est&eacute; expl&iacute;citamente prohibido por las leyes o reglamentos aplicables.</li>
</ol>
<p><br></p>
<ol>
    <li>No est&aacute; permitido transferir ni sustituir ning&uacute;n Premio recibido por participar en una Promoci&oacute;n. Todos los premios se ofrecen &quot;tal cual&quot;, sin garant&iacute;a expresa ni impl&iacute;cita.</li>
</ol>
<p><br></p>
<ol>
    <li>Los premios se entregar&aacute;n a los ganadores en un plazo de 30 d&iacute;as laborables, a partir de la recepci&oacute;n por parte de la Empresa de los datos completos del ganador (necesarios para la entrega del premio), a menos que la Empresa, a su entera discreci&oacute;n, tenga motivos para creer que el ganador no re&uacute;ne los requisitos para participar en la promoci&oacute;n Cyber Says o para ser galardonado con los premios.</li>
</ol>
<p><br></p>
<ol>
    <li>Los premios se conceder&aacute;n a los ganadores a trav&eacute;s de su correo electr&oacute;nico personal utilizado para registrarse en los Servicios de la Empresa.&nbsp;</li>
</ol>
<p><br></p>
<ol>
    <li>No se entregar&aacute; ning&uacute;n premio a ning&uacute;n participante que no re&uacute;na los requisitos para participar en la Promoci&oacute;n o que incumpla las Condiciones de la Promoci&oacute;n Cyber Says, las Condiciones o cualquier otra norma de participaci&oacute;n en la Promoci&oacute;n.</li>
</ol>
<p><br></p>
<ol>
    <li>Si alguna ley aplicable, las Condiciones de la promoci&oacute;n Cyber Says, las Condiciones, exigen a alg&uacute;n ganador potencial el cumplimiento de condiciones o requisitos adicionales para poder participar en la Promoci&oacute;n y recibir el Premio, dicho ganador potencial deber&aacute; cumplir &iacute;ntegramente dichos requisitos en el plazo establecido por nosotros antes y como condici&oacute;n para recibir el Premio. Si un ganador potencial es descalificado por cualquier motivo, podremos otorgar el premio correspondiente a un ganador alternativo de entre el resto de participantes que cumplan los requisitos, a nuestra entera discreci&oacute;n.</li>
</ol>
<p><br></p>
<ol>
    <li>La Empresa no se responsabiliza en modo alguno de, ninguna garant&iacute;a, representaci&oacute;n o garant&iacute;a, expresa o impl&iacute;cita, de hecho o de derecho, relacionada con cualquiera de los Premios, en lo que respecta al uso, valor o disfrute de los Premios, incluyendo, sin limitaci&oacute;n, su calidad, estado o idoneidad para un fin.&nbsp;</li>
</ol>
<p><br></p>
<ol>
    <li>Los premios y la participaci&oacute;n en la promoci&oacute;n Cyber Says no est&aacute;n disponibles para menores de 18 o 21 a&ntilde;os (dependiendo de su jurisdicci&oacute;n).&nbsp;</li>
</ol>
<p><br></p>
<p><strong>Limitaciones de responsabilidad y exenci&oacute;n</strong></p>
<ol>
    <li>Al introducirse en esta Promoci&oacute;n, usted acepta liberar, indemnizar y eximir de responsabilidad a la Empresa, y a sus respectivas Empresas matrices, subsidiarias, afiliadas, distribuidoras, proveedoras y organizaciones de publicidad, promoci&oacute;n y juzgamiento y a cada uno de sus respectivos empleados, funcionarios, directores, accionistas y agentes (colectivamente, los &quot;<strong>Exonerados&quot;)&nbsp;</strong>de y contra cualquier y toda reclamaci&oacute;n, acci&oacute;n, da&ntilde;o, p&eacute;rdida, costo, gasto (incluyendo honorarios razonables de abogados/legales), lesiones o causas de acci&oacute;n de cualquier tipo que, de cualquier forma, ahora o en el futuro, puedan surgir de o estar relacionadas con la Promoci&oacute;n, incluyendo sin limitaci&oacute;n (i) la administraci&oacute;n de la Promoci&oacute;n, como errores tipogr&aacute;ficos, de impresi&oacute;n, de siembra, humanos o de otro tipo relacionados con o en conexi&oacute;n con la Promoci&oacute;n, el procesamiento de las participaciones, el anuncio del Premio o cualquier material relacionado, participaciones inexactas, fraudulentas, incompletas, ilegibles, tard&iacute;as, perdidas, robadas, mal dirigidas, no entregadas, incompletas o da&ntilde;adas, cualquier retraso en la entrega o falta de disponibilidad del Premio o de los materiales del Premio; (ii) Su participaci&oacute;n en la Promoci&oacute;n ofrecida por los Exonerados o su aceptaci&oacute;n o uso de un Premio, o participaci&oacute;n en cualquier actividad relacionada con el Premio, incluyendo, sin limitaci&oacute;n, cualquier viaje relacionado con el mismo, y muerte y lesiones corporales (incluyendo angustia emocional), debidas en su totalidad o en parte, directa o indirectamente, a la participaci&oacute;n en las Promociones o cualquier actividad relacionada con la Promoci&oacute;n y por cualquier reclamaci&oacute;n o causa de acci&oacute;n basada en derechos de publicidad, difamaci&oacute;n o invasi&oacute;n de la privacidad; (iii) Cualquier acto u omisi&oacute;n, ya sea negligente, intencionado o de otro tipo, causado por los Exonerados y/o cualquier Promoci&oacute;n; (iv) la participaci&oacute;n de cualquier otro usuario en la Promoci&oacute;n.&nbsp;</li>
</ol>
<p><br></p>
<ol>
    <li>Usted acepta que los Exonerados no son responsables de ninguna informaci&oacute;n incorrecta o inexacta, ya sea causada por los Servicios, otros usuarios o por cualquiera de los equipos o programaci&oacute;n asociados o utilizados en la Promoci&oacute;n y que los Exonerados no asumen ninguna responsabilidad por (i) cualquier lesi&oacute;n o da&ntilde;o a personas o bienes que pueda ser causado, directa o indirectamente, en su totalidad o en parte, por la participaci&oacute;n de un usuario en una Promoci&oacute;n o la recepci&oacute;n o uso o mal uso de cualquier premio; (ii) cualquier error, omisi&oacute;n, interrupci&oacute;n, supresi&oacute;n, defecto o retraso en el funcionamiento o la transmisi&oacute;n en los Servicios; (iii) cualquier aver&iacute;a o fallo inform&aacute;tico, telef&oacute;nico, por cable, por sat&eacute;lite, de red, electr&oacute;nico o de hardware o software de Internet, problemas de conexi&oacute;n o disponibilidad; (iv) transmisiones confusas o desordenadas, accesibilidad o disponibilidad del proveedor de servicios/Internet/sitio web/red de uso; (v) congesti&oacute;n del tr&aacute;fico; (vi) intervenci&oacute;n humana no autorizada; o (vii) robo o destrucci&oacute;n, manipulaci&oacute;n o acceso no autorizado a las participaciones y/o a la informaci&oacute;n de participaci&oacute;n. Si, por cualquier motivo, una Promoci&oacute;n no pudiera llevarse a cabo seg&uacute;n lo previsto debido a la infecci&oacute;n por virus inform&aacute;ticos, intervenci&oacute;n no autorizada, fraude, manipulaci&oacute;n, fallos t&eacute;cnicos o cualquier otra causa ajena al control de los Destinatarios y que, en opini&oacute;n exclusiva de los Destinatarios, corrompa o afecte a la administraci&oacute;n, seguridad, imparcialidad, integridad o correcto desarrollo de una Promoci&oacute;n, los Destinatarios se reservan el derecho, a su entera discreci&oacute;n, de cancelar, finalizar, modificar o suspender dicha Promoci&oacute;n y seleccionar al ganador o ganadores entre todas las inscripciones v&aacute;lidas recibidas para dicha Promoci&oacute;n antes de la medida adoptada.</li>
</ol>
<p><br></p>
<ol>
    <li>En ning&uacute;n evento los Exonerados ser&aacute;n responsables por da&ntilde;os o p&eacute;rdidas de cualquier tipo, incluyendo da&ntilde;os indirectos, incidentales, consecuenciales o punitivos, aparte de los gastos reales de su bolsillo que surjan de su participaci&oacute;n en una Promoci&oacute;n. Sin perjuicio de lo anterior, los Servicios se proporcionan &quot;tal cual&quot;, sin garant&iacute;a de ning&uacute;n tipo, ni expresa ni impl&iacute;cita, incluidas, entre otras, las garant&iacute;as impl&iacute;citas de comerciabilidad, idoneidad para un fin determinado o no infracci&oacute;n. Es posible que algunas jurisdicciones no permitan la limitaci&oacute;n o exclusi&oacute;n de responsabilidad por da&ntilde;os incidentales o consecuentes o la exclusi&oacute;n de garant&iacute;as impl&iacute;citas, por lo que es posible que algunas de las limitaciones o exclusiones anteriores no sean aplicables en su caso. En tales casos, nuestra responsabilidad se limitar&aacute; al m&aacute;ximo permitido por la legislaci&oacute;n aplicable.</li>
</ol>
<p><br></p>
<p><strong>Condiciones generales adicionales</strong></p>
<ol>
    <li>Todas las solicitudes de participaci&oacute;n en una Promoci&oacute;n pasar&aacute;n a ser propiedad exclusiva de la Empresa y no ser&aacute;n reconocidas y/o devueltas. Se considerar&aacute;n nulas las inscripciones recibidas que procedan de participantes no elegibles y/o que no cumplan las Condiciones de la Promoci&oacute;n Cyber Says o las Condiciones. Las participaciones que se determinen fraudulentas se considerar&aacute;n nulas, y la persona que las realice podr&aacute; ser excluida de la participaci&oacute;n en la Promoci&oacute;n y, a discreci&oacute;n exclusiva de la Empresa y en funci&oacute;n de cada caso, se le podr&aacute; prohibir cualquier participaci&oacute;n en futuras Promociones y/o servicios de la Empresa. La prueba de env&iacute;o o presentaci&oacute;n no se considerar&aacute; prueba de recepci&oacute;n. Por la presente, acepta que en ning&uacute;n caso tendr&aacute; derecho a reclamarnos por solicitudes que no hayamos recibido o de las que no hayamos acusado recibo, por el motivo que sea, o que se hayan recibido antes o despu&eacute;s del Periodo de promoci&oacute;n de la Promoci&oacute;n correspondiente.</li>
</ol>
<p><br></p>
<ol>
    <li>La Empresa podr&aacute; cancelar, modificar, alterar, cambiar o suspender la Promoci&oacute;n Cyber Says, y cualquiera de los Premios o beneficios ofrecidos en virtud de la misma, incluyendo, sin limitaci&oacute;n, cuando sea necesario por razones de seguridad o cualquier otra raz&oacute;n, a su entera discreci&oacute;n, para cumplir con la ley o reglamento aplicable, debido al abuso o de otra manera cuando debido a circunstancias fuera de su control (incluyendo, sin limitaci&oacute;n, un caso de fuerza mayor, incendio, inundaci&oacute;n, epidemia u otra emergencia sanitaria nacional, terremoto, explosi&oacute;n, conflicto laboral o huelga, caso fortuito o enemigo p&uacute;blico, fallo del sat&eacute;lite o del equipo, revuelta o disturbios civiles, amenaza o actividad terrorista, guerra (declarada o no declarada,) o cualquier ley, orden o reglamento del gobierno federal, estatal o local, orden de cualquier tribunal o jurisdicci&oacute;n, crisis de salud p&uacute;blica u otra causa que no est&eacute; razonablemente bajo su control. En caso de que la Promoci&oacute;n se finalice, cancele o posponga por cualquier motivo, el valor real/apreciado del/de los premio(s) se otorgar&aacute; &uacute;nicamente en la medida en que lo exija la ley.</li>
</ol>
<p><br></p>
<ol>
    <li>La Empresa se reserva el derecho a modificar los premios y/o las condiciones de esta promoci&oacute;n de Cyber Says (incluidos, entre otros,&nbsp;el per&iacute;odo de promoci&oacute;n correspondiente, las fechas relacionadas o los premios) en cualquier momento y sin previo aviso.&nbsp;</li>
</ol>
<p><br></p>
<p>Usted reconoce que ser&aacute; responsable de mantenerse al d&iacute;a de todos y cada uno de los cambios introducidos en la Promoci&oacute;n. En caso de modificaci&oacute;n de la Promoci&oacute;n, su participaci&oacute;n continuada en la Promoci&oacute;n constituye la aceptaci&oacute;n de los T&eacute;rminos y Condiciones modificados de dicha Promoci&oacute;n.</p>
<p><br></p>
<ol>
    <li>&nbsp;Si tenemos conocimiento de cualquier fraude, enga&ntilde;o, conducta indebida (por ejemplo lenguaje fuerte, insultos, amenazas), deshonestidad o acci&oacute;n similar en relaci&oacute;n con su participaci&oacute;n en la Promoci&oacute;n Cyber Says, o si actuara de forma perturbadora o con la intenci&oacute;n de perturbar o socavar el funcionamiento leg&iacute;timo de la Promoci&oacute;n Cyber Says o si incumpliera cualquiera de las presentes Condiciones dela Promoci&oacute;n Cyber Says, los reglamentos y normas que se apliquen a su uso de los Servicios y/o a su participaci&oacute;n en cualquier Promoci&oacute;n Cyber Says, entonces (i) nos reservamos el derecho absoluto a descalificarle autom&aacute;tica e inmediatamente o a invalidar su participaci&oacute;n, y (ii) tambi&eacute;n nos reservamos el derecho a reclamarle da&ntilde;os y perjuicios y otros recursos en la m&aacute;xima medida permitida por la ley. Si el fraude, el enga&ntilde;o, la mala conducta, la falta de honradez u otra acci&oacute;n s&oacute;lo se descubre despu&eacute;s de que se le haya concedido cualquier premio aplicable, se le exigir&aacute;, previa solicitud, que nos devuelva el Premio (o que proporcione una compensaci&oacute;n equivalente) inmediatamente despu&eacute;s de recibir nuestra solicitud de hacerlo. Sin perjuicio de lo anterior, la Empresa podr&aacute; bloquear a cualquier participante que, a juicio exclusivo de la Empresa, haya sido descalificado, tenga una elegibilidad cuestionable o sea inelegible por cualquier otro motivo para participar en la Promoci&oacute;n.</li>
</ol>
<p><br></p>
<ol>
    <li>&nbsp; &nbsp; 100.Ganar un Premio constituye su consentimiento para que la Empresa pueda utilizar la siguiente informaci&oacute;n relativa a usted: nombre, nombre de usuario, pa&iacute;s de residencia y el Premio y por la presente nos concede a nosotros y a nuestros afiliados, un derecho y licencia perpetuos, ilimitados, no exclusivos, mundiales, totalmente pagados y libres de Regal&iacute;as, para utilizar (a) su nombre y nombre de usuario; (b) su imagen, fotograf&iacute;a y semejanza; (c) su testimonio con respecto a la participaci&oacute;n y/o uso de nuestros servicios o productos; y (d) los detalles relativos a su victoria (colectivamente, la <strong>&quot;Informaci&oacute;n</strong>&quot;), y para reproducir, distribuir, mostrar p&uacute;blicamente, ejecutar p&uacute;blicamente y hacer trabajos derivados, basados en dicha Informaci&oacute;n, en cualquier formato de medio de comunicaci&oacute;n, incluso a trav&eacute;s de medios de radiodifusi&oacute;n, con fines de relaciones p&uacute;blicas, marketing y promoci&oacute;n relacionados con la Promoci&oacute;n Cyber Says o la Empresa. Todo tratamiento de datos personales por nuestra parte se realizar&aacute; de conformidad con los t&eacute;rminos de nuestra<em>&nbsp;Pol&iacute;tica de Privacidad.</em></li>
</ol>
<p><br></p>
<ol>
    <li>&nbsp; &nbsp; 101.Si gana un Premio, por la presente renuncia a todos y cada uno de los derechos de paternidad, integridad y cualesquiera otros derechos que se conozcan o denominen &quot;derechos morales&quot; sobre la Informaci&oacute;n que pueda adquirir en virtud del presente comunicado o por ministerio de la ley. Usted entiende que no tendr&aacute; derecho a ning&uacute;n pago u otro reconocimiento en relaci&oacute;n con el uso que la Empresa haga de la Informaci&oacute;n.</li>
</ol>
<p><br></p>
<ol>
    <li>&nbsp; &nbsp; 102.Todos los productos, servicios y nombres de Empresas referenciados y/o incluidos son marcas registradas de sus propietarios originales. El uso de cualquier marca, nombre, imagen o semejanza es s&oacute;lo para fines de identificaci&oacute;n y referencia y no implica ninguna asociaci&oacute;n con el titular de la marca, el individuo respectivo o su marca. La Empresa renuncia expresamente a cualquier afiliaci&oacute;n con marcas comerciales o derechos de publicidad de terceros a los que se haga referencia y/o que se incluyan en la promoci&oacute;n Cyber Says o en materiales relacionados. El uso de cualquier marca, nombre, imagen o semejanza no pretende inducir a error, confundir al cliente o infringir los derechos de autor, derechos de publicidad o marca comercial de terceros. Dicho uso no indica en modo alguno ninguna relaci&oacute;n con terceros, ni significa que dichos terceros sean la fuente, respalden, aprueben o patrocinen el uso de nuestros Servicios. No hacemos ninguna reclamaci&oacute;n comercial por el uso de ning&uacute;n copyright, derecho de publicidad o marca comercial de terceros, ni sugerencia de patrocinio o respaldo, y cualquier uso de este tipo se proporciona &uacute;nicamente con fines informativos.&nbsp;</li>
</ol>
<p><br></p>
<ol>
    <li>&nbsp; &nbsp; 103.Todas las Promociones estar&aacute;n sujetas a todas las leyes y reglamentos federales, estatales y locales aplicables, y ser&aacute;n nulas donde est&eacute;n prohibidas o restringidas por la ley.</li>
</ol>
<p><br></p>
<ol>
    <li>&nbsp; &nbsp; 104.La Empresa se reserva el derecho a: (i) finalizar o declarar nula cualquier Promoci&oacute;n y rescindir cualquier premio, si a su juicio, las Condiciones de la Promoci&oacute;n Cyber Says o la integridad de la Promoci&oacute;n han sido violadas o comprometidas de cualquier forma, intencionadamente o no, por cualquier persona, participante o no en la Promoci&oacute;n; (ii) alterar o modificar estas Condiciones de la Promoci&oacute;n Cyber Says en cualquier momento; y/o (iii) detener o finalizar cualquier Promoci&oacute;n en cualquier momento sin previo aviso. Los cambios sustanciales de estas bases se publicar&aacute;n en los Servicios, cuando sea posible.</li>
</ol>
<p><br></p>
<ol>
    <li>&nbsp; &nbsp; 105.La Empresa ser&aacute; el &uacute;nico &aacute;rbitro en todos los asuntos relacionados con cualquier Promoci&oacute;n y la interpretaci&oacute;n de estas Condiciones de la Promoci&oacute;n Cyber Says y las Condiciones. Las decisiones de la Empresa ser&aacute;n definitivas en todos los asuntos, incluyendo, sin limitaci&oacute;n, si cualquier participaci&oacute;n presentada es v&aacute;lida o no. La participaci&oacute;n en cualquier promoci&oacute;n implica el Acuerdo por parte de los participantes de respetar las Condiciones de la promoci&oacute;n Cyber Says y las Condiciones, as&iacute; como cualquier otra norma establecida por la Empresa.</li>
</ol>
<p><br></p>
<ol>
    <li>&nbsp; &nbsp; 106.La Promoci&oacute;n se regir&aacute; por las leyes de la Rep&uacute;blica de Chipre y los participantes en la Promoci&oacute;n se someten a la jurisdicci&oacute;n exclusiva de los tribunales de la Rep&uacute;blica de Chipre.</li>
</ol>
<p>&nbsp;&nbsp;</p>
<ol>
    <li>&nbsp; &nbsp; 107.En caso de conflicto entre las presentes Condiciones de la promoci&oacute;n Cyber Says o las Condiciones, prevalecer&aacute;n las presentes Condiciones de la promoci&oacute;n Cyber Says.</li>
</ol>
<p><br></p>
<p>PRECAUCI&Oacute;N: CUALQUIER INTENTO DE DA&Ntilde;AR DELIBERADAMENTE LOS SERVICIOS DE LA EMPRESA O DE SOCAVAR EL FUNCIONAMIENTO LEG&Iacute;TIMO DE LA PROMOCI&Oacute;N OFRECIDA POR LA EMPRESA CONSTITUYE UNA VIOLACI&Oacute;N DE LAS LEYES PENALES Y CIVILES. EN CASO DE QUE SE PRODUZCA TAL INTENTO, LA EMPRESA SE RESERVA EL DERECHO A RECLAMAR DA&Ntilde;OS Y PERJUICIOS A CUALQUIERA DE DICHAS PERSONAS EN LA M&Aacute;XIMA MEDIDA PERMITIDA POR LA LEY.</p>
<p>Para informaci&oacute;n, asistencia o preguntas, p&oacute;ngase en contacto con nosotros en vegas@cybersays.club. &nbsp;</p>
<p><br></p>`
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
</p>
<p><br></p>`
