export interface ItemType {
  name: string;
  category: string;
  furtherInformation: string;
  image: string;
  id: string;
}

export interface FormValues {
  name: string;
  furtherInformation: string;
  image: string;
  category: string;
}

export interface ItemsListProps {
  setItemId: (id: string) => void;
  itemsToAdd: string[];
}

export interface ItemDetailsProps {
  item: ItemType | null;
  setItemsToAdd: (itemsToAdd: string[]) => void;
  itemsToAdd: string[];
}

export interface FormValues {
  name: string;
  furtherInformation: string;
  image: string;
  category: string;
}
