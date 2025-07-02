export function ok(res, data) {
    res.status(200).json(data);
  }
  export function created(res, data) {
    res.status(201).json(data);
  }
  export function error(res, msg, code = 400) {
    res.status(code).json({ error: msg });
  }
  