import * as Colors from "./colours"

const BoldFont = {
    fontFamily: "NotoSans Regular",
    fontWeight: "bold",
    fontStyle: "normal",
    fontStretch: "normal",
    lineHeight: "normal",
    letterSpacing: "normal"
}

const SemiBoldFont = {
    fontFamily: "NotoSans Regular",
    fontWeight: "600",
    fontStyle: "normal",
    fontStretch: "normal",
    lineHeight: "normal",
    letterSpacing: "normal"
}

const MediumFont = {
    fontFamily: "NotoSans Medium",
    fontWeight: "500",
    fontStyle: "normal",
    fontStretch: "normal",
    lineHeight: "normal",
    letterSpacing: "normal"
}

const RegularFont = {
    fontFamily: "NotoSans Regular",
    fontWeight: "normal",
    fontStyle: "normal",
    fontStretch: "normal",
    lineHeight: "normal",
    letterSpacing: "normal"
}

export const typography = {
    useNextVariants: true,
    primaryButton: {
        fontFamily: "NotoSans Regular",
        fontSize: "16px",
        fontWeight: "bold",
        textAlign: "center"
    },
    secondaryButton: {
        fontFamily: "NotoSans Regular",
        fontSize: "16px",
        fontWeight: "bold",
        textAlign: "center"
    },
    headingBoldEbony: {
        ...BoldFont,
        fontSize: "60px",
        color: Colors.ebony
    },
    h1BoldEbony: {
        ...BoldFont,
        fontSize: "26px",
        textAlign: "center",
        color: Colors.ebony
    },
    h1BoldWhite: {
        ...BoldFont,
        fontSize: "26px",
        textAlign: "center",
        color: Colors.white
    },
    h1MediumEbony: {
        ...MediumFont,
        fontSize: "26px",
        textAlign: "center",
        color: Colors.ebony
    },
    h1MediumWhite: {
        ...MediumFont,
        fontSize: "26px",
        textAlign: "center",
        color: Colors.white
    },
    h1MediumManatee: {
        ...MediumFont,
        fontSize: "26px",
        textAlign: "center",
        color: Colors.manatee
    },
    h2BoldEbony: {
        ...BoldFont,
        fontSize: "24px",
        textAlign: "center",
        color: Colors.ebony
    },
    h2BoldTundora: {
        ...BoldFont,
        fontSize: "24px",
        textAlign: "center",
        color: Colors.tundora
    },
    h2BoldWhite: {
        ...BoldFont,
        fontSize: "24px",
        textAlign: "center",
        color: Colors.white
    },
    h2MediumEbony: {
        ...MediumFont,
        fontSize: "24px",
        textAlign: "center",
        color: Colors.ebony
    },
    h2MediumWhite: {
        ...MediumFont,
        fontSize: "24px",
        textAlign: "center",
        color: Colors.white
    },
    h2MediumManatee: {
        ...MediumFont,
        fontSize: "24px",
        textAlign: "center",
        color: Colors.manatee
    },
    h3BoldEbony: {
        ...BoldFont,
        fontSize: "22px",
        color: Colors.ebony
    },
    h3BoldWhite: {
        ...BoldFont,
        fontSize: "22px",
        color: Colors.white
    },
    h3BoldCornFlowerBlue: {
        ...BoldFont,
        fontSize: "22px",
        color: Colors.cornflowerblue
    },
    h3BoldOceanGreen: {
        ...BoldFont,
        fontSize: "22px",
        textAlign: "center",
        color: Colors.oceangreen
    },
    h3BoldAlizarinCrimson: {
        ...BoldFont,
        fontSize: "22px",
        color: Colors.alizarinCrimson
    },
    h3MediumEbony: {
        ...MediumFont,
        fontSize: "22px",
        textAlign: "center",
        color: Colors.ebony
    },
    h3MediumWhite: {
        ...MediumFont,
        fontSize: "22px",
        textAlign: "center",
        color: Colors.white
    },
    h3MediumManatee: {
        ...MediumFont,
        fontSize: "22px",
        textAlign: "center",
        color: Colors.manatee
    },
    h4BoldEbony: {
        ...BoldFont,
        fontSize: "20px",
        textAlign: "center",
        color: Colors.ebony
    },
    h4BoldWhite: {
        ...BoldFont,
        fontSize: "20px",
        textAlign: "center",
        color: Colors.white
    },
    h4MediumEbony: {
        ...MediumFont,
        fontSize: "20px",
        textAlign: "center",
        color: Colors.ebony
    },
    h4MediumWhite: {
        ...MediumFont,
        fontSize: "20px",
        textAlign: "center",
        color: Colors.white
    },
    h4MediumManatee: {
        ...MediumFont,
        fontSize: "20px",
        textAlign: "center",
        color: Colors.manatee
    },
    h4MediumTundora: {
        ...MediumFont,
        fontSize: "20px",
        textAlign: "center",
        color: Colors.tundora
    },
    h4MediumGulfBlue: {
        ...MediumFont,
        fontSize: "20px",
        color: Colors.gulfBlue
    },
    h4RegularEbony: {
        ...RegularFont,
        fontSize: "20px",
        color: Colors.ebony
    },
    h5BoldEbony: {
        ...BoldFont,
        fontSize: "18px",
        textAlign: "center",
        color: Colors.ebony
    },
    h5BoldEbonyItalic: {
        ...BoldFont,
        fontSize: "18px",
        textAlign: "center",
        color: Colors.ebony,
        fontStyle: "italic"
    },
    h5EbonyItalic: {
        fontSize: "18px",
        textAlign: "center",
        color: Colors.ebony,
        fontStyle: "italic"
    },
    h5BoldWhite: {
        ...BoldFont,
        fontSize: "18px",
        textAlign: "center",
        color: Colors.white
    },
    h5BoldOceanGreen: {
        ...BoldFont,
        fontSize: "18px",
        textAlign: "center",
        color: Colors.oceangreen
    },
    h5MediumEbony: {
        ...MediumFont,
        fontSize: "18px",
        color: Colors.ebony
    },
    h5MediumWhite: {
        ...MediumFont,
        fontSize: "18px",
        textAlign: "center",
        color: Colors.white
    },
    h5MediumDustyGray: {
        ...MediumFont,
        fontSize: "18px",
        textAlign: "center",
        color: Colors.dustyGray
    },
    h5MediumManatee: {
        ...MediumFont,
        fontSize: "18px",
        textAlign: "center",
        color: Colors.manatee
    },
    h5MediumTundora: {
        ...MediumFont,
        fontSize: "18px",
        textAlign: "center",
        color: Colors.tundora
    },
    h5RegularEbony: {
        ...RegularFont,
        fontSize: "18px",
        textAlign: "center",
        color: Colors.ebony
    },
    h5RegularWhite: {
        ...RegularFont,
        fontSize: "18px",
        textAlign: "center",
        color: Colors.white
    },
    h5RegularManatee: {
        ...RegularFont,
        fontSize: "18px",
        textAlign: "center",
        color: Colors.manatee
    },
    h6BoldEbony: {
        ...BoldFont,
        fontSize: "17px",
        textAlign: "center",
        color: Colors.ebony
    },
    h6MediumManatee: {
        ...MediumFont,
        fontSize: "16px",
        textAlign: "center",
        color: Colors.manatee,
        lineHeight: "22px"
    },
    h6RegularManatee: {
        ...RegularFont,
        fontSize: "16px",
        color: Colors.manatee,
        lineHeight: "22px"
    },
    h6SemiBoldEbony: {
        ...SemiBoldFont,
        fontSize: "16px",
        textAlign: "left",
        color: Colors.ebony
    },
    h6MediumEbony: {
        ...MediumFont,
        fontSize: "16px",
        color: Colors.ebony
    },
    h7MediumManatee: {
        ...MediumFont,
        fontSize: "13px",
        textAlign: "center",
        color: Colors.manatee,
        lineHeight: "18px"
    },
    labelEbony: {
        fontFamily: "NotoSans Regular",
        fontSize: "14px",
        fontWeight: "normal",
        fontStyle: "normal",
        fontStretch: "normal",
        lineHeight: "1.71",
        letterSpacing: "normal",
        color: Colors.ebony
    },
    labelBoldEbony: {
        ...BoldFont,
        fontFamily: "NotoSans Regular",
        fontSize: "14px",
        fontStyle: "normal",
        fontStretch: "normal",
        lineHeight: "1.71",
        letterSpacing: "normal",
        color: Colors.ebony
    },
    labelWhite: {
        fontFamily: "NotoSans Regular",
        fontSize: "14px",
        fontWeight: "normal",
        fontStyle: "normal",
        fontStretch: "normal",
        lineHeight: "1.71",
        letterSpacing: "normal",
        color: Colors.white
    },
    labelManatee: {
        fontFamily: "NotoSans Regular",
        fontSize: "14px",
        fontWeight: "normal",
        fontStyle: "normal",
        fontStretch: "normal",
        lineHeight: "1.71",
        letterSpacing: "normal",
        color: Colors.manatee
    },
    labelRiverBed: {
        fontFamily: "NotoSans Regular",
        fontSize: "14px",
        fontWeight: "normal",
        fontStyle: "normal",
        fontStretch: "normal",
        lineHeight: "1.71",
        letterSpacing: "normal",
        color: Colors.riverBed
    },
    paragraphEbony: {
        fontFamily: "NotoSans Regular",
        fontSize: "16px",
        fontWeight: "normal",
        fontStyle: "normal",
        fontStretch: "normal",
        lineHeight: "1.69",
        letterSpacing: "normal",
        color: Colors.ebony
    },
    paragraphSmallRiverBed: {
        fontFamily: "NotoSans Regular",
        fontSize: "12px",
        fontWeight: "normal",
        fontStyle: "normal",
        fontStretch: "normal",
        lineHeight: "1.25",
        letterSpacing: "normal",
        color: Colors.riverBed
    },
    paragraphMediumEbony: {
        ...MediumFont,
        fontFamily: "NotoSans Medium",
        fontSize: "16px",
        fontWeight: "normal",
        fontStyle: "normal",
        fontStretch: "normal",
        lineHeight: "1.69",
        letterSpacing: "normal",
        color: Colors.ebony
    },
    paragraphBoldEbony: {
        ...BoldFont,
        fontFamily: "NotoSans Regular",
        fontSize: "16px",
        fontStyle: "normal",
        fontStretch: "normal",
        lineHeight: "1.69",
        letterSpacing: "normal",
        color: Colors.ebony
    },
    paragraphEbonyInline: {
        display: "inline-block",
        fontFamily: "NotoSans Regular",
        fontSize: "16px",
        fontWeight: "normal",
        fontStyle: "normal",
        fontStretch: "normal",
        lineHeight: "1.69",
        letterSpacing: "normal",
        textAlign: "center",
        color: Colors.ebony
    },
    paragraphWhite: {
        fontFamily: "NotoSans Regular",
        fontSize: "16px",
        fontWeight: "normal",
        fontStyle: "normal",
        fontStretch: "normal",
        lineHeight: "1.69",
        letterSpacing: "normal",
        color: Colors.white
    },
    paragraphManatee: {
        fontFamily: "NotoSans Regular",
        fontSize: "16px",
        fontWeight: "normal",
        fontStyle: "normal",
        fontStretch: "normal",
        lineHeight: "1.69",
        letterSpacing: "normal",
        color: Colors.manatee
    },
    paragraphCornflowerblue: {
        fontFamily: "NotoSans Regular",
        fontSize: "16px",
        fontWeight: "normal",
        fontStyle: "normal",
        fontStretch: "normal",
        lineHeight: "1.69",
        letterSpacing: "normal",
        color: Colors.cornflowerblue
    },
    paragraphAlizarinCrimson: {
        fontFamily: "NotoSans Regular",
        fontSize: "16px",
        fontWeight: "normal",
        fontStyle: "normal",
        fontStretch: "normal",
        lineHeight: "1.69",
        letterSpacing: "normal",
        color: Colors.alizarinCrimson
    },
    link: {
        fontFamily: "NotoSans Regular",
        fontSize: "16px",
        fontWeight: "500",
        fontStyle: "normal",
        fontStretch: "normal",
        lineHeight: "1.69",
        letterSpacing: "normal",
        color: Colors.cornflowerblue,
        cursor: "pointer"
    },
    linkUnderlined: {
        fontFamily: "NotoSans Regular",
        fontSize: "16px",
        fontWeight: "500",
        fontStyle: "normal",
        fontStretch: "normal",
        lineHeight: "1.69",
        letterSpacing: "normal",
        textDecoration: "underline",
        color: Colors.cornflowerblue,
        cursor: "pointer",
        textTransform: "none"
    },
    linkEbony: {
        fontFamily: "NotoSans Regular",
        fontSize: "14px !important",
        fontWeight: "500",
        fontStyle: "normal",
        fontStretch: "normal",
        lineHeight: "1.69",
        letterSpacing: "normal",
        textDecoration: "underline",
        textAlign: "center",
        color: Colors.ebony,
        cursor: "pointer"
    },
    linkNumber: {
        fontFamily: "NotoSans Regular",
        fontSize: "16px !important",
        fontWeight: "500",
        fontStyle: "normal",
        fontStretch: "normal",
        lineHeight: "1.69",
        letterSpacing: "normal",
        textAlign: "center",
        color: Colors.cornflowerblue,
        cursor: "text !important"
    },
    activeBreadcrumb: {
        display: "flex",
        color: Colors.toreabay,
        fontFamily: "NotoSans Regular",
        fontSize: "16px",
        fontWeight: "normal",
        textAlign: "center"
    },
    inactiveBreadcrumb: {
        display: "flex",
        textAlign: "center",
        fontFamily: "NotoSans Regular",
        fontSize: "16px",
        fontWeight: "normal",
        fontStyle: "normal",
        fontStretch: "normal",
        lineHeight: "1.69",
        letterSpacing: "normal",
        color: Colors.manatee
    },
    completedBreadcrumb: {
        display: "flex",
        color: Colors.cornflowerblue,
        fontFamily: "NotoSans Regular",
        fontSize: "16px",
        fontWeight: "normal",
        textAlign: "center"
    },
    primaryToggleButton: {
        fontFamily: "NotoSans Regular",
        fontSize: "16px",
        fontWeight: "bold",
        textAlign: "center",
        textTransform: "capitalize"
    },
    secondaryToggleButton: {
        fontFamily: "NotoSans Regular",
        fontSize: "16px",
        fontWeight: "bold",
        textAlign: "center",
        textTransform: "capitalize"
    },
    labelEbonyItalic: {
        fontFamily: "NotoSans Regular",
        fontSize: "14px",
        fontWeight: "normal",
        fontStyle: "italic",
        fontStretch: "normal",
        lineHeight: "1.71",
        letterSpacing: "normal",
        color: Colors.ebony
    },
    paragraphSlateGray: {
        fontFamily: "NotoSans Regular",
        fontSize: "16px",
        fontWeight: "normal",
        fontStyle: "normal",
        fontStretch: "normal",
        lineHeight: "1.69",
        letterSpacing: "normal",
        color: Colors.slateGray
    },
    paragraphDodgerBlue: {
        fontFamily: "NotoSans Regular",
        fontSize: "16px",
        fontWeight: "normal",
        fontStyle: "normal",
        fontStretch: "normal",
        lineHeight: "1.69",
        letterSpacing: "normal",
        color: Colors.dodgerBlue
    },
    paragraphDodgerBlueMed: {
        fontFamily: "NotoSans Medium",
        fontSize: "16px",
        fontWeight: "normal",
        fontStyle: "normal",
        fontStretch: "normal",
        lineHeight: "1.69",
        letterSpacing: "normal",
        color: Colors.dodgerBlue
    },
    paragraphManateeSans: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        fontSize: '0.75rem',
        fontWeight: "normal",
        fontStyle: "normal",
        fontStretch: "normal",
        lineHeight: "1.69",
        letterSpacing: "normal",
        color: Colors.manatee
    },
    paragraphMirage16: {
        fontFamily: "NotoSans Regular",
        fontSize: "16px",
        color: Colors.mirage
    },
    paragraphMirage14: {
        fontFamily: "NotoSans Regular",
        fontSize: "14px",
        color: Colors.mirage
    },
    paragraphsilverChalice: {
        fontFamily: "NotoSans Regular",
        fontSize: "16px",
        fontWeight: "normal",
        fontStyle: "normal",
        fontStretch: "normal",
        lineHeight: "1.69",
        letterSpacing: "normal",
        color: Colors.silverChalice
    },
    headingWhite34: {
        fontFamily: "NotoSans Bold",
        color: 'white',
        fontWeight: "bold",
        fontStyle: "normal",
        fontStretch: "normal",
        lineHeight: "normal",
        letterSpacing: "normal",
        fontSize: "34px",
    },
    pomegranateHeading: {
        fontFamily: "NotoSans Regular",
        fontSize: "32px",
        fontWeight: "bold",
        color: Colors.pomegranate,
        textAlign: "left"
    },
    h5BoldPomegranateHeading: {
        fontFamily: "NotoSans Regular",
        fontSize: "18",
        fontWeight: "bold",
        color: Colors.pomegranate,
        textAlign: "left"
    },
    paragraphMidnight16: {
        fontFamily: "NotoSans Regular",
        fontSize: "16px",
        color: Colors.midnight
    },
    paragraphMidnightMed18: {
        fontFamily: "NotoSans Medium",
        fontSize: "18px",
        color: Colors.midnight
    },
    paragraphMidnightReg18: {
        fontFamily: "NotoSans Regular",
        fontSize: "18px",
        color: Colors.midnight
    },
    smaltHeading14: {
        fontFamily: "NotoSans Medium",
        fontSize: "14px",
        color: Colors.smalt
    }
}
