import React from 'react'
import HeaderProfile from '../Components/HeaderProfile'
import LanguageSocial from '../Components/Language/LanguageSocial';
import { useLanguage } from '../Helpers/Languages/LanguageContext';

function AffiliationTerms() {
    let { language } = useLanguage()
    return (
        <div>

            <HeaderProfile />
            <div className='absolute right-2 lg:right-[20px] top-1 lg:top-3 flex items-center align-start z-20'>
                <LanguageSocial />
            </div>
            <div className='textStyle max-w-[1240px] m-auto overflow-scroll h-screen pb-[50px] saira p-2' dangerouslySetInnerHTML={
                {
                    __html: language === 'en' ? en_text : language === 'es' ? es_text : pt_text
                }
            } />

        </div>
    )
}

export default AffiliationTerms
let en_text = `<p style="text-align:center;font-size:16pt!important;"><strong>Cybersays.club Referral Program Terms</strong></p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Last revised: February 2024</p>
<p>By joining, using or participating in any one of the programs (the &quot;<strong>Program</strong>&quot; or &quot;<strong>Programs</strong>&quot;) operated by Pythia Grant Ltd. &nbsp;&nbsp;(the &quot;<strong>Company</strong>&quot;) through the site <a href="http://www.Cybersays.club">www.Cybersays.club</a> (the &quot;<strong>Site&quot;),</strong> you (as defined below), is entering into a binding agreement with the Company.</p>
<p>BY PARTICIPATING IN THE PROGRAMS AND BY USING THE SITE THE YOUACKNOWLEDGES THAT IT ACCEPT AND AGREES TO THIS AGREEMENT AND ALL OF THE TERMS AND CONDITIONS SET FORTH BELOW, INCLUDING <a href="https://pussycash.com/antispam.asp">THE ANTI SPAM POLICY</a> (the &quot;<strong>Terms</strong>&quot;).&nbsp;</p>
<p>IN ADDITION, IF THIS AGREEMENT IS BEING AGREED TO BY A COMPANY OR OTHER LEGAL ENTITY, THEN THE PERSON AGREEING TO THIS AGREEMENT ON BEHALF OF THAT COMPANY OR LEGAL ENTITY HEREBY REPRESENTS AND WARRANTS THAT HE OR SHE IS AUTHORIZED AND LAWFULLY ABLE TO BIND THAT COMPANY OR ENTITY TO THIS OPERATING AGREEMENT.</p>
<p>IT IS ABSOLUTELY PROHIBITED FROM PROMOTING THE SITE BY EMAIL!</p>
<p>Spamming by SMS is strictly prohibited.&nbsp;</p>
<p>Failure to comply with any one of the terms of the Anti-EMAIL and Anti-Spam Policy will lead to immediate termination of your account and forfeiture of all of your eligible payouts.&nbsp;</p>
<ol>
    <li><strong>Referral Program</strong>:&nbsp;<ol>
            <li><strong>$1 Pay Per Sign-Up Program -&nbsp;</strong>In this program You will be paid&nbsp;$1USD&nbsp;for every new, legitimate Referred Sign-Up User sends to ImLive.com, within the Referral program period.&nbsp;&nbsp;No targets or minimums are required.<strong>&nbsp;</strong></li>
            <li><strong>&lsquo;Sign-Up Referred User&rsquo;</strong> shall mean a Referred User who:<ol>
                    <ol>
                        <li>Created a new User account Cybersays.Club ,&nbsp;<strong>and&nbsp;</strong></li>
                        <li>Used the referred link to create a new account by registering and signing up for the first time to ImLive.com,&nbsp;<strong>and</strong>&nbsp;</li>
                        <li>Made a first purchase of 5$ USD (or any other sum as agreed specifically between the parties) on his first Credit purchase, at ImLive.com to receive an additional 5 credit bonus (total of 10 credits)&nbsp;&nbsp;<strong>and</strong>&nbsp;</li>
                        <li>Spend his entire 10 credits at ImLive.com.&nbsp;</li>
                    </ol>
                </ol>
            </li>
            <li><strong>&lsquo;Referral Program Period&rsquo;&nbsp;</strong>shall mean up to 24 hours as of the moment in which you first registered at the Site. &nbsp;</li>
        </ol>
    </li>
</ol>
<p>The Company may change this definition, at its sole discretion, from time to time, as presented onsite.&nbsp;</p>
<p><br></p>
<ol>
    <li><strong>YOUR RESPONSIBILITY</strong>
        <ol>
            <li>You hereby warrant and represent that they are over the age of 18, and in all respects they are qualified and competent to enter into these Terms.</li>
            <li>You hereby represent, warrant and undertake to the Company as follows:</li>
        </ol>
    </li>
</ol>
<p>(a) You are legally competent and have full authority to enter into this Agreement and the Terms; (b) Affiliate&apos;s website and all materials, content and services offered through and in associations with Affiliate&apos;s website do not contain any of the following at any given time:<br>Violate any law, or regulation or promote illegal activities of any kind&nbsp;<br>You will comply with all applicable federal, state and local laws in the performance of its obligations, including but not limited to regulations regarding: the forbiddance to engage in any activity that is considered spoofing, the forbiddance to send unsolicited emails (spam), the forbiddance to use a misleading header in the subject line of each and every email sent, having a valid removal link on each and every email You sends and using a valid &quot;from&quot; address on each and every email sent;</p>
<p>(f) You hereby commit to comply with all of the terms of the Anti-Spam Policy of the Site and understand that failure to comply with any one of the terms of the Site&apos;s Anti-Spam Policy will result in immediate termination of its account and possible forfeiture of all of its earnings as well as possible commencement of legal proceedings against Affiliate.</p>
<ol>
    <li><strong>PROPRIETARY RIGHTS.</strong></li>
</ol>
<p>All materials on the Site and the Materials are proprietary to the Company, constitute valuable intellectual property, are copyrighted and are protected under treaty provisions and worldwide copyright laws.&nbsp;</p>
<p>Any Company materials, including those appearing on the Site and the Programs, may not be reproduced, copied, edited, published, transmitted, or uploaded in any way without written permission. Subscribing to the Site or participating in the Program does not grant any express or implied right to You under any of the Company&apos;s trademarks, copyrights or other proprietary information.&nbsp;</p>
<p>No representation is made that the materials available on the Company&apos;s Websites are appropriate or available for use in other locations, and access to them from jurisdictions where their contents are illegal is prohibited. The application of the United Nations Convention of Contracts for the International Sale of Goods is expressly excluded.</p>
<ol>
    <li><strong>CONFIDENTIALITY</strong>
        <ol>
            <li>You agrees that all information provided to You in the course of the parties dealing, or which came to its attention, including, without limitation, the Company&apos;s business and financial information, its clients lists, and its marketing strategies (the &quot;<strong>Confidential Information</strong>&quot;), shall remain strictly confidential and shall not: (a) be utilized, directly or indirectly, by You for its own business purposes or for any other purpose (including, without limitation for the promotion of other companies or services); (b) shall not be disclosed by You to any third party, except to its employees who have a need to know for the purpose of effectuating this Agreement; and (c) not to and not enable anyone else to, directly or indirectly reverse engineer, decompile, disassemble, create derivative works, modify, translate, create and/or transfer any copies of the Confidential Information, remove any identification, including copyright, trademark, patent or other notices, contained in or in connection with the Company&apos;s Websites . The foregoing shall not apply to information which is or become generally available to the public through no fault of Affiliate, or which was known to You prior to its disclosure by the Company, as evidenced by Affiliate&apos;s written records.</li>
            <li>The Company shall own and retain all right, title and interest in all names, addresses and other personally identifying information of Referred Sign-Ups, and Leads and You shall have no right to be provided with any such data. You shall not keep any details regarding the identity of the Referred Sign-Ups, Leads or of any person or entity which provided its details to the Company by the link in the Affiliate&apos;s website.</li>
        </ol>
    </li>
    <li><strong>FRAUD</strong>
        <ol>
            <li>In the event that the Company determines in its sole and absolute discretion that the You are engaged in any fraudulent activity such as participating in the Program(s) in bad faith and/or cheating the Program(s) and/or providing false or misleading information (the &quot;<strong>Fraudulent Activity</strong>&quot;), the Company shall have the right, in its sole and absolute discretion, to cancel Affiliate&apos;s participation and terminate Affiliate&apos;s account, in any and all Programs, at any time, without prior notification, and to withhold all Affiliate&apos;s Commission earnings in the Program(s).</li>
            <li>You hereby agree that the Company may offset chargeback or otherwise deducts from the Commission and/or any amount due to Affiliate.</li>
        </ol>
    </li>
    <li>The Company may terminate at any time, and without cause, Affiliate&apos;s account on the Site.</li>
    <li>You understands and agree that any of the following actions by You or anyone under your control will result in Affiliate&apos;s account(s) being immediately terminated and all of Affiliate&apos;s unpaid Commissions and earnings being forfeited (upon notice from the Site):<br>(a) Sending ANY promotional emails on behalf of the sites that participate in the Program(s);<br>(b) Promoting content such as: bestiality, child/minor pornography, rape, obscenity, violence, or any other illegal activity;<br>(c) Attempting to defraud the Company in any way;<br>(d) Providing incorrect or incomplete account information;<br>(e) Violating or infringing any rights of any person or entity, including without limitation, any copyrights, trademark rights, patent rights, rights of publicity, privacy rights or any other intellectual, personal or property right;<br>(f) Displaying sexually explicit ads to consumers unless the consumers are actively seeking out sexually explicit content or unless the consumers have consented to viewing sexually explicit content;<br>(g) Displaying sexually explicit pop-up ads in non-adult sites, to promote any of the Site. The Company has the sole desertion to determine if a site is adult oriented or not in regards to this clause;<br>(h) Any other breach of the Terms, as amended from time to time, or the rules and regulations of any Program(s);<br>or<br>(i) The Company has reason to believe that any of the foregoing has occurred or is likely to occur.</li>
    <li><strong>MISCELLANEOUS</strong>
        <ol>
            <li>You are bound to the Terms, as well as the specific rules and regulations of each Program.</li>
            <li>In addition to the Terms, the Site may have additional Terms of Use that are, and shall become, an integral part of the Terms.</li>
            <li>This Agreement constitutes the entire agreement between You and the Company with respect to the subject matter hereof, and Terms supersedes all prior written or oral understandings, writings and representations and may only be amended by the Company.</li>
            <li>If any provision of this Agreement is found by a court of competent jurisdiction to be held void or unenforceable to any extent, such provision shall be deemed excised and removed only to the extent to make the remaining provisions and this Agreement enforceable. Unless otherwise specifically provided, the provisions of this Agreement shall survive its termination.</li>
            <li>You&nbsp;<strong>shall not</strong> advertise or solicit members for the Company or any of the Company&apos;s Websites by email, text messages, twitter messages, telephone calls, flyers, handouts, US mail, posters, coupons, brochures, in-person solicitations or solicitation by any other means unless Youhave a written permission from the Company</li>
            <li>You acknowledges and agrees that the Company makes no guaranties or warranties of any kind with&nbsp;</li>
            <li>You also understands and agrees that the Company may share selected personal information with third parties for data verification and supplementation purposes.</li>
            <li>The Company reserves the right to change the terms of the Programs, as well as the payment scales, at any time and in its sole and absolute discretion. Any and all changes will be applicable and valid upon posting of the terms on the Site without further notice.</li>
            <li>The parties hereto are and shall remain independent contractors, and nothing herein shall be deemed to create any agency, partnership or joint-venture relationship between the parties. Neither party shall be deemed to be an employee or legal representative of the other, nor shall either party have any right or authority to create any obligation on behalf of the other party.</li>
            <li>This Agreement shall be governed by the laws of Cyprus and the applicable court in Cyprus shall have the exclusive jurisdiction with respect to any action arises from this Agreement.</li>
            <li>Any provisions hereof which expressly or by their nature are required to survive termination or expiration of this Agreement in order to achieve their purpose shall so survive until it shall no longer be necessary for them to survive in order to achieve that purpose.</li>
        </ol>
    </li>
</ol>
<p><br></p>`
let es_text = `<p style="text-align:center;font-size:16pt!important;"><strong>Condiciones del Programa de Referencia de Cybersays.club</strong></p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &Uacute;ltima revisi&oacute;n: Febrero 2024</p>
<p>Al inscribirse, utilizar o participar en cualquiera de los programas (el &quot;<strong>Programa</strong>&quot; o los &quot;<strong>Programas&quot;)&nbsp;</strong>operados por Pythia Grant Ltd. (la &quot;<strong>Empresa</strong>&quot;) a trav&eacute;s del sitio <a href="http://www.Cybersays.club">www.Cybersays.club</a> (el &quot;<strong>Sitio</strong>&quot;), usted (tal y como se define a continuaci&oacute;n), est&aacute; estableciendo un Acuerdo vinculante con la Empresa.</p>
<p>AL PARTICIPAR EN LOS PROGRAMAS Y AL UTILIZAR EL SITIO, EL USUARIO CONFIRMA QUE ACEPTA Y EST&Aacute; DE ACUERDO CON EL PRESENTE ACUERDO Y CON TODOS LOS T&Eacute;RMINOS Y CONDICIONES ESTABLECIDOS A CONTINUACI&Oacute;N, INCLUIDA <a href="https://pussycash.com/antispam.asp">LA POL&Iacute;TICA ANTISPAM</a> (los &quot;<strong>T&eacute;rminos</strong>&quot;).&nbsp;</p>
<p>ADEM&Aacute;S, SI ESTE ACUERDO EST&Aacute; SIENDO ACORDADO POR UNA EMPRESA U OTRA ENTIDAD LEGAL, ENTONCES LA PERSONA QUE ACUERDA ESTE ACUERDO EN NOMBRE DE ESA EMPRESA O ENTIDAD LEGAL POR LA PRESENTE DECLARA Y GARANTIZA QUE EST&Aacute; AUTORIZADA Y LEGALMENTE CAPACITADA PARA VINCULAR A ESA EMPRESA O ENTIDAD A ESTE ACUERDO OPERATIVO.</p>
<p>&iexcl;QUEDA TERMINANTEMENTE PROHIBIDO PROMOCIONAR EL SITIO POR CORREO ELECTR&Oacute;NICO!</p>
<p>El env&iacute;o de spam por SMS est&aacute; estrictamente prohibido.&nbsp;</p>
<p>El incumplimiento de cualquiera de los t&eacute;rminos de la Pol&iacute;tica Anti-Email y Anti-Spam dirigir&aacute; a la finalizaci&oacute;n inmediata de su cuenta y la p&eacute;rdida de todos sus pagos elegibles.&nbsp;</p>
<ol>
    <li><strong>Programa de remisi&oacute;n</strong>:&nbsp;<ol>
            <li><strong>Programa de pago de $1 por registro -&nbsp;</strong>En este programa se le pagar&aacute;&nbsp;$1USD&nbsp;por cada nuevo y leg&iacute;timo usuario registrado referido que env&iacute;e a ImLive.com, dentro del periodo del programa de referidos.&nbsp;&nbsp;No se requieren objetivos ni m&iacute;nimos<strong>.&nbsp;</strong></li>
            <li>Por<strong>&nbsp;&quot;Usuario Referido que se inscribe&quot;&nbsp;</strong>se entender&aacute; un Usuario Referido que:<ol>
                    <ol>
                        <li>Creado una nueva cuenta de usuario Cybersays.Club ,&nbsp;<strong>y&nbsp;</strong></li>
                        <li>Utiliz&oacute; el enlace referido para crear una nueva cuenta registr&aacute;ndose e inscribi&eacute;ndose por primera vez en ImLive.com,&nbsp;<strong>y</strong><strong>&nbsp;</strong></li>
                        <li>Realiz&oacute; una primera compra de 5$ USD (o cualquier otra suma acordada espec&iacute;ficamente entre las partes) en su primera compra de cr&eacute;ditos, en ImLive.com para recibir una bonificaci&oacute;n adicional de 5 cr&eacute;ditos (total de 10 cr&eacute;ditos) y&nbsp;</li>
                        <li>Gaste la totalidad de sus 10 cr&eacute;ditos en ImLive.com.&nbsp;</li>
                    </ol>
                </ol>
            </li>
            <li>Por<strong>&nbsp;&quot;Per&iacute;odo del Programa de Referencia&quot;&nbsp;</strong>se entender&aacute; un m&aacute;ximo de 24 horas a partir del momento en que se registr&oacute; por primera vez en el Sitio. &nbsp;</li>
        </ol>
    </li>
</ol>
<p>La Empresa puede cambiar esta definici&oacute;n, a su entera discreci&oacute;n, de vez en cuando, tal como se presenta en el sitio.&nbsp;</p>
<p><br></p>
<ol>
    <li><strong>SU RESPONSABILIDAD</strong>
        <ol>
            <li>Por la presente, usted garantiza y declara que son mayores de 18 a&ntilde;os y que, en todos los aspectos, est&aacute;n cualificados y son competentes para introducir estos T&eacute;rminos.</li>
            <li>Por la presente, usted declara, garantiza y se compromete con la Empresa a lo siguiente:</li>
        </ol>
    </li>
</ol>
<p>(a) Usted es legalmente competente y tiene plena autoridad para establecer el presente Acuerdo y los T&eacute;rminos; (b) El sitio web del Afiliado y todos los materiales, contenidos y servicios ofrecidos a trav&eacute;s y en asociaci&oacute;n con el sitio web del Afiliado no contienen en ning&uacute;n momento lo siguiente&nbsp;<br>Violar ninguna ley, o regulaci&oacute;n o promover actividades ilegales de ning&uacute;n tipo&nbsp;<br>Usted cumplir&aacute; con todas las leyes federales, estatales y locales aplicables en el desempe&ntilde;o de sus obligaciones, incluyendo pero no limit&aacute;ndose a las regulaciones relativas a: la prohibici&oacute;n de participar en cualquier actividad que se considere spoofing, la prohibici&oacute;n de enviar correos electr&oacute;nicos no solicitados (spam), la prohibici&oacute;n de utilizar un encabezado enga&ntilde;oso en la l&iacute;nea de asunto de todos y cada uno de los correos electr&oacute;nicos enviados, tener un enlace de eliminaci&oacute;n v&aacute;lido en todos y cada uno de los correos electr&oacute;nicos que env&iacute;e y utilizar una direcci&oacute;n &quot;de&quot; v&aacute;lida en todos y cada uno de los correos electr&oacute;nicos enviados;</p>
<p>(f) Por la presente se compromete a cumplir con todos los t&eacute;rminos de la Pol&iacute;tica Anti-Spam del Sitio y entiende que el incumplimiento de cualquiera de los t&eacute;rminos de la Pol&iacute;tica Anti-Spam del Sitio dar&aacute; lugar a la finalizaci&oacute;n inmediata de su cuenta y a la posible confiscaci&oacute;n de todas sus ganancias, as&iacute; como al posible inicio de acciones legales contra el Afiliado.</p>
<ol>
    <li><strong>DERECHOS DE PROPIEDAD.</strong></li>
</ol>
<p>Todos los materiales del Sitio y los Materiales son propiedad de la Empresa, constituyen una valiosa propiedad intelectual, tienen derechos de autor y est&aacute;n protegidos por las disposiciones de los tratados y las leyes mundiales de derechos de autor.&nbsp;</p>
<p>Los materiales de la Empresa, incluidos los que aparecen en el Sitio y en los Programas, no podr&aacute;n reproducirse, copiarse, editarse, publicarse, transmitirse ni cargarse de ninguna forma sin autorizaci&oacute;n por escrito. La suscripci&oacute;n al Sitio o la participaci&oacute;n en el Programa no le otorgan ning&uacute;n derecho expreso o impl&iacute;cito sobre ninguna de las marcas comerciales, derechos de autor u otra informaci&oacute;n de propiedad de la Empresa.&nbsp;</p>
<p>No se garantiza que los materiales disponibles en los sitios web de la Empresa sean apropiados o est&eacute;n disponibles para su uso en otros lugares, y se proh&iacute;be el acceso a los mismos desde jurisdicciones en las que su contenido sea ilegal. Queda expresamente excluida la aplicaci&oacute;n de la Convenci&oacute;n de las Naciones Unidas sobre los Contratos de Compraventa Internacional de Mercader&iacute;as.</p>
<ol>
    <li><strong>CONFIDENCIALIDAD</strong>
        <ol>
            <li>Usted acepta que toda la informaci&oacute;n que se le facilite en el curso de las relaciones entre las partes, o de la que tenga conocimiento, incluyendo, sin limitaci&oacute;n, la informaci&oacute;n comercial y financiera de la Empresa, sus listas de clientes y sus estrategias de marketing (la &quot;<strong>Informaci&oacute;n Confidencial</strong>&quot;), ser&aacute; estrictamente confidencial y no podr&aacute; (a) ser&aacute; utilizada, directa o indirectamente, por Usted para sus propios fines comerciales o para cualquier otro prop&oacute;sito (incluyendo, sin limitaci&oacute;n, la promoci&oacute;n de otras Empresas o servicios); (b) no ser&aacute; revelada por Usted a ning&uacute;n tercero, excepto a sus empleados que tengan necesidad de conocerla con el fin de llevar a cabo el presente Acuerdo; y (c) no realizar&aacute; ni permitir&aacute; que nadie realice, directa o indirectamente, ingenier&iacute;a inversa, descompilaci&oacute;n, desensamblaje, creaci&oacute;n de trabajos derivados, modificaci&oacute;n, traducci&oacute;n, creaci&oacute;n y/o transferencia de copias de la Informaci&oacute;n Confidencial, eliminaci&oacute;n de cualquier identificaci&oacute;n, incluidos los avisos de derechos de autor, marcas comerciales, patentes u otros avisos, contenidos en los Sitios Web de la Empresa o relacionados con los mismos . Lo anterior no se aplicar&aacute; a la informaci&oacute;n que est&eacute; o haya llegado a estar a disposici&oacute;n del p&uacute;blico en general por causas ajenas al Afiliado, o que fuera conocida por Usted antes de su divulgaci&oacute;n por parte de la Empresa, seg&uacute;n conste en los registros escritos del Afiliado.</li>
            <li>La Empresa poseer&aacute; y conservar&aacute; todos los derechos, t&iacute;tulos e intereses sobre todos los nombres, direcciones y otros datos de identificaci&oacute;n personal de los registros y clientes potenciales recomendados, y usted no tendr&aacute; derecho a que se le facilite ninguno de estos datos. Usted no conservar&aacute; ning&uacute;n dato relativo a la identidad de los Referred Sign-Ups, Leads o de cualquier persona o Empresa que haya facilitado sus datos a la Empresa a trav&eacute;s del enlace de la p&aacute;gina web del Afiliado.</li>
        </ol>
    </li>
    <li><strong>FRAUDE</strong>
        <ol>
            <li>En caso de que la Empresa determine, a su entera y absoluta discreci&oacute;n, que el afiliado est&aacute; involucrado en cualquier actividad fraudulenta, como participar en el programa de mala fe y/o enga&ntilde;ar al programa y/o proporcionar informaci&oacute;n falsa o enga&ntilde;osa (la &quot;<strong>actividad fraudulenta</strong>&quot;), la Empresa tendr&aacute; derecho, a su entera y absoluta discreci&oacute;n, a cancelar la participaci&oacute;n del afiliado y finalizar la cuenta del afiliado, en todos y cada uno de los programas, en cualquier momento, sin notificaci&oacute;n previa, y a retener todas las ganancias de comisiones del afiliado en el programa.</li>
            <li>Por la presente, usted acepta que la Empresa pueda compensar el contracargo o deducir de otro modo de la comisi&oacute;n y/o de cualquier cantidad debida al afiliado.</li>
        </ol>
    </li>
    <li>La Empresa podr&aacute; finalizar en cualquier momento, y sin causa alguna, la cuenta del afiliado en el sitio.</li>
    <li>Usted entiende y acepta que cualquiera de las siguientes acciones por su parte o por parte de cualquier persona bajo su control tendr&aacute; como resultado la finalizaci&oacute;n inmediata de la(s) cuenta(s) del Afiliado y la p&eacute;rdida de todas las Comisiones y ganancias no pagadas del Afiliado (previo aviso del Sitio):&nbsp;<br>(a) Enviar CUALQUIER correo electr&oacute;nico promocional en nombre de los sitios que participan en el/los Programa(s);&nbsp;<br>(b) Promocionar contenidos como: bestialidad, pornograf&iacute;a infantil/menor, violaci&oacute;n, obscenidad, violencia o cualquier otra actividad ilegal; (c)&nbsp;<br>Intentar defraudar a la Empresa de cualquier forma;&nbsp;<br>(d) Proporcionar informaci&oacute;n incorrecta o incompleta sobre la cuenta;&nbsp;<br>(e) Violar o infringir cualquier derecho de cualquier persona o entidad, incluyendo sin limitaci&oacute;n, cualquier derecho de autor, derecho de marca, derecho de patente, derecho de publicidad, derecho de privacidad o cualquier otro derecho intelectual, personal o de propiedad;&nbsp;<br>(f) Mostrar anuncios sexualmente expl&iacute;citos a los consumidores, a menos que los consumidores est&eacute;n buscando activamente contenidos sexualmente expl&iacute;citos o a menos que los consumidores hayan dado su consentimiento para ver contenidos sexualmente expl&iacute;citos;&nbsp;<br>(g) Mostrar anuncios emergentes sexualmente expl&iacute;citos en sitios que no sean para adultos, para promocionar cualquiera de los Sitios. La Empresa tiene la &uacute;nica deserci&oacute;n de determinar si un sitio est&aacute; orientado a adultos o no en lo que respecta a esta cl&aacute;usula; (h<br>) Cualquier otro incumplimiento de las Condiciones, en su versi&oacute;n modificada de vez en cuando, o de las normas y reglamentos de cualquier Programa(s);&nbsp;<br>o&nbsp;<br>(i) La Empresa tiene razones para creer que cualquiera de los anteriores ha ocurrido o es probable que ocurra.</li>
    <li><strong>VARIOS</strong>
        <ol>
            <li>Usted est&aacute; sujeto a las Condiciones, as&iacute; como a las normas y reglamentos espec&iacute;ficos de cada Programa.</li>
            <li>Adem&aacute;s de las Condiciones, el Sitio puede tener Condiciones de Uso adicionales que son, y pasar&aacute;n a ser, parte integrante de las Condiciones.</li>
            <li>El presente Acuerdo constituye el acuerdo completo entre Usted y la Empresa con respecto al objeto del mismo, y los T&eacute;rminos sustituyen a todos los entendimientos, escritos y declaraciones anteriores, ya sean orales o escritos, y s&oacute;lo podr&aacute;n ser modificados por la Empresa.</li>
            <li>Si un tribunal de jurisdicci&oacute;n competente declarara nula o inaplicable en cualquier medida alguna de las disposiciones del presente Acuerdo, dicha disposici&oacute;n se considerar&aacute; extirpada y eliminada s&oacute;lo en la medida necesaria para que las disposiciones restantes y el presente Acuerdo sean aplicables. Salvo que se disponga espec&iacute;ficamente lo contrario, las disposiciones del presente Acuerdo sobrevivir&aacute;n a su finalizaci&oacute;n.</li>
            <li><strong>No&nbsp;</strong>podr&aacute; hacer publicidad o solicitar miembros para la Empresa o cualquiera de los sitios web de la Empresa por correo electr&oacute;nico, mensajes de texto, mensajes de Twitter, llamadas telef&oacute;nicas, folletos, octavillas, correo postal, carteles, cupones, folletos, solicitudes en persona o solicitud por cualquier otro medio a menos que tenga un permiso por escrito de la Empresa.</li>
            <li>Usted reconoce y acepta que la Empresa no ofrece garant&iacute;as de ning&uacute;n tipo con&nbsp;</li>
            <li>Usted tambi&eacute;n entiende y acepta que la Empresa puede compartir informaci&oacute;n personal seleccionada con terceros con fines de verificaci&oacute;n y complementaci&oacute;n de datos.</li>
            <li>La Empresa se reserva el derecho a modificar las condiciones de los Programas, as&iacute; como las escalas de pago, en cualquier momento y a su entera y absoluta discreci&oacute;n. Todos y cada uno de los cambios ser&aacute;n aplicables y v&aacute;lidos a partir de la publicaci&oacute;n de los t&eacute;rminos en el Sitio sin previo aviso.</li>
            <li>Las partes del presente documento son y seguir&aacute;n siendo contratistas independientes, y nada de lo aqu&iacute; estipulado se considerar&aacute; que crea ninguna relaci&oacute;n de agencia, asociaci&oacute;n o Empresa conjunta entre las partes. Ninguna de las partes se considerar&aacute; empleada o representante legal de la otra, ni tendr&aacute; derecho o autoridad para crear ninguna obligaci&oacute;n en nombre de la otra parte.</li>
            <li>Este Acuerdo se regir&aacute; por las leyes de Chipre y el tribunal aplicable en Chipre tendr&aacute; la jurisdicci&oacute;n exclusiva con respecto a cualquier acci&oacute;n que surja de este Acuerdo.</li>
            <li>Todas las disposiciones del presente documento que, de forma expresa o por su naturaleza, deban sobrevivir a la finalizaci&oacute;n o expiraci&oacute;n de este Acuerdo para lograr su prop&oacute;sito, sobrevivir&aacute;n hasta que ya no sea necesario que sobrevivan para lograr dicho prop&oacute;sito.</li>
        </ol>
    </li>
</ol>
<p><br></p>`
let pt_text = `<p style="text-align:center;font-size:16pt!important;" class="p14">
<span class="s22"
  ><strong
    >Termos do Programa de Indica&ccedil;&atilde;o da
    Cybersays.club</strong
  ></span
>
</p>
<p class="p46">
&Uacute;ltima revis&atilde;o: <span class="s1">Fevereiro de 2024</span>
</p>
<p class="p47">
Ao ingressar, usar ou participar de qualquer um dos programas (o
"<strong>Programa</strong>" ou "<strong>Programas</strong>") operados pela
Pythia Grant Ltd. <span class="Apple-converted-space">&nbsp; </span>(a
"<strong>Empresa</strong>") por meio do site
<a href="http://www.Cybersays.club"
  ><span class="s3">www.Cybersays.club</span></a
>
(o "<strong>Site"), </strong>voc&ecirc; (conforme definido abaixo)
est&aacute; firmando um contrato vinculativo com a Empresa.
</p>
<p class="p47">
AO PARTICIPAR DOS PROGRAMAS E AO USAR O SITE, O USU&Aacute;RIO DECLARA QUE
ACEITA E CONCORDA COM ESTE CONTRATO E COM TODOS OS TERMOS E
CONDI&Ccedil;&Otilde;ES ESTABELECIDOS ABAIXO, INCLUINDO
<a href="https://pussycash.com/antispam.asp"
  >A POL&Iacute;TICA ANTI SPAM</a
>
(os "<strong>Termos</strong>").
</p>
<p class="p47">
AL&Eacute;M DISSO, SE ESTE CONTRATO ESTIVER SENDO ACORDADO POR UMA EMPRESA
OU OUTRA ENTIDADE LEGAL, A PESSOA QUE CONCORDAR COM ESTE CONTRATO EM NOME
DESSA EMPRESA OU ENTIDADE LEGAL DECLARA E GARANTE QUE EST&Aacute;
AUTORIZADA E LEGALMENTE APTA A VINCULAR ESSA EMPRESA OU ENTIDADE A ESTE
CONTRATO OPERACIONAL.
</p>
<p class="p47">
&Eacute; ABSOLUTAMENTE PROIBIDO PROMOVER O SITE POR E-MAIL!
</p>
<p class="p47">O envio de spam por SMS &eacute; estritamente proibido.</p>
<p class="p47">
O n&atilde;o cumprimento de qualquer um dos termos da Pol&iacute;tica
Anti-EMAIL e Anti-Spam resultar&aacute; no cancelamento imediato de sua
conta e na perda de todos os seus pagamentos eleg&iacute;veis.
</p>
<ol class="ol1">
<li class="li48">
  <span class="s22"
    ><strong>Programa de Indica&ccedil;&atilde;o</strong></span
  ><span class="s23">: </span>
</li>
<ol class="ol1">
  <li class="li48">
    <span class="s23"
      ><strong>Programa de pagamento de US$1 por cadastro - </strong>Nesse
      programa, voc&ecirc; receber&aacute; </span
    ><span class="s22">US$1.00 (um d&oacute;lar americano)</span
    ><span class="s23">
      por cada cadastro de um novo e leg&iacute;timo usu&aacute;rio na
      ImLive.com, indicado pelo usu&aacute;rio, dentro do per&iacute;odo
      do Programa de Indica&ccedil;&atilde;o.<span
        class="Apple-converted-space"
        >&nbsp; </span
      >N&atilde;o s&atilde;o necess&aacute;rias metas ou valores
      m&iacute;nimos<strong>. </strong></span
    >
  </li>
  <li class="li48">
    <span class="s23"
      ><strong
        >" Inscri&ccedil;&atilde;o de Usu&aacute;rio Indicado" </strong
      >significa um Usu&aacute;rio Indicado que:</span
    >
  </li>
  <ol class="ol1">
    <ol class="ol3">
      <li class="li49">
        <span class="s23"
          >Criou uma nova conta de usu&aacute;rio na Cybersays.Club </span
        ><span class="s22"><strong>e </strong></span>
      </li>
      <li class="li49">
        <span class="s23"
          >Usou o link indicado para criar uma nova conta, registrando-se
          e inscrevendo-se pela primeira vez na ImLive.com, </span
        ><span class="s22"><strong>e</strong></span>
      </li>
      <li class="li48">
        <span class="s23"
          >Fez uma primeira compra de US$5.00 (cinco d&oacute;lares
          americanos) (ou qualquer outro valor acordado especificamente
          entre as partes) em sua primeira compra de cr&eacute;dito na
          ImLive.com para receber um b&ocirc;nus adicional de 5 (cinco)
          cr&eacute;ditos (total de 10 cr&eacute;ditos) </span
        ><span class="s22"><strong>e</strong></span>
      </li>
      <li class="li48">
        <span class="s23"
          >Gaste todos os seus 10 cr&eacute;ditos na ImLive.com.
        </span>
      </li>
    </ol>
  </ol>
  <li class="li48">
    <span class="s23"
      ><strong
        >"Per&iacute;odo do Programa de Indica&ccedil;&atilde;o" </strong
      >significa at&eacute; 24 (vinte e quatro) horas a partir do momento
      em que voc&ecirc; se registrou pela primeira vez no
      Site.&nbsp;</span
    >
  </li>
</ol>
</ol>
<p class="p50">
A Empresa pode alterar essa defini&ccedil;&atilde;o, a seu crit&eacute;rio
exclusivo, de tempos em tempos, conforme apresentado no local.
</p>
<p class="p51">&nbsp;</p>
<ol class="ol1">
<li class="li48">
  <span class="s23"><strong>SUA RESPONSABILIDADE</strong></span>
</li>
<ol class="ol1">
  <li class="li48">
    <span class="s23"
      >Por meio deste documento, voc&ecirc; garante e declara que
      t&ecirc;m mais de 18 anos de idade e que, em todos os aspectos,
      s&atilde;o eleg&iacute;veis e competentes para firmar estes
      Termos.</span
    >
  </li>
  <li class="li48">
    <span class="s23"
      >Por meio deste documento, voc&ecirc; representa, garante e se
      compromete com a Empresa da seguinte forma:</span
    >
  </li>
</ol>
</ol>
<p class="p52">
(a) Voc&ecirc; &eacute; legalmente competente e tem plena autoridade para
firmar este Contrato e os Termos; (b) O site do Afiliado e todos os
materiais, conte&uacute;dos e servi&ccedil;os oferecidos por meio do site
do Afiliado e em associa&ccedil;&atilde;o a ele n&atilde;o cont&ecirc;m
nenhum dos itens a seguir em nenhum momento: <br />Violam qualquer lei ou
regulamento ou promovem atividades ilegais de qualquer tipo
<br />Voc&ecirc; cumprir&aacute; todas as leis federais, estaduais e
locais aplic&aacute;veis no desempenho de suas obriga&ccedil;&otilde;es,
incluindo, mas n&atilde;o se limitando a, regulamentos relativos a:
proibi&ccedil;&atilde;o de se envolver em qualquer atividade que seja
considerada <em>spoofing</em>, proibi&ccedil;&atilde;o de enviar e-mails
n&atilde;o solicitados (<em>spam</em>), a proibi&ccedil;&atilde;o de usar
um cabe&ccedil;alho enganoso na linha do assunto de todo e qualquer e-mail
enviado, ter um link de remo&ccedil;&atilde;o v&aacute;lido em todo e
qualquer e-mail enviado e usar um endere&ccedil;o "de" v&aacute;lido em
todo e qualquer e-mail enviado;
</p>
<p class="p50">
(f) Voc&ecirc; se compromete a cumprir todos os termos da Pol&iacute;tica
Anti-Spam do Site e entende que o n&atilde;o cumprimento de qualquer um
dos termos da Pol&iacute;tica Anti-Spam do Site resultar&aacute; no
cancelamento imediato de sua conta e na poss&iacute;vel perda de todos os
seus ganhos, bem como no poss&iacute;vel in&iacute;cio de processos legais
contra o Afiliado.
</p>
<ol class="ol1">
<li class="li48">
  <span class="s23"><strong>DIREITOS DE PROPRIEDADE.</strong></span>
</li>
</ol>
<p class="p53">
Todos os materiais do Site e os Materiais s&atilde;o de propriedade da
Empresa, constituem propriedade intelectual valiosa, s&atilde;o protegidos
por direitos autorais e est&atilde;o protegidos por
disposi&ccedil;&otilde;es de tratados e leis mundiais de direitos
autorais.
</p>
<p class="p53">
Quaisquer materiais da Empresa, inclusive os que aparecem no Site e nos
Programas, n&atilde;o podem ser reproduzidos, copiados, editados,
publicados, transmitidos ou carregados de nenhuma forma sem
permiss&atilde;o por escrito. A assinatura do Site ou a
participa&ccedil;&atilde;o no Programa n&atilde;o lhe concede nenhum
direito expresso ou impl&iacute;cito sobre nenhuma das marcas registradas,
direitos autorais ou outras informa&ccedil;&otilde;es de propriedade da
Empresa.
</p>
<p class="p54">
N&atilde;o &eacute; feita nenhuma declara&ccedil;&atilde;o de que os
materiais dispon&iacute;veis nos sites da Empresa sejam apropriados ou
estejam dispon&iacute;veis para uso em outros locais, e o acesso a eles a
partir de jurisdi&ccedil;&otilde;es onde seu conte&uacute;do seja ilegal
&eacute; proibido. A aplica&ccedil;&atilde;o da Conven&ccedil;&atilde;o
das Na&ccedil;&otilde;es Unidas sobre Contratos para a Venda Internacional
de Mercadorias est&aacute; expressamente exclu&iacute;da.
</p>
<ol class="ol1">
<li class="li48">
  <span class="s23"><strong>CONFIDENCIALIDADE</strong></span>
</li>
<ol class="ol1">
  <li class="li48">
    <span class="s23"
      >Voc&ecirc; concorda que todas as informa&ccedil;&otilde;es
      fornecidas a Voc&ecirc; no decorrer das negocia&ccedil;&otilde;es
      entre as partes, ou que tenham chegado ao seu conhecimento,
      incluindo, sem limita&ccedil;&atilde;o, as informa&ccedil;&otilde;es
      comerciais e financeiras da Empresa, suas listas de clientes e suas
      estrat&eacute;gias de marketing (as "<strong
        >Informa&ccedil;&otilde;es Confidenciais</strong
      >"), dever&atilde;o permanecer estritamente confidenciais e
      n&atilde;o dever&atilde;o (a) ser utilizadas, direta ou
      indiretamente, pela Empresa para seus pr&oacute;prios fins
      comerciais ou para qualquer outra finalidade (incluindo, sem
      limita&ccedil;&atilde;o, a promo&ccedil;&atilde;o de outras empresas
      ou servi&ccedil;os); (b) n&atilde;o ser&atilde;o divulgadas pela
      Empresa a terceiros, exceto a seus funcion&aacute;rios que tenham
      necessidade de conhec&ecirc;-las para fins de execu&ccedil;&atilde;o
      deste Contrato; e (c) n&atilde;o fazer e n&atilde;o permitir que
      ningu&eacute;m fa&ccedil;a, direta ou indiretamente, engenharia
      reversa, descompila&ccedil;&atilde;o, desmontagem,
      cria&ccedil;&atilde;o de trabalhos derivados,
      modifica&ccedil;&atilde;o, tradu&ccedil;&atilde;o,
      cria&ccedil;&atilde;o e/ou transfer&ecirc;ncia de quaisquer
      c&oacute;pias das Informa&ccedil;&otilde;es Confidenciais,
      remo&ccedil;&atilde;o de qualquer identifica&ccedil;&atilde;o,
      incluindo direitos autorais, marcas registradas, patentes ou outros
      avisos, contidos ou relacionados aos sites da Empresa. O disposto
      acima n&atilde;o se aplica a informa&ccedil;&otilde;es que estejam
      ou se tornem geralmente dispon&iacute;veis ao p&uacute;blico sem
      culpa do Afiliado, ou que eram de seu conhecimento antes de sua
      divulga&ccedil;&atilde;o pela Empresa, conforme evidenciado pelos
      registros escritos do Afiliado.</span
    >
  </li>
  <li class="li48">
    <span class="s23"
      >A Empresa ser&aacute; propriet&aacute;ria e manter&aacute; todos os
      direitos, t&iacute;tulos e interesses em todos os nomes,
      endere&ccedil;os e outras informa&ccedil;&otilde;es de
      identifica&ccedil;&atilde;o pessoal dos Usu&aacute;rios Indicados e
      dos Leads, e voc&ecirc; n&atilde;o ter&aacute; o direito de receber
      tais dados. Voc&ecirc; n&atilde;o dever&aacute; guardar nenhum
      detalhe sobre a identidade dos Registrados que foram Indicados,
      Leads ou de qualquer pessoa ou entidade que tenha fornecido seus
      dados &agrave; Empresa por meio do link no site do Afiliado.</span
    >
  </li>
</ol>
<li class="li48">
  <span class="s23"><strong>FRAUDE</strong></span>
</li>
<ol class="ol1">
  <li class="li48">
    <span class="s23"
      >Caso a Empresa determine, a seu crit&eacute;rio exclusivo e
      absoluto, que o Afiliado est&aacute; envolvido em qualquer atividade
      fraudulenta, como participar do(s) Programa(s) de
      m&aacute;-f&eacute; e/ou trapacear o(s) Programa(s) e/ou fornecer
      informa&ccedil;&otilde;es falsas ou enganosas (a "<strong
        >Atividade Fraudulenta</strong
      >"), a Empresa ter&aacute; o direito, a seu crit&eacute;rio
      exclusivo e absoluto, de cancelar a participa&ccedil;&atilde;o do
      Afiliado e encerrar a conta do Afiliado, em todo e qualquer
      Programa, a qualquer momento, sem notifica&ccedil;&atilde;o
      pr&eacute;via, e de reter todos os ganhos de Comiss&atilde;o do
      Afiliado no(s) Programa(s).</span
    >
  </li>
  <li class="li48">
    <span class="s23"
      >Voc&ecirc; concorda que a Empresa poder&aacute; compensar estornos
      ou deduzir de outra forma a Comiss&atilde;o e/ou qualquer valor
      devido ao Afiliado.</span
    >
  </li>
</ol>
<li class="li48">
  <span class="s23"
    >A Empresa poder&aacute; encerrar, a qualquer momento e sem justa
    causa, a conta do Afiliado no Site.</span
  >
</li>
<li class="li48">
  <span class="s23"
    >Voc&ecirc; entende e concorda que qualquer uma das
    a&ccedil;&otilde;es a seguir, praticadas por voc&ecirc; ou por
    qualquer pessoa sob seu controle, resultar&aacute; no cancelamento
    imediato da(s) conta(s) do Afiliado e na perda de todas as
    Comiss&otilde;es e ganhos n&atilde;o pagos do Afiliado (mediante
    notifica&ccedil;&atilde;o do Site): <br />(a) Envio de QUALQUER e-mail
    promocional em nome dos sites que participam do(s) Programa(s);
    <br />(b) Promo&ccedil;&atilde;o de conte&uacute;do como:
    bestialidade, pornografia infantil/ de menores, estupro, obscenidade,
    viol&ecirc;ncia ou qualquer outra atividade ilegal; <br />(c) Tentar
    fraudar a Empresa de qualquer forma; <br />(d) Fornecer
    informa&ccedil;&otilde;es de conta incorretas ou incompletas;
    <br />(e) Violar ou infringir quaisquer direitos de qualquer pessoa ou
    entidade, incluindo, sem limita&ccedil;&atilde;o, quaisquer direitos
    autorais, direitos de marca registrada, direitos de patente, direitos
    de publicidade, direitos de privacidade ou qualquer outro direito
    intelectual, pessoal ou de propriedade; <br />(f) Exibir
    an&uacute;ncios sexualmente expl&iacute;citos para consumidores, a
    menos que os consumidores estejam ativamente buscando conte&uacute;do
    sexualmente expl&iacute;cito ou a menos que os consumidores tenham
    consentido em visualizar conte&uacute;do sexualmente expl&iacute;cito;
    <br />(g) Exibi&ccedil;&atilde;o de an&uacute;ncios pop-up sexualmente
    expl&iacute;citos em sites n&atilde;o adultos, para promover qualquer
    um dos Sites. A Empresa tem o poder exclusivo de determinar se um site
    &eacute; de orienta&ccedil;&atilde;o adulta ou n&atilde;o com
    rela&ccedil;&atilde;o a esta cl&aacute;usula; <br />(h) Qualquer outra
    viola&ccedil;&atilde;o dos Termos, conforme alterados periodicamente,
    ou das regras e regulamentos de qualquer Programa; <br />ou <br />(i)
    A Empresa tem motivos para acreditar que qualquer um dos itens
    anteriores tenha ocorrido ou possa ocorrer.</span
  >
</li>
<li class="li48">
  <span class="s23"><strong>DIVERSOS</strong></span>
</li>
<ol class="ol1">
  <li class="li48">
    <span class="s23"
      >Voc&ecirc; est&aacute; vinculado aos Termos, bem como &agrave;s
      regras e regulamentos espec&iacute;ficos de cada Programa.</span
    >
  </li>
  <li class="li48">
    <span class="s23"
      >Al&eacute;m dos Termos, o Site pode ter Termos de Uso adicionais
      que s&atilde;o, e se tornar&atilde;o, parte integrante dos
      Termos.</span
    >
  </li>
  <li class="li48">
    <span class="s23"
      >Este Contrato constitui o acordo integral entre Voc&ecirc; e a
      Empresa com rela&ccedil;&atilde;o ao assunto aqui tratado, e os
      Termos substituem todos os entendimentos, escritos e
      representa&ccedil;&otilde;es anteriores, orais ou escritos, e
      somente poder&atilde;o ser alterados pela Empresa.</span
    >
  </li>
  <li class="li48">
    <span class="s23"
      >Se qualquer disposi&ccedil;&atilde;o deste Contrato for considerada
      nula ou inexequ&iacute;vel em qualquer medida por um tribunal de
      jurisdi&ccedil;&atilde;o competente, essa disposi&ccedil;&atilde;o
      ser&aacute; considerada exclu&iacute;da e removida apenas na medida
      em que as disposi&ccedil;&otilde;es restantes e este Contrato sejam
      exequ&iacute;veis. Salvo disposi&ccedil;&atilde;o espec&iacute;fica
      em contr&aacute;rio, as disposi&ccedil;&otilde;es deste Contrato
      sobreviver&atilde;o &agrave; sua rescis&atilde;o.</span
    >
  </li>
  <li class="li48">
    <span class="s23">Voc&ecirc; </span
    ><span class="s22"><strong>n&atilde;o dever&aacute; </strong></span
    ><span class="s23"
      >anunciar ou fazer solicita&ccedil;&otilde;es membros da Empresa ou
      de qualquer um dos sites da Empresa por e-mail, mensagens de texto,
      mensagens do Twitter, chamadas telef&ocirc;nicas, folhetos,
      panfletos, correio dos EUA, p&ocirc;steres, cupons, folhetos,
      solicita&ccedil;&otilde;es pessoais ou solicita&ccedil;&otilde;es
      por qualquer outro meio, a menos que voc&ecirc; tenha uma
      permiss&atilde;o por escrito da Empresa</span
    >
  </li>
  <li class="li48">
    <span class="s23"
      >Voc&ecirc; reconhece e concorda que a Empresa n&atilde;o oferece
      garantias de qualquer tipo</span
    >
  </li>
  <li class="li48">
    <span class="s23"
      >Voc&ecirc; tamb&eacute;m entende e concorda que a Empresa pode
      compartilhar informa&ccedil;&otilde;es pessoais selecionadas com
      terceiros para fins de verifica&ccedil;&atilde;o e
      complementa&ccedil;&atilde;o de dados.</span
    >
  </li>
  <li class="li48">
    <span class="s23"
      >A Empresa se reserva o direito de alterar os termos dos Programas,
      bem como as escalas de pagamento, a qualquer momento e a seu
      crit&eacute;rio exclusivo e absoluto. Toda e qualquer
      altera&ccedil;&atilde;o ser&aacute; aplic&aacute;vel e v&aacute;lida
      ap&oacute;s a publica&ccedil;&atilde;o dos termos no Site, sem aviso
      pr&eacute;vio.</span
    >
  </li>
  <li class="li48">
    <span class="s23"
      >As partes deste instrumento s&atilde;o e permanecer&atilde;o
      contratantes independentes, e nada neste documento ser&aacute;
      considerado como cria&ccedil;&atilde;o de qualquer relacionamento de
      ag&ecirc;ncia, parceria ou joint-venture entre as partes. Nenhuma
      das partes ser&aacute; considerada um funcion&aacute;rio ou
      representante legal da outra, nem ter&aacute; qualquer direito ou
      autoridade para criar qualquer obriga&ccedil;&atilde;o em nome da
      outra parte.</span
    >
  </li>
  <li class="li48">
    <span class="s23"
      >Este Contrato ser&aacute; regido pelas leis do Chipre e o tribunal
      aplic&aacute;vel no Chipre ter&aacute; a jurisdi&ccedil;&atilde;o
      exclusiva com rela&ccedil;&atilde;o a qualquer a&ccedil;&atilde;o
      decorrente deste Contrato.</span
    >
  </li>
  <li class="li48">
    <span class="s23"
      >Quaisquer disposi&ccedil;&otilde;es deste instrumento que,
      expressamente ou por sua natureza, devam sobreviver &agrave;
      rescis&atilde;o ou expira&ccedil;&atilde;o deste Contrato para
      atingir seu objetivo, dever&atilde;o sobreviver at&eacute; que
      n&atilde;o seja mais necess&aacute;rio que sobrevivam para atingir
      esse objetivo.</span
    >
  </li>
</ol>
</ol>
<p><br></p>`
