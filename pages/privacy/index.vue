<template>
  <div class="px-4 pt-24 pb-20 md:py-36 bg-gray1 text-black1">
    <div class="max-w-4xl mx-auto space-y-8 md:space-y-10 bg-white px-6 py-8 md:px-10 md:py-12">
      <h1 class="text-xl font-bold">
        {{ locale === "en" ? "Privacy Policy" : "プライバシーポリシー" }}
      </h1>
      <div class="space-y-6 md:space-y-8">
        <p class="text-sm">
          {{
            locale === "en"
              ? `The Operations Office (hereinafter referred to as "we" or "our company") has established the following Privacy Policy (hereinafter referred to as "this Policy") regarding the handling of users' personal information in connection with the services provided on this website (hereinafter referred to as "the Services").`
              : "Fast Notion 運営事務局（以下，「当社」といいます。）は，本ウェブサイト上で提供するサービス（以下,「本サービス」といいます。）における，ユーザーの個人情報の取扱いについて，以下のとおりプライバシーポリシー（以下，「本ポリシー」といいます。）を定めます。"
          }}
        </p>
        <template v-for="term in terms" :key="index">
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
  title: locale.value === "en" ? "Privacy Policy" : "プライバシーポリシー",
}));

const terms = [
  {
    title: "第1条（個人情報）",
    titleEn: "Article 1 (Personal Information)",
    description:
      "「個人情報」とは，個人情報保護法にいう「個人情報」を指すものとし，生存する個人に関する情報であって，当該情報に含まれる氏名，生年月日，住所，電話番号，連絡先その他の記述等により特定の個人を識別できる情報及び容貌，指紋，声紋にかかるデータ，及び健康保険証の保険者番号などの当該情報単体から特定の個人を識別できる情報（個人識別情報）を指します。",
    descriptionEn:
      "'Personal information' refers to 'personal information' as defined by the Personal Information Protection Act. It includes information related to a living individual that can identify a specific individual, such as name, date of birth, address, phone number, contact details, and other descriptions. It also includes data related to appearance, fingerprints, voiceprints, and individual identification information such as health insurance policyholder numbers.",
  },
  {
    title: "第2条（個人情報の収集方法）",
    titleEn: "Article 2 (Methods of Collecting Personal Information)",
    description:
      "当社は，ユーザーが利用登録をする際に氏名，生年月日，住所，電話番号，メールアドレス，銀行口座番号，クレジットカード番号，運転免許証番号などの個人情報をお尋ねすることがあります。また，ユーザーと提携先などとの間でなされたユーザーの個人情報を含む取引記録や決済に関する情報を,当社の提携先（情報提供元，広告主，広告配信先などを含みます。以下，｢提携先｣といいます。）などから収集することがあります。",
    descriptionEn:
      "We may ask for personal information such as name, date of birth, address, phone number, email address, bank account number, credit card number, and driver's license number when users register for our services. Additionally, we may collect transaction records and payment-related information, including users' personal information, from our partners (information providers, advertisers, ad distributors, etc., hereinafter referred to as 'partners').",
  },
  {
    title: "第3条（個人情報を収集・利用する目的）",
    titleEn: "Article 3 (Purpose of Collecting and Using Personal Information)",
    description:
      "当社が個人情報を収集・利用する目的は，以下のとおりです。<br />当社サービスの提供・運営のためユーザーからのお問い合わせに回答するため（本人確認を行うことを含む）ユーザーが利用中のサービスの新機能，更新情報，キャンペーン等及び当社が提供する他のサービスの案内のメールを送付するためメンテナンス，重要なお知らせなど必要に応じたご連絡のため利用規約に違反したユーザーや，不正・不当な目的でサービスを利用しようとするユーザーの特定をし，ご利用をお断りするためユーザーにご自身の登録情報の閲覧や変更，削除，ご利用状況の閲覧を行っていただくため有料サービスにおいて，ユーザーに利用料金を請求するため上記の利用目的に付随する目的,当社の提携先（情報提供元，広告主，広告配信先などを含みます。以下，｢提携先｣といいます。）などから収集することがあります。",
    descriptionEn:
      "The purposes for which we collect and use personal information are as follows:<br />To provide and operate our services<br />To respond to user inquiries (including identity verification)<br />To send emails regarding new features, updates, campaigns, and other services we offer<br />To contact users as necessary for maintenance or important notifications<br />To identify and refuse users who violate the terms of use or misuse our services for fraudulent purposes<br />To allow users to view, modify, or delete their registration information or usage history<br />To charge fees for paid services<br />For purposes incidental to the above purposes<br />Additionally, we may collect information from our partners (information providers, advertisers, ad distributors, etc.).",
  },
  {
    title: "第4条（利用目的の変更）",
    titleEn: "Article 4 (Changes to Purpose of Use)",
    description:
      "当社は，利用目的が変更前と関連性を有すると合理的に認められる場合に限り，個人情報の利用目的を変更するものとします。利用目的の変更を行った場合には，変更後の目的について，当社所定の方法により，ユーザーに通知し，または本ウェブサイト上に公表するものとします。",
    descriptionEn:
      "We may change the purpose of use of personal information only if it is reasonably deemed relevant to the original purpose. In the event of such changes, we will notify users or publicly announce the new purpose on our website using our prescribed methods.",
  },
  {
    title: "第5条（個人情報の第三者提供）",
    titleEn: "Article 5 (Provision of Personal Information to Third Parties)",
    description:
      "当社は，次に掲げる場合を除いて，あらかじめユーザーの同意を得ることなく，第三者に個人情報を提供することはありません。ただし，個人情報保護法その他の法令で認められる場合を除きます。...",
    descriptionEn:
      "We will not provide personal information to third parties without prior user consent, except in the following cases and as permitted by the Personal Information Protection Act and other laws:...",
  },
  {
    title: "第6条（個人情報の開示）",
    titleEn: "Article 6 (Disclosure of Personal Information)",
    description:
      "当社は，次に掲げる場合を除いて，あらかじめユーザーの同意を得ることなく，第三者に個人情報を提供することはありません。ただし，個人情報保護法その他の法令で認められる場合を除きます。...",
    descriptionEn:
      "We will not disclose personal information to third parties without prior user consent, except in the following cases and as permitted by the Personal Information Protection Act and other laws:...",
  },
  {
    title: "第7条（個人情報の訂正および削除）",
    titleEn: "Article 7 (Correction and Deletion of Personal Information)",
    description:
      "ユーザーは，当社の保有する自己の個人情報が誤った情報である場合には，当社が定める手続きにより，当社に対して個人情報の訂正，追加または削除（以下，「訂正等」といいます。）を請求することができます。...",
    descriptionEn: "Users may request the correction, addition, or deletion of their personal information held by us through our prescribed procedures if the information is incorrect. ...",
  },
  {
    title: "第8条（個人情報の利用停止等）",
    titleEn: "Article 8 (Suspension of Use of Personal Information)",
    description:
      "当社は，本人から，個人情報が，利用目的の範囲を超えて取り扱われているという理由，または不正の手段により取得されたものであるという理由により，その利用の停止または消去（以下，「利用停止等」といいます。）を求められた場合には，遅滞なく必要な調査を行います。...",
    descriptionEn:
      "If a user requests suspension or deletion of their personal information due to reasons such as use beyond the intended purpose or acquisition through improper means, we will promptly conduct a necessary investigation. ...",
  },
  {
    title: "第9条（プライバシーポリシーの変更）",
    titleEn: "Article 9 (Changes to Privacy Policy)",
    description: "本ポリシーの内容は，法令その他本ポリシーに別段の定めのある事項を除いて，ユーザーに通知することなく，変更することができるものとします。...",
    descriptionEn: "The contents of this policy may be changed without notifying users, except as otherwise stipulated by law or this policy. ...",
  },
  {
    title: "第10条（お問い合わせ窓口）",
    titleEn: "Article 10 (Contact Information)",
    description: `本ポリシーに関するお問い合わせは，下記の窓口までお願いいたします。<br /><a href="mailto:notionfast@gmail.com" class="underline">notionfast@gmail.com</a>`,
    descriptionEn: "For inquiries regarding this policy, please contact us at the following address:<br /><a href='mailto:notionfast@gmail.com' class='underline'>notionfast@gmail.com</a>",
  },
];
</script>
