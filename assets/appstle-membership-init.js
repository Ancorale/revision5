(function (window, k) {
    if (!window.AppstleMembershipIncluded && (!urlIsProductPage() || 'V1' === 'V2')) {
      window.AppstleMembershipIncluded = true;
      appstleLoadScript = function (src, callback) {
        var script = document.createElement("script");
        script.charset = "utf-8";
        script.async = true;
        script.src = src;
        script.onload = script.onreadystatechange = function () {
          if (!script.readyState || /loaded|complete/.test(script.readyState)) {
            script.onload = script.onreadystatechange = null;
            script = k;
            callback && callback();
          }
        };
        document.getElementsByTagName("head")[0].appendChild(script)
      };
      appstleLoadScript("https://cdn.shopify.com/s/files/1/0633/1505/0725/t/13/assets/appstle-membership.js?v=1686167130");

      window.AM = Window.AM || {};
      AM.Config = {
        "selectors": {
            "payment_button_selectors": "form[action$='/cart/add'] .shopify-payment-button",
            "subscriptionLinkSelector": "#MainContent > div > div:nth-child(2)",
            "atcButtonPlacement": "BEFORE",
            "subscriptionLinkPlacement": "BEFORE"
        },
        "useUrlWithCustomerId": false,
        "atcButtonSelector": "div.product-form__buttons",
        "moneyFormat": "{% raw %}${{amount}}{% endraw %}",
        "oneTimePurchaseText": "One Time Purchase",
        "shop": "fireapesfd.myshopify.com",
        "deliveryText": "delivery",
        "purchaseOptionsText": "",
        "manageSubscriptionButtonText": "Manage Membership",
        "subscriptionOptionText": "Sign up today!",
        "sellingPlanSelectTitle": "DELIVERY FREQUENCY",
        "subscriptionPriceDisplayText": "",
        "tooltipTitle": "Membership detail",
        "api_key": "fHzPVq0YtlMD",
        "showTooltipOnClick": "false",
        "tooltipDesctiption": "<strong>Have complete control of your memberships<\/strong><br\/><br\/>Skip, reschedule, edit, cancel deliveries anytime matching your needs.",
        "tooltipDescriptionOnPrepaidPlan": "<b>Prepaid Plan Details<\/b><\/br> Total price: {{{totalPrice}}} ( Price for every delivery: {{{pricePerDelivery}}})",
        "tooltipDescriptionOnMultipleDiscount": "<b>Discount Details<\/b><\/br> Initial discount is {{discountOne}} and then {{discountTwo}}",
        "tooltipDescriptionCustomization": "{{{defaultTooltipDescription}}} <\/br>  {{{prepaidDetails}}} <\/br> {{{discountDetails}}}",
        "orderStatusManageSubscriptionTitle": "Membership",
        "orderStatusManageSubscriptionDescription": "Continue to your account to view and manage your memberships. Please use the same email address that you used to buy the membership.",
        "orderStatusManageSubscriptionButtonText": "Manage your membership",
        "subscriptionOptionSelectedByDefault" : false,
        "totalPricePerDeliveryText" : "{{{prepaidPerDeliveryPrice}}}\/delivery",
        "memberOnlySellingPlansJson": {},
        "fieldsBySellingPlanId": "{\"gid:\/\/shopify\/SellingPlan\/3536126181\":\"[{\\\"label\\\":\\\"\\\",\\\"type\\\":\\\"text\\\",\\\"required\\\":false,\\\"visible\\\":false}]\"}",
        "rulesByCustomerTag": "{\"ccfdmem\":[\"[{\\\"rule\\\":\\\"element\\\",\\\"selector\\\":\\\"#MainContent\\\",\\\"message\\\":\\\"Sorry, Members Only!\\\\n<br><br>\\\\n<p class=\\\\\\\"membut\\\\\\\">\\\\n  <a\\\\n    href=\\\\\\\"https:\/\/fireapesfd.com\/products\/ccfd-members-club\\\\\\\"\\\\n    title=\\\\\\\"Join Today!\\\\\\\"\\\\n  >\\\\n    <button>JOIN THE CCFD MEMBERS CLUB<\/button>\\\\n  <\/a>\\\\n<\/p>\\\",\\\"path\\\":\\\"\/collections\/ccfd-members-club-collection\\\",\\\"pathMatch\\\":\\\"contains\\\",\\\"discountCode\\\":\\\"\\\",\\\"discountMessage\\\":\\\"\\\",\\\"discountUrl\\\":\\\"\\\",\\\"deliveryFrequency\\\":\\\"Monthly\\\",\\\"limitAccessType\\\":\\\"collection\\\",\\\"discountCodeText\\\":\\\"\\\",\\\"discountPercentage\\\":\\\"\\\",\\\"discountAmount\\\":\\\"\\\",\\\"elementRestrictType\\\":\\\"url\\\",\\\"bucketCategory\\\":\\\"tags\\\",\\\"bucketCategoryValue\\\":\\\"\\\",\\\"discountCodeDetails\\\":\\\"\\\",\\\"membershipName\\\":\\\"CCFD Members Club\\\"},{\\\"rule\\\":\\\"discount\\\",\\\"selector\\\":\\\"\\\",\\\"message\\\":\\\"\\\",\\\"path\\\":\\\"\\\",\\\"pathMatch\\\":\\\"contains\\\",\\\"discountMessage\\\":\\\"5% off CCFD Members Club Collection \u2022 For ccfdmem customers\\\",\\\"discountUrl\\\":\\\"https:\/\/fireapesfd.com\/discount\/8G3BEH4W8BGG?redirect=%2Fcollections%2Fccfd-members-club-collection\\\",\\\"deliveryFrequency\\\":\\\"Monthly\\\",\\\"limitAccessType\\\":\\\"percentage-discount\\\",\\\"discountAmount\\\":\\\"\\\",\\\"elementRestrictType\\\":\\\"url\\\",\\\"bucketCategory\\\":\\\"tags\\\",\\\"bucketCategoryValue\\\":\\\"\\\",\\\"discountCodeDetails\\\":{\\\"codeDiscountNode\\\":{\\\"__typename\\\":\\\"DiscountCodeNode\\\",\\\"id\\\":\\\"gid:\/\/shopify\/DiscountCodeNode\/1225713058021\\\",\\\"codeDiscount\\\":{\\\"__typename\\\":\\\"DiscountCodeBasic\\\",\\\"appliesOncePerCustomer\\\":false,\\\"asyncUsageCount\\\":0,\\\"codeCount\\\":1,\\\"codes\\\":{\\\"__typename\\\":\\\"DiscountRedeemCodeConnection\\\",\\\"edges\\\":[{\\\"__typename\\\":\\\"DiscountRedeemCodeEdge\\\",\\\"node\\\":{\\\"__typename\\\":\\\"DiscountRedeemCode\\\",\\\"code\\\":\\\"8G3BEH4W8BGG\\\"}}]},\\\"createdAt\\\":\\\"2023-02-28T15:22:49Z\\\",\\\"customerGets\\\":{\\\"__typename\\\":\\\"DiscountCustomerGets\\\",\\\"items\\\":{\\\"__typename\\\":\\\"DiscountCollections\\\",\\\"collections\\\":{\\\"__typename\\\":\\\"CollectionConnection\\\",\\\"edges\\\":[{\\\"__typename\\\":\\\"CollectionEdge\\\",\\\"node\\\":{\\\"__typename\\\":\\\"Collection\\\",\\\"handle\\\":\\\"ccfd-members-club-collection\\\",\\\"title\\\":\\\"CCFD Members Club Collection\\\",\\\"id\\\":\\\"gid:\/\/shopify\/Collection\/403881328869\\\"}}]}},\\\"value\\\":{\\\"__typename\\\":\\\"DiscountPercentage\\\",\\\"percentage\\\":0.05},\\\"appliesOnOneTimePurchase\\\":true,\\\"appliesOnSubscription\\\":true},\\\"customerSelection\\\":{\\\"__typename\\\":\\\"DiscountCustomerSegments\\\"},\\\"endsAt\\\":null,\\\"shortSummary\\\":\\\"5% off CCFD Members Club Collection\\\",\\\"startsAt\\\":\\\"2023-02-28T15:18:02Z\\\",\\\"status\\\":\\\"ACTIVE\\\",\\\"summary\\\":\\\"5% off CCFD Members Club Collection \u2022 For ccfdmem customers\\\",\\\"title\\\":\\\"8G3BEH4W8BGG\\\",\\\"usageLimit\\\":null,\\\"shareableUrls\\\":[{\\\"__typename\\\":\\\"DiscountShareableUrl\\\",\\\"targetItemImage\\\":{\\\"__typename\\\":\\\"Image\\\",\\\"url\\\":\\\"https:\/\/cdn.shopify.com\/s\/files\/1\/0633\/1505\/0725\/collections\/Red_Stripe_small.png?v=1680120511\\\"},\\\"targetType\\\":\\\"COLLECTION\\\",\\\"title\\\":\\\"CCFD Members Club Collection\\\",\\\"url\\\":\\\"https:\/\/fireapesfd.com\/discount\/8G3BEH4W8BGG?redirect=%2Fcollections%2Fccfd-members-club-collection\\\"},{\\\"__typename\\\":\\\"DiscountShareableUrl\\\",\\\"targetItemImage\\\":null,\\\"targetType\\\":\\\"HOME\\\",\\\"title\\\":\\\"Homepage\\\",\\\"url\\\":\\\"https:\/\/fireapesfd.com\/discount\/8G3BEH4W8BGG\\\"}]}}},\\\"membershipName\\\":\\\"CCFD Members Club\\\",\\\"discountCode\\\":\\\"1225713058021\\\"}]\"]}",
        "membershipByCustomerTag": "{\"ccfdmem\":[{\"id\":3814,\"shop\":\"fireapesfd.myshopify.com\",\"groupName\":\"CCFD Members Club\",\"subscriptionId\":2327249125,\"productCount\":0,\"productVariantCount\":0,\"infoJson\":\"{\\\"id\\\":2327249125,\\\"productCount\\\":0,\\\"productVariantCount\\\":null,\\\"subscriptionPlans\\\":[{\\\"frequencyCount\\\":1,\\\"frequencyInterval\\\":\\\"MONTH\\\",\\\"billingFrequencyCount\\\":1,\\\"billingFrequencyInterval\\\":\\\"MONTH\\\",\\\"frequencyName\\\":\\\"Monthly\\\",\\\"discountOffer\\\":null,\\\"discountOffer2\\\":null,\\\"afterCycle1\\\":0,\\\"afterCycle2\\\":0,\\\"discountType\\\":null,\\\"discountType2\\\":null,\\\"discountEnabled\\\":false,\\\"discountEnabled2\\\":false,\\\"discountEnabledMasked\\\":false,\\\"discountEnabled2Masked\\\":false,\\\"id\\\":\\\"gid:\/\/shopify\/SellingPlan\/3536126181\\\",\\\"frequencyType\\\":\\\"ON_PURCHASE_DAY\\\",\\\"specificDayValue\\\":null,\\\"specificDayEnabled\\\":false,\\\"maxCycles\\\":null,\\\"minCycles\\\":6,\\\"cutOff\\\":0,\\\"prepaidFlag\\\":\\\"false\\\",\\\"idNew\\\":\\\"gid:\/\/shopify\/SellingPlan\/3536126181\\\",\\\"planType\\\":\\\"PAY_AS_YOU_GO\\\",\\\"deliveryPolicyPreAnchorBehavior\\\":\\\"ASAP\\\",\\\"freeTrialEnabled\\\":false,\\\"freeTrialCount\\\":null,\\\"freeTrialInterval\\\":null,\\\"frequencyDescription\\\":null}],\\\"groupName\\\":\\\"CCFD Members Club\\\",\\\"productIds\\\":\\\"[]\\\",\\\"productId\\\":null,\\\"variantIds\\\":\\\"[{\\\\\\\"id\\\\\\\":43658316185829,\\\\\\\"title\\\\\\\":\\\\\\\"CCFD Members Club - Default Title\\\\\\\"}]\\\",\\\"accessoryProductIds\\\":null,\\\"customerTag\\\":\\\"ccfdmem\\\",\\\"orderTag\\\":\\\"ccfdmem\\\",\\\"rulesJson\\\":\\\"[{\\\\\\\"rule\\\\\\\":\\\\\\\"element\\\\\\\",\\\\\\\"selector\\\\\\\":\\\\\\\"#MainContent\\\\\\\",\\\\\\\"message\\\\\\\":\\\\\\\"Sorry, Members Only!\\\\\\\\n<br><br>\\\\\\\\n<p class=\\\\\\\\\\\\\\\"membut\\\\\\\\\\\\\\\">\\\\\\\\n  <a\\\\\\\\n    href=\\\\\\\\\\\\\\\"https:\/\/fireapesfd.com\/products\/ccfd-members-club\\\\\\\\\\\\\\\"\\\\\\\\n    title=\\\\\\\\\\\\\\\"Join Today!\\\\\\\\\\\\\\\"\\\\\\\\n  >\\\\\\\\n    <button>JOIN THE CCFD MEMBERS CLUB<\/button>\\\\\\\\n  <\/a>\\\\\\\\n<\/p>\\\\\\\",\\\\\\\"path\\\\\\\":\\\\\\\"\/collections\/ccfd-members-club-collection\\\\\\\",\\\\\\\"pathMatch\\\\\\\":\\\\\\\"contains\\\\\\\",\\\\\\\"discountCode\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"discountMessage\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"discountUrl\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"deliveryFrequency\\\\\\\":\\\\\\\"Monthly\\\\\\\",\\\\\\\"limitAccessType\\\\\\\":\\\\\\\"collection\\\\\\\",\\\\\\\"discountCodeText\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"discountPercentage\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"discountAmount\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"elementRestrictType\\\\\\\":\\\\\\\"url\\\\\\\",\\\\\\\"bucketCategory\\\\\\\":\\\\\\\"tags\\\\\\\",\\\\\\\"bucketCategoryValue\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"discountCodeDetails\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"membershipName\\\\\\\":\\\\\\\"CCFD Members Club\\\\\\\"},{\\\\\\\"rule\\\\\\\":\\\\\\\"discount\\\\\\\",\\\\\\\"selector\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"message\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"path\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"pathMatch\\\\\\\":\\\\\\\"contains\\\\\\\",\\\\\\\"discountMessage\\\\\\\":\\\\\\\"5% off CCFD Members Club Collection \u2022 For ccfdmem customers\\\\\\\",\\\\\\\"discountUrl\\\\\\\":\\\\\\\"https:\/\/fireapesfd.com\/discount\/8G3BEH4W8BGG?redirect=%2Fcollections%2Fccfd-members-club-collection\\\\\\\",\\\\\\\"deliveryFrequency\\\\\\\":\\\\\\\"Monthly\\\\\\\",\\\\\\\"limitAccessType\\\\\\\":\\\\\\\"percentage-discount\\\\\\\",\\\\\\\"discountAmount\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"elementRestrictType\\\\\\\":\\\\\\\"url\\\\\\\",\\\\\\\"bucketCategory\\\\\\\":\\\\\\\"tags\\\\\\\",\\\\\\\"bucketCategoryValue\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"discountCodeDetails\\\\\\\":{\\\\\\\"codeDiscountNode\\\\\\\":{\\\\\\\"__typename\\\\\\\":\\\\\\\"DiscountCodeNode\\\\\\\",\\\\\\\"id\\\\\\\":\\\\\\\"gid:\/\/shopify\/DiscountCodeNode\/1225713058021\\\\\\\",\\\\\\\"codeDiscount\\\\\\\":{\\\\\\\"__typename\\\\\\\":\\\\\\\"DiscountCodeBasic\\\\\\\",\\\\\\\"appliesOncePerCustomer\\\\\\\":false,\\\\\\\"asyncUsageCount\\\\\\\":0,\\\\\\\"codeCount\\\\\\\":1,\\\\\\\"codes\\\\\\\":{\\\\\\\"__typename\\\\\\\":\\\\\\\"DiscountRedeemCodeConnection\\\\\\\",\\\\\\\"edges\\\\\\\":[{\\\\\\\"__typename\\\\\\\":\\\\\\\"DiscountRedeemCodeEdge\\\\\\\",\\\\\\\"node\\\\\\\":{\\\\\\\"__typename\\\\\\\":\\\\\\\"DiscountRedeemCode\\\\\\\",\\\\\\\"code\\\\\\\":\\\\\\\"8G3BEH4W8BGG\\\\\\\"}}]},\\\\\\\"createdAt\\\\\\\":\\\\\\\"2023-02-28T15:22:49Z\\\\\\\",\\\\\\\"customerGets\\\\\\\":{\\\\\\\"__typename\\\\\\\":\\\\\\\"DiscountCustomerGets\\\\\\\",\\\\\\\"items\\\\\\\":{\\\\\\\"__typename\\\\\\\":\\\\\\\"DiscountCollections\\\\\\\",\\\\\\\"collections\\\\\\\":{\\\\\\\"__typename\\\\\\\":\\\\\\\"CollectionConnection\\\\\\\",\\\\\\\"edges\\\\\\\":[{\\\\\\\"__typename\\\\\\\":\\\\\\\"CollectionEdge\\\\\\\",\\\\\\\"node\\\\\\\":{\\\\\\\"__typename\\\\\\\":\\\\\\\"Collection\\\\\\\",\\\\\\\"handle\\\\\\\":\\\\\\\"ccfd-members-club-collection\\\\\\\",\\\\\\\"title\\\\\\\":\\\\\\\"CCFD Members Club Collection\\\\\\\",\\\\\\\"id\\\\\\\":\\\\\\\"gid:\/\/shopify\/Collection\/403881328869\\\\\\\"}}]}},\\\\\\\"value\\\\\\\":{\\\\\\\"__typename\\\\\\\":\\\\\\\"DiscountPercentage\\\\\\\",\\\\\\\"percentage\\\\\\\":0.05},\\\\\\\"appliesOnOneTimePurchase\\\\\\\":true,\\\\\\\"appliesOnSubscription\\\\\\\":true},\\\\\\\"customerSelection\\\\\\\":{\\\\\\\"__typename\\\\\\\":\\\\\\\"DiscountCustomerSegments\\\\\\\"},\\\\\\\"endsAt\\\\\\\":null,\\\\\\\"shortSummary\\\\\\\":\\\\\\\"5% off CCFD Members Club Collection\\\\\\\",\\\\\\\"startsAt\\\\\\\":\\\\\\\"2023-02-28T15:18:02Z\\\\\\\",\\\\\\\"status\\\\\\\":\\\\\\\"ACTIVE\\\\\\\",\\\\\\\"summary\\\\\\\":\\\\\\\"5% off CCFD Members Club Collection \u2022 For ccfdmem customers\\\\\\\",\\\\\\\"title\\\\\\\":\\\\\\\"8G3BEH4W8BGG\\\\\\\",\\\\\\\"usageLimit\\\\\\\":null,\\\\\\\"shareableUrls\\\\\\\":[{\\\\\\\"__typename\\\\\\\":\\\\\\\"DiscountShareableUrl\\\\\\\",\\\\\\\"targetItemImage\\\\\\\":{\\\\\\\"__typename\\\\\\\":\\\\\\\"Image\\\\\\\",\\\\\\\"url\\\\\\\":\\\\\\\"https:\/\/cdn.shopify.com\/s\/files\/1\/0633\/1505\/0725\/collections\/Red_Stripe_small.png?v=1680120511\\\\\\\"},\\\\\\\"targetType\\\\\\\":\\\\\\\"COLLECTION\\\\\\\",\\\\\\\"title\\\\\\\":\\\\\\\"CCFD Members Club Collection\\\\\\\",\\\\\\\"url\\\\\\\":\\\\\\\"https:\/\/fireapesfd.com\/discount\/8G3BEH4W8BGG?redirect=%2Fcollections%2Fccfd-members-club-collection\\\\\\\"},{\\\\\\\"__typename\\\\\\\":\\\\\\\"DiscountShareableUrl\\\\\\\",\\\\\\\"targetItemImage\\\\\\\":null,\\\\\\\"targetType\\\\\\\":\\\\\\\"HOME\\\\\\\",\\\\\\\"title\\\\\\\":\\\\\\\"Homepage\\\\\\\",\\\\\\\"url\\\\\\\":\\\\\\\"https:\/\/fireapesfd.com\/discount\/8G3BEH4W8BGG\\\\\\\"}]}}},\\\\\\\"membershipName\\\\\\\":\\\\\\\"CCFD Members Club\\\\\\\",\\\\\\\"discountCode\\\\\\\":\\\\\\\"1225713058021\\\\\\\"}]\\\",\\\"formFieldsJson\\\":\\\"[{\\\\\\\"label\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"type\\\\\\\":\\\\\\\"text\\\\\\\",\\\\\\\"required\\\\\\\":false,\\\\\\\"visible\\\\\\\":false}]\\\"}\",\"productIds\":\"\",\"variantIds\":\"43658316185829\",\"variantProductIds\":\"8104740028645\",\"customerTag\":\"ccfdmem\",\"orderTag\":\"ccfdmem\",\"rulesJson\":\"[{\\\"rule\\\":\\\"element\\\",\\\"selector\\\":\\\"#MainContent\\\",\\\"message\\\":\\\"Sorry, Members Only!\\\\n<br><br>\\\\n<p class=\\\\\\\"membut\\\\\\\">\\\\n  <a\\\\n    href=\\\\\\\"https:\/\/fireapesfd.com\/products\/ccfd-members-club\\\\\\\"\\\\n    title=\\\\\\\"Join Today!\\\\\\\"\\\\n  >\\\\n    <button>JOIN THE CCFD MEMBERS CLUB<\/button>\\\\n  <\/a>\\\\n<\/p>\\\",\\\"path\\\":\\\"\/collections\/ccfd-members-club-collection\\\",\\\"pathMatch\\\":\\\"contains\\\",\\\"discountCode\\\":\\\"\\\",\\\"discountMessage\\\":\\\"\\\",\\\"discountUrl\\\":\\\"\\\",\\\"deliveryFrequency\\\":\\\"Monthly\\\",\\\"limitAccessType\\\":\\\"collection\\\",\\\"discountCodeText\\\":\\\"\\\",\\\"discountPercentage\\\":\\\"\\\",\\\"discountAmount\\\":\\\"\\\",\\\"elementRestrictType\\\":\\\"url\\\",\\\"bucketCategory\\\":\\\"tags\\\",\\\"bucketCategoryValue\\\":\\\"\\\",\\\"discountCodeDetails\\\":\\\"\\\",\\\"membershipName\\\":\\\"CCFD Members Club\\\"},{\\\"rule\\\":\\\"discount\\\",\\\"selector\\\":\\\"\\\",\\\"message\\\":\\\"\\\",\\\"path\\\":\\\"\\\",\\\"pathMatch\\\":\\\"contains\\\",\\\"discountMessage\\\":\\\"5% off CCFD Members Club Collection \u2022 For ccfdmem customers\\\",\\\"discountUrl\\\":\\\"https:\/\/fireapesfd.com\/discount\/8G3BEH4W8BGG?redirect=%2Fcollections%2Fccfd-members-club-collection\\\",\\\"deliveryFrequency\\\":\\\"Monthly\\\",\\\"limitAccessType\\\":\\\"percentage-discount\\\",\\\"discountAmount\\\":\\\"\\\",\\\"elementRestrictType\\\":\\\"url\\\",\\\"bucketCategory\\\":\\\"tags\\\",\\\"bucketCategoryValue\\\":\\\"\\\",\\\"discountCodeDetails\\\":{\\\"codeDiscountNode\\\":{\\\"__typename\\\":\\\"DiscountCodeNode\\\",\\\"id\\\":\\\"gid:\/\/shopify\/DiscountCodeNode\/1225713058021\\\",\\\"codeDiscount\\\":{\\\"__typename\\\":\\\"DiscountCodeBasic\\\",\\\"appliesOncePerCustomer\\\":false,\\\"asyncUsageCount\\\":0,\\\"codeCount\\\":1,\\\"codes\\\":{\\\"__typename\\\":\\\"DiscountRedeemCodeConnection\\\",\\\"edges\\\":[{\\\"__typename\\\":\\\"DiscountRedeemCodeEdge\\\",\\\"node\\\":{\\\"__typename\\\":\\\"DiscountRedeemCode\\\",\\\"code\\\":\\\"8G3BEH4W8BGG\\\"}}]},\\\"createdAt\\\":\\\"2023-02-28T15:22:49Z\\\",\\\"customerGets\\\":{\\\"__typename\\\":\\\"DiscountCustomerGets\\\",\\\"items\\\":{\\\"__typename\\\":\\\"DiscountCollections\\\",\\\"collections\\\":{\\\"__typename\\\":\\\"CollectionConnection\\\",\\\"edges\\\":[{\\\"__typename\\\":\\\"CollectionEdge\\\",\\\"node\\\":{\\\"__typename\\\":\\\"Collection\\\",\\\"handle\\\":\\\"ccfd-members-club-collection\\\",\\\"title\\\":\\\"CCFD Members Club Collection\\\",\\\"id\\\":\\\"gid:\/\/shopify\/Collection\/403881328869\\\"}}]}},\\\"value\\\":{\\\"__typename\\\":\\\"DiscountPercentage\\\",\\\"percentage\\\":0.05},\\\"appliesOnOneTimePurchase\\\":true,\\\"appliesOnSubscription\\\":true},\\\"customerSelection\\\":{\\\"__typename\\\":\\\"DiscountCustomerSegments\\\"},\\\"endsAt\\\":null,\\\"shortSummary\\\":\\\"5% off CCFD Members Club Collection\\\",\\\"startsAt\\\":\\\"2023-02-28T15:18:02Z\\\",\\\"status\\\":\\\"ACTIVE\\\",\\\"summary\\\":\\\"5% off CCFD Members Club Collection \u2022 For ccfdmem customers\\\",\\\"title\\\":\\\"8G3BEH4W8BGG\\\",\\\"usageLimit\\\":null,\\\"shareableUrls\\\":[{\\\"__typename\\\":\\\"DiscountShareableUrl\\\",\\\"targetItemImage\\\":{\\\"__typename\\\":\\\"Image\\\",\\\"url\\\":\\\"https:\/\/cdn.shopify.com\/s\/files\/1\/0633\/1505\/0725\/collections\/Red_Stripe_small.png?v=1680120511\\\"},\\\"targetType\\\":\\\"COLLECTION\\\",\\\"title\\\":\\\"CCFD Members Club Collection\\\",\\\"url\\\":\\\"https:\/\/fireapesfd.com\/discount\/8G3BEH4W8BGG?redirect=%2Fcollections%2Fccfd-members-club-collection\\\"},{\\\"__typename\\\":\\\"DiscountShareableUrl\\\",\\\"targetItemImage\\\":null,\\\"targetType\\\":\\\"HOME\\\",\\\"title\\\":\\\"Homepage\\\",\\\"url\\\":\\\"https:\/\/fireapesfd.com\/discount\/8G3BEH4W8BGG\\\"}]}}},\\\"membershipName\\\":\\\"CCFD Members Club\\\",\\\"discountCode\\\":\\\"1225713058021\\\"}]\",\"formFieldsJson\":\"[{\\\"label\\\":\\\"\\\",\\\"type\\\":\\\"text\\\",\\\"required\\\":false,\\\"visible\\\":false}]\",\"savedSearchId\":null,\"savedSegmentSearchId\":null}]}",
        "nonMemberOnlySellingPlansJson": {},
        "sellingPlansJson": [{"frequencyCount":1,"frequencyInterval":"MONTH","billingFrequencyCount":1,"billingFrequencyInterval":"MONTH","frequencyName":"Monthly","afterCycle1":0,"afterCycle2":0,"discountEnabled":false,"discountEnabled2":false,"discountEnabledMasked":false,"discountEnabled2Masked":false,"id":"gid://shopify/SellingPlan/3536126181","frequencyType":"ON_PURCHASE_DAY","specificDayEnabled":false,"minCycles":6,"cutOff":0,"prepaidFlag":"false","idNew":"gid://shopify/SellingPlan/3536126181","planType":"PAY_AS_YOU_GO","deliveryPolicyPreAnchorBehavior":"ASAP","freeTrialEnabled":false}],
        "widgetEnabled": true,
        "showTooltip" : true,
        "sortByDefaultSequence": false,
        "showSubOptionBeforeOneTime": false,
        "showStaticTooltip": false,
        "showAppstleLink": false,
        "sellingPlanTitleText" : "",
        "oneTimePriceText" : "{{{price}}}",
        "selectedPayAsYouGoSellingPlanPriceText" : "{{{price}}}",
        "selectedPrepaidSellingPlanPriceText" : "{{{pricePerDelivery}}}",
        "selectedDiscountFormat" : "SAVE {{{selectedDiscountPercentage}}}",
        "manageSubscriptionBtnFormat" : "<a href='apps\/memberships' class='appstle_manageSubBtn' ><button class='btn' style='padding: 2px 20px'>Manage Membership<\/button><a><br><br>",
        "manageSubscriptionUrl" : "apps\/memberships",
        "appstlePlanId": 3,
        "showCheckoutSubscriptionBtn": true,
        "disableLoadingJquery": false,
        "enableMessagingForNonMembers": "false",
        "nonMemberMessaging": "For CCFD Members only. Please login to view.",
        "showMembershipBanner": "true",
        "showDiscountWidget": "false",
        "discountBadgeImageLink": "",
        "widgetBadgeImageLink": "",
        "productPagePriceDescriptionBlockPriceSelector": "",
        "productPagePriceDescriptionBlockParentSelector": "",
        "priceBlockSelector": "",
        "parentSelector": "",
        "reBuyEnabled": "false",
        "switchRadioButtonWidget": false,
        "enableAddJSInterceptor": false,
        "css": {
            "appstle_membership_widget": {
                "margin-top": "" ,
                "margin-bottom": "",
            },

            "appstle_membership_wrapper": {
                "border-width": "",
                "border-color": "",
            },

            "appstle_circle": {
                "border-color": "",
            },

            "appstle_dot": {
                "background-color": "",
            },

            "appstle_select": {
                "padding-top": "",
                "padding-bottom": "",
                "padding-left": "",
                "padding-right": "",
                "border-width": "",
                "border-style": "",
                "border-color": "",
                "border-radius": "",
            },

            "tooltip_subscription_svg": {
                "fill": "",
            },

            "appstle_tooltip": {
                "color": "",
                "background-color": "",
            },

            "appstle_tooltip_border_top_color": {
                "border-top-color": "",
            },

            "appstle_membership_final_price": {
                "color": "",
            },
            "appstle_widget_text_color": {
                "color": "",
            },
            "appstle_selected_background": {
                "background": "transparent",
            },
            "customCSS": "<style>\n  .membut a:not([href]) {\n  cursor: default;\n}\n.membut a:link {\n  text-decoration: none;\n}\n.membut a:visited {\n  text-decoration: none;\n}\n.membut button {\n  padding: 1em 3em;\n  border: 0;\n  border-radius: 25px;\n  background: #ccc;\n  box-shadow: 3px 3px 3px #000;\n}\n.membut button:hover {\n  background-color: #ff0;\n}\n.membut {\n  text-align: center;\n}\n<\/style>",
            "customerPortalCss": "@font-face {\n  font-family: LatS;\n  src: url(https:\/\/cdn.shopify.com\/s\/files\/1\/0633\/1505\/0725\/files\/Lateral-StandardBlack.otf?v=1653751173);\n   }\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\ndiv,\nb {\n    font-family: LatS;\n  }\n\n",
            "priceSelector": "span.price-item.price-item--regular",
            "landingPagePriceSelector": "",
            "quickViewClickSelector": "",
            "badgeTop": "",
            "pricePlacement": "BEFORE",
        }
      };

    }

    function urlIsProductPage() {
    // return null != decodeURIComponent(window.location.pathname).match(/\/products\/(([a-zA-Z0-9]|[\-\.\_\~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[\ud83c\ud83d\ud83e][\ud000-\udfff]){1,})\/?/)
    return decodeURIComponent(window.location.pathname).includes('/products/');
    }
  }
)(window);

