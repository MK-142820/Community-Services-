/* Digital Safety Assistant — plain JavaScript, no API or backend */
"use strict";

const $ = (id) => document.getElementById(id);

const translations = {
  en: {
    navHome:"Home", navLearn:"Learn", navChecker:"Message Checker", navQuiz:"Quiz", navDashboard:"Dashboard",
    heroEyebrow:"STAY ALERT. STAY SECURE.", heroTitle:'Your everyday guide to <span>digital safety.</span>',
    heroCopy:"Learn to spot online scams, protect your accounts and build safer digital habits — one small step at a time.",
    exploreBtn:"Explore safety guide", takeQuizBtn:"Take the quiz", heroNote:"Free learning tool • No account required • Your notes stay on this device",
    dailyTip:"TODAY'S SAFETY TIP", tipTitle:"Pause before you tap.", tipCopy:"Never share an OTP, PIN or password with anyone — even someone claiming to be from a bank.", tipTag:"Think • Verify • Protect",
    learnEyebrow:"LEARN THE BASICS", learnTitle:"Small habits. Stronger protection.", learnCopy:"Understand common online risks and what you can do to stay safer.",
    topic1Title:"Strong passwords", topic1Copy:"Use long, unique passwords. Turn on two-step verification wherever possible.",
    topic2Title:"Phishing messages", topic2Copy:"Be careful with urgent messages, unknown links and unexpected attachments.",
    topic3Title:"Safe digital payments", topic3Copy:"Never enter your UPI PIN to receive money. Check the receiver before paying.",
    topic4Title:"Privacy protection", topic4Copy:"Share less personal information publicly and review app permissions regularly.",
    checkerEyebrow:"QUICK SAFETY CHECK", checkerTitle:"Suspicious Message Checker", checkerCopy:"Paste a message to check for common warning signs such as urgency, suspicious links or requests for sensitive information.",
    privacyTitle:"Privacy reminder:", privacyCopy:"Do not paste real OTPs, passwords, bank details or private information. This checker runs in your browser.",
    messageLabel:"Paste message here", messagePlaceholder:"Example: Your account will be blocked. Click this link now...", checkBtn:"Check message",
    voiceEyebrow:"ACCESSIBILITY", voiceTitle:"Listen to a safety tip", voiceCopy:"Use your browser's speech feature to hear a short safety reminder.", voiceReady:"Voice assistant is ready.", speakBtn:"▶ Listen", stopBtn:"■ Stop",
    quizEyebrow:"TEST YOUR KNOWLEDGE", quizTitle:"Cyber Safety Quiz", quizCopy:"Answer five simple questions and see how much you know about staying safe online.",
    nextBtn:"Next question", quizComplete:"Quiz complete!", retryBtn:"Try again",
    checklistEyebrow:"BUILD SAFE HABITS", checklistTitle:"My Safety Checklist", checklistCopy:"Tick the steps you have completed. Your progress is saved in this browser on this device.",
    check1:"I use a strong, unique password.", check2:"I never share OTPs, PINs or passwords.", check3:"I verify links before opening them.", check4:"I keep my phone and apps updated.", check5:"I review privacy and app permissions.", check6:"I know how to report cyber fraud.",
    notesEyebrow:"PERSONAL RECORD", notesTitle:"Suspicious Activity Notes", notesCopy:"Record a brief note if you notice something suspicious. Do not enter passwords, OTPs, account numbers or other sensitive details.",
    notesLocal:"Notes are saved only in this browser. They are not sent to the police or any organisation.",
    categoryLabel:"Category", catCall:"Suspicious call", catMessage:"Suspicious message", catPayment:"Payment concern", catOther:"Other",
    noteLabel:"Short note (no sensitive details)", notePlaceholder:"What happened?", saveNoteBtn:"Save note on this device",
    dashboardEyebrow:"YOUR PROGRESS", dashboardTitle:"Safety Dashboard", dashboardCopy:"A quick view of your learning and safety checklist progress on this device.",
    statChecklist:"Checklist completed", statQuiz:"Latest quiz score", statNotes:"Saved notes", statChecks:"Messages checked",
    helpEyebrow:"NEED OFFICIAL HELP?", helpTitle:"Report cyber financial fraud quickly.",
    helpCopy:"In India, call 1930 for cyber financial fraud or use the National Cyber Crime Reporting Portal. If you are in immediate danger, contact local emergency services and a trusted adult.",
    call1930:"Call 1930", portalBtn:"Official cybercrime portal ↗",
    footerText:"An educational community service prototype. Stay alert and verify before you act.",
    msgEmpty:"Please paste a message first.", msgHigh:"Several warning signs found. Treat this message as suspicious and verify through an official channel.", msgMedium:"Some warning signs found. Be cautious and verify independently.", msgLow:"No common warning signs detected, but this does not prove the message is safe.",
    foundSigns:"Warning signs:", noSigns:"No common warning signs detected by this basic checker.", voiceUnsupported:"Speech is not supported in this browser.", voiceDone:"Safety tip finished.", voiceStopped:"Speech stopped.", voiceError:"Could not start speech. Check browser permissions.",
    correct:"Correct!", incorrect:"Not quite. Correct answer: ", next:"Next question", quizGood:"Great work! Keep following safe digital habits.", quizImprove:"Good attempt. Review the safety guide and try again.",
    question:"Question", of:"of", completed:"completed", saved:"Your note was saved on this device.", emptyNote:"Please write a short note first.", deleted:"Note deleted.", delete:"Delete",
    score:"Your score", notAttempted:"Not attempted", checklistDone:"completed", messageChecked:"Message checked."
  },
  hi: {
    navHome:"होम", navLearn:"सीखें", navChecker:"मैसेज जाँचें", navQuiz:"क्विज़", navDashboard:"डैशबोर्ड",
    heroEyebrow:"सतर्क रहें। सुरक्षित रहें।", heroTitle:'डिजिटल सुरक्षा के लिए <span>आपका साथी।</span>',
    heroCopy:"ऑनलाइन धोखाधड़ी पहचानना, अपने अकाउंट सुरक्षित रखना और अच्छी डिजिटल आदतें सीखें।",
    exploreBtn:"सुरक्षा गाइड देखें", takeQuizBtn:"क्विज़ दें", heroNote:"मुफ़्त सीखने का टूल • अकाउंट की ज़रूरत नहीं • नोट्स इसी डिवाइस पर रहते हैं",
    dailyTip:"आज की सुरक्षा सलाह", tipTitle:"क्लिक करने से पहले रुकें।", tipCopy:"अपना OTP, PIN या पासवर्ड किसी को न बताएं — चाहे वह बैंक से होने का दावा करे।", tipTag:"सोचें • जाँचें • सुरक्षित रहें",
    learnEyebrow:"बुनियादी बातें सीखें", learnTitle:"छोटी आदतें, बेहतर सुरक्षा।", learnCopy:"आम ऑनलाइन जोखिमों को समझें और सुरक्षित रहने के तरीके जानें।",
    topic1Title:"मज़बूत पासवर्ड", topic1Copy:"लंबे और अलग-अलग पासवर्ड रखें। जहाँ संभव हो, दो-स्तरीय सुरक्षा चालू करें।",
    topic2Title:"फ़िशिंग मैसेज", topic2Copy:"जल्दी करने वाले संदेशों, अनजान लिंक और अटैचमेंट से सावधान रहें।",
    topic3Title:"सुरक्षित डिजिटल भुगतान", topic3Copy:"पैसे पाने के लिए UPI PIN कभी न डालें। भुगतान से पहले प्राप्तकर्ता जाँचें।",
    topic4Title:"निजता की सुरक्षा", topic4Copy:"अपनी निजी जानकारी कम साझा करें और ऐप की परमिशन जाँचते रहें।",
    checkerEyebrow:"तुरंत सुरक्षा जाँच", checkerTitle:"संदिग्ध मैसेज जाँचें", checkerCopy:"मैसेज में जल्दबाज़ी, संदिग्ध लिंक या निजी जानकारी माँगने जैसे संकेत जाँचें।",
    privacyTitle:"निजता का ध्यान रखें:", privacyCopy:"असली OTP, पासवर्ड, बैंक जानकारी या निजी विवरण यहाँ न डालें। यह जाँच आपके ब्राउज़र में होती है।",
    messageLabel:"यहाँ मैसेज पेस्ट करें", messagePlaceholder:"उदाहरण: आपका अकाउंट बंद हो जाएगा। अभी इस लिंक पर क्लिक करें...", checkBtn:"मैसेज जाँचें",
    voiceEyebrow:"सुलभता", voiceTitle:"सुरक्षा सलाह सुनें", voiceCopy:"ब्राउज़र की आवाज़ सुविधा से छोटी सुरक्षा सलाह सुनें।", voiceReady:"वॉइस असिस्टेंट तैयार है।", speakBtn:"▶ सुनें", stopBtn:"■ रोकें",
    quizEyebrow:"अपनी जानकारी जाँचें", quizTitle:"साइबर सुरक्षा क्विज़", quizCopy:"ऑनलाइन सुरक्षित रहने के बारे में पाँच आसान सवालों के जवाब दें।",
    nextBtn:"अगला सवाल", quizComplete:"क्विज़ पूरा हुआ!", retryBtn:"फिर से करें",
    checklistEyebrow:"सुरक्षित आदतें बनाएँ", checklistTitle:"मेरी सुरक्षा चेकलिस्ट", checklistCopy:"पूरे किए गए कामों पर टिक करें। आपकी प्रगति इसी ब्राउज़र में सेव होगी।",
    check1:"मैं मज़बूत और अलग पासवर्ड इस्तेमाल करता/करती हूँ।", check2:"मैं OTP, PIN या पासवर्ड साझा नहीं करता/करती।", check3:"लिंक खोलने से पहले जाँचता/जाँचती हूँ।", check4:"मैं फोन और ऐप अपडेट रखता/रखती हूँ।", check5:"मैं प्राइवेसी और ऐप परमिशन जाँचता/जाँचती हूँ।", check6:"मुझे साइबर धोखाधड़ी की शिकायत करना पता है।",
    notesEyebrow:"व्यक्तिगत रिकॉर्ड", notesTitle:"संदिग्ध गतिविधि के नोट्स", notesCopy:"कुछ संदिग्ध दिखे तो छोटा नोट लिखें। पासवर्ड, OTP, अकाउंट नंबर या निजी जानकारी न लिखें।",
    notesLocal:"नोट्स केवल इसी ब्राउज़र में सेव होते हैं। ये पुलिस या किसी संस्था को नहीं भेजे जाते।",
    categoryLabel:"श्रेणी", catCall:"संदिग्ध कॉल", catMessage:"संदिग्ध मैसेज", catPayment:"भुगतान संबंधी चिंता", catOther:"अन्य",
    noteLabel:"छोटा नोट (निजी जानकारी नहीं)", notePlaceholder:"क्या हुआ?", saveNoteBtn:"इस डिवाइस पर नोट सेव करें",
    dashboardEyebrow:"आपकी प्रगति", dashboardTitle:"सुरक्षा डैशबोर्ड", dashboardCopy:"इस डिवाइस पर आपकी सीखने और चेकलिस्ट की प्रगति।",
    statChecklist:"पूरी चेकलिस्ट", statQuiz:"आखिरी क्विज़ स्कोर", statNotes:"सेव नोट्स", statChecks:"जाँचे गए मैसेज",
    helpEyebrow:"सरकारी मदद चाहिए?", helpTitle:"साइबर वित्तीय धोखाधड़ी की जल्दी शिकायत करें।",
    helpCopy:"भारत में साइबर वित्तीय धोखाधड़ी के लिए 1930 पर कॉल करें या राष्ट्रीय साइबर अपराध रिपोर्टिंग पोर्टल का उपयोग करें। तत्काल खतरे में स्थानीय आपातकालीन सेवा और किसी भरोसेमंद वयस्क से संपर्क करें।",
    call1930:"1930 पर कॉल करें", portalBtn:"आधिकारिक साइबर अपराध पोर्टल ↗",
    footerText:"एक शैक्षिक सामुदायिक सेवा प्रोटोटाइप। सतर्क रहें और जाँचकर ही कदम उठाएँ।",
    msgEmpty:"पहले कोई मैसेज पेस्ट करें।", msgHigh:"कई चेतावनी संकेत मिले। इस मैसेज को संदिग्ध मानें और आधिकारिक माध्यम से जाँचें।", msgMedium:"कुछ चेतावनी संकेत मिले। सावधान रहें और स्वतंत्र रूप से जाँचें।", msgLow:"इस आसान जाँच में आम चेतावनी संकेत नहीं मिले, लेकिन इसका मतलब यह नहीं कि मैसेज सुरक्षित है।",
    foundSigns:"चेतावनी संकेत:", noSigns:"इस सामान्य जाँच में कोई आम चेतावनी संकेत नहीं मिला।", voiceUnsupported:"इस ब्राउज़र में आवाज़ सुविधा उपलब्ध नहीं है।", voiceDone:"सुरक्षा सलाह पूरी हुई।", voiceStopped:"आवाज़ रोक दी गई।", voiceError:"आवाज़ शुरू नहीं हो सकी। ब्राउज़र परमिशन जाँचें।",
    correct:"सही जवाब!", incorrect:"सही नहीं। सही जवाब: ", next:"अगला सवाल", quizGood:"बहुत अच्छा! सुरक्षित डिजिटल आदतें अपनाते रहें।", quizImprove:"अच्छी कोशिश। सुरक्षा गाइड पढ़ें और फिर प्रयास करें।",
    question:"सवाल", of:"में से", completed:"पूरा", saved:"आपका नोट इसी डिवाइस पर सेव हुआ।", emptyNote:"पहले छोटा नोट लिखें।", deleted:"नोट हटा दिया गया।", delete:"हटाएँ",
    score:"आपका स्कोर", notAttempted:"अभी प्रयास नहीं किया", checklistDone:"पूरे", messageChecked:"मैसेज जाँचा गया।"
  }
};


