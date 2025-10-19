import React from "react";

type StarBorderProps<T extends React.ElementType> =
  React.ComponentPropsWithoutRef<T> & {
    as?: T;
    className?: string;
    children?: React.ReactNode;
    color?: string;
    speed?: React.CSSProperties["animationDuration"];
    thickness?: number;
  };

const StarBorder = <T extends React.ElementType = "button">({
  as,
  className = "",
  color = "white",
  speed = "6s",
  thickness = 1,
  children,
  ...rest
}: StarBorderProps<T>) => {
  const Component = as || "button";

  return (
    <Component
      className={`star-border-container ${className}`}
      {...(rest as any)}
      style={{
        // Passa a thickness como uma variável CSS para o CSS usar
        "--thickness-var": `${thickness}px`,
        // O padding top/bottom cria o espaço para a borda brilhar
        padding: `var(--thickness-var) 0`,
        ...(rest as any).style,
      }}
    >
      {/* 1. GRADIENTES (Z-INDEX: 0) */}
      <div
        className="border-gradient-bottom"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed,
        }}
      ></div>
      <div
        className="border-gradient-top"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed,
        }}
      ></div>

      {/* 2. NOVA CAMADA DE MÁSCARA (Z-INDEX: 1) */}
      {/* Esta div será opaca e esconderá o centro dos gradientes */}
      <div
        className="inner-content-bg-mask"
        style={{ "--thickness-var": `${thickness}px` }}
      ></div>

      {/* 3. SEU CONTEÚDO (Z-INDEX: 2) */}
      {/* Este é o seu header transparente, que fica na frente de tudo */}
      <div className="inner-content">{children}</div>
    </Component>
  );
};

export default StarBorder;
