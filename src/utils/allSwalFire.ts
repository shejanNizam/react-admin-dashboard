import Swal from "sweetalert2";

type SwalParams = {
  title: string;
  text: string;
};

export function SuccessSwal({ title, text }: SwalParams) {
  return Swal.fire({
    title: title,
    text: text,
    icon: "success",
    confirmButtonColor: "#DEAD35",
    confirmButtonText: "OK",
  });
}

export function ErrorSwal({ title, text }: SwalParams) {
  return Swal.fire({
    title: title,
    text: text,
    icon: "error",
    confirmButtonColor: "#d33",
    confirmButtonText: "OK",
  });
}
