import type { Schema, Struct } from '@strapi/strapi';

export interface UiElementsButton extends Struct.ComponentSchema {
  collectionName: 'components_ui_elements_buttons';
  info: {
    displayName: 'Button';
  };
  attributes: {
    icon: Schema.Attribute.String;
    link: Schema.Attribute.String;
    size: Schema.Attribute.Enumeration<['small', 'medium']> &
      Schema.Attribute.DefaultTo<'medium'>;
    text: Schema.Attribute.String;
    variant: Schema.Attribute.Enumeration<['white', 'tertiary']> &
      Schema.Attribute.DefaultTo<'tertiary'>;
  };
}

export interface UiElementsLink extends Struct.ComponentSchema {
  collectionName: 'components_ui_elements_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    href: Schema.Attribute.String & Schema.Attribute.DefaultTo<'#'>;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    label: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'ui-elements.button': UiElementsButton;
      'ui-elements.link': UiElementsLink;
    }
  }
}
