<template>
  <div class="px-4 pt-24 pb-20 md:py-36 bg-gray1 text-black1">
    <div class="max-w-4xl mx-auto space-y-8 md:space-y-10 bg-white px-6 py-8 md:px-10 md:py-12">
      <h1 class="text-xl font-bold">
        {{ locale === "en" ? "Terms of use" : "利用規約" }}
      </h1>
      <div class="space-y-6 md:space-y-8">
        <p class="text-sm">
          {{
            locale === "en"
              ? `These terms of use (hereinafter referred to as the “Terms of Use”) are established by the Fast Notion Management Office (hereinafter referred to as the “Company”). The Terms of Use apply to the application “Fast Notion” (hereinafter referred to as the “Service”) provided by the Company on this website. All registered users (hereinafter referred to as “Users”) are required to use the Service in accordance with these Terms.`
              : "この利用規約（以下、「本規約」といいます。）は、Fast Notion 運営事務局（以下、「当社」といいます。）がこのウェブサイト上で提供するアプリ Fast Notion（以下，「本サービス」といいます。）の利用条件を定めるものです。登録ユーザーの皆さま（以下，「ユーザー」といいます。）には，本規約に従って，本サービスをご利用いただきます。"
          }}
        </p>
        <template v-for="(term, index) in terms" :key="term.title">
          <div class="space-y-4">
            <h2 class="font-bold">{{ locale === "en" ? term.titleEn : term.title }}</h2>
            <p class="text-sm" v-html="locale === 'en' ? term.descriptionEn : term.description"></p>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { locale } = useI18n();

useHead(() => ({
  title: locale.value === "en" ? "Terms of use" : "利用規約",
}));

interface Term {
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
}

