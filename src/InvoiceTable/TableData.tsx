export function createData(
  id: number,
  name: string,
  item: string,
  status: string,
  assign: string,
  color: string
) {
  return { id, name, item, status, assign, color };
}

export const rows = [
  createData(
    1,
    "Ragul",
    "Shirt",
    "Initial",
    "https://assets.minimals.cc/public/assets/images/mock/avatar/avatar-2.webp",
    "yellow"
  ),
  createData(
    2,
    "Tamil",
    "T Shirt",
    "Pending",
    "https://assets.minimals.cc/public/assets/images/mock/avatar/avatar-4.webp",
    "red"
  ),
  createData(
    3,
    "Vasanth",
    "Trousers",
    "Completed",
    "https://assets.minimals.cc/public/assets/images/mock/avatar/avatar-6.webp",
    "green"
  ),
  createData(
    4,
    "Ragul",
    "Collar Shirt",
    "Pending",
    "https://assets.minimals.cc/public/assets/images/mock/avatar/avatar-2.webp",
    "red"
  ),
  createData(
    5,
    "Tamil",
    "Collar Shirt",
    "Completed",
    "https://assets.minimals.cc/public/assets/images/mock/avatar/avatar-4.webp",
    "green"
  ),
  createData(
    6,
    "Vasanth",
    "Track pant",
    "Initial",
    "https://assets.minimals.cc/public/assets/images/mock/avatar/avatar-6.webp",
    "yellow"
  ),
];