const extraTranslations = {
  en: {
    navLibrary:"Scam Guide", navGame:"Spot Scam",
    libraryEyebrow:"LEARN TO RECOGNISE SCAMS", libraryTitle:"Scam Awareness Library", libraryCopy:"Simple examples of common scams and the safest next step.", librarySearchLabel:"Search scam topics", librarySearchPlaceholder:"Search topics: UPI, KYC, lottery...", libraryNoResults:"No matching topic found.",
    scamUpiTitle:"UPI payment scam", scamUpiCopy:"A stranger says you must enter your UPI PIN to receive money. You do not need a UPI PIN to receive money.",
    scamKycTitle:"Fake KYC warning", scamKycCopy:"A message threatens to block your account unless you open a link. Contact your bank using its official app or number.",
    scamPrizeTitle:"Lottery or prize scam", scamPrizeCopy:"A caller says you won a prize but must pay a fee first. Do not pay to claim an unexpected prize.",
    scamJobTitle:"Fake job offer", scamJobCopy:"A recruiter asks for money or sensitive documents before a verified offer. Check the company independently.",
    scamPhishTitle:"Phishing link", scamPhishCopy:"A link imitates a trusted website and asks you to sign in. Open the official app or type the known website address yourself.",
    scamRemoteTitle:"Remote access trick", scamRemoteCopy:"Someone asks you to install an app or share your screen to “fix” a payment. Do not give unknown people access to your device.",
    readAloudBtn:"🔊 Read aloud",
    guideEyebrow:"STEP-BY-STEP SUPPORT", guideTitle:"Emergency Help Guide", guideCopy:"If you think you have been scammed, stay calm. Use these general steps and seek help from a trusted adult or official service.", guideCall:"Call 1930 in India",
    guideStep1Title:"1. Stop the interaction", guideStep1Copy:"Stop replying, stop payments and do not share any more information. Do not follow instructions from the suspicious caller.",
    guideStep2Title:"2. Contact your bank or payment provider", guideStep2Copy:"Use the official app, website or number printed on your card. Ask them to secure your account or payment method.",
    guideStep3Title:"3. Report financial cyber fraud", guideStep3Copy:"In India, call 1930 as soon as possible for cyber financial fraud and visit cybercrime.gov.in for the official reporting process.",
    guideStep4Title:"4. Keep evidence safely", guideStep4Copy:"Keep transaction references and message screenshots. Do not post private details publicly. Ask a trusted adult to help.",
    guideCaution:"This guide is educational and is not a substitute for advice from your bank, police or an official authority.",
    readEyebrow:"EASY LISTENING", readTitle:"Read Aloud Mode", readCopy:"Listen to the main safety reminder in your selected language.", readMainBtn:"🔊 Read safety reminder", readStopBtn:"Stop reading",
    badgeEyebrow:"CELEBRATE YOUR PROGRESS", badgeTitle:"My Achievement Badges", badgeCopy:"Earn badges as you learn and complete safety activities on this device.",
    badgeQuizTitle:"Quiz Starter", badgeQuizCopy:"Complete the cyber safety quiz.", badgeChecklistTitle:"Safety Planner", badgeChecklistCopy:"Complete all checklist steps.", badgeGameTitle:"Scam Spotter", badgeGameCopy:"Score at least 2 in the Spot the Scam game.", badgeFeedbackTitle:"Helpful Voice", badgeFeedbackCopy:"Submit feedback about the website.", badgeLocked:"Not earned yet", badgeEarned:"Badge earned!",
    rulesEyebrow:"REMEMBER THESE RULES", rulesTitle:"Digital Safety: Do's and Don'ts", rulesCopy:"Simple rules for everyday phone, social media and payment use.", doTitle:"✓ Do", dontTitle:"✕ Don't",
    do1:"Use a different password for important accounts.", do2:"Verify payment requests with the person through another channel.", do3:"Install apps from official app stores.", do4:"Ask a trusted person if a message feels confusing or urgent.",
    dont1:"Never share OTP, PIN, CVV or passwords.", dont2:"Do not scan an unknown QR code to receive money.", dont3:"Do not install remote-access apps at a stranger's request.", dont4:"Do not forward unverified offers or warnings.",
    gameEyebrow:"PRACTISE SAFELY", gameTitle:"Spot the Scam Game", gameCopy:"Read each fictional sample and choose the safest response. These are practice examples, not real messages.",
    gameScoreStart:"Your score: 0 / 3", sampleMessage:"FICTIONAL SAMPLE MESSAGE", gameNext:"Next example", gameRestart:"Play again",
    gameOpt1a:"Share the OTP to keep the account active.", gameOpt1b:"Do not share it; contact the bank through its official channel.", gameOpt1c:"Forward the message to friends.",
    gameOpt2a:"Pay the fee to receive the prize.", gameOpt2b:"Send your identity details.", gameOpt2c:"Treat it as suspicious; do not pay and verify independently.",
    gameOpt3a:"Install the app and share your screen.", gameOpt3b:"Refuse remote access and contact the payment provider officially.", gameOpt3c:"Share your UPI PIN.",
    gameCorrect:"Correct. That is the safer choice.", gameWrong:"Not quite. The safest choice is: ", gameFinished:"Game complete! Your score: ",
    contactEyebrow:"PLAN AHEAD", contactTitle:"My Trusted Contact", contactCopy:"Save a trusted family member or support person's name and phone number on this device, so you can find it when you need help.",
    contactPrivacy:"Only save a contact with their permission. This information stays in this browser and is not uploaded.", contactNameLabel:"Contact name", contactPhoneLabel:"Phone number", saveContactBtn:"Save trusted contact", contactEmpty:"No trusted contact saved.", contactRemove:"Remove contact", contactSaved:"Trusted contact saved on this device.", contactInvalid:"Enter a name and a valid phone number.",
    feedbackEyebrow:"HELP US IMPROVE", feedbackTitle:"Feedback and Learning Survey", feedbackCopy:"Tell us whether the website was easy to understand. Do not include personal, financial or account information.", feedbackLocal:"Feedback is saved locally on this device for this demonstration.",
    ratingLabel:"How easy was the website to use?", rating5:"5 - Very easy", rating4:"4 - Easy", rating3:"3 - Okay", rating2:"2 - Difficult", rating1:"1 - Very difficult",
    feedbackLabel:"What did you learn or what can we improve?", feedbackPlaceholder:"Write a short response (optional)", submitFeedbackBtn:"Submit feedback", feedbackThanks:"Thank you. Your feedback was saved on this device."
  },
  hi: {
    navLibrary:"धोखाधड़ी गाइड", navGame:"धोखाधड़ी पहचानें",
    libraryEyebrow:"धोखाधड़ी पहचानना सीखें", libraryTitle:"धोखाधड़ी जागरूकता लाइब्रेरी", libraryCopy:"आम धोखाधड़ी के आसान उदाहरण और सुरक्षित अगला कदम।", librarySearchLabel:"धोखाधड़ी के विषय खोजें", librarySearchPlaceholder:"खोजें: UPI, KYC, लॉटरी...", libraryNoResults:"इससे मिलता-जुलता विषय नहीं मिला।",
    scamUpiTitle:"UPI भुगतान धोखाधड़ी", scamUpiCopy:"कोई अनजान व्यक्ति पैसे पाने के लिए UPI PIN डालने को कहता है। पैसे पाने के लिए UPI PIN की ज़रूरत नहीं होती।",
    scamKycTitle:"नकली KYC चेतावनी", scamKycCopy:"मैसेज में लिंक न खोलने पर अकाउंट बंद करने की धमकी होती है। बैंक के आधिकारिक ऐप या नंबर से संपर्क करें।",
    scamPrizeTitle:"लॉटरी या इनाम धोखाधड़ी", scamPrizeCopy:"कोई कहता है कि इनाम मिला है, लेकिन पहले फीस माँगता है। अनजान इनाम पाने के लिए पैसे न दें।",
    scamJobTitle:"नकली नौकरी का प्रस्ताव", scamJobCopy:"भर्ती करने वाला सत्यापित ऑफर से पहले पैसे या निजी दस्तावेज़ माँगता है। कंपनी की अलग से जाँच करें।",
    scamPhishTitle:"फ़िशिंग लिंक", scamPhishCopy:"लिंक भरोसेमंद वेबसाइट जैसा दिखकर लॉगिन माँगता है। आधिकारिक ऐप खोलें या वेबसाइट का सही पता खुद लिखें।",
    scamRemoteTitle:"रिमोट एक्सेस का झाँसा", scamRemoteCopy:"कोई भुगतान ठीक करने के नाम पर ऐप इंस्टॉल या स्क्रीन साझा करने को कहता है। अनजान व्यक्ति को अपने डिवाइस का एक्सेस न दें।",
    readAloudBtn:"🔊 सुनकर पढ़ें",
    guideEyebrow:"कदम-दर-कदम सहायता", guideTitle:"आपातकालीन सहायता गाइड", guideCopy:"अगर आपको लगता है कि आपके साथ धोखाधड़ी हुई है, शांत रहें। ये सामान्य कदम अपनाएँ और भरोसेमंद वयस्क या आधिकारिक सेवा से मदद लें।", guideCall:"भारत में 1930 पर कॉल करें",
    guideStep1Title:"1. बातचीत रोकें", guideStep1Copy:"जवाब देना और भुगतान रोकें। कोई और जानकारी साझा न करें। संदिग्ध कॉल करने वाले के निर्देश न मानें।",
    guideStep2Title:"2. बैंक या भुगतान सेवा से संपर्क करें", guideStep2Copy:"आधिकारिक ऐप, वेबसाइट या कार्ड पर दिए नंबर का उपयोग करें। अकाउंट या भुगतान माध्यम सुरक्षित करने को कहें।",
    guideStep3Title:"3. वित्तीय साइबर धोखाधड़ी की शिकायत करें", guideStep3Copy:"भारत में वित्तीय साइबर धोखाधड़ी के लिए जल्द 1930 पर कॉल करें और आधिकारिक प्रक्रिया के लिए cybercrime.gov.in देखें।",
    guideStep4Title:"4. सबूत सुरक्षित रखें", guideStep4Copy:"ट्रांज़ैक्शन रेफरेंस और मैसेज के स्क्रीनशॉट रखें। निजी जानकारी सार्वजनिक न करें। भरोसेमंद वयस्क की मदद लें।",
    guideCaution:"यह गाइड केवल शिक्षा के लिए है। यह बैंक, पुलिस या आधिकारिक संस्था की सलाह का विकल्प नहीं है।",
    readEyebrow:"आसानी से सुनें", readTitle:"सुनकर पढ़ने का मोड", readCopy:"चुनी हुई भाषा में मुख्य सुरक्षा सलाह सुनें।", readMainBtn:"🔊 सुरक्षा सलाह सुनें", readStopBtn:"पढ़ना रोकें",
    badgeEyebrow:"अपनी प्रगति का जश्न मनाएँ", badgeTitle:"मेरे उपलब्धि बैज", badgeCopy:"सीखने और सुरक्षा गतिविधियाँ पूरी करने पर बैज पाएँ।",
    badgeQuizTitle:"क्विज़ स्टार्टर", badgeQuizCopy:"साइबर सुरक्षा क्विज़ पूरा करें।", badgeChecklistTitle:"सुरक्षा योजनाकार", badgeChecklistCopy:"पूरी चेकलिस्ट पूरी करें।", badgeGameTitle:"धोखाधड़ी पहचानने वाला", badgeGameCopy:"Spot the Scam गेम में कम से कम 2 अंक पाएँ।", badgeFeedbackTitle:"सहायक आवाज़", badgeFeedbackCopy:"वेबसाइट पर फीडबैक भेजें।", badgeLocked:"अभी नहीं मिला", badgeEarned:"बैज मिल गया!",
    rulesEyebrow:"इन नियमों को याद रखें", rulesTitle:"डिजिटल सुरक्षा: क्या करें और क्या न करें", rulesCopy:"फोन, सोशल मीडिया और भुगतान के लिए आसान नियम।", doTitle:"✓ क्या करें", dontTitle:"✕ क्या न करें",
    do1:"महत्वपूर्ण अकाउंट के लिए अलग पासवर्ड रखें।", do2:"भुगतान अनुरोध की दूसरे माध्यम से पुष्टि करें।", do3:"ऐप केवल आधिकारिक ऐप स्टोर से इंस्टॉल करें।", do4:"मैसेज उलझन भरा या जल्दबाज़ी वाला लगे तो भरोसेमंद व्यक्ति से पूछें।",
    dont1:"OTP, PIN, CVV या पासवर्ड कभी साझा न करें।", dont2:"पैसे पाने के लिए अनजान QR कोड स्कैन न करें।", dont3:"अनजान व्यक्ति के कहने पर रिमोट एक्सेस ऐप इंस्टॉल न करें।", dont4:"बिना जाँचे ऑफर या चेतावनी आगे न भेजें।",
    gameEyebrow:"सुरक्षित अभ्यास करें", gameTitle:"धोखाधड़ी पहचानने का गेम", gameCopy:"हर काल्पनिक उदाहरण पढ़ें और सुरक्षित जवाब चुनें। ये अभ्यास के लिए हैं, असली मैसेज नहीं।",
    gameScoreStart:"आपका स्कोर: 0 / 3", sampleMessage:"काल्पनिक उदाहरण मैसेज", gameNext:"अगला उदाहरण", gameRestart:"फिर खेलें",
    gameOpt1a:"अकाउंट चालू रखने के लिए OTP साझा करें।", gameOpt1b:"OTP साझा न करें; बैंक के आधिकारिक माध्यम से संपर्क करें।", gameOpt1c:"मैसेज दोस्तों को भेज दें।",
    gameOpt2a:"इनाम पाने के लिए फीस दें।", gameOpt2b:"अपनी पहचान की जानकारी भेजें।", gameOpt2c:"इसे संदिग्ध मानें; पैसे न दें और अलग से जाँचें।",
    gameOpt3a:"ऐप इंस्टॉल करके स्क्रीन साझा करें।", gameOpt3b:"रिमोट एक्सेस मना करें और भुगतान सेवा से आधिकारिक संपर्क करें।", gameOpt3c:"अपना UPI PIN साझा करें।",
    gameCorrect:"सही! यह अधिक सुरक्षित विकल्प है।", gameWrong:"सही नहीं। सबसे सुरक्षित विकल्प है: ", gameFinished:"गेम पूरा! आपका स्कोर: ",
    contactEyebrow:"पहले से तैयारी करें", contactTitle:"मेरा भरोसेमंद संपर्क", contactCopy:"किसी भरोसेमंद परिवारजन या सहायता व्यक्ति का नाम और फोन नंबर इसी डिवाइस पर सेव करें।",
    contactPrivacy:"उनकी अनुमति लेकर ही संपर्क सेव करें। जानकारी इसी ब्राउज़र में रहती है और अपलोड नहीं होती।", contactNameLabel:"संपर्क का नाम", contactPhoneLabel:"फोन नंबर", saveContactBtn:"भरोसेमंद संपर्क सेव करें", contactEmpty:"कोई भरोसेमंद संपर्क सेव नहीं है।", contactRemove:"संपर्क हटाएँ", contactSaved:"भरोसेमंद संपर्क इसी डिवाइस पर सेव हुआ।", contactInvalid:"नाम और सही फोन नंबर दर्ज करें।",
    feedbackEyebrow:"हमें बेहतर बनाएँ", feedbackTitle:"फीडबैक और सीखने का सर्वे", feedbackCopy:"बताएँ कि वेबसाइट समझने में आसान थी या नहीं। निजी, वित्तीय या अकाउंट जानकारी न लिखें।", feedbackLocal:"इस डेमो के लिए फीडबैक इसी डिवाइस पर सेव होता है।",
    ratingLabel:"वेबसाइट इस्तेमाल करना कितना आसान था?", rating5:"5 - बहुत आसान", rating4:"4 - आसान", rating3:"3 - ठीक-ठाक", rating2:"2 - कठिन", rating1:"1 - बहुत कठिन",
    feedbackLabel:"आपने क्या सीखा या हम क्या सुधार सकते हैं?", feedbackPlaceholder:"छोटा जवाब लिखें (वैकल्पिक)", submitFeedbackBtn:"फीडबैक भेजें", feedbackThanks:"धन्यवाद। आपका फीडबैक इसी डिवाइस पर सेव हुआ।"
  }
};


