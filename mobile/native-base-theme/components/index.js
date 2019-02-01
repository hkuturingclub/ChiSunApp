import _ from "lodash";
import badgeTheme from "./Badge";
import bodyTheme from "./Body";
import buttonTheme from "./Button";
import cardItemTheme from "./CardItem";
import cardTheme from "./Card";
import checkBoxTheme from "./CheckBox";
import containerTheme from "./Container";
import contentTheme from "./Content";
import fabTheme from "./Fab";
import footerTabTheme from "./FooterTab";
import footerTheme from "./Footer";
import formTheme from "./Form";
import h1Theme from "./H1";
import h2Theme from "./H2";
import h3Theme from "./H3";
import headerTheme from "./Header";
import iconTheme from "./Icon";
import inputGroupTheme from "./InputGroup";
import inputTheme from "./Input";
import itemTheme from "./Item";
import labelTheme from "./Label";
import leftTheme from "./Left";
import listItemTheme from "./ListItem";
import radioTheme from "./Radio";
import rightTheme from "./Right";
import segmentTheme from "./Segment";
import separatorTheme from "./Separator";
import spinnerTheme from "./Spinner";
import subtitleTheme from "./Subtitle";
import swipeRowTheme from "./SwipeRow";
import switchTheme from "./Switch";
import tabBarTheme from "./TabBar";
import tabContainerTheme from "./TabContainer";
import tabHeadingTheme from "./TabHeading";
import tabTheme from "./Tab";
import textAreaTheme from "./Textarea";
import textTheme from "./Text";
import thumbnailTheme from "./Thumbnail";
import titleTheme from "./Title";
import toastTheme from "./Toast";
import variable from "./../variables/platform";
import viewTheme from "./View";

export default (variables = variable) => {
  const theme = {
    variables,
    "NativeBase.Left": {
      ...leftTheme(variables)
    },
    "NativeBase.Right": {
      ...rightTheme(variables)
    },
    "NativeBase.Body": {
      ...bodyTheme(variables)
    },

    "NativeBase.Header": {
      ...headerTheme(variables)
    },

    "NativeBase.Button": {
      ...buttonTheme(variables)
    },

    "NativeBase.Title": {
      ...titleTheme(variables)
    },
    "NativeBase.Subtitle": {
      ...subtitleTheme(variables)
    },

    "NativeBase.InputGroup": {
      ...inputGroupTheme(variables)
    },

    "NativeBase.Input": {
      ...inputTheme(variables)
    },

    "NativeBase.Badge": {
      ...badgeTheme(variables)
    },

    "NativeBase.CheckBox": {
      ...checkBoxTheme(variables)
    },

    "NativeBase.Radio": {
      ...radioTheme(variables)
    },

    "NativeBase.Card": {
      ...cardTheme()
    },

    "NativeBase.CardItem": {
      ...cardItemTheme(variables)
    },

    "NativeBase.Toast": {
      ...toastTheme(variables)
    },

    "NativeBase.H1": {
      ...h1Theme(variables)
    },
    "NativeBase.H2": {
      ...h2Theme(variables)
    },
    "NativeBase.H3": {
      ...h3Theme(variables)
    },
    "NativeBase.Form": {
      ...formTheme(variables)
    },

    "NativeBase.Container": {
      ...containerTheme(variables)
    },
    "NativeBase.Content": {
      ...contentTheme(variables)
    },

    "NativeBase.Footer": {
      ...footerTheme(variables)
    },

    "NativeBase.Tabs": {
      flex: 1
    },

    "NativeBase.FooterTab": {
      ...footerTabTheme(variables)
    },

    "NativeBase.ListItem": {
      ...listItemTheme(variables)
    },

    "NativeBase.ListItem1": {
      ...listItemTheme(variables)
    },

    "NativeBase.Icon": {
      ...iconTheme(variables)
    },
    "NativeBase.IconNB": {
      ...iconTheme(variables)
    },
    "NativeBase.Text": {
      ...textTheme(variables)
    },
    "NativeBase.Spinner": {
      ...spinnerTheme(variables)
    },

    "NativeBase.Fab": {
      ...fabTheme(variables)
    },

    "NativeBase.Item": {
      ...itemTheme(variables)
    },

    "NativeBase.Label": {
      ...labelTheme(variables)
    },

    "NativeBase.Textarea": {
      ...textAreaTheme(variables)
    },

    "NativeBase.PickerNB": {
      "NativeBase.Button": {
        "NativeBase.Text": {}
      }
    },

    "NativeBase.Tab": {
      ...tabTheme(variables)
    },

    "NativeBase.Segment": {
      ...segmentTheme(variables)
    },

    "NativeBase.TabBar": {
      ...tabBarTheme(variables)
    },
    "NativeBase.ViewNB": {
      ...viewTheme(variables)
    },
    "NativeBase.TabHeading": {
      ...tabHeadingTheme(variables)
    },
    "NativeBase.TabContainer": {
      ...tabContainerTheme(variables)
    },
    "NativeBase.Switch": {
      ...switchTheme(variables)
    },
    "NativeBase.Separator": {
      ...separatorTheme(variables)
    },
    "NativeBase.SwipeRow": {
      ...swipeRowTheme(variables)
    },
    "NativeBase.Thumbnail": {
      ...thumbnailTheme(variables)
    }
  };

  const cssifyTheme = (grandparent, parent, parentKey) => {
    _.forEach(parent, (style, styleName) => {
      // console.log('styleName', styleName);
      // console.log('parentKey', parentKey);
      if (
        styleName.indexOf(".") === 0 &&
        parentKey &&
        parentKey.indexOf(".") === 0
      ) {
        if (grandparent) {
          if (!grandparent[styleName]) {
            grandparent[styleName] = {};
          } else {
            grandparent[styleName][parentKey] = style;
          }
        }
      }
      if (style && typeof style === "object" && styleName !== "fontVariant") {
        cssifyTheme(parent, style, styleName);
      }
    });
  };

  cssifyTheme(null, theme, null);

  return theme;
};
