/**
 * Composable com funções de formatação globais
 */
export function useFormatters() {
    /**
     * Formata data para padrão brasileiro
     * @param {string} dateString - Data em formato ISO
     * @returns {string} Data formatada
     */
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: 'long',
            year: 'numeric'
        });
    };

    /**
     * Formata valor monetário para Real brasileiro
     * @param {number} value - Valor numérico
     * @returns {string} Valor formatado
     */
    const formatMoney = (value) => {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(value);
    };

    /**
     * Formata número com separadores de milhar
     * @param {number} value - Valor numérico
     * @returns {string} Número formatado
     */
    const formatNumber = (value) => {
        return new Intl.NumberFormat('pt-BR').format(value);
    };

    /**
     * Formata telefone brasileiro
     * @param {string} phone - Número de telefone
     * @returns {string} Telefone formatado
     */
    const formatPhone = (phone) => {
        const cleaned = phone.replace(/\D/g, '');
        if (cleaned.length === 11) {
            return cleaned.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
        } else if (cleaned.length === 10) {
            return cleaned.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
        }
        return phone;
    };

    /**
     * Formata CPF
     * @param {string} cpf - CPF
     * @returns {string} CPF formatado
     */
    const formatCPF = (cpf) => {
        const cleaned = cpf.replace(/\D/g, '');
        return cleaned.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    };

    return {
        formatDate,
        formatMoney,
        formatNumber,
        formatPhone,
        formatCPF
    };
}