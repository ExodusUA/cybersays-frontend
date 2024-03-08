import React from 'react'
import HeaderProfile from '../Components/HeaderProfile'
import LanguageSocial from '../Components/Language/LanguageSocial';
import { useLanguage } from '../Helpers/Languages/LanguageContext';

function ContestTerms() {
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
    )
}

export default ContestTerms
let en_text = `<p style="text-align:center;font-size:16pt!important;"><strong>CyberSays.Club -&nbsp;&nbsp;Daily Contest Terms</strong></p>
<p>&nbsp; &nbsp; &nbsp;Last modified: February 2024</p>
<p>The following are the terms and conditions of the Company daily contest (&quot;<strong>Cyber Says</strong>&quot; and &quot;<strong>Cyber Says Contest Terms</strong>&quot;; &quot;<strong>Contest</strong>&quot;), which is sponsored by Pythia Grant Ltd. (&quot;<strong>Company</strong>&quot;, &quot;<strong>us</strong>&quot; or &quot;<strong>we</strong>&quot; or &quot;<strong>our</strong>&quot;). Participation in the <strong>Contest</strong> shall be subject to the provisions below and the Company&apos;s Terms and Conditions, ImLive.com Terms and Conditions (collectively &quot;<strong>Terms</strong>&quot;) and Privacy Policy (&quot;<strong>Privacy Policy</strong>&quot;).</p>
<p>Capitalized terms used but not defined herein shall have the meaning given to them in the Terms.</p>
<p><br></p>
<p><strong>General</strong></p>
<ol>
    <li>The Cyber Says Contest is a daily competition scheduled to begin on February 29, 2024, until July 2, 2024 and will run daily and shall continue as long as it will be presented onsite (the &ldquo;<strong>Contest Period</strong>&rdquo;).&nbsp;</li>
</ol>
<p><br></p>
<ol>
    <li>You agree that in order to participate in the Cyber Says Contest (including, without limitation, in order to win any reward), you will fully comply with all applicable laws, regulations, statutes, ordinances and provisions that apply to you and to us, including, without limitation, these Cyber Says Contest Terms and the Terms.</li>
</ol>
<p><br></p>
<p><strong>Eligibility to participate in the Contest</strong></p>
<ol>
    <li>In order to be eligible to participate in the Cyber Says Contest you hereby represent and warrant that you:&nbsp;</li>
</ol>
<ul>
    <li>created&nbsp;&nbsp;a new and legitimate&nbsp;&nbsp;account registered with Cybersays.club;&nbsp;</li>
    <li>are at least eighteen (18) years old (unless the applicable age of majority in your state of residence at the time of the entry is higher) or older;&nbsp;</li>
    <li>are eligible under applicable law and regulation to participate in the Cyber Says Contest;&nbsp;</li>
    <li>have the full right and authority to participate in Cyber Says Contest; (collectively referred as, &quot;<strong>Eligible Users</strong>&quot;).</li>
</ul>
<p><br></p>
<p>&quot;<strong>Online Offer</strong>&quot; shall mean completing all of the following steps &ndash;&nbsp;</p>
<ul>
    <li>Create a new and legitimate account on ImLive.com</li>
    <li>Make a minimum purchase of five (5) credits on <a href="http://www.ImLive.com">www.ImLive.com</a> &nbsp;&ndash; you acknowledge that by making a minimum purchase of five credits on <a href="http://www.ImLive.com">www.ImLive.com</a> , you will automatically receive a one-time additional bonus of five credits;</li>
    <li>Spend the entire ten (10) credits that you received on <a href="http://www.ImLive.com">www.ImLive.com</a> .</li>
</ul>
<p><br></p>
<p>As part of this Contest, you acknowledge that (i) any credit bonus received on ImLive.com as part of this Contest is <strong>not redeemable, not refundable, not transferable and non-exchangeable</strong>; (ii) these credit bonuses must be used on ImLive.com <strong>only</strong>; (iii) these credit bonuses do not have any pecuniary value or any kind of value outside of ImLive.com; (iv) you are solely liable towards your use of ImLive.com services and the use of such credits; and (v) you have read <em>ImLive.com terms and conditions</em> before using www.ImLive.com&apos;s services or using any of the credit bonuses on their services.</p>
<p><br></p>
<ol>
    <li>As part of this Contest, you acknowledge that the Company, may in its sole discretion, refuse or disqualify your participation in the Contest if any of the information you provided during registration or where applicable, upon completing the Online Offer is (i) missing, inaccurate and/or outdated; (ii) appears to be false, fraudulent; or (iii) is in violation of the Cyber Says Contest Terms, the Terms or any applicable laws or regulations.&nbsp;</li>
</ol>
<p><br></p>
<ol>
    <li>You may not use multiple email addresses, accounts and/or identities or any other method in order to participate in the Cyber Says Contest more than once. You may not register on behalf of another person.</li>
</ol>
<p><br></p>
<ol>
    <li>Use of robotic, mechanical or other forms of pre-programmed entry methods is strictly prohibited. Entrants may not use such manipulation tools and Company reserves the right (in its sole discretion), from time to time, to implement entry processes that may frustrate or prohibit such automated entry; provided, however, that no entrant in any Contest may rely upon or insist upon Company&rsquo;s failure or refusal to take any of the foregoing actions or to determine, in its sole discretion, that one entrant&rsquo;s entry should be discounted because another entrant&rsquo;s entry was or vice versa. Any use of automated system or any similar method to participate in any Contest is strictly prohibited and may result in your disqualification from the Contest and/or future use of the Services. The person to whom the email address was assigned by the applicable operator shall be deemed as the owner of such email address.</li>
</ol>
<p>&nbsp;</p>
<ol>
    <li>Company reserves the right to limit the Contest to entrants located in a particular jurisdiction, in which case only users residing in such jurisdiction at the time of entry may not be eligible to participate in the Contest.&nbsp;</li>
</ol>
<p><br></p>
<ol>
    <li>The participation in the Contest is not available for any users (nationals and residents) from Israel, Cyprus and Andorra.</li>
</ol>
<p><br></p>
<ol>
    <li>Company&apos;s employees (including, without limitation, part-time or temporary employees), officers, and representatives, promotion agencies and/or sponsors directly involved in the administration, development, fulfilment, and execution of a specific Contest, and the immediate family and other household members (i.e., spouses, parents, grandparents, children, grandchildren, roommates, housemates, significant others, partners, and siblings) of any of the above are not eligible to enter and/or to win a Contest.</li>
</ol>
<p><br></p>
<ol>
    <li>Please note that the use of the Services, which can be downloaded free of charge, requires an internet connection and a compatible device. You must enter the Contest during the Contest Period of the relevant Contest in order to be eligible to win applicable prize(s).</li>
</ol>
<p><br></p>
<ol>
    <li>You may be asked at any time to provide us or our designated third party with proof of your age and/or identity and/or residency and you must, on demand, be able to present a valid documentation which may enable us to verify your, residency and/or identity to the reasonable satisfaction of our team. If you are unable to provide satisfactory documents, we may exclude you from the Cyber Says Contest and may forfeit any privileges or awards that have been allocated to you without compensation of any kind. You hereby irrevocably waive any claims or rights in connection with any such exclusion and/or forfeiture.</li>
</ol>
<p><br></p>
<p><strong>Eligibility to receive Contest&apos;s virtual points and selection of winners</strong></p>
<ol>
    <li>The Cyber Says Contest consists of a daily competition, the winners of which shall be entitled to win the Prizes (as detailed below).&nbsp;</li>
</ol>
<p><br></p>
<ol>
    <li>Eligible Users are entitled to earn virtual points in one of the following ways -&nbsp;<ol>
            <li><strong>10</strong> virtual points for each friend you referred to our Services and that are deemed Eligible User <strong>and</strong> who have successfully completed the Online Offer;&nbsp;</li>
            <li><strong>0.5</strong> virtual points&nbsp;&nbsp;for each real credit purchased at ImLive.com, starting the second purchase ( meaning the 11 credits and above). I.e. no virtual points will be given for the first 5 credits to be purchased).</li>
        </ol>
    </li>
</ol>
<p><br></p>
<ol>
    <li>You understand and acknowledge that there is no limit to the number of credits you may purchase and therefore, to the number of virtual points you may be eligible to receive.</li>
</ol>
<p><br></p>
<ol>
    <li>You acknowledge that obtaining virtual points is subject to your full compliance with these Cyber Says Contest Terms and the Terms. Any participant may be disqualified or void at our sole discretion if the Company deems that such participant does not comply with the Cyber Says Contest Terms or the Terms.</li>
</ol>
<p><br></p>
<ol>
    <li>The daily winner of the Contest will be the participant who earned and accumulated the most virtual points at the end of each day.&nbsp;</li>
</ol>
<p>&nbsp;&nbsp;</p>
<ol>
    <li>No other form or method for submitting an entry will be considered, unless otherwise set forth in the Cyber Says Contest description.</li>
</ol>
<p><br></p>
<ol>
    <li>As part of this Contest, you acknowledge that (i) any virtual points received as part of this Contest is <strong>not redeemable, not refundable, not transferable, and non-exchangeable</strong>; (ii) these virtual points are intended to provide your score in the Contest and they cannot be used outside of this Contest or for any other purpose; (iii) these virtual points do not have any pecuniary value or any kind of value inside or outside of the Contest, except as explicitly stated in the paragraph herein; (iv) you are solely liable towards your use of our Services.&nbsp;</li>
</ol>
<p><br></p>
<ol>
    <li>The number of the virtual points will reset at the end of each day.&nbsp;</li>
</ol>
<p><br></p>
<ol>
    <li>The daily winner will be announced onsite,&nbsp;&nbsp;at the end of each day.&nbsp; &nbsp;</li>
</ol>
<p><br></p>
<ol>
    <li>The choice of winners is final and binding, unless stated otherwise in these Cyber Says Contest Terms.</li>
</ol>
<p><br></p>
<p><strong>Prizes</strong></p>
<ol>
    <li>The awarded prize will be to ten daily winners only &ndash;<ol>
            <li>For the 1<sup>st</sup> place and 2<sup>nd</sup> Place - the winner shall be entitled to receive &ndash; sixty nine dollars ($69USD);</li>
            <li>For the 3<sup>rd</sup> place until 10<sup>th</sup> &nbsp;place - the winner shall be entitled to receive &ndash; 6.90$ USD&nbsp;</li>
        </ol>
    </li>
</ol>
<p><br></p>
<ol>
    <li>Prizes are non-transferable and non-exchangeable. &nbsp;</li>
</ol>
<p><br></p>
<ol>
    <li>In the event that -<ol>
            <li>two or more Eligible Users will reach the same amount of daily virtual points then the Eligible Users with the heist number of Referred Friend will be chosen.&nbsp;</li>
            <li>two or more Eligible Users have the same number of Referred Friends, then the Eligible User who has purchased the most credits in ImLive.com will be chosen.&nbsp;</li>
            <li>two or more Eligible Users have the same amount of ImLive.com&rsquo;s credits, then the Eligible User who completed the Online Offer first, will be chosen.&nbsp;</li>
        </ol>
    </li>
</ol>
<p><br></p>
<ol>
    <li>The winners of the Cyber Says Contest are solely responsible for reporting and paying any and all applicable taxes related to the Prizes and paying any expenses associated therewith which are not specifically provided for in the Cyber Says Contest Terms.</li>
</ol>
<p><br></p>
<ol>
    <li>By participating in the Cyber Says Contest, you allow the Company to contact you, for the purpose of administration of the Cyber Says Contest and awarding of Prizes.&nbsp;</li>
</ol>
<p><br></p>
<ol>
    <li>We will make three attempts to contact the potential winner within seventy-two (72) hours. If we are unable to contact the potential winner within this specified time frame or is otherwise disqualified or does not comply with these Cyber Says Contest Terms or Terms, Company may forfeit the Prize and grant it potentially to another winner.&nbsp;</li>
</ol>
<p><br></p>
<ol>
    <li>It is your sole responsibility to notify us in writing if you changed your email address during the Contest Period.&nbsp;</li>
</ol>
<p><br></p>
<ol>
    <li>Our decisions regarding the administration and operation of any Contest, including, without limitation, the selection of potential winners are final and binding in all matters related to the Contest.</li>
</ol>
<p><br></p>
<ol>
    <li>You are not allowed to transfer or substitute any Prize received from participating in a Contest. All prizes hereunder are offered &quot;as is&quot; without warranty either expressly or in an implied fashion.</li>
</ol>
<p><br></p>
<ol>
    <li>Prizes will be delivered to winners and shall be available for withdrawn within 2 business days from the Company receiving the winner&apos;s full details (as required to provide the Prize), unless Company, in its sole discretion, has any reason to believe the winner is not eligible to participate in the Cyber Says Contest or to be awarded with the Prizes.</li>
</ol>
<p><br></p>
<ol>
    <li>Prizes will be granted to winners through their Cyber Says third party providers as further detailed in Cyber Says Terms and Conditions.&nbsp;</li>
</ol>
<p><br></p>
<ol>
    <li>No Prizes shall be given to any participant who is ineligible to participate in the Contest or fails to comply with the Cyber Says Contest Terms, the Terms, or any other rules for participation in the Contest.</li>
</ol>
<p><br></p>
<ol>
    <li>If any potential winner is required by any applicable law, the Cyber Says Contest Terms, the Terms to comply with additional conditions or requirements in order to participate in the Contest and receive the Prize, such potential winner must fully comply with such requirements within the time set by us before and as a condition to receiving the Prize. If a potential winner is disqualified for any reason, we may award the applicable prize to an alternate winner from among the remaining eligible participants, in our sole discretion.</li>
</ol>
<p><br></p>
<ol>
    <li>Company is not responsible in any manner for, any warranties, representations, or guarantees, express or implied, in fact or law, relating to any of the Prizes, regarding the use, value or enjoyment of the Prizes, including, without limitation, their quality, condition, or fitness for a purpose.&nbsp;</li>
</ol>
<p><br></p>
<ol>
    <li>Prizes and participation in the Cyber Says Contest are not available to persons under the age of majority in your jurisdiction.</li>
</ol>
<p><br></p>
<p><strong>Limitations of liability and release</strong></p>
<ol>
    <li>By entering into this Contest, you agree to release, indemnify, and hold harmless Company, and its respective parents, subsidiaries, affiliates, distributors, suppliers, and advertising, promotional and judging organizations and each of their respective employees, officers, directors, shareholders, and agents (collectively, the &ldquo;<strong>Releasees</strong>&rdquo;) from and against any and all claims, actions, damages, losses, costs, expenses (including reasonable attorneys/legal fees), injuries or causes of action of any kind that in any way now or hereinafter may arise from or relate to the Contest, including without limitation (i) the administration of the Contest, such as typographical, printing, seeding, human or other errors relating to or in connection with the Contest, the processing of entries, the announcement of the Prize or any related materials, inaccurate, fraudulent, incomplete, illegible, late, lost, stolen, misdirected, undelivered, incomplete, or damaged entries, any delays in delivery or lack of availability of the Prize or Prize materials; (ii) Your participation in the Contest offered by the Releasees or your acceptance or use of a Contest, or participation in any Prize related activities, including, without limitation, any activity related thereto, and death and bodily injury (including emotional distress), due in whole or in part, directly or indirectly, to participation in the Contest or any Contest-related activity and for any claims or causes of action based on publicity rights, defamation, or invasion of privacy; (iii) Any act or omission, whether negligent, intentional or otherwise, caused by the Releasees and/or any Contest; (iv) any other user&rsquo;s participation in the Contest.&nbsp;</li>
</ol>
<p><br></p>
<ol>
    <li>You agree that the Releasees are not responsible for any incorrect or inaccurate information, whether caused by the Services, other users, or by any of the equipment or programming associated with or utilized in the Contest and that the Releasees assume no responsibility for (i) any injury or damage to persons or property which may be caused, directly or indirectly, in whole or in part, from a user&rsquo;s participation in a Contest or receipt or use or misuse of any Prize; (ii) any error, omission, interruption, deletion, defect, or delay in operation or transmission on the Services; (iii) any computer, telephone, cable, satellite, network, electronic or internet hardware or software malfunctions or failures, problems with connections or availability; (iv) garbled or jumbled transmissions, service provider/internet/web site/use net accessibility or availability; (v) traffic congestion; (vi) unauthorized human intervention; or (vii) theft or destruction, tampering, or unauthorized access to entries and/or entry information. If, for any reason, the Contest is not capable of running as planned by reason of infection by computer virus, unauthorized intervention, fraud, tampering, technical failures, or any other causes beyond the Releasees control and, in the sole opinion of the Releasees, corrupt or affect the administration, security, fairness, integrity or proper conduct of the Contest, the Releasees reserve the right, at their sole discretion, to cancel, terminate, modify or suspend such Contest and the Company shall select the winner(s) from among all eligible entries received for such Contest prior to the action taken.</li>
</ol>
<p><br></p>
<ol>
    <li>In no event will the Releasees be responsible or liable for any damages or losses of any kind, including indirect, incidental, consequential or punitive damages, other than your actual out-of-pocket expenses arising out of your participation in a Contest. Without limiting the foregoing, the Services are provided &ldquo;as is&rdquo; without warranty of any kind, either expressed or implied, including but not limited to, the implied warranties of merchantability, fitness for a particular purpose or non-infringement. Some jurisdictions may not allow the limitations or exclusion of liability for incidental or consequential damages or exclusion of implied warranties so some of the above limitations or exclusions may not apply to you. In such cases, our liability will be limited to the fullest extent permitted by applicable law.</li>
</ol>
<p><br></p>
<p><strong>Additional General Terms</strong></p>
<ol>
    <li>All requests for entry into a Contest shall become the exclusive property of Company and will not be acknowledged and/or returned. Entries received that are from ineligible entrants and/or do not comply with the Cyber Says Contest Terms or the Terms will be considered void. Entries that are determined to be fraudulent will be considered void, and the person making such entry may be barred from participation in the Contest and, in Company&rsquo;s sole discretion on a case-by-case basis, banned from any future participation in any future Company Contest and/or services. You hereby agree than in no event will you have any claims against us for any requests that were not received or acknowledged by us, for any reason whatsoever, or which were received before or after the Contest Period.</li>
</ol>
<p><br></p>
<ol>
    <li>Company may cancel, modify, alter, change or suspend the Cyber Says Contest, and any of the Prizes or benefits offered hereunder, including without limitation, where required for security reasons or any other reason, at its sole discretion, to comply with applicable law or regulation, due to abuse or otherwise where due to circumstances beyond its control (including, without limitation, a force majeure, fire, flood, epidemic or other national health emergency, earthquake, explosion, labour dispute or strike, act of God or public enemy, satellite or equipment failure, riot or civil disturbance, terrorist threat or activity, war (declared or undeclared,) or any federal, state or local government law, order, or regulation, order of any court or jurisdiction, public health crisis, or other cause not reasonably within its control. In the event that the Contest is terminated, cancelled, or postponed for any reason whatsoever, the actual Prize(s) will be awarded solely to the extent required by law.</li>
</ol>
<p><br></p>
<ol>
    <li>Company reserves the right to change the Prizes and terms of this Cyber Says Contest at any time and without prior notice. You acknowledge that you shall be responsible for staying up to date with any and all changes made to the Contest. In the event of modifying the Contest, your continued participation in the Contest constitutes acceptance of the modified terms and conditions of such Contest.</li>
</ol>
<p><br></p>
<ol>
    <li>&nbsp;If we become aware of any fraud, deceit, misconduct (e.g. strong language, insults, threats), dishonesty or similar action concerning your participation in the Cyber Says Contest, or if you acted in a disruptive manner or with the intent to disrupt or undermine the legitimate operation of the Cyber Says Contest or if you breached any of these Cyber Says Contest Terms, the Terms and/or any additional laws, regulations and rules which apply to your use of the Services and/or your participation in any Cyber Says Contest, then (i) we reserve the absolute right to automatically and immediately disqualify you or invalidate your entry, and (ii) we also reserve the right to seek damages and other remedies from you to the full extent permitted by law. If fraud, deceit, misconduct, dishonesty or other action is only discovered after any applicable reward has been granted to you, then you shall be required, upon demand, to return the Prize (or provide equivalent compensation) to us immediately upon receipt of our demand to do so. Without limiting the foregoing, Company may lock out any participant who, in Company&rsquo;s sole judgment, has been disqualified, has questionable eligibility, or is otherwise ineligible to participate in the Contest.</li>
</ol>
<p><br></p>
<ol>
    <li>Winning a Prize constitutes your consent that Company may use the following information concerning you: name, username, country of residence and the Prize and you hereby grant us and our affiliates, a perpetual, unlimited, non-exclusive, worldwide, fully paid up, royalty free right and license, to use (a) your name and username; (b) your image, photograph and likeness; (c) your testimonial regarding the participation and/or use of our services or products; and (d) details regarding your winning (collectively, the <strong>&quot;Information</strong>&quot;), and to reproduce, distribute, publicly display, publicly perform and make derivative works, based upon such Information, in whatever media format, including through broadcast media, for public relations, marketing and promotion purposes relating to the Cyber Says Contest or the Company. All processing of personal data by us will be made in accordance with the terms of our <em>Privacy Policy.</em></li>
</ol>
<p><br></p>
<ol>
    <li>If you win a Prize, you hereby waive any and all rights of paternity, integrity and any other rights that be known as or referred to as &ldquo;moral rights&rdquo; in and to the Information which you may acquire pursuant to this release or by operation of law. You understand that will not be entitled to any payment or other acknowledgement in relation to the any use of the Information by the Company.</li>
</ol>
<p><br></p>
<ol>
    <li>All products, services and company names referenced and/or included are the registered trademarks of their original owners. The use of any mark, name, image, or likeness is for identification and reference purposes only and does not imply any association with the trademark holder, respective individual, or their brand. The Company expressly disclaims any affiliation with any third-party trademarks or rights of publicity referenced and/or included on Cyber Says Contest, or related materials. The use of any mark, name, image, or likeness is not intended to mislead, confuse the customer, or infringe on the copyright, rights of publicity, or trademark of any third party. Such use in no way indicates any relationship with any third party, nor does it signify that any such third party is the source of, endorses, approves of, or sponsors the use of our Services. We make no commercial claim to the use of any copyright, rights of publicity, or trademark of any third party, or suggestion of sponsorship or endorsement, and any such use is provided for informational purposes only.&nbsp;</li>
</ol>
<p><br></p>
<ol>
    <li>All Contest shall be subject to all applicable federal, state, and local laws and regulations, and are void where prohibited or restricted by law.</li>
</ol>
<p><br></p>
<ol>
    <li>Company reserves the right to: (i) terminate or declare any Contest null and void and rescind any prize, if in its sole judgment, the Cyber Says Contest Terms or the integrity of the Contest have been violated or compromised in any way, intentionally or unintentionally by any person, whether or not a participant in the Contest; (ii) alter or amend these Cyber Say Contest Terms at any time; and/or (iii) stop or conclude any Contest at any time without prior notice. Material changes to these rules will be posted on the Services, when practical.</li>
</ol>
<p><br></p>
<ol>
    <li>Company shall be the sole arbiter in all matters relating to any Contest and the interpretation of these Cyber Says Contest Terms and the Terms. The decisions of Company will be final as to all matters, including, without limitation, whether any entry submitted is valid or not. Entry into any Contest constitutes agreement by entrants to abide by the Cyber Say Contest Terms and the Terms, as well as any other rules established by the Company.</li>
</ol>
<p><br></p>
<ol>
    <li>The Contest will be governed by the laws of the Republic of Cyprus and entrants to the Contest submit to the exclusive jurisdiction of the courts of the Republic of Cyprus.</li>
</ol>
<p>&nbsp;&nbsp;</p>
<ol>
    <li>In case of a conflict between these Cyber Says Contest Terms or the Terms, these Cyber Says Contest Terms shall prevail.</li>
</ol>
<p><br></p>
<p>CAUTION: ANY ATTEMPT TO DELIBERATELY DAMAGE COMPANY&apos;S SERVICES OR UNDERMINE THE LEGITIMATE OPERATION OF THE CONTEST OFFERED BY COMPANY IS A VIOLATION OF CRIMINAL AND CIVIL LAWS. SHOULD SUCH AN ATTEMPT BE MADE, COMPANY RESERVES THE RIGHT TO SEEK DAMAGES FROM ANY SUCH INDIVIDUAL TO THE FULLEST EXTENT PERMITTED BY LAW.</p>
<p><br></p>
<p>For information, support or questions, please contact us at <a href="mailto:dailycontest@cybersays.club">dailycontest@cybersays.club</a></p>
<p><br></p>`
let es_text = ``
let pt_text = `<p style="text-align:center;font-size:16pt!important;" class="p1">
<span class="s1"
  ><strong
    >CyberSays.Club - Termos da Competi&ccedil;&atilde;o
    Di&aacute;ria</strong
  ></span
>
</p>
<p class="p2">
<span class="Apple-converted-space">&nbsp;&nbsp; &nbsp; </span
>&Uacute;ltima modifica&ccedil;&atilde;o:
<span class="s1">Fevereiro de 2024</span>
</p>
<p class="p3">&nbsp;</p>
<p class="p4">
A seguir est&atilde;o os termos e condi&ccedil;&otilde;es da
competi&ccedil;&atilde;o di&aacute;ria da Empresa ("<strong
  >Cyber Says</strong
>" e "<strong>Termos da competi&ccedil;&atilde;o Cyber Says</strong>";
"<strong>Competi&ccedil;&atilde;o</strong>"), que &eacute; patrocinado
pela Pythia Grant Ltd. ("<strong>Empresa</strong>",
"<strong>n&oacute;s"</strong>, "<strong>n&oacute;s</strong>" ou
"<strong>nosso</strong>"). A participa&ccedil;&atilde;o na
<strong>Competi&ccedil;&atilde;o</strong> estar&aacute; sujeita &agrave;s
disposi&ccedil;&otilde;es abaixo e aos Termos e Condi&ccedil;&otilde;es da
Empresa, aos Termos e condi&ccedil;&otilde;es da ImLive.com (coletivamente
"<strong>Termos</strong>") e &agrave; Pol&iacute;tica de privacidade
("<strong>Pol&iacute;tica de privacidade</strong>").
</p>
<p class="p4">
Os termos em mai&uacute;sculas usados, mas n&atilde;o definidos neste
documento, ter&atilde;o o significado dado a eles nos Termos.
</p>
<p class="p5">&nbsp;</p>
<p class="p4">
<span class="s1"><strong>Geral</strong></span>
</p>
<ol class="ol1">
<li class="li6">
  A Competi&ccedil;&atilde;o Cyber Says &eacute; uma
  Competi&ccedil;&atilde;o di&aacute;ria programado para come&ccedil;ar em
  <span class="s1">29 de fevereiro de 2024</span>, at&eacute;
  <span class="s1">2 de julho de 2024</span>, e ser&aacute; realizado
  diariamente e continuar&aacute; enquanto for apresentado no local (o
  "<strong>Per&iacute;odo do Competi&ccedil;&atilde;o</strong>").
</li>
</ol>
<p class="p7">&nbsp;</p>
<ol class="ol1">
<li class="li6">
  Voc&ecirc; concorda que, para participar da Competi&ccedil;&atilde;o
  Cyber Says (inclusive, sem limita&ccedil;&atilde;o, para ganhar qualquer
  pr&ecirc;mio), voc&ecirc; cumprir&aacute; integralmente todas as leis,
  regulamentos, estatutos, decretos e disposi&ccedil;&otilde;es
  aplic&aacute;veis a voc&ecirc; e a n&oacute;s, inclusive, sem
  limita&ccedil;&atilde;o, estes Termos da Competi&ccedil;&atilde;o Cyber
  Says e os Termos.
</li>
</ol>
<p class="p7">&nbsp;</p>
<p class="p4">
<span class="s1"
  ><strong
    >Elegibilidade para participar do Competi&ccedil;&atilde;o</strong
  ></span
>
</p>
<ol class="ol1">
<li class="li6">
  Para ser eleg&iacute;vel para participar da Competi&ccedil;&atilde;o
  Cyber Says, voc&ecirc; declara e garante que:
</li>
</ol>
<ul class="ul1">
<li class="li6">
  criou uma conta nova e leg&iacute;tima registrada em Cybersays.club;
</li>
<li class="li6">
  tenha pelo menos dezoito (18) anos de idade (a menos que a idade de
  maioridade aplic&aacute;vel em seu estado de resid&ecirc;ncia no momento
  da inscri&ccedil;&atilde;o seja maior) ou mais;
</li>
<li class="li6">
  s&atilde;o eleg&iacute;veis, de acordo com as leis e regulamentos
  aplic&aacute;veis, para participar da Competi&ccedil;&atilde;o Cyber
  Says;
</li>
<li class="li6">
  tem pleno direito e autoridade para participar do
  Competi&ccedil;&atilde;o Cyber Says; (coletivamente denominados "<strong
    >Usu&aacute;rios eleg&iacute;veis</strong
  >").
</li>
</ul>
<p class="p8">&nbsp;</p>
<p class="p6">
"<strong>Oferta on-line</strong>" significa a conclus&atilde;o de todas as
etapas a seguir
</p>
<ul class="ul1">
<li class="li6">Criar uma conta nova e leg&iacute;tima na ImLive.com</li>
<li class="li6">
  Fazer uma compra m&iacute;nima de cinco (5) cr&eacute;ditos no site
  <a href="http://www.ImLive.com"
    ><span class="s3">www.ImLive.com</span></a
  >
  - voc&ecirc; reconhece que, ao fazer uma compra m&iacute;nima de cinco
  cr&eacute;ditos no site
  <a href="http://www.ImLive.com"
    ><span class="s3">www.ImLive.com</span></a
  >, voc&ecirc; receber&aacute; automaticamente um b&ocirc;nus adicional
  &uacute;nico de cinco cr&eacute;ditos;
</li>
<li class="li6">
  Gaste todos os dez (10) cr&eacute;ditos que voc&ecirc; recebeu na
  <a href="http://www.ImLive.com"
    ><span class="s3">www.ImLive.com</span></a
  >
  .
</li>
</ul>
<p class="p8">&nbsp;</p>
<p class="p6">
Como parte desta Competi&ccedil;&atilde;o, voc&ecirc; reconhece que (i)
qualquer b&ocirc;nus de cr&eacute;dito recebido na ImLive.com como parte
deste Competi&ccedil;&atilde;o n&atilde;o &eacute;
resgat&aacute;vel<strong
  >, n&atilde;o &eacute; reembols&aacute;vel, n&atilde;o &eacute;
  transfer&iacute;vel e n&atilde;o pode ser trocado</strong
>; (ii) esses b&ocirc;nus de cr&eacute;dito devem ser usados
<strong>somente </strong>na ImLive.com; (iii) esses b&ocirc;nus de
cr&eacute;dito n&atilde;o t&ecirc;m nenhum valor pecuni&aacute;rio ou
qualquer tipo de valor fora da ImLive.com; (iv) voc&ecirc; &eacute; o
&uacute;nico respons&aacute;vel pelo uso dos servi&ccedil;os da ImLive.com
e pelo uso de tais cr&eacute;ditos; e (v) voc&ecirc; leu os
<span class="s1"
  ><em>os Termos e Condi&ccedil;&otilde;es da ImLive.com</em></span
>
antes de usar os servi&ccedil;os do www.ImLive.com ou de usar qualquer um
dos b&ocirc;nus de cr&eacute;dito em seus servi&ccedil;os.
</p>
<p class="p9">&nbsp;</p>
<ol class="ol1">
<li class="li6">
  Como parte deste Competi&ccedil;&atilde;o, voc&ecirc; reconhece que a
  Empresa pode, a seu crit&eacute;rio exclusivo, recusar ou desqualificar
  a sua participa&ccedil;&atilde;o no Competi&ccedil;&atilde;o se alguma
  das informa&ccedil;&otilde;es fornecidas durante o registro ou, quando
  aplic&aacute;vel, ao concluir a Oferta on-line estiver (i) ausente,
  imprecisa e/ou desatualizada; (ii) parecer ser falsa, fraudulenta; ou
  (iii) violar os Termos da Competi&ccedil;&atilde;o Cyber Says, os Termos
  ou quaisquer leis ou regulamentos aplic&aacute;veis.
</li>
</ol>
<p class="p9">&nbsp;</p>
<ol class="ol1">
<li class="li6">
  Voc&ecirc; n&atilde;o poder&aacute; usar v&aacute;rios endere&ccedil;os
  de e-mail, contas e/ou identidades ou qualquer outro m&eacute;todo para
  participar da Competi&ccedil;&atilde;o Cyber Says mais de uma vez.
  Voc&ecirc; n&atilde;o pode se registrar em nome de outra pessoa.
</li>
</ol>
<p class="p7">&nbsp;</p>
<ol class="ol1">
<li class="li6">
  O uso de m&eacute;todos rob&oacute;ticos, mec&acirc;nicos ou outras
  formas de inscri&ccedil;&atilde;o pr&eacute;-programada &eacute;
  estritamente proibido. Os participantes n&atilde;o podem usar tais
  ferramentas de manipula&ccedil;&atilde;o e a Empresa se reserva o
  direito (a seu crit&eacute;rio exclusivo) de implementar, de tempos em
  tempos, processos de inscri&ccedil;&atilde;o que possam frustrar ou
  proibir tal inscri&ccedil;&atilde;o automatizada; desde que, no entanto,
  nenhum participante de qualquer Competi&ccedil;&atilde;o possa se basear
  ou insistir na falha ou recusa da Empresa em tomar qualquer uma das
  medidas acima ou determinar, a seu crit&eacute;rio exclusivo, que a
  inscri&ccedil;&atilde;o de um participante deva ser descontada porque a
  inscri&ccedil;&atilde;o de outro participante foi ou vice-versa.
  Qualquer uso de sistema automatizado ou qualquer m&eacute;todo
  semelhante para participar de qualquer Competi&ccedil;&atilde;o &eacute;
  estritamente proibido e pode resultar em sua
  desqualifica&ccedil;&atilde;o do Competi&ccedil;&atilde;o e/ou do uso
  futuro dos Servi&ccedil;os. A pessoa a quem o endere&ccedil;o de e-mail
  foi atribu&iacute;do pelo operador aplic&aacute;vel ser&aacute;
  considerada a propriet&aacute;ria de tal endere&ccedil;o de e-mail.
</li>
</ol>
<p class="p7">&nbsp;</p>
<ol class="ol1">
<li class="li6">
  A Empresa se reserva o direito de limitar a Competi&ccedil;&atilde;o aos
  participantes localizados em uma jurisdi&ccedil;&atilde;o
  espec&iacute;fica, caso em que somente os usu&aacute;rios residentes em
  tal jurisdi&ccedil;&atilde;o no momento da inscri&ccedil;&atilde;o podem
  n&atilde;o ser eleg&iacute;veis para participar do
  Competi&ccedil;&atilde;o.
</li>
</ol>
<p class="p7">&nbsp;</p>
<ol class="ol1">
<li class="li6">
  A participa&ccedil;&atilde;o na Competi&ccedil;&atilde;o n&atilde;o
  est&aacute; dispon&iacute;vel para usu&aacute;rios (nacionais e
  residentes) de Israel, Chipre e Andorra.
</li>
</ol>
<p class="p7">&nbsp;</p>
<ol class="ol1">
<li class="li6">
  Os funcion&aacute;rios da Empresa (incluindo, sem
  limita&ccedil;&atilde;o, funcion&aacute;rios tempor&aacute;rios ou de
  meio per&iacute;odo), diretores e representantes, ag&ecirc;ncias de
  promo&ccedil;&atilde;o e/ou patrocinadores diretamente envolvidos na
  administra&ccedil;&atilde;o, no desenvolvimento, no cumprimento e na
  execu&ccedil;&atilde;o de uma Competi&ccedil;&atilde;o
  espec&iacute;fico, e a fam&iacute;lia imediata e outros membros da
  fam&iacute;lia (ou seja, c&ocirc;njuges, pais, av&oacute;s, filhos,
  netos, colegas de quarto, colegas de casa, outras pessoas
  significativas, parceiros e irm&atilde;os) de qualquer um dos itens
  acima n&atilde;o s&atilde;o eleg&iacute;veis para participar e/ou ganhar
  uma Competi&ccedil;&atilde;o.
</li>
</ol>
<p class="p7">&nbsp;</p>
<ol class="ol1">
<li class="li6">
  Observe que o uso dos Servi&ccedil;os, que podem ser baixados
  gratuitamente, requer uma conex&atilde;o com a Internet e um dispositivo
  compat&iacute;vel. Voc&ecirc; deve participar da
  Competi&ccedil;&atilde;o durante o Per&iacute;odo do
  Competi&ccedil;&atilde;o relevante para se qualificar para ganhar o(s)
  pr&ecirc;mio(s) aplic&aacute;vel(is).
</li>
</ol>
<p class="p9">&nbsp;</p>
<ol class="ol1">
<li class="li6">
  Poder&aacute; ser solicitado a qualquer momento que voc&ecirc;
  forne&ccedil;a a n&oacute;s ou a terceiros designados um comprovante de
  sua idade e/ou identidade e/ou resid&ecirc;ncia e voc&ecirc;
  dever&aacute;, quando solicitado, apresentar uma
  documenta&ccedil;&atilde;o v&aacute;lida que nos permita verificar a sua
  resid&ecirc;ncia e/ou identidade para a satisfa&ccedil;&atilde;o
  razo&aacute;vel de nossa equipe. Se voc&ecirc; n&atilde;o puder fornecer
  documentos satisfat&oacute;rios, poderemos exclu&iacute;-lo da
  Competi&ccedil;&atilde;o Cyber Says e voc&ecirc; poder&aacute; perder
  quaisquer privil&eacute;gios ou pr&ecirc;mios que lhe tenham sido
  atribu&iacute;dos sem qualquer tipo de compensa&ccedil;&atilde;o. Por
  meio deste documento, voc&ecirc; renuncia irrevogavelmente a quaisquer
  reivindica&ccedil;&otilde;es ou direitos relacionados a essa
  exclus&atilde;o e/ou perda.
</li>
</ol>
<p class="p7">&nbsp;</p>
<p class="p4">
<span class="s1"
  ><strong
    >Elegibilidade para receber os pontos virtuais do
    Competi&ccedil;&atilde;o e sele&ccedil;&atilde;o dos
    vencedores</strong
  ></span
>
</p>
<ol class="ol1">
<li class="li6">
  O Competi&ccedil;&atilde;o Cyber Says consiste em uma
  competi&ccedil;&atilde;o di&aacute;ria, cujos vencedores ter&atilde;o
  direito a ganhar os Pr&ecirc;mios (conforme detalhado abaixo).
</li>
</ol>
<p class="p7">&nbsp;</p>
<ol class="ol1">
<li class="li6">
  Os Usu&aacute;rios Eleg&iacute;veis t&ecirc;m o direito de ganhar pontos
  virtuais de uma das seguintes maneiras
</li>
<ol class="ol2">
  <li class="li6">
    <strong>10 </strong>pontos virtuais para cada amigo que voc&ecirc;
    indicar para nossos Servi&ccedil;os e que seja considerado
    Usu&aacute;rio Eleg&iacute;vel
    <span class="s1"><strong>e</strong></span
    ><strong> </strong>que tenha conclu&iacute;do com &ecirc;xito a Oferta
    Online;
  </li>
  <li class="li6">
    <strong>0,5 </strong>ponto virtual para cada cr&eacute;dito real
    comprado na ImLive.com, a partir da segunda compra (ou seja, os 11
    cr&eacute;ditos ou mais). Ou seja, nenhum ponto virtual ser&aacute;
    dado para os primeiros 5 cr&eacute;ditos a serem comprados.
  </li>
</ol>
</ol>
<p class="p7">&nbsp;</p>
<ol class="ol1">
<li class="li6">
  Voc&ecirc; entende e reconhece que n&atilde;o h&aacute; limite para o
  n&uacute;mero de cr&eacute;ditos que voc&ecirc; pode comprar e,
  portanto, para o n&uacute;mero de pontos virtuais que voc&ecirc; pode se
  qualificar para receber.
</li>
</ol>
<p class="p9">&nbsp;</p>
<ol class="ol1">
<li class="li6">
  Voc&ecirc; reconhece que a obten&ccedil;&atilde;o de pontos virtuais
  est&aacute; sujeita &agrave; sua total conformidade com estes Termos do
  Competi&ccedil;&atilde;o Cyber Says e com os Termos. Qualquer
  participante poder&aacute; ser desEleg&iacute;vel ou anulado, a nosso
  crit&eacute;rio exclusivo, se a Empresa considerar que tal participante
  n&atilde;o est&aacute; em conformidade com os Termos do
  Competi&ccedil;&atilde;o Cyber Says ou com os Termos.
</li>
</ol>
<p class="p7">&nbsp;</p>
<ol class="ol1">
<li class="li6">
  O vencedor di&aacute;rio da Competi&ccedil;&atilde;o ser&aacute; o
  participante que tiver ganho e acumulado o maior n&uacute;mero de pontos
  virtuais ao final de cada dia.
</li>
</ol>
<p class="p7"><span class="Apple-converted-space">&nbsp;&nbsp;</span></p>
<ol class="ol1">
<li class="li6">
  Nenhuma outra forma ou m&eacute;todo de envio de uma
  inscri&ccedil;&atilde;o ser&aacute; considerado, a menos que
  estabelecido de outra forma na descri&ccedil;&atilde;o da
  Competi&ccedil;&atilde;o Cyber Says.
</li>
</ol>
<p class="p7">&nbsp;</p>
<ol class="ol1">
<li class="li6">
  Como parte desta Competi&ccedil;&atilde;o, voc&ecirc; reconhece que (i)
  quaisquer pontos virtuais recebidos como parte deste
  Competi&ccedil;&atilde;o
  <strong
    >n&atilde;o s&atilde;o resgat&aacute;veis, n&atilde;o s&atilde;o
    reembols&aacute;veis, n&atilde;o s&atilde;o transfer&iacute;veis e
    n&atilde;o podem ser trocados</strong
  >; (ii) esses pontos virtuais destinam-se a fornecer a sua
  pontua&ccedil;&atilde;o na Competi&ccedil;&atilde;o e n&atilde;o podem
  ser usados fora desta Competi&ccedil;&atilde;o ou para qualquer outra
  finalidade; (iii) esses pontos virtuais n&atilde;o t&ecirc;m nenhum
  valor pecuni&aacute;rio ou qualquer tipo de valor dentro ou fora da
  Competi&ccedil;&atilde;o, exceto conforme explicitamente declarado no
  par&aacute;grafo deste documento; (iv) voc&ecirc; &eacute; o
  &uacute;nico respons&aacute;vel pelo uso dos nossos Servi&ccedil;os.
</li>
</ol>
<p class="p7">&nbsp;</p>
<ol class="ol1">
<li class="li6">
  O n&uacute;mero de pontos virtuais ser&aacute; resetado no final de cada
  dia.
</li>
</ol>
<p class="p7">&nbsp;</p>
<ol class="ol1">
<li class="li6">
  O vencedor di&aacute;rio ser&aacute; anunciado no local, no final de
  cada dia.<span class="Apple-converted-space">&nbsp; &nbsp;</span>
</li>
</ol>
<p class="p7">&nbsp;</p>
<ol class="ol1">
<li class="li6">
  A escolha dos vencedores &eacute; final e vinculativa, salvo
  indica&ccedil;&atilde;o em contr&aacute;rio nestes Termos da
  Competi&ccedil;&atilde;o Cyber Says.
</li>
</ol>
<p class="p10">&nbsp;</p>
<p class="p4">
<span class="s1"><strong>Pr&ecirc;mios</strong></span>
</p>
<ol class="ol1">
<li class="li6">
  O pr&ecirc;mio ser&aacute; concedido apenas a dez ganhadores
  di&aacute;rios -
</li>
<ol class="ol2">
  <li class="li6">
    Para o 1&ordm; lugar e 2&ordm; lugar o vencedor ter&aacute; direito a
    receber - sessenta e nove d&oacute;lares americanos ($69USD);
  </li>
  <li class="li6">
    Para o 3&ordm; lugar at&eacute; o 10&ordm; lugar - o vencedor
    ter&aacute; direito a receber &ndash; US$6,90 &ndash; seis
    d&oacute;lares e noventa centavos
  </li>
</ol>
</ol>
<p class="p9">&nbsp;</p>
<ol class="ol1">
<li class="li6">
  Os pr&ecirc;mios s&atilde;o intransfer&iacute;veis e n&atilde;o podem
  ser trocados.&nbsp;
</li>
</ol>
<p class="p7">&nbsp;</p>
<ol class="ol1">
<li class="li6">No caso de -</li>
<ol class="ol2">
  <li class="li6">
    dois ou mais Usu&aacute;rios Eleg&iacute;veis atingirem a mesma
    quantidade de pontos virtuais di&aacute;rias, ser&aacute; escolhido o
    Usu&aacute;rio Eleg&iacute;vel com o maior n&uacute;mero de Amigos
    Indicados.
  </li>
  <li class="li6">
    dois ou mais Usu&aacute;rios Eleg&iacute;veis tiverem o mesmo
    n&uacute;mero de Amigos Indicados, ser&aacute; escolhido o
    Usu&aacute;rio Eleg&iacute;vel que tiver comprado o maior
    n&uacute;mero de cr&eacute;ditos na ImLive.com.
  </li>
  <li class="li6">
    dois ou mais Usu&aacute;rios Eleg&iacute;veis tiverem a mesma
    quantidade de cr&eacute;ditos na ImLive.com, ser&aacute; escolhido o
    Usu&aacute;rio Eleg&iacute;vel que tiver conclu&iacute;do a Oferta
    Online primeiro.
  </li>
</ol>
</ol>
<p class="p7">&nbsp;</p>
<ol class="ol1">
<li class="li6">
  Os vencedores do Competi&ccedil;&atilde;o Cyber Says s&atilde;o os
  &uacute;nicos respons&aacute;veis por declarar e pagar todos e quaisquer
  impostos aplic&aacute;veis relacionados aos Pr&ecirc;mios e pagar
  quaisquer despesas associadas a eles que n&atilde;o estejam
  especificamente previstas nos Termos do Competi&ccedil;&atilde;o Cyber
  Says.
</li>
</ol>
<p class="p7">&nbsp;</p>
<ol class="ol1">
<li class="li6">
  Ao participar da Competi&ccedil;&atilde;o Cyber Says, voc&ecirc; permite
  que a Empresa entre em contato com voc&ecirc;, para fins de
  administra&ccedil;&atilde;o da Competi&ccedil;&atilde;o Cyber Says e
  concess&atilde;o de Pr&ecirc;mios.
</li>
</ol>
<p class="p7">&nbsp;</p>
<ol class="ol1">
<li class="li6">
  Faremos tr&ecirc;s tentativas de contato com o poss&iacute;vel vencedor
  dentro de 72 (setenta e duas) horas. Se n&atilde;o conseguirmos entrar
  em contato com o poss&iacute;vel vencedor dentro desse prazo
  especificado ou se ele for desqualificado ou n&atilde;o cumprir estes
  Termos ou Termos da Competi&ccedil;&atilde;o Cyber Says, a Empresa
  poder&aacute; confiscar o Pr&ecirc;mio e potencialmente conced&ecirc;-lo
  a outro vencedor.
</li>
</ol>
<p class="p7">&nbsp;</p>
<ol class="ol1">
<li class="li6">
  &Eacute; de sua exclusiva responsabilidade notificar-nos por escrito
  caso tenha alterado seu endere&ccedil;o de e-mail durante o
  Per&iacute;odo da Competi&ccedil;&atilde;o.
</li>
</ol>
<p class="p7">&nbsp;</p>
<ol class="ol1">
<li class="li6">
  Nossas decis&otilde;es relativas &agrave; administra&ccedil;&atilde;o e
  opera&ccedil;&atilde;o de qualquer Competi&ccedil;&atilde;o, incluindo,
  sem limita&ccedil;&atilde;o, a sele&ccedil;&atilde;o de poss&iacute;veis
  vencedores, s&atilde;o finais e definitivas em todos os assuntos
  relacionados ao Competi&ccedil;&atilde;o.
</li>
</ol>
<p class="p9">&nbsp;</p>
<ol class="ol1">
<li class="li6">
  Voc&ecirc; n&atilde;o tem permiss&atilde;o para transferir ou substituir
  qualquer Pr&ecirc;mio recebido pela participa&ccedil;&atilde;o em uma
  Competi&ccedil;&atilde;o. Todos os pr&ecirc;mios aqui descritos
  s&atilde;o oferecidos "no estado em que se encontram", sem garantia
  expressa ou impl&iacute;cita.
</li>
</ol>
<p class="p9">&nbsp;</p>
<ol class="ol1">
<li class="li6">
  Os pr&ecirc;mios ser&atilde;o entregues aos vencedores e estar&atilde;o
  dispon&iacute;veis para retirada no prazo de 2 dias &uacute;teis a
  partir do recebimento pela Empresa dos dados completos do vencedor
  (conforme necess&aacute;rio para fornecer o Pr&ecirc;mio), a menos que a
  Empresa, a seu crit&eacute;rio exclusivo, tenha qualquer motivo para
  acreditar que o vencedor n&atilde;o seja eleg&iacute;vel para participar
  do Competi&ccedil;&atilde;o Cyber Says ou para receber os Pr&ecirc;mios.
</li>
</ol>
<p class="p7">&nbsp;</p>
<ol class="ol1">
<li class="li6">
  Os pr&ecirc;mios ser&atilde;o concedidos aos vencedores por meio de seus
  fornecedores terceirizados da Cyber Says, conforme detalhado nos Termos
  e Condi&ccedil;&otilde;es da Cyber Says.
</li>
</ol>
<p class="p7">&nbsp;</p>
<ol class="ol1">
<li class="li6">
  Nenhum Pr&ecirc;mio ser&aacute; concedido a qualquer participante que
  n&atilde;o seja eleg&iacute;vel para participar do
  Competi&ccedil;&atilde;o ou que n&atilde;o cumpra os Termos do
  Competi&ccedil;&atilde;o Cyber Says, os Termos ou quaisquer outras
  regras de participa&ccedil;&atilde;o na Competi&ccedil;&atilde;o.
</li>
</ol>
<p class="p7">&nbsp;</p>
<ol class="ol1">
<li class="li6">
  Se qualquer vencedor em potencial for obrigado por qualquer lei
  aplic&aacute;vel, pelos Termos do Competi&ccedil;&atilde;o Cyber Says,
  pelos Termos a cumprir condi&ccedil;&otilde;es ou requisitos adicionais
  para participar da Competi&ccedil;&atilde;o e receber o Pr&ecirc;mio,
  esse vencedor em potencial dever&aacute; cumprir totalmente esses
  requisitos dentro do prazo estabelecido por n&oacute;s antes e como
  condi&ccedil;&atilde;o para receber o Pr&ecirc;mio. Se um
  poss&iacute;vel vencedor n&atilde;o for eleg&iacute;vel por qualquer
  motivo, poderemos conceder o pr&ecirc;mio aplic&aacute;vel a um vencedor
  alternativo dentre os participantes eleg&iacute;veis restantes, a nosso
  exclusivo crit&eacute;rio.
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
  Competi&ccedil;&atilde;o Cyber Says n&atilde;o est&atilde;o
  dispon&iacute;veis para pessoas menores de idade na sua respectiva
  jurisdi&ccedil;&atilde;o.
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
  Ao participar deste Competi&ccedil;&atilde;o, voc&ecirc; concorda em
  liberar, indenizar e isentar de responsabilidade a Empresa e suas
  respectivas controladoras, subsidi&aacute;rias, afiliadas,
  distribuidores, fornecedores e organiza&ccedil;&otilde;es de
  publicidade, promo&ccedil;&atilde;o e julgamento e cada um de seus
  respectivos funcion&aacute;rios, executivos, diretores, acionistas e
  agentes (coletivamente, os "<strong>Liberadores</strong>") de e contra
  todas e quaisquer reivindica&ccedil;&otilde;es, a&ccedil;&otilde;es,
  danos, perdas, custos, despesas (incluindo honor&aacute;rios
  advocat&iacute;cios razo&aacute;veis), les&otilde;es ou causas de
  a&ccedil;&atilde;o de qualquer tipo que, de alguma forma, agora ou daqui
  em diante, possam surgir ou se relacionar com o
  Competi&ccedil;&atilde;o, incluindo, sem limita&ccedil;&atilde;o (i) a
  administra&ccedil;&atilde;o da Competi&ccedil;&atilde;o, como erros
  tipogr&aacute;ficos, de impress&atilde;o, de semeadura, humanos ou
  outros erros relacionados ou em conex&atilde;o com o
  Competi&ccedil;&atilde;o, ao processamento das inscri&ccedil;&otilde;es,
  ao an&uacute;ncio do Pr&ecirc;mio ou a qualquer material relacionado,
  inscri&ccedil;&otilde;es imprecisas, fraudulentas, incompletas,
  ileg&iacute;veis, atrasadas, perdidas, roubadas, mal direcionadas,
  n&atilde;o entregues, incompletas ou danificadas, quaisquer atrasos na
  entrega ou falta de disponibilidade do Pr&ecirc;mio ou dos materiais do
  Pr&ecirc;mio; (ii) A sua participa&ccedil;&atilde;o na
  Competi&ccedil;&atilde;o oferecida pelos Liberadores ou a sua
  aceita&ccedil;&atilde;o ou uso de uma Competi&ccedil;&atilde;o, ou a sua
  participa&ccedil;&atilde;o em qualquer atividade relacionada ao
  Pr&ecirc;mio, incluindo, sem limita&ccedil;&atilde;o, qualquer atividade
  relacionada a ele, e morte e les&atilde;o corporal (incluindo
  ang&uacute;stia emocional), devido, no todo ou em parte, direta ou
  indiretamente, &agrave; participa&ccedil;&atilde;o no
  Competi&ccedil;&atilde;o ou em qualquer atividade relacionada a
  Competi&ccedil;&atilde;o e por quaisquer reivindica&ccedil;&otilde;es ou
  causas de a&ccedil;&atilde;o baseadas em direitos de publicidade,
  difama&ccedil;&atilde;o ou invas&atilde;o de privacidade; (iii) qualquer
  ato ou omiss&atilde;o, seja negligente, intencional ou de outra forma,
  causado pelos Liberadores e/ou por qualquer Competi&ccedil;&atilde;o;
  (iv) a participa&ccedil;&atilde;o de qualquer outro usu&aacute;rio na
  Competi&ccedil;&atilde;o.
</li>
</ol>
<p class="p9">&nbsp;</p>
<ol class="ol1">
<li class="li6">
  Voc&ecirc; concorda que os Liberadores n&atilde;o s&atilde;o
  respons&aacute;veis por informa&ccedil;&otilde;es incorretas ou
  imprecisas, sejam elas causadas pelos Servi&ccedil;os, por outros
  usu&aacute;rios ou por qualquer equipamento ou programa&ccedil;&atilde;o
  associados ou utilizados na Competi&ccedil;&atilde;o e que os
  Liberadores n&atilde;o assumem nenhuma responsabilidade por (i) qualquer
  les&atilde;o ou danos a pessoas ou propriedades que possam ser causados,
  direta ou indiretamente, no todo ou em parte, pela
  participa&ccedil;&atilde;o de um usu&aacute;rio em uma
  Competi&ccedil;&atilde;o ou pelo recebimento, uso ou mau uso de qualquer
  Pr&ecirc;mio; (ii) qualquer erro, omiss&atilde;o,
  interrup&ccedil;&atilde;o, exclus&atilde;o, defeito ou atraso na
  opera&ccedil;&atilde;o ou transmiss&atilde;o nos Servi&ccedil;os; (iii)
  qualquer mau funcionamento ou falha de computador, telefone, cabo,
  sat&eacute;lite, rede, hardware ou software eletr&ocirc;nico ou de
  Internet, problemas com conex&otilde;es ou disponibilidade; (iv)
  transmiss&otilde;es distorcidas ou confusas, provedor de
  servi&ccedil;os/internet/site da Web/acessibilidade ou disponibilidade
  de rede de uso; (v) congestionamento de tr&aacute;fego; (vi)
  interven&ccedil;&atilde;o humana n&atilde;o autorizada; ou (vii) roubo
  ou destrui&ccedil;&atilde;o, adultera&ccedil;&atilde;o ou acesso
  n&atilde;o autorizado a inscri&ccedil;&otilde;es e/ou
  informa&ccedil;&otilde;es de inscri&ccedil;&atilde;o. Se, por qualquer
  motivo, a Competi&ccedil;&atilde;o n&atilde;o puder ser executado
  conforme planejado devido a infec&ccedil;&atilde;o por v&iacute;rus de
  computador, interven&ccedil;&atilde;o n&atilde;o autorizada, fraude,
  adultera&ccedil;&atilde;o, falhas t&eacute;cnicas ou quaisquer outras
  causas al&eacute;m do controle dos Fornecedores e que, na opini&atilde;o
  exclusiva dos Fornecedores, corrompam ou afetem a
  administra&ccedil;&atilde;o, se, na opini&atilde;o exclusiva dos
  Liberadores, corromperem ou afetarem a administra&ccedil;&atilde;o, a
  seguran&ccedil;a, a justi&ccedil;a, a integridade ou a
  condu&ccedil;&atilde;o adequada da Competi&ccedil;&atilde;o, os
  Liberadores se reservam o direito, a seu crit&eacute;rio exclusivo, de
  cancelar, encerrar, modificar ou suspender tal Competi&ccedil;&atilde;o
  e a Empresa selecionar&aacute; o(s) vencedor(es) entre todas as
  inscri&ccedil;&otilde;es eleg&iacute;veis recebidas para tal
  Competi&ccedil;&atilde;o antes da a&ccedil;&atilde;o tomada.
</li>
</ol>
<p class="p7">&nbsp;</p>
<ol class="ol1">
<li class="li6">
  Em nenhuma circunst&acirc;ncia os Liberadores ser&atilde;o
  respons&aacute;veis por quaisquer danos ou perdas de qualquer tipo,
  incluindo danos indiretos, incidentais, consequenciais ou punitivos,
  al&eacute;m das suas despesas reais decorrentes da sua
  participa&ccedil;&atilde;o em um Competi&ccedil;&atilde;o. Sem limitar o
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
  aplicar a voc&ecirc;. Nesses casos, nossa responsabilidade ser&aacute;
  limitada &agrave; extens&atilde;o m&aacute;xima permitida pela lei
  aplic&aacute;vel.
</li>
</ol>
<p class="p5">&nbsp;</p>
<p class="p4">
<span class="s1"><strong>Termos gerais adicionais</strong></span>
</p>
<ol class="ol1">
<li class="li6">
  Todas as solicita&ccedil;&otilde;es de participa&ccedil;&atilde;o em uma
  Competi&ccedil;&atilde;o se tornar&atilde;o propriedade exclusiva da
  Empresa e n&atilde;o ser&atilde;o reconhecidas e/ou devolvidas. As
  inscri&ccedil;&otilde;es recebidas de participantes n&atilde;o
  eleg&iacute;veis e/ou que n&atilde;o estejam em conformidade com os
  Termos do Competi&ccedil;&atilde;o Cyber Says ou com os Termos
  ser&atilde;o consideradas nulas. As inscri&ccedil;&otilde;es que forem
  consideradas fraudulentas ser&atilde;o consideradas nulas, e a pessoa
  que fizer tal inscri&ccedil;&atilde;o poder&aacute; ser impedida de
  participar da Competi&ccedil;&atilde;o e, a crit&eacute;rio exclusivo da
  Empresa, caso a caso, banida de qualquer participa&ccedil;&atilde;o
  futura em qualquer Competi&ccedil;&atilde;o e/ou servi&ccedil;os futuros
  da Empresa. Por meio deste instrumento, voc&ecirc; concorda que, em
  nenhuma hip&oacute;tese, ter&aacute; qualquer
  reivindica&ccedil;&atilde;o contra n&oacute;s por quaisquer
  solicita&ccedil;&otilde;es que n&atilde;o tenham sido recebidas ou
  reconhecidas por n&oacute;s, por qualquer motivo, ou que tenham sido
  recebidas antes ou depois do Per&iacute;odo da Competi&ccedil;&atilde;o.
</li>
</ol>
<p class="p7">&nbsp;</p>
<ol class="ol1">
<li class="li6">
  A Empresa poder&aacute; cancelar, modificar, alterar, mudar ou suspender
  a Competi&ccedil;&atilde;o Cyber Says e qualquer um dos Pr&ecirc;mios ou
  benef&iacute;cios oferecidos, incluindo, sem limita&ccedil;&atilde;o,
  quando necess&aacute;rio por motivos de seguran&ccedil;a ou qualquer
  outro motivo, a seu crit&eacute;rio exclusivo, para cumprir a lei ou o
  regulamento aplic&aacute;vel, devido a abuso ou de outra forma devido a
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
  Competi&ccedil;&atilde;o ser encerrado, cancelado ou adiado por qualquer
  motivo, o(s) Pr&ecirc;mio(s) real(is) ser&aacute;(&atilde;o)
  concedido(s) somente na medida exigida por lei.
</li>
</ol>
<p class="p11">&nbsp;</p>
<ol class="ol1">
<li class="li6">
  A Empresa se reserva o direito de alterar os Pr&ecirc;mios e os termos
  desta Competi&ccedil;&atilde;o Cyber Says a qualquer momento e sem aviso
  pr&eacute;vio. Voc&ecirc; reconhece que ser&aacute; respons&aacute;vel
  por manter-se atualizado sobre toda e qualquer altera&ccedil;&atilde;o
  feita na Competi&ccedil;&atilde;o. No caso de modifica&ccedil;&atilde;o
  da Competi&ccedil;&atilde;o, sua participa&ccedil;&atilde;o
  cont&iacute;nua na Competi&ccedil;&atilde;o constitui
  aceita&ccedil;&atilde;o dos termos e condi&ccedil;&otilde;es modificados
  de tal Competi&ccedil;&atilde;o.
</li>
</ol>
<p class="p7">&nbsp;</p>
<ol class="ol1">
<li class="li6">
  &nbsp;Se tomarmos conhecimento de qualquer fraude, engano, m&aacute;
  conduta (por exemplo linguagem forte, insultos, amea&ccedil;as),
  desonestidade ou a&ccedil;&atilde;o semelhante em rela&ccedil;&atilde;o
  &agrave; sua participa&ccedil;&atilde;o na Competi&ccedil;&atilde;o
  Cyber Says, ou se voc&ecirc; agiu de forma perturbadora ou com a
  inten&ccedil;&atilde;o de perturbar ou prejudicar a
  opera&ccedil;&atilde;o leg&iacute;tima da Competi&ccedil;&atilde;o Cyber
  Says, ou se voc&ecirc; violou qualquer um destes Termos da
  Competi&ccedil;&atilde;o Cyber Says, os Termos e/ou quaisquer leis
  adicionais, regulamentos e regras adicionais que se apliquem ao seu uso
  dos Servi&ccedil;os e/ou &agrave; sua participa&ccedil;&atilde;o em
  qualquer Competi&ccedil;&atilde;o Cyber Says, ent&atilde;o (i)
  reservamo-nos o direito absoluto de desqualific&aacute;-lo
  autom&aacute;tica e imediatamente ou de invalidar a sua
  participa&ccedil;&atilde;o e (ii) tamb&eacute;m nos reservamos o direito
  de buscar indeniza&ccedil;&otilde;es e outros recursos de sua parte na
  extens&atilde;o m&aacute;xima permitida por lei. Se fraude, engano,
  m&aacute; conduta, desonestidade ou outra a&ccedil;&atilde;o s&oacute;
  for descoberta depois que qualquer pr&ecirc;mio aplic&aacute;vel tiver
  sido concedido ao participante, o participante ser&aacute; obrigado,
  mediante solicita&ccedil;&atilde;o, a devolver o Pr&ecirc;mio (ou
  fornecer uma compensa&ccedil;&atilde;o equivalente) para n&oacute;s
  imediatamente ap&oacute;s o recebimento de nossa
  solicita&ccedil;&atilde;o. Sem limitar o acima exposto, a Empresa
  poder&aacute; bloquear qualquer participante que, a crit&eacute;rio
  exclusivo da Empresa, n&atilde;o seja eleg&iacute;vel, tenha
  elegibilidade question&aacute;vel ou seja, de outra forma,
  ineleg&iacute;vel para participar do Competi&ccedil;&atilde;o.
</li>
</ol>
<p class="p12">&nbsp;</p>
<ol class="ol1">
<li class="li6">
  O fato de ganhar um pr&ecirc;mio constitui seu consentimento para que a
  Empresa possa usar as seguintes informa&ccedil;&otilde;es a seu
  respeito: nome, nome de usu&aacute;rio, pa&iacute;s de resid&ecirc;ncia
  e o Pr&ecirc;mio e, por meio deste, voc&ecirc; concede a n&oacute;s e
  &agrave;s nossas afiliadas um direito e uma licen&ccedil;a
  perp&eacute;tuos, ilimitados, n&atilde;o exclusivos, mundiais,
  totalmente pagos e isentos de royalties para usar (a) seu nome e nome de
  usu&aacute;rio; (b) sua imagem, fotografia e semelhan&ccedil;a; (c) seu
  depoimento sobre a participa&ccedil;&atilde;o e/ou uso de nossos
  servi&ccedil;os ou produtos; e (d) detalhes sobre a sua vit&oacute;ria
  (coletivamente, as <strong>"Informa&ccedil;&otilde;es</strong>"), e para
  reproduzir, distribuir, exibir publicamente, executar publicamente e
  fazer trabalhos derivados, com base em tais Informa&ccedil;&otilde;es,
  em qualquer formato de m&iacute;dia, inclusive por meio de m&iacute;dia
  de transmiss&atilde;o, para fins de rela&ccedil;&otilde;es
  p&uacute;blicas, marketing e promo&ccedil;&atilde;o relacionados
  &agrave; Competi&ccedil;&atilde;o Cyber Says ou &agrave; Empresa. Todo o
  processamento de dados pessoais por n&oacute;s ser&aacute; feito de
  acordo com os termos de nossa Pol&iacute;tica de
  <span class="s1"
    ><em>Privacidade Pol&iacute;tica de privacidade.</em></span
  >
</li>
</ol>
<p class="p7">&nbsp;</p>
<ol class="ol1">
<li class="li6">
  Se voc&ecirc; ganhar um Pr&ecirc;mio, voc&ecirc; renuncia a todo e
  qualquer direito de paternidade, integridade e qualquer outro direito
  conhecido como ou referido como "direitos morais" sobre as
  Informa&ccedil;&otilde;es que voc&ecirc; possa adquirir de acordo com
  este comunicado ou por for&ccedil;a de lei. Voc&ecirc; entende que
  n&atilde;o ter&aacute; direito a nenhum pagamento ou outro
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
  inclu&iacute;dos na Competi&ccedil;&atilde;o Cyber Says ou em materiais
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
  Toda Competi&ccedil;&atilde;o estar&aacute; sujeita a todas as leis e
  regulamentos federais, estaduais e locais aplic&aacute;veis e
  ser&aacute; nula onde for proibida ou restrita por lei.
</li>
</ol>
<p class="p7">&nbsp;</p>
<ol class="ol1">
<li class="li6">
  A Empresa se reserva o direito de: (i) encerrar ou declarar qualquer
  Competi&ccedil;&atilde;o nula e sem efeito e rescindir qualquer
  pr&ecirc;mio se, a seu exclusivo crit&eacute;rio, os Termos da
  Competi&ccedil;&atilde;o Cyber Says ou a integridade da
  Competi&ccedil;&atilde;o tiverem sido violados ou comprometidos de
  qualquer forma, intencionalmente ou n&atilde;o, por qualquer pessoa,
  participante ou n&atilde;o da Competi&ccedil;&atilde;o; (ii) alterar ou
  emendar estes Termos da Competi&ccedil;&atilde;o Cyber Says a qualquer
  momento; e/ou (iii) interromper ou concluir qualquer
  Competi&ccedil;&atilde;o a qualquer momento sem aviso pr&eacute;vio.
  Altera&ccedil;&otilde;es materiais a essas regras ser&atilde;o
  publicadas nos Servi&ccedil;os, quando poss&iacute;vel.
</li>
</ol>
<p class="p7">&nbsp;</p>
<ol class="ol1">
<li class="li6">
  Este documento foi redigido no idioma ingl&ecirc;s, que &eacute; a
  vers&atilde;o original e de controle desta Pol&iacute;tica. Todas as
  tradu&ccedil;&otilde;es deste documento para outros idiomas devem ser
  feitas apenas por conveni&ecirc;ncia e n&atilde;o devem controlar o
  significado ou a aplica&ccedil;&atilde;o deste documento. No caso de
  qualquer discrep&acirc;ncia entre os significados de quaisquer
  vers&otilde;es traduzidas do documento e a vers&atilde;o em
  ingl&ecirc;s, o significado da vers&atilde;o em ingl&ecirc;s
  prevalecer&aacute;.
</li>
</ol>
<p class="p7">&nbsp;</p>
<ol class="ol1">
<li class="li6">
  A Empresa ser&aacute; o &uacute;nico &aacute;rbitro em todas as
  quest&otilde;es relacionadas a qualquer Competi&ccedil;&atilde;o e
  &agrave; interpreta&ccedil;&atilde;o destes Termos da<span
    class="Apple-converted-space"
    >&nbsp; </span
  >Competi&ccedil;&atilde;o Cyber Says e dos Termos. As decis&otilde;es da
  Empresa ser&atilde;o finais em todas as quest&otilde;es, incluindo, sem
  limita&ccedil;&atilde;o, a validade ou n&atilde;o de qualquer
  inscri&ccedil;&atilde;o enviada. A participa&ccedil;&atilde;o em
  qualquer Competi&ccedil;&atilde;o constitui a concord&acirc;ncia dos
  participantes em cumprir os Termos da Competi&ccedil;&atilde;o Cyber Say
  e os Termos, bem como quaisquer outras regras estabelecidas pela
  Empresa.
</li>
</ol>
<p class="p7">&nbsp;</p>
<ol class="ol1">
<li class="li6">
  O Competi&ccedil;&atilde;o ser&aacute; regida pelas leis da
  Rep&uacute;blica do Chipre e os participantes da
  Competi&ccedil;&atilde;o se submetem &agrave; jurisdi&ccedil;&atilde;o
  exclusiva dos tribunais da Rep&uacute;blica do Chipre.
</li>
</ol>
<p class="p7"><span class="Apple-converted-space">&nbsp;&nbsp;</span></p>
<ol class="ol1">
<li class="li6">
  Em caso de conflito entre estes Termos do Competi&ccedil;&atilde;o Cyber
  Says ou os Termos, estes Termos da Competi&ccedil;&atilde;o Cyber Says
  prevalecer&atilde;o.
</li>
</ol>
<p class="p9">&nbsp;</p>
<p class="p6">
<span class="s1">CUIDADO</span>: QUALQUER TENTATIVA DE DANIFICAR
DELIBERADAMENTE OS SERVI&Ccedil;OS DA EMPRESA OU PREJUDICAR A
OPERA&Ccedil;&Atilde;O LEG&Iacute;TIMA DA COMPETI&Ccedil;&Atilde;O
OFERECIDA PELA EMPRESA &Eacute; UMA VIOLA&Ccedil;&Atilde;O DAS LEIS
CRIMINAIS E CIVIS. CASO TAL TENTATIVA SEJA FEITA, A EMPRESA SE RESERVA O
DIREITO DE BUSCAR INDENIZA&Ccedil;&Atilde;O DE QUALQUER INDIV&Iacute;DUO
NA EXTENS&Atilde;O M&Aacute;XIMA PERMITIDA POR LEI.
</p>
<p class="p7">&nbsp;</p>
<p class="p13">
Para obter informa&ccedil;&otilde;es, suporte ou d&uacute;vidas, entre em
contato conosco pelo e-mail
<a href="mailto:dailycontest@cybersays.club"
  ><span class="s3">dailycontest@cybersays.club</span></a
>
</p>`