const quizQuestions = [
  { q:{en:"Someone asks for your OTP over a phone call. What should you do?",hi:"कोई फोन पर आपसे OTP माँगता है। आपको क्या करना चाहिए?"}, options:[{en:"Share it quickly",hi:"जल्दी से बता दें"},{en:"Never share it",hi:"कभी साझा न करें"},{en:"Post it online",hi:"ऑनलाइन पोस्ट करें"}], answer:1 },
  { q:{en:"You receive a message with an unknown urgent link. What is safest?",hi:"आपको अनजान लिंक वाला जल्दी करने का मैसेज मिलता है। सबसे सुरक्षित कदम क्या है?"}, options:[{en:"Click immediately",hi:"तुरंत क्लिक करें"},{en:"Forward to everyone",hi:"सबको भेज दें"},{en:"Verify the sender independently",hi:"भेजने वाले की अलग से जाँच करें"}], answer:2 },
  { q:{en:"What should a strong password be?",hi:"मज़बूत पासवर्ड कैसा होना चाहिए?"}, options:[{en:"Your name only",hi:"केवल आपका नाम"},{en:"Long and unique",hi:"लंबा और अलग"},{en:"123456",hi:"123456"}], answer:1 },
  { q:{en:"Do you enter a UPI PIN to receive money?",hi:"क्या पैसे पाने के लिए UPI PIN डालना चाहिए?"}, options:[{en:"Yes, always",hi:"हाँ, हमेशा"},{en:"Only at night",hi:"केवल रात में"},{en:"No",hi:"नहीं"}], answer:2 },
  { q:{en:"What should you do if you notice cyber financial fraud in India?",hi:"भारत में साइबर वित्तीय धोखाधड़ी दिखे तो क्या करें?"}, options:[{en:"Ignore it",hi:"अनदेखा करें"},{en:"Call 1930 and report promptly",hi:"1930 पर कॉल करके जल्दी शिकायत करें"},{en:"Share your PIN",hi:"अपना PIN साझा करें"}], answer:1 }
];

