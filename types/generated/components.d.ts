import type { Schema, Struct } from '@strapi/strapi';

export interface BlockElementsProjectCard extends Struct.ComponentSchema {
  collectionName: 'components_block_elements_project_cards';
  info: {
    displayName: 'ProjectCard';
  };
  attributes: {
    codebaseCta: Schema.Attribute.Component<'ui-elements.button', false>;
    cover: Schema.Attribute.Media<'images'>;
    deployCta: Schema.Attribute.Component<'ui-elements.button', false>;
    name: Schema.Attribute.String;
  };
}

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

export interface UiElementsSection extends Struct.ComponentSchema {
  collectionName: 'components_ui_elements_sections';
  info: {
    displayName: 'Section';
  };
  attributes: {
    cover: Schema.Attribute.Media<'images'>;
    paragraph: Schema.Attribute.Text;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'block-elements.project-card': BlockElementsProjectCard;
      'ui-elements.button': UiElementsButton;
      'ui-elements.link': UiElementsLink;
      'ui-elements.section': UiElementsSection;
    }
  }
}
