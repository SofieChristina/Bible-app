// Bibeltexter från Svenska kärnbibeln
const bibleTexts = {
    "1Mos1:1": {
        title: "1 Mosebok 1:1",
        text: "I begynnelsen skapade Gud himmel och jord."
    },
    "1Mos1:27": {
        title: "1 Mosebok 1:27",
        text: "Och Gud skapade människan till sin avbild, till Guds avbild skapade han henne, till man och kvinna skapade han dem."
    },
    "1Mos1:28": {
        title: "1 Mosebok 1:28",
        text: "Gud välsignade dem och sade till dem: 'Var fruktbara och föröka er, uppfyll jorden och lägg den under er. Råd över fiskarna i havet och över fåglarna under himlen och över alla djur som rör sig på jorden.'"
    },
    "1Mos1:2": {
        title: "1 Mosebok 1:2",
        text: "Jorden var öde och tom, och mörker var över djupet, och Guds Ande svävade över vattenytan."
    },
    "Ps24:1": {
        title: "Psaltaren 24:1",
        text: "Jorden och allt som lever på den tillhör Herren, världen och alla som bor i den."
    },
    "Ps50:10-11": {
        title: "Psaltaren 50:10-11",
        text: "För varje vilddjur i skogen är mitt, boskapen på tusen berg. Jag känner alla fåglar på bergen, och vad som rör sig på marken tillhör mig."
    },
    "Ps103:20": {
        title: "Psaltaren 103:20",
        text: "Prisa Herren, ni hans änglar, ni väldiga hjältar som utför hans befallning så snart ni hör ljudet av hans ord."
    },
    "Ps8:5-6": {
        title: "Psaltaren 8:5-6",
        text: "Vad är då en människa att du tänker på henne... Du gjorde honom nästan till ett gudaväsen, med ära och härlighet krönte du honom."
    },
    "Ps8:6-7": {
        title: "Psaltaren 8:6-7",
        text: "Du satte honom till herre över dina händers verk, allt har du lagt under hans fötter."
    },
    "Ps104:30": {
        title: "Psaltaren 104:30",
        text: "Du sänder din ande, då skapas de, du förnyar jordens ansikte."
    },
    "Job41:11": {
        title: "Jobs bok 41:11",
        text: "Allt under himlen tillhör mig."
    },
    "Hagg2:8": {
        title: "Haggai 2:8",
        text: "Mitt är silvret och mitt är guldet, säger Herren Sebaot."
    },
    "Joh1:1-3": {
        title: "Johannesevangeliet 1:1-3",
        text: "I begynnelsen var Ordet, och Ordet var hos Gud, och Ordet var Gud. Han var i begynnelsen hos Gud. Allt blev till genom honom, och utan honom blev ingenting till av det som är till."
    },
    "Kol1:16": {
        title: "Kolosserbrevet 1:16",
        text: "För i honom skapades allt i himlarna och på jorden, det synliga och det osynliga, vare sig det är tronstolar eller herradömen, furstar eller makter. Allt är skapat genom honom och till honom."
    },
    "Kol1:17": {
        title: "Kolosserbrevet 1:17",
        text: "Han är före allt, och allt hålls samman i honom."
    },
    "Hebr1:3": {
        title: "Hebréerbrevet 1:3",
        text: "Han uppehåller allting genom sitt kraftord."
    },
    "Hebr1:14": {
        title: "Hebréerbrevet 1:14",
        text: "Är inte alla änglar tjänande andar, utsända för att tjäna dem som ska ärva frälsning?"
    },
    "Rom1:20": {
        title: "Romarbrevet 1:20",
        text: "Ty hans osynliga egenskaper, hans eviga kraft och gudomliga natur, kan skådas och uppfattas genom hans verk ända från skapelsen av världen."
    },
    "1Kor6:19-20": {
        title: "1 Korintierbrevet 6:19-20",
        text: "Ni tillhör inte er själva, ni är köpta för ett pris."
    },
    "1Kor4:2": {
        title: "1 Korintierbrevet 4:2",
        text: "Här krävs det av förvaltarna att var och en befinns trofast."
    },
    "Matt25:14-30": {
        title: "Matteusevangeliet 25:14-30",
        text: "[Liknelsen om talenterna: En herre anförtrodde sina tjänare talenter innan han reste bort. När han kom tillbaka krävde han redovisning för hur de förvaltats.]"
    }
};

// Hebreiska och grekiska ord med förklaringar
const originalWords = {
    "radah": {
        language: "Hebreiska",
        word: "רָדָה (radah)",
        meaning: "Att råda över, förvalta, ta ansvar för. Inte att missbruka eller exploatera, utan att vara Guds representant och viceregent."
    },
    "imago_dei": {
        language: "Hebreiska/Teologisk term",
        word: "צֶלֶם אֱלֹהִים (tselem Elohim)",
        meaning: "Guds avbild. Att vara skapad med rationell, moralisk, kreativ och relationell förmåga som speglar Skaparen."
    },
    "logos": {
        language: "Grekiska",
        word: "λόγος (Logos)",
        meaning: "Ordet, förnuftet, logiken. Johannes använder detta för Jesus för att visa att han är både Guds kommunikation och den rationella ordningen i skapelsen."
    }
};