const STORAGE = {
  checklist: "dsa_checklist_v1",
  notes: "dsa_notes_v1",
  quiz: "dsa_quiz_v1",
  checks: "dsa_checks_v1",
  language: "dsa_language_v1",
  font: "dsa_font_v1"
};

let language = localStorage.getItem(STORAGE.language) || "en";
let fontSize = Number(localStorage.getItem(STORAGE.font)) || 16;
let quizIndex = 0;
let quizScore = 0;
let answered = false;
let selectedOption = -1;
let latestQuizScore = localStorage.getItem(STORAGE.quiz);
let messageChecks = Number(localStorage.getItem(STORAGE.checks)) || 0;
let toastTimer;

function t(key) {
  return (extraTranslations[language] && extraTranslations[language][key]) ||
    (translations[language] && translations[language][key]) ||
    (extraTranslations.en && extraTranslations.en[key]) ||
    translations.en[key] || key;
}
function showToast(message) {
  const toast = $("toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2600);
}
function applyLanguage() {
  document.documentElement.lang = language;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    const value = t(key);
    if (value !== key) {
      if (key === "heroTitle") element.innerHTML = value;
      else element.textContent = value;
    }
  });
  document.querySelectorAll("[data-placeholder]").forEach((element) => {
    element.placeholder = t(element.dataset.placeholder);
  });
  $("languageSelect").value = language;
  renderQuiz();
  renderChecklist();
  renderNotes();
  updateDashboard();
  filterLibrary();
  loadTrustedContact();
  renderGame();
}
function changeFont(amount) {
  fontSize = Math.min(22, Math.max(14, fontSize + amount));
  document.documentElement.style.fontSize = fontSize + "px";
  localStorage.setItem(STORAGE.font, String(fontSize));
}
function loadFont() {
  document.documentElement.style.fontSize = fontSize + "px";
}
function readChecklist() {
  try {
    const data = JSON.parse(localStorage.getItem(STORAGE.checklist) || "[]");
    return Array.isArray(data) ? data : [];
  } catch { return []; }
}
function renderChecklist() {
  const saved = readChecklist();
  document.querySelectorAll("[data-check]").forEach((input) => {
    input.checked = Boolean(saved[Number(input.dataset.check)]);
  });
  const count = saved.filter(Boolean).length;
  $("checklistCount").textContent = `${count} / 6 ${t("checklistDone")}`;
  $("checklistProgress").style.width = `${(count / 6) * 100}%`;
}

