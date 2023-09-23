import type { Schema, Attribute } from '@strapi/strapi';

export interface TampilanBanner extends Schema.Component {
  collectionName: 'components_tampilan_banners';
  info: {
    displayName: 'banner';
    description: '';
  };
  attributes: {
    judul: Attribute.String;
    deskripsi: Attribute.Text;
    link_teks: Attribute.String;
    link_url: Attribute.String;
    latar_belakang: Attribute.Media;
  };
}

export interface TampilanProdukUnggulan extends Schema.Component {
  collectionName: 'components_tampilan_produk_unggulans';
  info: {
    displayName: 'produk_unggulan';
    icon: 'apps';
  };
  attributes: {
    foto_produk: Attribute.Media;
    nama_produk: Attribute.String;
  };
}

export interface TampilanSmallCard extends Schema.Component {
  collectionName: 'components_tampilan_small_cards';
  info: {
    displayName: 'small-card';
    icon: 'bulletList';
  };
  attributes: {
    isi: Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Shared {
    export interface Components {
      'tampilan.banner': TampilanBanner;
      'tampilan.produk-unggulan': TampilanProdukUnggulan;
      'tampilan.small-card': TampilanSmallCard;
    }
  }
}
