def total_carrito(request):
    total = 0
    carrito = request.session.get("carrito", {})  # Obtener el carrito de la sesión o un diccionario vacío si no existe
    for key, value in carrito.items():
        total += int(value["acumulado"])
    return {"total_carrito": total}