function runMessageCheck() {
  const message = $("messageInput").value.trim();
  const result = $("checkerResult");
  if (!message) {
    result.hidden = false;
    result.className = "result-box warning";
    result.textContent = t("msgEmpty");
    return;
  }
  const lower = message.toLowerCase();
  const signs = [];
  const patterns = [
    { re:/\b(otp|one time password|pin|password|cvv)\b/i, en:"Asks for an OTP, PIN, password or CVV", hi:"OTP, PIN, पासवर्ड या CVV माँगता है" },
    { re:/\b(urgent|immediately|right now|blocked|suspended|expire|limited time|act now)\b/i, en:"Uses urgent or threatening language", hi:"जल्दी करने या डराने वाली भाषा" },
    { re:/(https?:\/\/|www\.|bit\.ly|tinyurl|t\.co)/i, en:"Contains a web link; verify it before opening", hi:"वेब लिंक है; खोलने से पहले जाँचें" },
    { re:/\b(prize|lottery|winner|cashback|free gift|claim reward)\b/i, en:"Promises a prize, reward or unexpected benefit", hi:"इनाम, रिवॉर्ड या अनपेक्षित लाभ का वादा" },
    { re:/\b(bank|kyc|account|upi|refund)\b/i, en:"Mentions a bank, KYC, account or payment issue", hi:"बैंक, KYC, अकाउंट या भुगतान का ज़िक्र" }
  ];
  patterns.forEach((item) => { if (item.re.test(lower)) signs.push(language === "hi" ? item.hi : item.en); });
  messageChecks += 1;
  localStorage.setItem(STORAGE.checks, String(messageChecks));
  result.hidden = false;
  result.className = signs.length >= 3 ? "result-box warning" : signs.length ? "result-box warning" : "result-box safe";
  const heading = signs.length >= 3 ? t("msgHigh") : signs.length ? t("msgMedium") : t("msgLow");
  result.replaceChildren();
  const p = document.createElement("p");
  p.textContent = heading;
  result.appendChild(p);
  if (signs.length) {
    const strong = document.createElement("strong");
    strong.textContent = t("foundSigns");
    result.appendChild(strong);
    const list = document.createElement("ul");
    signs.forEach((sign) => {
      const li = document.createElement("li");
      li.textContent = sign;
      list.appendChild(li);
    });
    result.appendChild(list);
  } else {
    const small = document.createElement("small");
    small.textContent = t("noSigns");
    result.appendChild(small);
  }
  updateDashboard();
  showToast(t("messageChecked"));
}
function speakTip() {
  if (!("speechSynthesis" in window) || !("SpeechSynthesisUtterance" in window)) {
    $("voiceStatus").textContent = t("voiceUnsupported");
    return;
  }
  window.speechSynthesis.cancel();
  const text = language === "hi"
    ? "अपना ओटीपी, यूपीआई पिन या पासवर्ड किसी के साथ साझा न करें। किसी भी अनजान लिंक को खोलने से पहले उसकी जाँच करें।"
    : "Never share your OTP, UPI PIN or password with anyone. Verify an unknown link before opening it.";
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = language === "hi" ? "hi-IN" : "en-IN";
  utterance.onend = () => { $("voiceStatus").textContent = t("voiceDone"); };
  utterance.onerror = () => { $("voiceStatus").textContent = t("voiceError"); };
  $("voiceStatus").textContent = language === "hi" ? "आवाज़ चल रही है..." : "Speaking...";
  window.speechSynthesis.speak(utterance);
}
function renderQuiz() {
  if (quizIndex >= quizQuestions.length) {
    showQuizResult();
    return;
  }
  $("quizContent").hidden = false;
  $("quizResult").hidden = true;
  const item = quizQuestions[quizIndex];
  $("quizQuestion").textContent = item.q[language];
  $("quizCounter").textContent = `${t("question")} ${quizIndex + 1} ${t("of")} ${quizQuestions.length}`;
  $("quizProgressText").textContent = `${Math.round((quizIndex / quizQuestions.length) * 100)}% ${t("completed")}`;
  $("quizProgress").style.width = `${(quizIndex / quizQuestions.length) * 100}%`;
  const optionsBox = $("quizOptions");
  optionsBox.replaceChildren();
  item.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "quiz-option";
    button.textContent = option[language];
    button.disabled = answered;
    if (answered && index === item.answer) button.classList.add("correct");
    if (answered && index === selectedOption && selectedOption !== item.answer) button.classList.add("incorrect");
    button.addEventListener("click", () => selectQuizAnswer(index));
    optionsBox.appendChild(button);
  });
  if (answered) {
    $("quizFeedback").textContent = selectedOption === item.answer ? t("correct") : t("incorrect") + item.options[item.answer][language];
  } else {
    $("quizFeedback").textContent = "";
  }
  $("nextQuestionBtn").disabled = !answered;
  $("nextQuestionBtn").textContent = quizIndex === quizQuestions.length - 1 ? (language === "hi" ? "परिणाम देखें" : "See result") : t("nextBtn");
}
function selectQuizAnswer(index) {
  if (answered) return;
  answered = true;
  selectedOption = index;
  if (index === quizQuestions[quizIndex].answer) quizScore += 1;
  renderQuiz();
}
function showQuizResult() {
  $("quizContent").hidden = true;
  $("quizResult").hidden = false;
  $("quizProgress").style.width = "100%";
  $("quizProgressText").textContent = `100% ${t("completed")}`;
  $("quizCounter").textContent = `${quizQuestions.length} / ${quizQuestions.length}`;
  $("quizScore").textContent = `${t("score")}: ${quizScore} / ${quizQuestions.length}`;
  $("quizMessage").textContent = quizScore >= 4 ? t("quizGood") : t("quizImprove");
  latestQuizScore = String(quizScore);
  localStorage.setItem(STORAGE.quiz, latestQuizScore);
  updateDashboard();
}
function nextQuizQuestion() {
  if (!answered) return;
  quizIndex += 1;
  answered = false;
  selectedOption = -1;
  renderQuiz();
}
function restartQuiz() {
  quizIndex = 0;
  quizScore = 0;
  answered = false;
  selectedOption = -1;
  renderQuiz();
}
function readNotes() {
  try {
    const data = JSON.parse(localStorage.getItem(STORAGE.notes) || "[]");
    return Array.isArray(data) ? data : [];
  } catch { return []; }
}
function renderNotes() {
  const list = $("notesList");
  list.replaceChildren();
  const notes = readNotes();
  if (!notes.length) {
    const empty = document.createElement("p");
    empty.className = "small-status";
    empty.textContent = language === "hi" ? "अभी कोई नोट सेव नहीं है।" : "No notes saved yet.";
    list.appendChild(empty);
    return;
  }
  notes.slice().reverse().forEach((note) => {
    const card = document.createElement("article");
    card.className = "note-entry";
    const del = document.createElement("button");
    del.className = "note-delete";
    del.type = "button";
    del.textContent = t("delete");
    del.setAttribute("aria-label", t("delete"));
    del.addEventListener("click", () => deleteNote(note.id));
    const meta = document.createElement("small");
    meta.textContent = `${note.category} • ${note.date}`;
    const content = document.createElement("p");
    content.textContent = note.text;
    card.append(del, meta, content);
    list.appendChild(card);
  });
}
function saveNote() {
  const text = $("noteText").value.trim();
  if (!text) {
    showToast(t("emptyNote"));
    return;
  }
  if (text.length > 300) {
    showToast(language === "hi" ? "कृपया नोट 300 अक्षरों से छोटा रखें।" : "Please keep the note under 300 characters.");
    return;
  }
  const notes = readNotes();
  notes.push({
    id: Date.now() + Math.random().toString(16).slice(2),
    category: $("noteCategory").value,
    text,
    date: new Date().toLocaleString(language === "hi" ? "hi-IN" : "en-IN")
  });
  localStorage.setItem(STORAGE.notes, JSON.stringify(notes));
  $("noteText").value = "";
  renderNotes();
  updateDashboard();
  showToast(t("saved"));
}
function deleteNote(id) {
  const notes = readNotes().filter((note) => note.id !== id);
  localStorage.setItem(STORAGE.notes, JSON.stringify(notes));
  renderNotes();
  updateDashboard();
  showToast(t("deleted"));
}


