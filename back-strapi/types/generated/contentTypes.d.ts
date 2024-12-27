import type { Schema, Struct } from '@strapi/strapi';

export interface AdminApiToken extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_api_tokens';
  info: {
    description: '';
    displayName: 'Api Token';
    name: 'Api Token';
    pluralName: 'api-tokens';
    singularName: 'api-token';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    accessKey: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Schema.Attribute.DefaultTo<''>;
    expiresAt: Schema.Attribute.DateTime;
    lastUsedAt: Schema.Attribute.DateTime;
    lifespan: Schema.Attribute.BigInteger;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::api-token'> &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'admin::api-token-permission'
    >;
    publishedAt: Schema.Attribute.DateTime;
    type: Schema.Attribute.Enumeration<['read-only', 'full-access', 'custom']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'read-only'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminApiTokenPermission extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_api_token_permissions';
  info: {
    description: '';
    displayName: 'API Token Permission';
    name: 'API Token Permission';
    pluralName: 'api-token-permissions';
    singularName: 'api-token-permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::api-token-permission'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    token: Schema.Attribute.Relation<'manyToOne', 'admin::api-token'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminPermission extends Struct.CollectionTypeSchema {
  collectionName: 'admin_permissions';
  info: {
    description: '';
    displayName: 'Permission';
    name: 'Permission';
    pluralName: 'permissions';
    singularName: 'permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    actionParameters: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<{}>;
    conditions: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<[]>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::permission'> &
      Schema.Attribute.Private;
    properties: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<{}>;
    publishedAt: Schema.Attribute.DateTime;
    role: Schema.Attribute.Relation<'manyToOne', 'admin::role'>;
    subject: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminRole extends Struct.CollectionTypeSchema {
  collectionName: 'admin_roles';
  info: {
    description: '';
    displayName: 'Role';
    name: 'Role';
    pluralName: 'roles';
    singularName: 'role';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    code: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::role'> &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Schema.Attribute.Relation<'oneToMany', 'admin::permission'>;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    users: Schema.Attribute.Relation<'manyToMany', 'admin::user'>;
  };
}

export interface AdminTransferToken extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_transfer_tokens';
  info: {
    description: '';
    displayName: 'Transfer Token';
    name: 'Transfer Token';
    pluralName: 'transfer-tokens';
    singularName: 'transfer-token';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    accessKey: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Schema.Attribute.DefaultTo<''>;
    expiresAt: Schema.Attribute.DateTime;
    lastUsedAt: Schema.Attribute.DateTime;
    lifespan: Schema.Attribute.BigInteger;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token-permission'
    >;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminTransferTokenPermission
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_transfer_token_permissions';
  info: {
    description: '';
    displayName: 'Transfer Token Permission';
    name: 'Transfer Token Permission';
    pluralName: 'transfer-token-permissions';
    singularName: 'transfer-token-permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token-permission'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    token: Schema.Attribute.Relation<'manyToOne', 'admin::transfer-token'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminUser extends Struct.CollectionTypeSchema {
  collectionName: 'admin_users';
  info: {
    description: '';
    displayName: 'User';
    name: 'User';
    pluralName: 'users';
    singularName: 'user';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    blocked: Schema.Attribute.Boolean &
      Schema.Attribute.Private &
      Schema.Attribute.DefaultTo<false>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    email: Schema.Attribute.Email &
      Schema.Attribute.Required &
      Schema.Attribute.Private &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    firstname: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    isActive: Schema.Attribute.Boolean &
      Schema.Attribute.Private &
      Schema.Attribute.DefaultTo<false>;
    lastname: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::user'> &
      Schema.Attribute.Private;
    password: Schema.Attribute.Password &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    preferedLanguage: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    registrationToken: Schema.Attribute.String & Schema.Attribute.Private;
    resetPasswordToken: Schema.Attribute.String & Schema.Attribute.Private;
    roles: Schema.Attribute.Relation<'manyToMany', 'admin::role'> &
      Schema.Attribute.Private;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    username: Schema.Attribute.String;
  };
}

export interface ApiActaEntregaActaEntrega extends Struct.CollectionTypeSchema {
  collectionName: 'acta_entregas';
  info: {
    displayName: 'Acta Entrega';
    pluralName: 'acta-entregas';
    singularName: 'acta-entrega';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    al: Schema.Attribute.Date;
    cargo: Schema.Attribute.Relation<'oneToOne', 'api::cargo.cargo'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    del: Schema.Attribute.Date;
    dependencia: Schema.Attribute.Relation<
      'oneToOne',
      'api::unidad-estructurada.unidad-estructurada'
    >;
    documento: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::acta-entrega.acta-entrega'
    > &
      Schema.Attribute.Private;
    personal: Schema.Attribute.Relation<'oneToOne', 'api::personal.personal'>;
    publishedAt: Schema.Attribute.DateTime;
    recibe: Schema.Attribute.Relation<'oneToOne', 'api::personal.personal'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiAfpAfp extends Struct.CollectionTypeSchema {
  collectionName: 'afps';
  info: {
    displayName: 'Afp';
    pluralName: 'afps';
    singularName: 'afp';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'api::afp.afp'> &
      Schema.Attribute.Private;
    nombre_afp: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiAscensoAscenso extends Struct.CollectionTypeSchema {
  collectionName: 'ascensos';
  info: {
    displayName: 'Ascenso';
    pluralName: 'ascensos';
    singularName: 'ascenso';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    al_cargo: Schema.Attribute.Relation<'oneToOne', 'api::cargo.cargo'>;
    al_nivel_remuneracion: Schema.Attribute.Relation<
      'oneToOne',
      'api::nivel-remuneracion.nivel-remuneracion'
    >;
    al_pap_cnp: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    del_cargo: Schema.Attribute.Relation<'oneToOne', 'api::cargo.cargo'>;
    del_nivel_remuneracion: Schema.Attribute.Relation<
      'oneToOne',
      'api::nivel-remuneracion.nivel-remuneracion'
    >;
    del_pap_cnp: Schema.Attribute.String;
    dependencia: Schema.Attribute.Relation<
      'oneToOne',
      'api::unidad-estructurada.unidad-estructurada'
    >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::ascenso.ascenso'
    > &
      Schema.Attribute.Private;
    personal: Schema.Attribute.Relation<'oneToOne', 'api::personal.personal'>;
    publishedAt: Schema.Attribute.DateTime;
    resolucion: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiBonificacionFamiliarBonificacionFamiliar
  extends Struct.CollectionTypeSchema {
  collectionName: 'bonificacion_familiars';
  info: {
    displayName: 'Bonificacion Familiar';
    pluralName: 'bonificacion-familiars';
    singularName: 'bonificacion-familiar';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::bonificacion-familiar.bonificacion-familiar'
    > &
      Schema.Attribute.Private;
    personal: Schema.Attribute.Relation<'oneToOne', 'api::personal.personal'>;
    publishedAt: Schema.Attribute.DateTime;
    resolucion: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    tipo: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiBonificacionPersonalBonificacionPersonal
  extends Struct.CollectionTypeSchema {
  collectionName: 'bonificacion_personals';
  info: {
    displayName: 'Bonificacion Personal';
    pluralName: 'bonificacion-personals';
    singularName: 'bonificacion-personal';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::bonificacion-personal.bonificacion-personal'
    > &
      Schema.Attribute.Private;
    personal: Schema.Attribute.Relation<'oneToOne', 'api::personal.personal'>;
    publishedAt: Schema.Attribute.DateTime;
    resolucion: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    tipo: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiCapacitacionCapacitacion
  extends Struct.CollectionTypeSchema {
  collectionName: 'capacitaciones';
  info: {
    displayName: 'Capacitacion';
    pluralName: 'capacitaciones';
    singularName: 'capacitacion';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    al: Schema.Attribute.Date;
    centro_capacitacion: Schema.Attribute.String;
    certificado: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    del: Schema.Attribute.Date;
    fecha_emision: Schema.Attribute.Date;
    horas_lectivas: Schema.Attribute.Decimal;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::capacitacion.capacitacion'
    > &
      Schema.Attribute.Private;
    materia: Schema.Attribute.String;
    personal: Schema.Attribute.Relation<'oneToOne', 'api::personal.personal'>;
    profesion_especialidad: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiCargoCargo extends Struct.CollectionTypeSchema {
  collectionName: 'cargos';
  info: {
    displayName: 'Cargo';
    pluralName: 'cargos';
    singularName: 'cargo';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'api::cargo.cargo'> &
      Schema.Attribute.Private;
    nombre_cargo: Schema.Attribute.String & Schema.Attribute.Required;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiConstanciaPagoConstanciaPago
  extends Struct.CollectionTypeSchema {
  collectionName: 'constancia_pagos';
  info: {
    displayName: 'Constancia Pago';
    pluralName: 'constancia-pagos';
    singularName: 'constancia-pago';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    al: Schema.Attribute.Date;
    cargo: Schema.Attribute.Relation<'oneToOne', 'api::cargo.cargo'>;
    cnp: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    del: Schema.Attribute.Date;
    dependencia: Schema.Attribute.Relation<
      'oneToOne',
      'api::unidad-estructurada.unidad-estructurada'
    >;
    documento: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::constancia-pago.constancia-pago'
    > &
      Schema.Attribute.Private;
    nivel_remuneracion: Schema.Attribute.Relation<
      'oneToOne',
      'api::nivel-remuneracion.nivel-remuneracion'
    >;
    pap: Schema.Attribute.String;
    personal: Schema.Attribute.Relation<'oneToOne', 'api::personal.personal'>;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiContratoAdmSerContratoAdmSer
  extends Struct.CollectionTypeSchema {
  collectionName: 'contrato_adm_sers';
  info: {
    displayName: 'contrato_adm_ser';
    pluralName: 'contrato-adm-sers';
    singularName: 'contrato-adm-ser';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    condicion_laboral: Schema.Attribute.Enumeration<
      ['Indeterminado', 'Eventual']
    >;
    contrato: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::contrato-adm-ser.contrato-adm-ser'
    > &
      Schema.Attribute.Private;
    personal: Schema.Attribute.Relation<'oneToOne', 'api::personal.personal'>;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiContratoDlProyInvContratoDlProyInv
  extends Struct.CollectionTypeSchema {
  collectionName: 'contrato_dl_proy_invs';
  info: {
    displayName: 'contrato_dl_proy_inv';
    pluralName: 'contrato-dl-proy-invs';
    singularName: 'contrato-dl-proy-inv';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    condicion_laboral: Schema.Attribute.Enumeration<
      ['Contratado', 'Reincorporado - Mandato Judicial']
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    desde: Schema.Attribute.Date;
    hasta: Schema.Attribute.Date;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::contrato-dl-proy-inv.contrato-dl-proy-inv'
    > &
      Schema.Attribute.Private;
    meta_as: Schema.Attribute.String;
    personal: Schema.Attribute.Relation<'oneToOne', 'api::personal.personal'>;
    publishedAt: Schema.Attribute.DateTime;
    resolucion: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiContratoDlContratoDl extends Struct.CollectionTypeSchema {
  collectionName: 'contrato_dls';
  info: {
    description: '';
    displayName: 'contrato_dl';
    pluralName: 'contrato-dls';
    singularName: 'contrato-dl';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    anios_servicio: Schema.Attribute.Integer;
    cnp: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    fecha_cese: Schema.Attribute.Date;
    fecha_ingreso: Schema.Attribute.Date;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::contrato-dl.contrato-dl'
    > &
      Schema.Attribute.Private;
    nivel_remuneracion: Schema.Attribute.Relation<
      'oneToOne',
      'api::nivel-remuneracion.nivel-remuneracion'
    >;
    pap: Schema.Attribute.String;
    personal: Schema.Attribute.Relation<'oneToOne', 'api::personal.personal'>;
    publishedAt: Schema.Attribute.DateTime;
    resolucion: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiContratoPractiContratoPracti
  extends Struct.CollectionTypeSchema {
  collectionName: 'contrato_practis';
  info: {
    displayName: 'Contrato_practi';
    pluralName: 'contrato-practis';
    singularName: 'contrato-practi';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    condicion_laboral: Schema.Attribute.Enumeration<
      ['Profesional', 'Pre Profesional']
    >;
    convenio: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    desde: Schema.Attribute.Date;
    hasta: Schema.Attribute.Date;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::contrato-practi.contrato-practi'
    > &
      Schema.Attribute.Private;
    personal: Schema.Attribute.Relation<'oneToOne', 'api::personal.personal'>;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiConyugeConyuge extends Struct.CollectionTypeSchema {
  collectionName: 'conyuges';
  info: {
    description: '';
    displayName: 'Conyuge';
    pluralName: 'conyuges';
    singularName: 'conyuge';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    apellido_materno: Schema.Attribute.String;
    apellido_paterno: Schema.Attribute.String;
    centro_trabajo: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    fecha_nacimiento: Schema.Attribute.Date;
    grado_instruccion: Schema.Attribute.Relation<
      'oneToOne',
      'api::grado-instruccion.grado-instruccion'
    >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::conyuge.conyuge'
    > &
      Schema.Attribute.Private;
    lugar_nacimiento: Schema.Attribute.Relation<
      'oneToOne',
      'api::ubigeo.ubigeo'
    >;
    nombres: Schema.Attribute.String;
    ocupacion: Schema.Attribute.Relation<
      'oneToOne',
      'api::ocupacion.ocupacion'
    >;
    profesion: Schema.Attribute.Relation<
      'oneToOne',
      'api::profesion.profesion'
    >;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiDemeritoDemerito extends Struct.CollectionTypeSchema {
  collectionName: 'demeritos';
  info: {
    displayName: 'Demerito';
    pluralName: 'demeritos';
    singularName: 'demerito';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    al: Schema.Attribute.Date;
    cargo: Schema.Attribute.Relation<'oneToOne', 'api::cargo.cargo'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    del: Schema.Attribute.Date;
    dependencia: Schema.Attribute.Relation<
      'oneToOne',
      'api::unidad-estructurada.unidad-estructurada'
    >;
    documento: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::demerito.demerito'
    > &
      Schema.Attribute.Private;
    personal: Schema.Attribute.Relation<'oneToOne', 'api::personal.personal'>;
    publishedAt: Schema.Attribute.DateTime;
    tipo: Schema.Attribute.Enumeration<
      [
        'Suspensi\u00F3n de labor sin goce de haberes',
        'Amonestaci\u00F3n',
        'Papeleta de abandono',
      ]
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiDescansoMedicoDescansoMedico
  extends Struct.CollectionTypeSchema {
  collectionName: 'descanso_medicos';
  info: {
    displayName: 'Descanso Medico';
    pluralName: 'descanso-medicos';
    singularName: 'descanso-medico';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    al: Schema.Attribute.Date;
    cargo: Schema.Attribute.Relation<'oneToOne', 'api::cargo.cargo'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    del: Schema.Attribute.Date;
    dependencia: Schema.Attribute.Relation<
      'oneToOne',
      'api::unidad-estructurada.unidad-estructurada'
    >;
    documento: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::descanso-medico.descanso-medico'
    > &
      Schema.Attribute.Private;
    personal: Schema.Attribute.Relation<'oneToOne', 'api::personal.personal'>;
    publishedAt: Schema.Attribute.DateTime;
    tipo: Schema.Attribute.Enumeration<
      ['Particular', 'Por cuenta de vacaciones', 'Permiso por familiar']
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiDesplazamientoDesplazamiento
  extends Struct.CollectionTypeSchema {
  collectionName: 'desplazamientos';
  info: {
    displayName: 'Desplazamiento';
    pluralName: 'desplazamientos';
    singularName: 'desplazamiento';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    a_oficina: Schema.Attribute.Relation<
      'oneToOne',
      'api::unidad-estructurada.unidad-estructurada'
    >;
    cargo: Schema.Attribute.Relation<'oneToOne', 'api::cargo.cargo'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    de_oficina: Schema.Attribute.Relation<
      'oneToOne',
      'api::unidad-estructurada.unidad-estructurada'
    >;
    documento: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    fecha_desplazamiento: Schema.Attribute.Date;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::desplazamiento.desplazamiento'
    > &
      Schema.Attribute.Private;
    personal: Schema.Attribute.Relation<'oneToOne', 'api::personal.personal'>;
    publishedAt: Schema.Attribute.DateTime;
    tipo: Schema.Attribute.Enumeration<
      [
        'Rotaci\u00F3n interna',
        'Rotaci\u00F3n voluntaria',
        'Reasignaci\u00F3n',
        'Designaci\u00F3n',
        'Destaque',
        'Permuta',
        'Encargar',
      ]
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiEstadoCivilEstadoCivil extends Struct.CollectionTypeSchema {
  collectionName: 'estado_civils';
  info: {
    displayName: 'Estado Civil';
    pluralName: 'estado-civils';
    singularName: 'estado-civil';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::estado-civil.estado-civil'
    > &
      Schema.Attribute.Private;
    nombre_est_civil: Schema.Attribute.String & Schema.Attribute.Required;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiEstudioEstudio extends Struct.CollectionTypeSchema {
  collectionName: 'estudios';
  info: {
    description: '';
    displayName: 'Estudio';
    pluralName: 'estudios';
    singularName: 'estudio';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    al: Schema.Attribute.Date;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    del: Schema.Attribute.Date;
    facultad: Schema.Attribute.String;
    formacion_academica: Schema.Attribute.Relation<
      'oneToOne',
      'api::grado-instruccion.grado-instruccion'
    >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::estudio.estudio'
    > &
      Schema.Attribute.Private;
    nombre_institucion: Schema.Attribute.String;
    personal: Schema.Attribute.Relation<'oneToOne', 'api::personal.personal'>;
    profesion_especialidad: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiExperienciaLaboralExperienciaLaboral
  extends Struct.CollectionTypeSchema {
  collectionName: 'experiencia_laborals';
  info: {
    displayName: 'Experiencia Laboral';
    pluralName: 'experiencia-laborals';
    singularName: 'experiencia-laboral';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    al: Schema.Attribute.Date;
    cargo: Schema.Attribute.String;
    centro_labor: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    del: Schema.Attribute.Date;
    dependencia_oficina: Schema.Attribute.String;
    documento: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    fecha_emision: Schema.Attribute.Date;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::experiencia-laboral.experiencia-laboral'
    > &
      Schema.Attribute.Private;
    personal: Schema.Attribute.Relation<'oneToOne', 'api::personal.personal'>;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiFichaEvaluacionFichaEvaluacion
  extends Struct.CollectionTypeSchema {
  collectionName: 'ficha_evaluacions';
  info: {
    displayName: 'Ficha Evaluacion';
    pluralName: 'ficha-evaluacions';
    singularName: 'ficha-evaluacion';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    documento: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    fecha_evaluacion: Schema.Attribute.Date;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::ficha-evaluacion.ficha-evaluacion'
    > &
      Schema.Attribute.Private;
    personal: Schema.Attribute.Relation<'oneToOne', 'api::personal.personal'>;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiGradoInstruccionGradoInstruccion
  extends Struct.CollectionTypeSchema {
  collectionName: 'grado_instruccions';
  info: {
    displayName: 'Grado Instruccion';
    pluralName: 'grado-instruccions';
    singularName: 'grado-instruccion';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::grado-instruccion.grado-instruccion'
    > &
      Schema.Attribute.Private;
    nombre_grado: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiHijoHijo extends Struct.CollectionTypeSchema {
  collectionName: 'hijos';
  info: {
    description: '';
    displayName: 'Hijo';
    pluralName: 'hijos';
    singularName: 'hijo';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    apellido_materno: Schema.Attribute.String;
    apellido_paterno: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    edad: Schema.Attribute.Integer;
    fecha_nacimiento: Schema.Attribute.Date;
    grado_instruccion: Schema.Attribute.Relation<
      'oneToOne',
      'api::grado-instruccion.grado-instruccion'
    >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'api::hijo.hijo'> &
      Schema.Attribute.Private;
    lugar_nacimiento: Schema.Attribute.Relation<
      'oneToOne',
      'api::ubigeo.ubigeo'
    >;
    nombres: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiMeritoMerito extends Struct.CollectionTypeSchema {
  collectionName: 'meritos';
  info: {
    displayName: 'Merito';
    pluralName: 'meritos';
    singularName: 'merito';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    documento: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    fecha: Schema.Attribute.Date;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::merito.merito'
    > &
      Schema.Attribute.Private;
    personal: Schema.Attribute.Relation<'oneToOne', 'api::personal.personal'>;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiNivelRemuneracionNivelRemuneracion
  extends Struct.CollectionTypeSchema {
  collectionName: 'nivel_remuneracions';
  info: {
    displayName: 'Nivel Remuneracion';
    pluralName: 'nivel-remuneracions';
    singularName: 'nivel-remuneracion';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::nivel-remuneracion.nivel-remuneracion'
    > &
      Schema.Attribute.Private;
    nombre_nivel: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiOcupacionOcupacion extends Struct.CollectionTypeSchema {
  collectionName: 'ocupacions';
  info: {
    displayName: 'Ocupacion';
    pluralName: 'ocupacions';
    singularName: 'ocupacion';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::ocupacion.ocupacion'
    > &
      Schema.Attribute.Private;
    nombre_ocupacion: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiPersonalDiscapacitadoPersonalDiscapacitado
  extends Struct.CollectionTypeSchema {
  collectionName: 'personal_discapacitados';
  info: {
    displayName: 'Personal Discapacitado';
    pluralName: 'personal-discapacitados';
    singularName: 'personal-discapacitado';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    documento: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::personal-discapacitado.personal-discapacitado'
    > &
      Schema.Attribute.Private;
    personal: Schema.Attribute.Relation<'oneToOne', 'api::personal.personal'>;
    publishedAt: Schema.Attribute.DateTime;
    tipo: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiPersonalPersonal extends Struct.CollectionTypeSchema {
  collectionName: 'personals';
  info: {
    displayName: 'Personal';
    pluralName: 'personals';
    singularName: 'personal';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    afp: Schema.Attribute.Relation<'oneToOne', 'api::afp.afp'>;
    apellido_materno: Schema.Attribute.String;
    apellido_paterno: Schema.Attribute.String;
    cargo: Schema.Attribute.Relation<'oneToOne', 'api::cargo.cargo'>;
    celular: Schema.Attribute.String;
    correo: Schema.Attribute.Email;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    discapacidad: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    dni_ce: Schema.Attribute.String;
    domicilio: Schema.Attribute.String;
    edad: Schema.Attribute.Integer;
    estado_civil: Schema.Attribute.Relation<
      'oneToOne',
      'api::estado-civil.estado-civil'
    >;
    fecha_ingreso: Schema.Attribute.Date;
    fecha_nacimiento: Schema.Attribute.Date;
    grupo_sanguineo: Schema.Attribute.Enumeration<['A', 'B', 'AB', 'O']>;
    interior: Schema.Attribute.String;
    lic_conducir: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::personal.personal'
    > &
      Schema.Attribute.Private;
    lugar_nacimiento: Schema.Attribute.Relation<
      'oneToOne',
      'api::ubigeo.ubigeo'
    >;
    lugar_residencia: Schema.Attribute.Relation<
      'oneToOne',
      'api::ubigeo.ubigeo'
    >;
    nacionalidad: Schema.Attribute.String;
    nombres: Schema.Attribute.String;
    num_autogenerado: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    regimen_pensionario: Schema.Attribute.Relation<
      'oneToOne',
      'api::regimen-pensionario.regimen-pensionario'
    >;
    sexo: Schema.Attribute.Enumeration<['Masculino', 'Femenino']>;
    situacion_laboral: Schema.Attribute.Relation<
      'oneToOne',
      'api::situacion-laboral.situacion-laboral'
    >;
    telefono: Schema.Attribute.String;
    unidad_estructurada: Schema.Attribute.Relation<
      'oneToOne',
      'api::unidad-estructurada.unidad-estructurada'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiProfesionProfesion extends Struct.CollectionTypeSchema {
  collectionName: 'profesions';
  info: {
    displayName: 'Profesion';
    pluralName: 'profesions';
    singularName: 'profesion';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::profesion.profesion'
    > &
      Schema.Attribute.Private;
    nombre_profesion: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiRegimenPensionarioRegimenPensionario
  extends Struct.CollectionTypeSchema {
  collectionName: 'regimen_pensionarios';
  info: {
    displayName: 'Regimen Pensionario';
    pluralName: 'regimen-pensionarios';
    singularName: 'regimen-pensionario';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::regimen-pensionario.regimen-pensionario'
    > &
      Schema.Attribute.Private;
    nombre_regimen: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiRenunciaLiquidacionRenunciaLiquidacion
  extends Struct.CollectionTypeSchema {
  collectionName: 'renuncia_liquidacions';
  info: {
    displayName: 'Renuncia Liquidacion';
    pluralName: 'renuncia-liquidacions';
    singularName: 'renuncia-liquidacion';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    cargo: Schema.Attribute.Relation<'oneToOne', 'api::cargo.cargo'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    dependencia: Schema.Attribute.Relation<
      'oneToOne',
      'api::unidad-estructurada.unidad-estructurada'
    >;
    documento: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    fecha_renuncia: Schema.Attribute.Date;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::renuncia-liquidacion.renuncia-liquidacion'
    > &
      Schema.Attribute.Private;
    motivo_renuncia: Schema.Attribute.String;
    personal: Schema.Attribute.Relation<'oneToOne', 'api::personal.personal'>;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiRolRol extends Struct.CollectionTypeSchema {
  collectionName: 'rols';
  info: {
    displayName: 'Rol';
    pluralName: 'rols';
    singularName: 'rol';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'api::rol.rol'> &
      Schema.Attribute.Private;
    nombre_rol: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiSituacionLaboralSituacionLaboral
  extends Struct.CollectionTypeSchema {
  collectionName: 'situacion_laborals';
  info: {
    displayName: 'Situacion Laboral';
    pluralName: 'situacion-laborals';
    singularName: 'situacion-laboral';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::situacion-laboral.situacion-laboral'
    > &
      Schema.Attribute.Private;
    nombre_sit_lab: Schema.Attribute.String & Schema.Attribute.Required;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiUbigeoUbigeo extends Struct.CollectionTypeSchema {
  collectionName: 'ubigeos';
  info: {
    displayName: 'Ubigeo';
    pluralName: 'ubigeos';
    singularName: 'ubigeo';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    cod_dep: Schema.Attribute.String;
    cod_dis: Schema.Attribute.String;
    cod_pro: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    departamento: Schema.Attribute.String & Schema.Attribute.Required;
    distrito: Schema.Attribute.String & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::ubigeo.ubigeo'
    > &
      Schema.Attribute.Private;
    provincia: Schema.Attribute.String & Schema.Attribute.Required;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiUnidadEstructuradaUnidadEstructurada
  extends Struct.CollectionTypeSchema {
  collectionName: 'unidad_estructuradas';
  info: {
    displayName: 'Unidad Estructurada';
    pluralName: 'unidad-estructuradas';
    singularName: 'unidad-estructurada';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::unidad-estructurada.unidad-estructurada'
    > &
      Schema.Attribute.Private;
    nombre_unidad: Schema.Attribute.String & Schema.Attribute.Required;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiUsuarioUsuario extends Struct.CollectionTypeSchema {
  collectionName: 'usuarios';
  info: {
    displayName: 'Usuario';
    pluralName: 'usuarios';
    singularName: 'usuario';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    contrasenia: Schema.Attribute.Password;
    correo: Schema.Attribute.Email;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    dni: Schema.Attribute.String;
    imagen: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::usuario.usuario'
    > &
      Schema.Attribute.Private;
    nombres: Schema.Attribute.String;
    provider: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    usuario: Schema.Attribute.String;
  };
}

export interface PluginContentReleasesRelease
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_releases';
  info: {
    displayName: 'Release';
    pluralName: 'releases';
    singularName: 'release';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    actions: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release-action'
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    publishedAt: Schema.Attribute.DateTime;
    releasedAt: Schema.Attribute.DateTime;
    scheduledAt: Schema.Attribute.DateTime;
    status: Schema.Attribute.Enumeration<
      ['ready', 'blocked', 'failed', 'done', 'empty']
    > &
      Schema.Attribute.Required;
    timezone: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginContentReleasesReleaseAction
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_release_actions';
  info: {
    displayName: 'Release Action';
    pluralName: 'release-actions';
    singularName: 'release-action';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    contentType: Schema.Attribute.String & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    entryDocumentId: Schema.Attribute.String;
    isEntryValid: Schema.Attribute.Boolean;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release-action'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    release: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::content-releases.release'
    >;
    type: Schema.Attribute.Enumeration<['publish', 'unpublish']> &
      Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginI18NLocale extends Struct.CollectionTypeSchema {
  collectionName: 'i18n_locale';
  info: {
    collectionName: 'locales';
    description: '';
    displayName: 'Locale';
    pluralName: 'locales';
    singularName: 'locale';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    code: Schema.Attribute.String & Schema.Attribute.Unique;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::i18n.locale'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.SetMinMax<
        {
          max: 50;
          min: 1;
        },
        number
      >;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginReviewWorkflowsWorkflow
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_workflows';
  info: {
    description: '';
    displayName: 'Workflow';
    name: 'Workflow';
    pluralName: 'workflows';
    singularName: 'workflow';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    contentTypes: Schema.Attribute.JSON &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'[]'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    publishedAt: Schema.Attribute.DateTime;
    stageRequiredToPublish: Schema.Attribute.Relation<
      'oneToOne',
      'plugin::review-workflows.workflow-stage'
    >;
    stages: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow-stage'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginReviewWorkflowsWorkflowStage
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_workflows_stages';
  info: {
    description: '';
    displayName: 'Stages';
    name: 'Workflow Stage';
    pluralName: 'workflow-stages';
    singularName: 'workflow-stage';
  };
  options: {
    draftAndPublish: false;
    version: '1.1.0';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    color: Schema.Attribute.String & Schema.Attribute.DefaultTo<'#4945FF'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow-stage'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String;
    permissions: Schema.Attribute.Relation<'manyToMany', 'admin::permission'>;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    workflow: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::review-workflows.workflow'
    >;
  };
}

export interface PluginUploadFile extends Struct.CollectionTypeSchema {
  collectionName: 'files';
  info: {
    description: '';
    displayName: 'File';
    pluralName: 'files';
    singularName: 'file';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    alternativeText: Schema.Attribute.String;
    caption: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    ext: Schema.Attribute.String;
    folder: Schema.Attribute.Relation<'manyToOne', 'plugin::upload.folder'> &
      Schema.Attribute.Private;
    folderPath: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    formats: Schema.Attribute.JSON;
    hash: Schema.Attribute.String & Schema.Attribute.Required;
    height: Schema.Attribute.Integer;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::upload.file'
    > &
      Schema.Attribute.Private;
    mime: Schema.Attribute.String & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    previewUrl: Schema.Attribute.String;
    provider: Schema.Attribute.String & Schema.Attribute.Required;
    provider_metadata: Schema.Attribute.JSON;
    publishedAt: Schema.Attribute.DateTime;
    related: Schema.Attribute.Relation<'morphToMany'>;
    size: Schema.Attribute.Decimal & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    url: Schema.Attribute.String & Schema.Attribute.Required;
    width: Schema.Attribute.Integer;
  };
}

export interface PluginUploadFolder extends Struct.CollectionTypeSchema {
  collectionName: 'upload_folders';
  info: {
    displayName: 'Folder';
    pluralName: 'folders';
    singularName: 'folder';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    children: Schema.Attribute.Relation<'oneToMany', 'plugin::upload.folder'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    files: Schema.Attribute.Relation<'oneToMany', 'plugin::upload.file'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::upload.folder'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    parent: Schema.Attribute.Relation<'manyToOne', 'plugin::upload.folder'>;
    path: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    pathId: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginUsersPermissionsPermission
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_permissions';
  info: {
    description: '';
    displayName: 'Permission';
    name: 'permission';
    pluralName: 'permissions';
    singularName: 'permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.permission'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    role: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginUsersPermissionsRole
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_roles';
  info: {
    description: '';
    displayName: 'Role';
    name: 'role';
    pluralName: 'roles';
    singularName: 'role';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.role'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
    publishedAt: Schema.Attribute.DateTime;
    type: Schema.Attribute.String & Schema.Attribute.Unique;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    users: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.user'
    >;
  };
}

export interface PluginUsersPermissionsUser
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_users';
  info: {
    description: '';
    displayName: 'User';
    name: 'user';
    pluralName: 'users';
    singularName: 'user';
  };
  options: {
    draftAndPublish: false;
    timestamps: true;
  };
  attributes: {
    blocked: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    confirmationToken: Schema.Attribute.String & Schema.Attribute.Private;
    confirmed: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    email: Schema.Attribute.Email &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.user'
    > &
      Schema.Attribute.Private;
    password: Schema.Attribute.Password &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    provider: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    resetPasswordToken: Schema.Attribute.String & Schema.Attribute.Private;
    role: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    username: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ContentTypeSchemas {
      'admin::api-token': AdminApiToken;
      'admin::api-token-permission': AdminApiTokenPermission;
      'admin::permission': AdminPermission;
      'admin::role': AdminRole;
      'admin::transfer-token': AdminTransferToken;
      'admin::transfer-token-permission': AdminTransferTokenPermission;
      'admin::user': AdminUser;
      'api::acta-entrega.acta-entrega': ApiActaEntregaActaEntrega;
      'api::afp.afp': ApiAfpAfp;
      'api::ascenso.ascenso': ApiAscensoAscenso;
      'api::bonificacion-familiar.bonificacion-familiar': ApiBonificacionFamiliarBonificacionFamiliar;
      'api::bonificacion-personal.bonificacion-personal': ApiBonificacionPersonalBonificacionPersonal;
      'api::capacitacion.capacitacion': ApiCapacitacionCapacitacion;
      'api::cargo.cargo': ApiCargoCargo;
      'api::constancia-pago.constancia-pago': ApiConstanciaPagoConstanciaPago;
      'api::contrato-adm-ser.contrato-adm-ser': ApiContratoAdmSerContratoAdmSer;
      'api::contrato-dl-proy-inv.contrato-dl-proy-inv': ApiContratoDlProyInvContratoDlProyInv;
      'api::contrato-dl.contrato-dl': ApiContratoDlContratoDl;
      'api::contrato-practi.contrato-practi': ApiContratoPractiContratoPracti;
      'api::conyuge.conyuge': ApiConyugeConyuge;
      'api::demerito.demerito': ApiDemeritoDemerito;
      'api::descanso-medico.descanso-medico': ApiDescansoMedicoDescansoMedico;
      'api::desplazamiento.desplazamiento': ApiDesplazamientoDesplazamiento;
      'api::estado-civil.estado-civil': ApiEstadoCivilEstadoCivil;
      'api::estudio.estudio': ApiEstudioEstudio;
      'api::experiencia-laboral.experiencia-laboral': ApiExperienciaLaboralExperienciaLaboral;
      'api::ficha-evaluacion.ficha-evaluacion': ApiFichaEvaluacionFichaEvaluacion;
      'api::grado-instruccion.grado-instruccion': ApiGradoInstruccionGradoInstruccion;
      'api::hijo.hijo': ApiHijoHijo;
      'api::merito.merito': ApiMeritoMerito;
      'api::nivel-remuneracion.nivel-remuneracion': ApiNivelRemuneracionNivelRemuneracion;
      'api::ocupacion.ocupacion': ApiOcupacionOcupacion;
      'api::personal-discapacitado.personal-discapacitado': ApiPersonalDiscapacitadoPersonalDiscapacitado;
      'api::personal.personal': ApiPersonalPersonal;
      'api::profesion.profesion': ApiProfesionProfesion;
      'api::regimen-pensionario.regimen-pensionario': ApiRegimenPensionarioRegimenPensionario;
      'api::renuncia-liquidacion.renuncia-liquidacion': ApiRenunciaLiquidacionRenunciaLiquidacion;
      'api::rol.rol': ApiRolRol;
      'api::situacion-laboral.situacion-laboral': ApiSituacionLaboralSituacionLaboral;
      'api::ubigeo.ubigeo': ApiUbigeoUbigeo;
      'api::unidad-estructurada.unidad-estructurada': ApiUnidadEstructuradaUnidadEstructurada;
      'api::usuario.usuario': ApiUsuarioUsuario;
      'plugin::content-releases.release': PluginContentReleasesRelease;
      'plugin::content-releases.release-action': PluginContentReleasesReleaseAction;
      'plugin::i18n.locale': PluginI18NLocale;
      'plugin::review-workflows.workflow': PluginReviewWorkflowsWorkflow;
      'plugin::review-workflows.workflow-stage': PluginReviewWorkflowsWorkflowStage;
      'plugin::upload.file': PluginUploadFile;
      'plugin::upload.folder': PluginUploadFolder;
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission;
      'plugin::users-permissions.role': PluginUsersPermissionsRole;
      'plugin::users-permissions.user': PluginUsersPermissionsUser;
    }
  }
}