const terms: Term[] = [
  {
    title: "第1条（適用）",
    titleEn: "Article 1 (Application)",
    description:
      "本規約は，ユーザーと当社との間の本サービスの利用に関わる一切の関係に適用されるものとします。当社は本サービスに関し，本規約のほか，ご利用にあたってのルール等，各種の定め（以下，「個別規定」といいます。）をすることがあります。これら個別規定はその名称のいかんに関わらず，本規約の一部を構成するものとします。本規約の規定が前条の個別規定の規定と矛盾する場合には，個別規定において特段の定めなき限り，個別規定の規定が優先されるものとします。",
    descriptionEn:
      'This Agreement shall apply to all relationships between the User and the Company in relation to the use of the Service. This Agreement shall apply to all relationships between the User and the Company regarding the use of the Service. In addition to this Agreement, the Company may make various provisions regarding the Service, such as rules for use (hereinafter referred to as "Individual Provisions"). These individual regulations may be called by any name. These Individual Regulations, regardless of their names, shall constitute a part of these Terms. In the event that any provision of these Terms of Use is inconsistent with any provision of the Individual Provisions of the preceding article, the provisions of the Individual Provisions shall take precedence unless otherwise specified in the Individual Provisions.',
  },
  {
    title: "第2条（利用登録）",
    titleEn: "Article 2 (User registration)",
    description:
      "本サービスにおいては，登録希望者が本規約に同意の上，当社の定める方法によって利用登録を申請し，当社がこれを承認することによって，利用登録が完了するものとします。当社は，利用登録の申請者に以下の事由があると判断した場合，利用登録の申請を承認しないことがあり，その理由については一切の開示義務を負わないものとします。利用登録の申請に際して虚偽の事項を届け出た場合本規約に違反したことがある者からの申請である場合その他，当社が利用登録を相当でないと判断した場合",
    descriptionEn:
      "Registration for this service shall be completed when the applicant agrees to these Terms of Use, applies for registration in accordance with the method specified by the Company, and the Company approves the application. If the Company determines that the applicant has any of the following reasons, the Company may not approve the application for registration, and the Company shall not be obligated to disclose any of the reasons. (1) The applicant has submitted false information when applying for registration (2) The applicant has violated these Terms of Use (3) The applicant is judged by the Company to be unsuitable for registration.",
  },
  {
    title: "第3条（利用料金および支払方法）",
    titleEn: "Article 3 (Usage fees and payment methods)",
    description:
      "ユーザーは，本サービスの有料部分の対価として，当社が別途定め，本ウェブサイトに表示する利用料金を，当社が指定する方法により支払うものとします。ユーザーが利用料金の支払を遅滞した場合には，ユーザーは年14．6％の割合による遅延損害金を支払うものとします。",
    descriptionEn:
      "The user shall pay the usage fee separately determined by the Company and displayed on this website as compensation for the paid portion of the Service, using the method designated by the Company. In the event that a user delays payment of the usage fee, the user shall pay a late fee at the rate of 14.6% per year.",
  },
  {
    title: "第4条（禁止事項）",
    titleEn: "Article 4 (Prohibited Matters)",
    description:
      "ユーザーは，本サービスの利用にあたり，以下の行為をしてはなりません。<br>法令または公序良俗に違反する行為犯罪行為に関連する行為本サービスの内容等，本サービスに含まれる著作権，商標権ほか知的財産権を侵害する行為当社，ほかのユーザー，またはその他第三者のサーバーまたはネットワークの機能を破壊したり，妨害したりする行為本サービスによって得られた情報を商業的に利用する行為当社のサービスの運営を妨害するおそれのある行為不正アクセスをし，またはこれを試みる行為他のユーザーに関する個人情報等を収集または蓄積する行為不正な目的を持って本サービスを利用する行為本サービスの他のユーザーまたはその他の第三者に不利益，損害，不快感を与える行為他のユーザーに成りすます行為当社が許諾しない本サービス上での宣伝，広告，勧誘，または営業行為面識のない異性との出会いを目的とした行為当社のサービスに関連して，反社会的勢力に対して直接または間接に利益を供与する行為その他，当社が不適切と判断する行為",
    descriptionEn:
      "The user shall not commit any of the following acts in using the service.<br>The user shall not commit any of the following acts when using this service: Acts that violate laws and regulations or public order and morals Acts that are related to criminal acts Acts that infringe on copyrights, trademark rights, or other intellectual property rights contained in this service, including the contents of this service Acts that destroy or interfere with the server or network functions of this company, other users, or other third parties Acts that may interfere with the operation of the Company's servicesActs that may interfere with the operation of the Company's servicesActs that gain unauthorized access or attempt to do soActs that collect or accumulate personal information, etc., about other usersActs that use this service with an unauthorized purposeActs that cause disadvantage, damage, or discomfort to other users of this service or other third parties Any act of giving disadvantage, damage, or discomfort to other users of this service or other third parties Any act of pretending to be another user Any act of advertising, solicitation, or sales on this service that is not authorized by this company Any act of providing direct or indirect benefit to antisocial forces in relation to this company's service Any other act that this company deems inappropriate Any other act that the Company deems inappropriate.",
  },
  {
    title: "第5条（本サービスの提供の停止等）",
    description:
      "当社は，ユーザーに事前に通知することなく本サービスの全部または一部の提供を停止または中断することができるものとします。本サービスにかかるコンピュータシステムの保守点検または更新を行う場合地震，落雷，火災，停電または天災などの不可抗力により，本サービスの提供が困難となった場合コンピュータまたは通信回線等が事故により停止した場合その他，当社が本サービスの提供が困難と判断した場合当社は，本サービスの提供の停止または中断により，ユーザーまたは第三者が被ったいかなる不利益または損害についても，一切の責任を負わないものとします。",
    titleEn: "Article 5 (Suspension of provision of this service, etc.)",
    descriptionEn:
      "The Company may stop or suspend the provision of all or part of the Service without prior notice to the User. The Company may suspend or interrupt the provision of all or part of the Service without prior notice to the User. The Company shall not be liable for any disadvantages or damages incurred by users or third parties due to the suspension or interruption of the provision of this service.",
  },
  {
    title: "第6条（利用制限および登録抹消）",
    description:
      "当社は，ユーザーが以下のいずれかに該当する場合には，事前の通知なく，ユーザーに対して，本サービスの全部もしくは一部の利用を制限し，またはユーザーとしての登録を抹消することができるものとします。本規約のいずれかの条項に違反した場合登録事項に虚偽の事実があることが判明した場合料金等の支払債務の不履行があった場合当社からの連絡に対し，一定期間返答がない場合本サービスについて，最終の利用から一定期間利用がない場合その他，当社が本サービスの利用を適当でないと判断した場合当社は，本条に基づき当社が行った行為によりユーザーに生じた損害について，一切の責任を負いません。",
    titleEn: "Article 6 (Restriction of Use and Cancellation of Registration)",
    descriptionEn:
      "In the event that a user falls under any of the following, the Company may, without prior notice, restrict the user from using all or part of the Service, or cancel the user's registration. In the event that a user violates any of the provisions of these Terms of UseIn the event that it is found that there is a falsehood in the registration informationIn the event that there is a default in the payment of fees or other obligationsIn the event that there is no response to communication from the Company for a certain period of timeIn the event that there is no use of the Service for a certain period of time after the last use of the ServiceIn the event that the Company deems the use of the Service to be inappropriate The Company shall not be liable for any damages incurred by the User as a result of any action taken by the Company in accordance with this Article.",
  },
  {
    title: "第7条（保証の否認および免責事項）",
    description:
      "当社は，本サービスに事実上または法律上の瑕疵（安全性，信頼性，正確性，完全性，有効性，特定の目的への適合性，セキュリティなどに関する欠陥，エラーやバグ，権利侵害などを含みます。）がないことを明示的にも黙示的にも保証しておりません。当社は，本サービスに起因してユーザーに生じたあらゆる損害について一切の責任を負いません。ただし，本サービスに関する当社とユーザーとの間の契約（本規約を含みます。）が消費者契約法に定める消費者契約となる場合，この免責規定は適用されません。前項ただし書に定める場合であっても，当社は，当社の過失（重過失を除きます。）による債務不履行または不法行為によりユーザーに生じた損害のうち特別な事情から生じた損害（当社またはユーザーが損害発生につき予見し，または予見し得た場合を含みます。）について一切の責任を負いません。また，当社の過失（重過失を除きます。）による債務不履行または不法行為によりユーザーに生じた損害の賠償は，ユーザーから当該損害が発生した月に受領した利用料の額を上限とします。当社は，本サービスに関して，ユーザーと他のユーザーまたは第三者との間において生じた取引，連絡または紛争等について一切責任を負いません。",
    titleEn: "Article 7 (Disclaimer of warranty and disclaimer)",
    descriptionEn:
      "The Company does not warrant, expressly or impliedly, that the Service is free from defects in fact or in law (including defects in safety, reliability, accuracy, completeness, effectiveness, fitness for a particular purpose, security, errors or bugs, infringement of rights, etc.). The Company makes no warranty, express or implied, that the Service is free of defects (including, but not limited to, defects in safety, reliability, accuracy, completeness, effectiveness, fitness for a particular purpose, security, errors or bugs, infringement of rights, etc.) The Company shall not be liable for any damages incurred by the User due to the Service. However, in the event that any contract between the Company and the User regarding the Service (including these Terms) is not in accordance with the Consumer Contract Act, the Company shall not be liable. However, if the contract between the Company and the User regarding the Service (including this Agreement) is a consumer contract as defined in the Consumer Contract Act, this disclaimer shall not apply. (2) Even in the case specified in the proviso of the preceding paragraph, the Company shall not be liable for any loss or damage caused by the Company's default or tort due to its negligence (excluding gross negligence). Even in the case specified in the proviso of the preceding paragraph, the Company shall not be liable for any damage caused by special circumstances (including cases where the Company or the User foresaw or could have foreseen the occurrence of damage) among damage caused to the User due to default or tort by the Company's negligence (excluding gross negligence). In addition, the Company shall not be liable for any damage caused by the Company's negligence (including serious damage). In addition, the Company shall not be liable for any damages caused by the Company's negligence (excluding gross negligence), default or tort. The Company shall not be liable for any damages incurred by the User due to default or tort caused by the Company's negligence (excluding gross negligence), up to the amount of the usage fee received from the User in the month in which such damages occurred. The Company shall not be responsible for any transactions, communications, or disputes that occur between a User and other Users or third parties regarding the Service.",
  },
  {
    title: "第8条（サービス内容の変更等）",
    description: "当社は，ユーザーに通知することなく，本サービスの内容を変更しまたは本サービスの提供を中止することができるものとし，これによってユーザーに生じた損害について一切の責任を負いません。",
    titleEn: "Article 8 (Change of service contents, etc.)",
    descriptionEn:
      "The Company may change the contents of this service or discontinue the provision of this service without notice to the user, and shall not be liable for any damages incurred by the user as a result of such changes.",
  },
  {
    title: "第9条（利用規約の変更）",
    description:
      "当社は，必要と判断した場合には，ユーザーに通知することなくいつでも本規約を変更することができるものとします。なお，本規約の変更後，本サービスの利用を開始した場合には，当該ユーザーは変更後の規約に同意したものとみなします。",
    titleEn: "Article 9 (Changes to the Terms of Use)",
    descriptionEn:
      "The Company may change the Terms of Use at any time without notice to the User if it deems it necessary. In the event that a user begins using the service after a change to these terms, the user shall be deemed to have agreed to the changed terms.",
  },
  {
    title: "第10条（個人情報の取扱い）",
    description: "当社は，本サービスの利用によって取得する個人情報については，当社「プライバシーポリシー」に従い適切に取り扱うものとします。",
    titleEn: "Article 10 (Handling of personal information)",
    descriptionEn: `The Company shall properly handle personal information obtained through the use of the Service in accordance with the Company's "Privacy Policy".`,
  },
  {
    title: "第11条（通知または連絡）",
    description:
      "ユーザーと当社との間の通知または連絡は，当社の定める方法によって行うものとします。当社は,ユーザーから,当社が別途定める方式に従った変更届け出がない限り,現在登録されている連絡先が有効なものとみなして当該連絡先へ通知または連絡を行い,これらは,発信時にユーザーへ到達したものとみなします。",
    titleEn: "Article 11 (Notification or communication)",
    descriptionEn:
      "Notification or communication between the user and the Company shall be conducted in a manner determined by the Company. Unless the user notifies the company of a change in the method specified by the company, the company will assume that the currently registered contact information is valid and send notifications or communications to that address, and these notifications or communications will be deemed to have reached the user at the time they are sent.",
  },
  {
    title: "第12条（権利義務の譲渡の禁止）",
    description: "ユーザーは，当社の書面による事前の承諾なく，利用契約上の地位または本規約に基づく権利もしくは義務を第三者に譲渡し，または担保に供することはできません。",
    titleEn: "Article 12 (Prohibition of transfer of rights and obligations)",
    descriptionEn:
      "The user may not assign or pledge to a third party the position of the user contract or the rights or obligations under this agreement without the prior written consent of the Company.",
  },
  {
    title: "第13条（準拠法・裁判管轄）",
    description: "本規約の解釈にあたっては，日本法を準拠法とします。本サービスに関して紛争が生じた場合には，当社の本店所在地を管轄する裁判所を専属的合意管轄とします。",
    titleEn: "Article 13 (Governing Law and Jurisdiction)",
    descriptionEn: `These Terms of Use shall be governed by and construed in accordance with the laws of Japan. In the event of a dispute regarding the Service, the court having jurisdiction over the location of the Company's head office shall have exclusive jurisdiction.<br>`,
  },
];
</script>