const extraStorage = {
  trusted: "dsa_trusted_contact_v1",
  feedback: "dsa_feedback_v1",
  game: "dsa_game_score_v1"
};
const gameQuestions = [
  {
    message: {
      en: "“Your bank account will be blocked today. Send the OTP you just received to verify your identity.”",
      hi: "“आज आपका बैंक अकाउंट बंद हो जाएगा। पहचान जाँचने के लिए अभी मिला OTP भेजें।”"
    },
    options: ["gameOpt1a", "gameOpt1b", "gameOpt1c"], answer: 1
  },
  {
    message: {
      en: "“Congratulations! You won a surprise prize. Pay a small processing fee to claim it.”",
      hi: "“बधाई! आपने सरप्राइज़ इनाम जीता है। इनाम पाने के लिए छोटी प्रोसेसिंग फीस दें।”"
    },
    options: ["gameOpt2a", "gameOpt2b", "gameOpt2c"], answer: 2
  },
  {
    message: {
      en: "“I can fix your payment. Install this remote app and share your phone screen with me.”",
      hi: "“मैं आपका भुगतान ठीक कर दूँगा। यह रिमोट ऐप इंस्टॉल करें और फोन की स्क्रीन साझा करें।”"
    },
    options: ["gameOpt3a", "gameOpt3b", "gameOpt3c"], answer: 1
  }
];
let gameIndex = 0;
let gameScore = 0;
let gameAnswered = false;
let savedGameScore = Number(localStorage.getItem(extraStorage.game)) || 0;

