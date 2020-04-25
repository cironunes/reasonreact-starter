let sum = (numbers: list(int)) =>
  List.fold_right((a, b) => a + b, numbers, 0);