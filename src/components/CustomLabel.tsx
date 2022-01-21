import './CustomLabel.css';

export interface CustomLabelProps {
  /**
   * Este es el mensaje que se mostrará en la etiqueta
   */
  label: string;
  /**
   * Tamaño de la etiqueta. Por defecto es "normal"
   */
  size: 'normal'|'h1'|'h2'|'h3';
  /**
   * Capitalizar toda la etiqueta
   */
  allCaps?: boolean;
  /**
   * Colores básicos de la fuente
   */
  color?: 'primary'|'secondary'|'tertiary';

  /**
   * Color personalizados de la fuente
   */
   customFontColor?: string;
  /**
   * Color personalizados de la fuente
   */
   backgroundColor?: string;
};

export const CustomLabel = ({
   allCaps = false,
   color = 'primary',
   label = 'No Label',
   size = 'normal',
   customFontColor,
   backgroundColor = 'transparent'
  }: CustomLabelProps ) => {
  return (
    <span
      className={ `label ${ size } text-${ color }` }
      style={{color: customFontColor, backgroundColor}}
    >
      {!allCaps ? label : label.toUpperCase()}
    </span>
  )
};

export default CustomLabel;