function readAloud(text) {
  if (!("speechSynthesis" in window) || !("SpeechSynthesisUtterance" in window)) {
    showToast(t("voiceUnsupported"));
    return;
  }
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = language === "hi" ? "hi-IN" : "en-IN";
  utterance.onerror = () => showToast(t("voiceError"));
  window.speechSynthesis.speak(utterance);
}
function filterLibrary() {
  const query = $("librarySearch").value.trim().toLowerCase();
  let visible = 0;
  document.querySelectorAll(".library-card").forEach((card) => {
    const text = (card.textContent + " " + card.dataset.search).toLowerCase();
    const match = text.includes(query);
    card.hidden = !match;
    if (match) visible += 1;
  });
  $("libraryNoResults").hidden = visible !== 0;
}
function readNotesForBadges() {
  return readNotes();
}
function updateBadges() {
  const earned = {
    badgeQuiz: latestQuizScore !== null,
    badgeChecklist: readChecklist().filter(Boolean).length === 6,
    badgeGame: savedGameScore >= 2,
    badgeFeedback: localStorage.getItem(extraStorage.feedback) !== null
  };
  Object.entries(earned).forEach(([id, isEarned]) => {
    const card = $(id);
    card.classList.toggle("earned", isEarned);
    const status = card.querySelector(".badge-status");
    status.textContent = isEarned ? t("badgeEarned") : t("badgeLocked");
  });
}
function updateDashboard() {
  const count = readChecklist().filter(Boolean).length;
  $("dashChecklist").textContent = `${count} / 6`;
  $("dashQuiz").textContent = latestQuizScore === null ? t("notAttempted") : `${latestQuizScore} / 5`;
  $("dashNotes").textContent = String(readNotes().length);
  $("dashChecks").textContent = String(messageChecks);
  if ($("badgeQuiz")) updateBadges();
}
function renderGame() {
  const scenario = $("gameScenario");
  const options = $("gameOptions");
  const next = $("gameNextBtn");
  const restart = $("gameRestartBtn");
  $("gameFeedback").textContent = "";
  $("gameScoreText").textContent = language === "hi"
    ? `आपका स्कोर: ${gameScore} / ${gameQuestions.length}`
    : `Your score: ${gameScore} / ${gameQuestions.length}`;
  if (gameIndex >= gameQuestions.length) {
    scenario.textContent = t("gameFinished") + `${gameScore} / ${gameQuestions.length}`;
    options.replaceChildren();
    next.hidden = true;
    restart.hidden = false;
    savedGameScore = Math.max(savedGameScore, gameScore);
    localStorage.setItem(extraStorage.game, String(savedGameScore));
    updateBadges();
    return;
  }
  next.hidden = false;
  restart.hidden = true;
  scenario.textContent = gameQuestions[gameIndex].message[language];
  options.replaceChildren();
  gameQuestions[gameIndex].options.forEach((key, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "quiz-option";
    button.textContent = t(key);
    button.disabled = gameAnswered;
    if (gameAnswered && index === gameQuestions[gameIndex].answer) button.classList.add("correct");
    button.addEventListener("click", () => chooseGameAnswer(index));
    options.appendChild(button);
  });
  next.disabled = !gameAnswered;
  next.textContent = gameIndex === gameQuestions.length - 1 ? (language === "hi" ? "परिणाम देखें" : "See result") : t("gameNext");
}
function chooseGameAnswer(index) {
  if (gameAnswered) return;
  gameAnswered = true;
  const question = gameQuestions[gameIndex];
  if (index === question.answer) {
    gameScore += 1;
    $("gameFeedback").textContent = t("gameCorrect");
  } else {
    $("gameFeedback").textContent = t("gameWrong") + t(question.options[question.answer]);
  }
  renderGame();
  $("gameFeedback").textContent = index === question.answer
    ? t("gameCorrect")
    : t("gameWrong") + t(question.options[question.answer]);
  $("gameNextBtn").disabled = false;
}
function nextGame() {
  if (!gameAnswered) return;
  gameIndex += 1;
  gameAnswered = false;
  renderGame();
}
function restartGame() {
  gameIndex = 0;
  gameScore = 0;
  gameAnswered = false;
  renderGame();
}
function loadTrustedContact() {
  let contact = null;
  try { contact = JSON.parse(localStorage.getItem(extraStorage.trusted) || "null"); } catch { contact = null; }
  const card = $("trustedContactCard");
  card.replaceChildren();
  if (!contact || !contact.name || !contact.phone) {
    card.textContent = t("contactEmpty");
    return;
  }
  const name = document.createElement("p");
  const strong = document.createElement("strong");
  strong.textContent = contact.name;
  name.appendChild(strong);
  const phone = document.createElement("p");
  const link = document.createElement("a");
  link.href = "tel:" + contact.phone.replace(/[^\d+]/g, "");
  link.textContent = contact.phone;
  phone.appendChild(link);
  const remove = document.createElement("button");
  remove.type = "button";
  remove.className = "text-action";
  remove.textContent = t("contactRemove");
  remove.addEventListener("click", () => {
    localStorage.removeItem(extraStorage.trusted);
    loadTrustedContact();
  });
  card.append(name, phone, remove);
}
function saveTrustedContact() {
  const name = $("trustedName").value.trim();
  const phone = $("trustedPhone").value.trim();
  const digits = phone.replace(/\D/g, "");
  if (!name || digits.length < 7 || digits.length > 15) {
    showToast(t("contactInvalid"));
    return;
  }
  localStorage.setItem(extraStorage.trusted, JSON.stringify({ name, phone }));
  $("trustedName").value = "";
  $("trustedPhone").value = "";
  loadTrustedContact();
  showToast(t("contactSaved"));
}
function submitFeedback() {
  const rating = Number($("feedbackRating").value);
  const comment = $("feedbackText").value.trim();
  if (comment.length > 300) return;
  localStorage.setItem(extraStorage.feedback, JSON.stringify({
    rating,
    comment,
    date: new Date().toISOString()
  }));
  $("feedbackText").value = "";
  $("feedbackStatus").textContent = t("feedbackThanks");
  updateBadges();
}


