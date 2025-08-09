export const mainTheme = {
  token: {
    colorPrimary: "#004686",
    colorInfo: "#00321F",
  },
  components: {
    Button: {
      colorPrimary: "#004686",
      colorTextDisabled: "#000000",
      colorPrimaryHover: "#004686",
      colorPrimaryActive: "#DEAD35",
      colorBgContainerDisabled: "white",
      borderRadius: 4,
      fontSize: 14,
      height: 40,
      boxShadow: "0 0px 0 rgba(5, 145, 255, 0.1)",
      colorDanger: "#FF0000",
      colorDangerHover: "#D40000",
      colorDangerActive: "#9E0000",
    },
    Input: {
      controlHeightLG: 57,
      borderRadiusLG: 16,
      colorBorder: "#00321F",
      colorBorderLG: "#00321F",
    },
    DatePicker: {
      colorBorder: "#FF7A01",
      colorTextPlaceholder: "#FF7A01", // Updated to use a consistent color
    },
    Select: {
      controlHeightLG: 56,
      colorBorder: "#FF7A01",
      borderRadiusLG: "16px",
      colorTextPlaceholder: "#FF7A01",
    },
    Table: {
      colorText: "#000000",
      colorTextHeading: "#000000",
      colorBgContainer: "#ffffff",
      headerBg: "#ffffff",
      headerColor: "#FF7A01",
      headerBorderRadius: 0,
      borderRadius: 0,
      headerSplitColor: "none",
    },
  },
};
