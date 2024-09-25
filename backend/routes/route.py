from flask import Blueprint, jsonify, request
from models.model import db, Note

notes_bp = Blueprint('notes', __name__)

# Ruta para listar las notas
@notes_bp.route('/notes', methods=['GET'])
def get_notes():
    notes = Note.query.all()
    notes_list = [{
        'id': note.id,
        'title': note.title,
        'content': note.content,
        'category': note.category,
        'created_at': note.created_at
    } for note in notes]

    return jsonify(notes_list), 200


# Ruta para agregar una nueva nota
@notes_bp.route('/notes', methods=['POST'])
def add_note():
    data = request.json
    new_note = Note(
        title=data['title'],
        content=data['content'],
        category=data['category']
    )
    db.session.add(new_note)
    db.session.commit()
    return jsonify({'message': 'Nota creada exitosamente', 'id': new_note.id}), 201


# Ruta para editar una nota
@notes_bp.route('/notes/<int:note_id>', methods=['PUT'])
def update_note(note_id):
    data = request.json
    note = Note.query.get(note_id)
    if note:
        note.title = data.get('title', note.title)
        note.content = data.get('content', note.content)
        note.category = data.get('category', note.category)
        db.session.commit()
        return jsonify({'message': 'Nota actualizada exitosamente'}), 200
    return jsonify({'message': 'Nota no encontrada'}), 404
    

# Ruta para eliminar una nota
@notes_bp.route('/notes/<int:note_id>', methods=['DELETE'])
def delete_note(note_id):
    note = Note.query.get(note_id)
    if note:
        db.session.delete(note)
        db.session.commit()
        return jsonify({'message': 'Nota eliminada exitosamente'}), 200
    return jsonify({'message': 'Nota no encontrada'}), 404