function init() {
  $("year").textContent = new Date().getFullYear();
  loadFont();
  $("languageSelect").addEventListener("change", (event) => {
    language = event.target.value;
    localStorage.setItem(STORAGE.language, language);
    applyLanguage();
  });
  $("fontUp").addEventListener("click", () => changeFont(1));
  $("fontDown").addEventListener("click", () => changeFont(-1));
  $("checkMessageBtn").addEventListener("click", runMessageCheck);
  $("messageInput").addEventListener("keydown", (event) => {
    if ((event.ctrlKey || event.metaKey) && event.key === "Enter") runMessageCheck();
  });
  $("speakBtn").addEventListener("click", speakTip);
  $("stopSpeakBtn").addEventListener("click", () => {
    if ("speechSynthesis" in window) window.speechSynthesis.cancel();
    $("voiceStatus").textContent = t("voiceStopped");
  });
  $("nextQuestionBtn").addEventListener("click", nextQuizQuestion);
  $("restartQuizBtn").addEventListener("click", restartQuiz);
  $("saveNoteBtn").addEventListener("click", saveNote);
  document.querySelectorAll("[data-check]").forEach((input) => {
    input.addEventListener("change", () => {
      const values = Array.from({ length: 6 }, (_, index) => {
        const checkbox = document.querySelector(`[data-check="${index}"]`);
        return checkbox ? checkbox.checked : false;
      });
      localStorage.setItem(STORAGE.checklist, JSON.stringify(values));
      renderChecklist();
      updateDashboard();
    });
  });
  $("menuToggle").addEventListener("click", () => {
    const nav = $("mainNav");
    const isOpen = nav.classList.toggle("open");
    $("menuToggle").setAttribute("aria-expanded", String(isOpen));
  });
  document.querySelectorAll("#mainNav a").forEach((link) => {
    link.addEventListener("click", () => {
      $("mainNav").classList.remove("open");
      $("menuToggle").setAttribute("aria-expanded", "false");
    });
  });
  $("librarySearch").addEventListener("input", filterLibrary);
  document.querySelectorAll(".read-card").forEach((button) => {
    button.addEventListener("click", () => {
      const card = button.closest(".library-card");
      const heading = card.querySelector("h3");
      const paragraph = card.querySelector("p");
      readAloud(heading.textContent + ". " + paragraph.textContent);
    });
  });
  $("readMainBtn").addEventListener("click", () => readAloud(
    language === "hi"
      ? "अपना OTP, UPI PIN या पासवर्ड किसी के साथ साझा न करें। अनजान लिंक खोलने से पहले उसकी जाँच करें।"
      : "Never share your OTP, UPI PIN or password with anyone. Verify an unknown link before opening it."
  ));
  $("readStopBtn").addEventListener("click", () => {
    if ("speechSynthesis" in window) window.speechSynthesis.cancel();
  });
  $("gameNextBtn").addEventListener("click", nextGame);
  $("gameRestartBtn").addEventListener("click", restartGame);
  $("saveContactBtn").addEventListener("click", saveTrustedContact);
  $("submitFeedbackBtn").addEventListener("click", submitFeedback);
  loadTrustedContact();
  renderGame();
  applyLanguage();
}

document.addEventListener("DOMContentLoaded", init);
