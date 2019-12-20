export const MENU_GROUP: { [x: string]: string } = {
  1: "ダッシュボード",
  2: "在庫照会",
  3: "注文指図",
  // 4: '仮置き設定'
  4: "EC販売対象<br/>在庫設定",
  5: "チャネル別<br/>在庫移動",
  6: "入荷配分設定",
  7: "入荷配分変更"
};

export const MENU_DEF: { [x: string]: { name: string; url: string } } = {
  1: { name: "ダッシュボード", url: "main" },
  2: { name: "取寄せ・直送", url: "goods-delivery/search" },
  3: { name: "在庫検索", url: "stock-inquiry" },
  4: { name: "注文照会・問合せ", url: "order-inquiry" },
  // 5: { name: '仮置き設定照会', url: 'temporary-locate' },
  // 6: { name: '新規登録', url: 'temporary-locate/regist' }
  5: {
    name: "店舗在庫仮置き",
    url: "ec-sales-stock-settings/temporary-locate"
  },
  6: { name: "予約在庫設定", url: "ec-sales-stock-settings/reserved-stock" },
  7: {
    name: "在庫連携対象外設定",
    url: "ec-sales-stock-settings/exclusion-target"
  },
  8: { name: "配分結果戻し", url: "channel-stock-movement/return-allocation" },
  9: {
    name: "チャネル別在庫移動",
    url: "channel-stock-movement/stock-movement"
  },
  10: { name: "フリー振替", url: "channel-stock-movement/free-transfer" },
  11: { name: "受注残消込", url: "channel-stock-movement/backlog-clearing" },
  12: {
    name: "配分グループ登録",
    url: "arrival-distribution-settings/allocation-group-register"
  },
  13: {
    name: "配分ランク登録",
    url: "arrival-distribution-settings/allocation-rank-register"
  },
  14: {
    name: "欠品フォロー在庫設定",
    url: "arrival-distribution-settings/stockout-follow-up"
  },
  15: {
    name: "店舗グループ登録",
    url: "arrival-distribution-settings/store-group-register"
  },
  16: {
    name: "入荷配分方法設定",
    url: "arrival-distribution-settings/delivery-distribution-method"
  },
  17: {
    name: "配分グループ変更",
    url: "arrival-distribution-change/allocation-group-change"
  },
  18: {
    name: "配分ランク変更",
    url: "arrival-distribution-change/allocation-rank-change"
  },
  19: {
    name: "配分中止・再開",
    url: "arrival-distribution-change/allocation-stop-restart"
  },
  20: { name: "店舗確認依頼", url: "store-confirmation-request" }
};

export const MENU_DEFINITION: {
  label: string;
  menuItems: { label: string; path: string }[];
}[] = [
  {
    label: "出荷・在庫確認",
    menuItems: [
      {
        label: "出荷予定照会・修正",
        path:
          "shipment-inventory-check/shipment-schedule-inquiry-correction/search"
      }
    ]
  }
];
