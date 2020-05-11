class DateHelper {

    constructor() {
        throw new Error("Esta classe não pode ser instanciada.");
    }

    static textoParaData(texto) {
        /*let ano = this._inputData.value.split('-')[0],
            mes = this._inputData.value.split('-')[1] - 1,
            dia = this._inputData.value.split('-')[2];
        return new Date(ano, mes, dia);*/
        //return new Date(this._inputData.value.replace(/-/g, ','));
        //return new Date(this._inputData.value.split('-'));
        if(!/^\d{4}-\d{2}-\d{2}$/.test(texto)) {
            throw new Error('Data com formato inválido, deve ser aaaa-mm-dd');
        }
        return new Date(...texto
            .split('-')
            .map((item, indice) =>  indice === 1 ? item - 1 : item))
    }

    static dataParaTexto(data) {
        return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`;
    }

}